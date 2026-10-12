"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-teal/10
          blur-[140px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan/10
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Top line */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-12 bg-teal" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy/45">
            Contact & Partnerships
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  max-w-3xl
                  text-[clamp(3rem,6vw,6.5rem)]
                  font-black
                  uppercase
                  leading-[.86]
                  tracking-[-0.06em]
                  text-navy
                "
              >
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-teal">
                  WORTH SHOWING
                </span>
                <br />
                UP FOR.
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="
                  mt-8
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-navy/60
                  md:text-lg
                "
              >
                Got an industry to move, a team to train,
                or an event to run? Let&apos;s create
                something people will want to show up for.
              </motion.p>
            </div>

            {/* Bottom statement */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-12
                hidden
                border-t
                border-navy/10
                pt-6
                lg:block
              "
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy/35">
                Conferences · Summits · Trainings · Managed Events
              </p>

              <p className="mt-2 text-sm text-navy/45">
                One conversation can start the next big move.
              </p>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              relative
              border
              border-navy/10
              bg-white
              p-6
              shadow-[0_25px_80px_rgba(8,25,55,0.07)]
              md:p-8
              lg:p-10
            "
          >
            {/* Form header */}

            <div className="mb-8 border-b border-navy/10 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Start a conversation
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-navy md:text-3xl">
                Tell us what you&apos;re building.
              </h3>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}