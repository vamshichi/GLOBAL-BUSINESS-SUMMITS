"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    number: "01",
    title: "INDUSTRY-DEFINING CONTENT",
    description:
      "We identify the conversations shaping industries and build content around the issues that matter most to decision-makers.",
  },
  {
    number: "02",
    title: "CURATED DELEGATIONS",
    description:
      "We bring together relevant executives, decision-makers, innovators and experts — creating rooms where meaningful conversations happen.",
  },
  {
    number: "03",
    title: "HIGH-VALUE NETWORKING",
    description:
      "We design opportunities for leaders to connect, exchange perspectives and build relationships that continue beyond the event.",
  },
  {
    number: "04",
    title: "GLOBAL SPEAKER ROSTERS",
    description:
      "We bring together influential voices, industry experts and thought leaders from across markets and disciplines.",
  },
  {
    number: "05",
    title: "SPONSOR & PARTNER ECOSYSTEMS",
    description:
      "We connect brands with the right audiences through strategic partnerships, sponsorships and meaningful engagement opportunities.",
  },
];

const process = [
  {
    number: "01",
    title: "RESEARCH",
    description:
      "We study the market before we build the stage. Understanding the industry comes first.",
  },
  {
    number: "02",
    title: "CURATE",
    description:
      "We handpick speakers, sponsors and delegates — not simply fill seats.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "We craft an experience, not a schedule. Every interaction has a purpose.",
  },
  {
    number: "04",
    title: "DELIVER",
    description:
      "We execute with precision, from the first invitation to the final conversation.",
  },
  {
    number: "05",
    title: "MEASURE",
    description:
      "We track what matters — connections made, meetings held and opportunities opened.",
  },
];

export default function GlobalSummits() {
  return (
    <main className="bg-white text-navy">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-navy px-6 pb-24 pt-32 text-white lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 text-sm font-bold tracking-[0.2em] text-teal">
              GLOBAL SUMMITS & CONFERENCES
            </p>

            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
              STAGES THAT
              <br />
              SHAPE
              <br />
              <span className="text-teal">INDUSTRIES.</span>
            </h1>

            <p className="mt-12 max-w-3xl text-xl leading-relaxed text-white/60 md:text-2xl">
              We don't fill agendas. We set them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-teal">
                THE PLATFORM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Bringing the boldest minds, biggest decision-makers and
                sharpest ideas together.
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-navy/60 md:text-xl">
                Our Conferences & Summits bring together leaders, innovators,
                experts and decision-makers under one roof, on one stage, for
                one purpose: momentum.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/60 md:text-xl">
                Every platform is designed around the needs of its industry —
                creating a space where ideas can be challenged, relationships
                can be built and new opportunities can emerge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DELIVER
      ========================================================= */}
      <section className="border-y border-navy/10 bg-[#f5f6f3] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
              WHAT WE DELIVER
            </p>

            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              MORE THAN
              <br />
              <span className="text-teal">A CONFERENCE.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-navy/15 md:grid-cols-2">
            {deliverables.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group border-b border-r border-navy/15 p-8 transition-colors duration-300 hover:bg-navy hover:text-white md:p-10"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-teal">
                    {item.number}
                  </span>

                  <span className="h-px w-10 bg-teal transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/60 transition-colors duration-300 group-hover:text-white/70 md:text-lg">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY OUR SUMMITS
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
                WHY OUR SUMMITS
              </p>

              <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                MARKET-LED.
                <br />
                <span className="text-teal">NOT CALENDAR-LED.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="self-end"
            >
              <p className="text-2xl font-bold leading-tight md:text-4xl">
                We build events around what an industry needs — not what fits a
                date on a calendar.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/60 md:text-xl">
                Every summit begins with understanding the market, its
                challenges, its leaders and the conversations that need to
                happen next.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
              OUR PROCESS
            </p>

            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              HOW WE BUILD
              <br />
              <span className="text-teal">A SUMMIT.</span>
            </h2>
          </div>

          <div className="border-t border-white/15">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[100px_260px_1fr] md:items-center md:py-10"
              >
                <span className="text-sm font-bold text-teal">
                  {step.number}
                </span>

                <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS OUTCOMES
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
            RESULTS YOU CAN MEASURE
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              WE DON'T
              <br />
              MEASURE
              <br />
              <span className="text-teal">SUCCESS BY SEATS.</span>
            </h2>

            <div className="self-end">
              <p className="text-2xl font-bold leading-tight md:text-4xl">
                Meetings booked.
                <br />
                Deals opened.
                <br />
                Relationships built.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/60 md:text-xl">
                That's how we keep score. Every summit is designed to create
                conversations that continue long after the stage lights go
                down.
              </p>
            </div>
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
              BUILD THE NEXT PLATFORM
            </p>

            <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              HAVE AN INDUSTRY
              <br />
              <span className="text-teal">THAT NEEDS A STAGE?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/60 md:text-xl">
              Let's build a platform that brings the right people, ideas and
              opportunities together.
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