"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "EVENT STRATEGY",
    description:
      "We define the purpose, audience, positioning and outcomes before the first detail is designed.",
  },
  {
    number: "02",
    title: "EXPERIENCE DESIGN",
    description:
      "We transform ideas into carefully designed experiences that keep audiences engaged from arrival to close.",
  },
  {
    number: "03",
    title: "PRODUCTION & EXECUTION",
    description:
      "From venue and production to speakers, partners and on-ground operations, every detail is managed with precision.",
  },
  {
    number: "04",
    title: "AUDIENCE & DELEGATE MANAGEMENT",
    description:
      "We build and manage the right audience communities to ensure every room is relevant, connected and valuable.",
  },
  {
    number: "05",
    title: "SPONSOR & PARTNER ACTIVATION",
    description:
      "We create meaningful opportunities for sponsors and partners to engage with the right decision-makers.",
  },
  {
    number: "06",
    title: "POST-EVENT MEASUREMENT",
    description:
      "We measure what matters — participation, engagement, connections, meetings and commercial outcomes.",
  },
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the business objective, market opportunity and audience.",
  },
  {
    number: "02",
    title: "STRATEGISE",
    description:
      "Build the event architecture, positioning and experience strategy.",
  },
  {
    number: "03",
    title: "CREATE",
    description:
      "Develop the content, identity, experience and engagement framework.",
  },
  {
    number: "04",
    title: "EXECUTE",
    description:
      "Bring every element together through disciplined production and delivery.",
  },
  {
    number: "05",
    title: "MEASURE",
    description:
      "Evaluate performance and identify opportunities for continued growth.",
  },
];

export default function EventManagement() {
  return (
    <main className="bg-white text-navy">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-navy/10 px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-8 text-sm font-bold tracking-[0.2em] text-teal">
              STRATEGIC EVENT MANAGEMENT
            </p>

            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
              IDEAS INTO
              <br />
              <span className="text-teal">EXPERIENCES.</span>
            </h1>

            <p className="mt-12 max-w-3xl text-xl leading-relaxed text-navy/60 md:text-2xl">
              From concept to execution, we design and deliver high-impact
              events with precision, creativity and a relentless focus on
              experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-teal">
                BEYOND LOGISTICS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                We don't just manage events.
                <br />
                <span className="text-teal">
                  We build experiences people remember.
                </span>
              </h2>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-navy/60 md:text-xl">
                Every event has a purpose. Our role is to turn that purpose
                into an experience that connects people, communicates ideas and
                creates measurable value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-y border-navy/10 bg-[#f5f6f3] px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
              WHAT WE MANAGE
            </p>

            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              EVERY DETAIL.
              <br />
              <span className="text-teal">ONE EXPERIENCE.</span>
            </h2>
          </div>

          <div className="grid border-l border-t border-navy/15 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group border-b border-r border-navy/15 bg-[#f5f6f3] p-8 transition-colors duration-300 hover:bg-navy hover:text-white md:p-10"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-teal">
                    {item.number}
                  </span>

                  <span className="h-px w-10 bg-teal transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
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
          APPROACH
      ========================================================= */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
                OUR APPROACH
              </p>

              <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                PRECISION
                <br />
                MEETS
                <br />
                <span className="text-teal">CREATIVITY.</span>
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
                Great events don't happen by accident.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                They are the result of clear strategy, thoughtful design,
                disciplined execution and an understanding of what makes
                audiences connect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
              OUR PROCESS
            </p>

            <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              FROM IDEA
              <br />
              TO <span className="text-teal">IMPACT.</span>
            </h2>
          </div>

          <div className="border-t border-navy/20">
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
                className="grid gap-6 border-b border-navy/20 py-8 md:grid-cols-[100px_260px_1fr] md:items-center md:py-10"
              >
                <span className="text-sm font-bold text-teal">
                  {step.number}
                </span>

                <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-base leading-relaxed text-navy/60 md:text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              LET'S BUILD SOMETHING GREAT
            </p>

            <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              YOUR EVENT.
              <br />
              <span className="text-teal">OUR EXPERTISE.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/60 md:text-xl">
              Let's create an experience that brings your audience together
              and moves your business forward.
            </p>

            <a
              href="/contact"
              className="
                mt-10
                inline-flex
                bg-teal
                px-7
                py-4
                text-sm
                font-bold
                text-white
                transition
                hover:bg-navy
              "
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}