
"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("Thank you! Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
          Full name *
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className="w-full border border-navy/15 px-4 py-3 outline-none focus:border-teal"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
          Email address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          className="w-full border border-navy/15 px-4 py-3 outline-none focus:border-teal"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-navy">
          Company
        </label>
        <input
          id="company"
          name="company"
          maxLength={150}
          autoComplete="organization"
          className="w-full border border-navy/15 px-4 py-3 outline-none focus:border-teal"
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          className="w-full border border-navy/15 px-4 py-3 outline-none focus:border-teal"
          placeholder="Your contact number"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-navy">
          Enquiry type
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full border border-navy/15 bg-white px-4 py-3 outline-none focus:border-teal"
          defaultValue=""
        >
          <option value="">Select an enquiry type</option>
          <option value="Partnership">Partnership</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Conference">Conference</option>
          <option value="Training">Training</option>
          <option value="Managed Events">Managed Events</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
          Your message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className="w-full resize-y border border-navy/15 px-4 py-3 outline-none focus:border-teal"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {/* Honeypot: hidden from normal visitors; helps catch basic bots. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-navy px-6 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {status && (
        <p role="status" aria-live="polite" className="text-sm text-navy">
          {status}
        </p>
      )}
    </form>
  );
}
