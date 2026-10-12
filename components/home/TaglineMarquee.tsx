"use client";

import { motion } from "framer-motion";

const taglines = [
  "Building Boardrooms, Not Just Ballrooms",
  "Where Deals Are Made, Not Just Discussed",
  "Turning Delegates Into Decision-Makers",
  "One Stage. Infinite Opportunities.",
];

export default function TaglineMarquee() {
  return (
    <section
      aria-label="Taglines"
      className="overflow-hidden bg-navy py-6 text-white"
    >
      <motion.div
        className="flex w-max gap-16 whitespace-nowrap text-xl font-semibold"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...taglines, ...taglines].map((tagline, index) => (
          <span
            key={index}
            className="flex items-center gap-16"
          >
            {tagline}

            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-cyan"
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
}