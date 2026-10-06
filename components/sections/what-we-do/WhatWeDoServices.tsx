"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "GLOBAL SUMMITS & CONFERENCES",
    description:
      "We bring together the boldest minds, biggest decision-makers, and sharpest ideas under one roof to create momentum that moves industries forward.",
  },
  {
    title: "EXECUTIVE LEARNING & LEADERSHIP EXPERIENCES",
    description:
      "Immersive leadership experiences designed to sharpen perspectives, accelerate learning, and equip executives to lead through change.",
  },
  {
    title: "STRATEGIC EVENT MANAGEMENT",
    description:
      "From concept to execution, we design and deliver high-impact events with precision, creativity, and a relentless focus on experience.",
  },
  {
    title: "STRATEGIC PARTNERSHIPS & BUSINESS CONNECTIVITY",
    description:
      "We facilitate meaningful business connections through curated meetings, sponsorship programmes, strategic partnerships, and access to targeted decision-maker communities.",
  },
];

export default function WhatWeDoServices() {
  return (
    <section className="border-b border-navy/10 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <p className="mb-5 text-sm font-bold tracking-[0.2em] text-teal">
            OUR EXPERTISE
          </p>

          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Platforms built around what industries actually need.
          </h2>
        </div>

        <div className="grid border-l border-t border-navy/15 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-r border-navy/15 p-8 transition-colors duration-300 hover:bg-navy hover:text-white md:p-12"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-bold text-teal">
                  0{index + 1}
                </span>

                <span className="h-0.5 w-12 bg-teal transition-all duration-300 group-hover:w-24" />
              </div>

              <h3 className="max-w-xl text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                {service.title}
              </h3>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/60 transition-colors duration-300 group-hover:text-white/70 md:text-lg">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}