"use client";

import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "RESEARCH",
    description: "We study the market before we build the stage.",
  },
  {
    number: "02",
    title: "CURATE",
    description:
      "We handpick speakers, sponsors, and delegates — not just fill seats.",
  },
  {
    number: "03",
    title: "DESIGN",
    description: "We craft an experience, not a schedule.",
  },
  {
    number: "04",
    title: "DELIVER",
    description:
      "We execute flawlessly, on every continent we touch.",
  },
  {
    number: "05",
    title: "MEASURE",
    description:
      "We track what matters — connections made, deals opened.",
  },
];

export default function SummitProcess() {
  return (
    <section className="border-t border-navy/15 bg-[#f5f6f3] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            HOW WE BUILD
            <br />
            A SUMMIT.
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
  );
}