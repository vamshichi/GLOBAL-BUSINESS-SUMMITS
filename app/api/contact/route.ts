
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const company =
      typeof body.company === "string" ? body.company.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Honeypot field: keep this hidden in the frontend form.
    const website =
      typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      phone.length > 30 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.CONTACT_TO_EMAIL) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeSubject = escapeHtml(subject || "General enquiry");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    // 1. Notify your business inbox.
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry: ${subject || name}`,
      text: [
        "New contact enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject || "General enquiry"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#10233f;max-width:650px;margin:auto">
          <h2 style="margin-bottom:8px">New Contact Enquiry</h2>
          <p style="color:#64748b">A new enquiry was submitted through your website.</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px;border-bottom:1px solid #eee"><b>Name</b></td><td style="padding:10px;border-bottom:1px solid #eee">${safeName}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee"><b>Email</b></td><td style="padding:10px;border-bottom:1px solid #eee">${safeEmail}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee"><b>Company</b></td><td style="padding:10px;border-bottom:1px solid #eee">${safeCompany}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee"><b>Phone</b></td><td style="padding:10px;border-bottom:1px solid #eee">${safePhone}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #eee"><b>Subject</b></td><td style="padding:10px;border-bottom:1px solid #eee">${safeSubject}</td></tr>
          </table>
          <h3>Message</h3>
          <p style="line-height:1.7">${safeMessage}</p>
        </div>
      `,
    });

    // 2. Send an acknowledgement to the visitor.
    // A failure here does not invalidate the business notification.
    let confirmationSent = false;

    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "We've received your enquiry",
        text: `Hi ${name},\n\nThank you for contacting us. We've received your enquiry and will get back to you soon.\n\nBest regards`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#10233f;line-height:1.7">
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${safeName},</p>
            <p>We've received your enquiry and appreciate you taking the time to contact us.</p>
            <p>Our team will review your message and get back to you soon.</p>
            <p>Best regards,<br /><strong>Team</strong></p>
          </div>
        `,
      });

      confirmationSent = true;
    } catch (error) {
      console.error("Contact acknowledgement email failed:", error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        confirmationSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to submit your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
