import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Global Business Summits",
  description: "Got an industry to move, a team to train, or an event to run? We're one message away.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-40 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>CONTACT</Eyebrow>
          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tighter text-navy">
            LET&apos;S BUILD SOMETHING WORTH SHOWING UP FOR.
          </h1>
          <p className="mt-6 max-w-md text-lg text-navy/70">
            Got an industry to move, a team to train, or an event to run? We&apos;re one message away.
          </p>
          {/* Email, call and office details will be added here once provided. */}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
