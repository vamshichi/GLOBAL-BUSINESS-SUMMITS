"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroGlobe from "@/components/globe/HeroGlobe";

const lines = ["WHERE", "INDUSTRIES", "MEET THEIR", "NEXT BIG", "MOVE."];

export default function HeroSection() {
  return (
    <section className="grid-bg relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-ice">
      <div className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-4 px-6 pt-24 lg:grid-cols-[1.1fr_1fr] lg:px-12">
        
        {/* Content */}
        <div className="relative z-10 py-10">
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-extrabold leading-[.95] tracking-tighter text-navy">
            {lines.map((line, index) => (
              <span
                key={line}
                className="block overflow-hidden"
              >
                <motion.span
                  className={`block ${
                    index === 4 ? "text-teal" : ""
                  }`}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 * index,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-lg text-lg text-navy/75">
            We design Summits, Conferences &amp; Trainings that turn rooms
            full of strangers into rooms full of deals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="bg-navy px-7 py-4 font-bold text-white transition hover:bg-teal"
            >
              Explore Our Events
            </Link>

            <Link
              href="/contact"
              className="border border-navy px-7 py-4 font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Globe */}
        <div className="h-[55vh] lg:h-[80vh]">
          <HeroGlobe />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 h-10 w-px bg-teal"
        animate={{
          scaleY: [0, 1, 0],
          originY: 0,
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
        }}
      />
    </section>
  );
}