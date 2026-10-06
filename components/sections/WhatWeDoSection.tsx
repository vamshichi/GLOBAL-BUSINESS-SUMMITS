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

const deliverables = [
  "Industry-Defining Content",
  "Curated Delegations",
  "High-Value Networking",
  "Global Speaker Rosters",
  "Sponsor & Partner Ecosystems",
];

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

export default function WhatWeDoSection() {
  return (
    <main className="bg-white text-navy">
      {/* HERO */}
      <section className="border-b border-navy/10 px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
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
        </div>
      </section>

      {/* SERVICES */}
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

                  <span className="h-px w-12 bg-teal transition-all duration-300 group-hover:w-24" />
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

      {/* GLOBAL SUMMITS */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
                GLOBAL SUMMITS & CONFERENCES
              </p>

              <h2 className="max-w-xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                STAGES THAT
                <br />
                SHAPE
                <br />
                <span className="text-teal">INDUSTRIES.</span>
              </h2>
            </div>

            <div className="self-end">
              <p className="text-3xl font-bold leading-tight md:text-5xl">
                We don't fill agendas.
                <br />
                <span className="text-teal">We set them.</span>
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                Our Conferences & Summits bring together the boldest minds,
                the biggest decision-makers, and the sharpest ideas — under one
                roof, on one stage, for one purpose: momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
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

      {/* PROCESS */}
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

      {/* PARTNERSHIPS */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
            STRATEGIC PARTNERSHIPS & BUSINESS CONNECTIVITY
          </p>

          <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            The right people.
            <br />
            The right conversations.
            <br />
            <span className="text-teal">The right opportunities.</span>
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-navy/60">
            We facilitate meaningful business connections through curated
            meetings, sponsorship programmes, strategic partnerships and access
            to targeted decision-maker communities.
          </p>
        </div>
      </section>
    </main>
  );
}