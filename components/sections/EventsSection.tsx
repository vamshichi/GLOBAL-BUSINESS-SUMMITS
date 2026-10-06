"use client";

import { motion } from "framer-motion";

const events = [
  {
    number: "01",
    title: "GLOBAL AI GRCS SUMMIT 2026",
    theme: "The Intelligence of Trust: Governing the Autonomous Future",
    location: "Mumbai, India",
    date: "10 December 2026",
    description:
      "A high-impact global summit bringing together AI governance leaders, regulators, risk professionals, compliance experts and enterprise decision-makers to shape the future of responsible, secure and accountable AI.",
  },
  {
    number: "02",
    title: "TOKENOMICS WORLD 2027",
    theme:
      "The New Architecture of Value: Payments, Tokenization & the Digital Asset Economy",
    location: "Mumbai, India",
    date: "February 2027",
    description:
      "A next-generation fintech and digital assets summit exploring real-world asset tokenization, stablecoins, programmable payments, institutional digital assets, blockchain infrastructure and the future of global financial systems.",
  },
  {
    number: "03",
    title: "2ND GLOBAL AI GRCS SUMMIT 2027",
    theme: "The Governance Frontier: Scaling Responsible AI Across Borders",
    location: "Kuala Lumpur, Malaysia",
    date: "March 2027",
    description:
      "A regional gathering focused on AI regulation, cross-border compliance, enterprise AI risk, data sovereignty and responsible AI adoption.",
  },
  {
    number: "04",
    title: "THE AUTONOMOUS ENTERPRISE SUMMIT 2027",
    theme: "Beyond Automation: The Rise of Agentic & Sovereign AI",
    location: "Dubai, UAE",
    date: "April 2027",
    description:
      "A premium enterprise technology summit exploring agentic AI, sovereign AI infrastructure, intelligent automation, autonomous operations and next-generation business transformation.",
  },
  {
    number: "05",
    title: "CYBERFORTRESS ASIA 2027",
    theme: "The New Frontline: Securing the AI-Driven Digital Economy",
    location: "Singapore",
    date: "June 2027",
    description:
      "A high-impact cybersecurity summit covering AI-powered cyber threats, quantum-safe security, digital identity, cloud security and critical infrastructure protection.",
  },
  {
    number: "06",
    title: "THE WHITE COAT CONCLAVE 2027",
    theme: "Beyond the White Coat: Redefining the Future of Medicine",
    location: "India",
    date: "August 2027",
    description:
      "An exclusive healthcare leadership and innovation gathering for doctors, hospital leaders, medical entrepreneurs, pharmaceutical innovators and healthcare technology pioneers.",
  },
  {
    number: "07",
    title: "THE INTELLIGENT INFRASTRUCTURE SUMMIT 2027",
    theme:
      "Reimagining Industry: AI, Robotics & the Future of Smart Infrastructure",
    location: "Riyadh, Saudi Arabia",
    date: "September 2027",
    description:
      "A future-focused industrial technology summit exploring smart manufacturing, industrial AI, robotics, digital twins, predictive infrastructure, energy intelligence and next-generation supply chains. The event connects industrial conglomerates, government transformation programmes, engineering firms and technology solution providers.",
  },
  {
    number: "08",
    title: "2ND TOKENOMICS WORLD 2027",
    theme:
      "The New Architecture of Value: Digital Assets, Stablecoins & the Tokenized Economy",
    location: "Bali, Indonesia",
    date: "November 2027",
    description:
      "A global digital asset and tokenized economy summit examining real-world asset tokenization, stablecoins, blockchain infrastructure, institutional digital assets, cross-border settlements and the evolving regulatory landscape. It is designed to attract financial institutions, Web3 innovators, regulators, asset managers, fintech leaders and strategic investors.",
  },
];

export default function EventsSection() {
  return (
    <main className="bg-white text-navy">
      {/* HERO */}
      <section className="border-b border-navy/10 px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-8 text-sm font-bold tracking-[0.2em] text-teal">
            OUR EVENTS
          </p>

          <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.06em]">
            THE NEXT
            <br />
            FRONTIER OF
            <br />
            <span className="text-teal">GLOBAL BUSINESS</span>
            <br />
            STARTS HERE.
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-2xl text-xl leading-relaxed text-navy/60 md:text-2xl">
              Eight powerful platforms. One global vision. Limitless
              opportunities.
            </p>

            <span className="text-sm font-bold tracking-widest text-navy/40">
              08 PLATFORMS
            </span>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-t border-navy/20">
            {events.map((event, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                className="group grid gap-8 border-b border-navy/20 py-12 md:grid-cols-[90px_1fr_1.1fr] md:gap-12 md:py-16"
              >
                {/* NUMBER */}
                <div>
                  <span className="text-sm font-bold text-teal">
                    {event.number}
                  </span>
                </div>

                {/* TITLE */}
                <div>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-teal md:text-4xl">
                    {event.title}
                  </h2>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy/50">
                    <span>{event.location}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="max-w-2xl text-xl font-bold leading-snug md:text-2xl">
                    {event.theme}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/60 md:text-lg">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-navy px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-sm font-bold tracking-[0.2em] text-teal">
            BE PART OF THE NEXT CHAPTER
          </p>

          <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Where industries meet,
            <br />
            <span className="text-teal">opportunities begin.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}