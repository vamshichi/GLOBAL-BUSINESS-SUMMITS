
"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-teal/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-40 -z-10 h-[350px] w-[350px] rounded-full bg-cyan/10 blur-[110px]"
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <span className="h-px w-12 shrink-0 bg-teal" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-navy/50 sm:text-xs">
            Contact & Partnerships
          </span>
        </div>

        {/* Main layout */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left content */}
          <div className="flex min-w-0 flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="max-w-2xl text-[clamp(2.8rem,5.5vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-navy"
              >
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-teal">WORTH SHOWING</span>
                <br />
                UP FOR.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 max-w-lg text-base leading-8 text-navy/65 sm:text-lg"
              >
                Got an industry to move, a team to train, or an event to run?
                Let&apos;s create something people will want to show up for.
              </motion.p>
            </div>

            {/* Bottom statement */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 hidden border-t border-navy/10 pt-6 lg:block"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/45">
                Conferences · Summits · Trainings · Managed Events
              </p>

              <p className="mt-3 text-sm text-navy/55">
                One conversation can start the next big move.
              </p>
            </motion.div>
          </div>

          {/* Right form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="w-full min-w-0 overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_20px_70px_rgba(8,25,55,0.08)] sm:p-8 lg:p-7 xl:p-9"
          >
            <div className="mb-7 border-b border-navy/10 pb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                Start a conversation
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-navy sm:text-3xl">
                Tell us what you&apos;re building.
              </h3>

              <p className="mt-3 text-sm leading-6 text-navy/55">
                Share a few details and our team will get back to you.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
