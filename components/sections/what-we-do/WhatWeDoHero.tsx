"use client";

import { motion } from "framer-motion";

export default function WhatWeDoHero() {
  return (
    <section className="border-b border-navy/10 px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-44">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-8 text-sm font-bold tracking-[0.2em] text-teal">
            WHAT WE DO
          </p>

          <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
            BUILDING
            <br />
            <span className="text-teal">MOMENTUM.</span>
          </h1>

          <p className="mt-12 max-w-3xl text-xl leading-relaxed text-navy/60 md:text-2xl">
            We create global platforms where industries meet, ideas move,
            leaders connect, and business happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}