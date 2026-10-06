"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    title: "MARKET-LED, NOT CALENDAR-LED",
    description:
      "We build events around what an industry needs — not what fits a date on a calendar.",
  },
  {
    title: "CONTENT FIRST",
    description:
      "Every session is built to be worth someone's time out of office.",
  },
  {
    title: "GLOBAL REACH, LOCAL PRECISION",
    description:
      "We operate across continents but never lose sight of the room.",
  },
  {
    title: "RESULTS YOU CAN MEASURE",
    description:
      "Meetings booked. Deals opened. Skills upgraded. That's how we keep score.",
  },
];

export default function ApartBlocks() {
  return (
    <section className="border-t border-navy/20 py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <h2 className="mb-12 text-sm font-bold tracking-widest text-teal">
          WHAT SETS US APART
        </h2>

        <div className="grid gap-px bg-navy/20 md:grid-cols-2">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-white p-10 transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              <span
                aria-hidden
                className="mb-6 block h-0.5 w-12 bg-teal transition-all duration-300 group-hover:w-24"
              />

              <h3 className="text-2xl font-extrabold leading-snug tracking-tight md:text-3xl">
                {block.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/60 transition-colors duration-300 group-hover:text-white/70 md:text-lg">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}