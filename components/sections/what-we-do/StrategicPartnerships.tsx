"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "CURATED MEETINGS",
    description:
      "Structured conversations between the right decision-makers, built around relevant business priorities.",
  },
  {
    number: "02",
    title: "SPONSORSHIP PROGRAMMES",
    description:
      "Strategic opportunities that connect brands with highly relevant audiences and industry communities.",
  },
  {
    number: "03",
    title: "STRATEGIC PARTNERSHIPS",
    description:
      "Long-term relationships designed to create shared value beyond a single event or interaction.",
  },
  {
    number: "04",
    title: "DECISION-MAKER ACCESS",
    description:
      "Direct access to targeted executive communities across industries, markets and regions.",
  },
];

export default function StrategicPartnerships() {
  return (
    <main className="bg-white text-navy">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-navy/10 px-6 pb-24 pt-24 lg:px-12 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            {/* LEFT LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-teal">
                STRATEGIC PARTNERSHIPS
              </p>

              <div className="mt-8 hidden h-px w-24 bg-teal lg:block" />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[clamp(3.5rem,7vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
                THE RIGHT
                <br />
                PEOPLE.
                <br />
                <span className="text-teal">THE RIGHT</span>
                <br />
                OPPORTUNITIES.
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-teal">
                BUSINESS CONNECTIVITY
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                The right people.
                <br />
                The right conversations.
                <br />
                <span className="text-teal">
                  The right opportunities.
                </span>
              </p>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-navy/60 md:text-xl">
                We facilitate meaningful business connections through curated
                meetings, sponsorship programmes, strategic partnerships and
                access to targeted decision-maker communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILLARS
      ========================================================= */}
      <section className="border-y border-navy/10 bg-[#f5f6f3] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
              HOW WE CONNECT
            </p>

            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              CONNECTIONS
              <br />
              <span className="text-teal">WITH PURPOSE.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-navy/15 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group border-b border-r border-navy/15 bg-[#f5f6f3] p-8 transition-colors duration-300 hover:bg-navy hover:text-white md:p-12"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm font-bold text-teal">
                    {pillar.number}
                  </span>

                  <span className="h-px w-12 bg-teal transition-all duration-300 group-hover:w-24" />
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  {pillar.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/60 transition-colors duration-300 group-hover:text-white/70 md:text-lg">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATEMENT
      ========================================================= */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-teal">
                BEYOND THE EVENT
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
                We don't just create meetings.
                <br />
                <span className="text-teal">
                  We create the conditions for business to happen.
                </span>
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
                Every connection is designed to be relevant, intentional and
                valuable — creating opportunities for organisations, leaders,
                sponsors and partners to move forward together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTCOMES
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
                WHAT SUCCESS LOOKS LIKE
              </p>

              <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                CONNECTIONS
                <br />
                THAT
                <br />
                <span className="text-teal">MOVE BUSINESS.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="self-end"
            >
              <div className="border-t border-navy/20">
                {[
                  "Meaningful executive conversations",
                  "Qualified business introductions",
                  "Strategic brand partnerships",
                  "Long-term industry relationships",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-6 border-b border-navy/20 py-6"
                  >
                    <span className="text-sm font-bold text-teal">
                      0{index + 1}
                    </span>

                    <span className="text-lg font-bold md:text-xl">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-navy/10 bg-[#f5f6f3] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
              BUILD THE RIGHT CONNECTIONS
            </p>

            <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              LET'S CREATE
              <br />
              <span className="text-teal">WHAT COMES NEXT.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/60 md:text-xl">
              Whether you're looking to build partnerships, reach decision
              makers or create new commercial opportunities, let's start the
              conversation.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex bg-teal px-7 py-4 text-sm font-bold text-white transition hover:bg-navy"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}