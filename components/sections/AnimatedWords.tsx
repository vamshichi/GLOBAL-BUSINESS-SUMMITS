"use client";
import { motion } from "framer-motion";

export default function AnimatedWords({ lines }: { lines: { text: string; accent?: boolean }[] }) {
  return (
    <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[1.02] tracking-tighter">
      {lines.map((line, li) => (
        <span key={li} className={`block ${line.accent ? "text-teal" : ""}`}>
          {line.text.split(" ").map((word, wi) => (
            <motion.span
              key={wi}
              className="mr-4 inline-block"
              initial={{ opacity: 0.15 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: (li * 2 + wi) * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
}
