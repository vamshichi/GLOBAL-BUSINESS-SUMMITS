import Link from "next/link";

const pillars = [
  {
    title: "Conferences & Summits",
    description:
      "Big stages. Bigger conversations. We curate content that industries actually show up for.",
    href: "/conferences-summits",
  },
  {
    title: "Trainings",
    description:
      "Skills that stick. People who perform. Learning built for the real world, not the classroom.",
    href: "/trainings",
  },
  {
    title: "Managed Events",
    description:
      "From blank page to standing ovation — we run the show so you don't have to.",
    href: "/managed-events",
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-32 lg:px-12">
      
      <h2 className="mb-12 text-sm font-bold tracking-widest text-teal">
        WHAT WE DO
      </h2>

      <div className="grid border-t border-navy/20 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Link
            key={pillar.title}
            href={pillar.href}
            className="
              group
              relative
              border-b
              border-navy/20
              p-8
              transition-colors
              duration-300
              hover:bg-deep
              hover:text-white
              lg:border-r
              lg:last:border-r-0
            "
          >
            {/* Number */}
            <span className="block text-6xl font-extrabold text-teal transition-transform duration-500 group-hover:-translate-y-2">
              0{index + 1}
            </span>

            {/* Title */}
            <h3 className="mt-16 text-3xl font-extrabold uppercase tracking-tight">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-sm opacity-75">
              {pillar.description}
            </p>

            {/* Arrow */}
            <span
              aria-hidden
              className="mt-10 block text-3xl text-cyan transition-transform duration-300 group-hover:translate-x-3"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}