"use client";

import { motion } from "framer-motion";

export default function ExecutiveLearning() {
  return (
    <main className="bg-white text-navy">
      {/* HERO */}
      <section className="border-b border-navy/10 px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-8 text-sm font-bold tracking-[0.2em] text-teal">
              EXECUTIVE LEARNING & LEADERSHIP EXPERIENCES
            </p>

            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
              LEADERS
              <br />
              <span className="text-teal">WHO MOVE</span>
              <br />
              INDUSTRIES.
            </h1>

            <p className="mt-12 max-w-3xl text-xl leading-relaxed text-navy/60 md:text-2xl">
              Immersive leadership experiences designed to sharpen
              perspectives, accelerate learning, and equip executives to lead
              through change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
                LEADERSHIP EXPERIENCES
              </p>

              <h2 className="max-w-2xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                LEARNING THAT
                <br />
                <span className="text-teal">CHANGES</span>
                <br />
                PERSPECTIVES.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="self-end"
            >
              <p className="text-xl leading-relaxed text-navy/60 md:text-2xl">
                We create environments where senior leaders can exchange
                ideas, challenge conventional thinking, and develop the
                perspectives needed to navigate complex markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
            THE EXPERIENCE
          </p>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {[
              "Executive Roundtables",
              "Leadership Forums",
              "Immersive Learning Experiences",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="bg-navy p-8 md:p-10"
              >
                <span className="mb-8 block text-sm font-bold text-teal">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-extrabold leading-tight md:text-3xl">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Better leaders create stronger organisations.
            <span className="text-teal"> We create the experiences that make it happen.</span>
          </p>
        </div>
      </section>
    </main>
  );
}