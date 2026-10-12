"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  MoveRight,
} from "lucide-react";

const featuredEvents = [
  {
    number: "01",
    title: "GLOBAL AI GRCS SUMMIT 2026",
    theme:
      "The Intelligence of Trust: Governing the Autonomous Future",
    location: "Mumbai, India",
    date: "10 December 2026",
    category: "AI • Governance • Risk",
  },
  {
    number: "02",
    title: "TOKENOMICS WORLD 2027",
    theme:
      "The New Architecture of Value: Payments, Tokenization & the Digital Asset Economy",
    location: "Mumbai, India",
    date: "February 2027",
    category: "FinTech • Digital Assets",
  },
  {
    number: "03",
    title: "2ND GLOBAL AI GRCS SUMMIT 2027",
    theme:
      "The Governance Frontier: Scaling Responsible AI Across Borders",
    location: "Kuala Lumpur, Malaysia",
    date: "March 2027",
    category: "AI • Compliance • Technology",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-teal" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy/50">
                Featured Events
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                max-w-4xl
                text-[clamp(2.8rem,6vw,6rem)]
                font-black
                uppercase
                leading-[.88]
                tracking-[-0.06em]
                text-navy
              "
            >
              WHERE THE
              <br />
              <span className="text-teal">NEXT MOVES</span>
              <br />
              HAPPEN.
            </motion.h2>
          </div>

          {/* Small intro */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-sm md:pb-2"
          >
            <p className="text-base leading-relaxed text-navy/55">
              From AI governance to digital assets and
              enterprise transformation, our platforms
              bring the people shaping tomorrow into
              the same room.
            </p>
          </motion.div>
        </div>

        {/* ==================================================
            EVENTS GRID
        ================================================== */}

        <div className="grid border-t border-navy/15 md:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                flex
                min-h-[520px]
                flex-col
                border-b
                border-navy/15
                p-7
                transition-all
                duration-500
                hover:bg-navy
                md:border-b-0
                md:border-r
                md:p-9
                md:last:border-r-0
              "
            >

              {/* -------------------------------------------
                  TOP
              -------------------------------------------- */}

              <div className="flex items-start justify-between">
                <span
                  className="
                    text-sm
                    font-black
                    tracking-wider
                    text-teal
                  "
                >
                  {event.number}
                </span>

                <ArrowUpRight
                  size={22}
                  className="
                    text-navy/30
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-teal
                  "
                />
              </div>

              {/* -------------------------------------------
                  CATEGORY
              -------------------------------------------- */}

              <div className="mt-10">
                <span
                  className="
                    inline-block
                    border
                    border-navy/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-navy/45
                    transition-colors
                    group-hover:border-white/20
                    group-hover:text-white/50
                  "
                >
                  {event.category}
                </span>
              </div>

              {/* -------------------------------------------
                  TITLE
              -------------------------------------------- */}

              <h3
                className="
                  mt-7
                  text-2xl
                  font-black
                  uppercase
                  leading-[.95]
                  tracking-[-0.035em]
                  text-navy
                  transition-colors
                  duration-300
                  group-hover:text-white
                  lg:text-3xl
                "
              >
                {event.title}
              </h3>

              {/* -------------------------------------------
                  THEME
              -------------------------------------------- */}

              <p
                className="
                  mt-6
                  text-lg
                  font-semibold
                  leading-snug
                  text-navy/75
                  transition-colors
                  duration-300
                  group-hover:text-white/85
                "
              >
                {event.theme}
              </p>

              {/* -------------------------------------------
                  META
              -------------------------------------------- */}

              <div
                className="
                  mt-auto
                  border-t
                  border-navy/10
                  pt-6
                  transition-colors
                  group-hover:border-white/15
                "
              >
                <div className="flex flex-col gap-3">

                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={15}
                      className="
                        shrink-0
                        text-teal
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-navy/50
                        transition-colors
                        group-hover:text-white/50
                      "
                    >
                      {event.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={15}
                      className="shrink-0 text-teal"
                    />

                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-navy/50
                        transition-colors
                        group-hover:text-white/50
                      "
                    >
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------
                  HOVER LINE
              -------------------------------------------- */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-teal
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-12
            flex
            flex-col
            justify-between
            gap-6
            border-t
            border-navy/10
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy/40">
              08 Global Platforms
            </p>

            <p className="mt-1 text-sm text-navy/55">
              Explore the complete event calendar.
            </p>
          </div>

          <Link
            href="/events"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-4
              bg-navy
              px-7
              py-4
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              transition-all
              duration-300
              hover:bg-teal
            "
          >
            View All Events

            <MoveRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}