"use client";

import { motion } from "framer-motion";

const deliverables = [
  "Industry-Defining Content",
  "Curated Delegations",
  "High-Value Networking",
  "Global Speaker Rosters",
  "Sponsor & Partner Ecosystems",
];

export default function WhatWeDeliver() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14">
          <p className="text-sm font-bold tracking-[0.2em] text-teal">
            WHAT WE DELIVER
          </p>
        </div>

        <div className="grid border-t border-navy/15 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="border-b border-navy/15 py-8 pr-8"
            >
              <span className="mb-5 block text-sm font-bold text-teal">
                0{index + 1}
              </span>

              <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}