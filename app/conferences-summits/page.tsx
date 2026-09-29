import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import StepTimeline from "@/components/sections/StepTimeline";

export const metadata: Metadata = {
  title: "Conferences & Summits | Global Business Summits",
  description: "We don't fill agendas. We set them.",
};

const deliverables = [
  "Industry-Defining Content",
  "Curated Delegations",
  "High-Value Networking",
  "Global Speaker Rosters",
  "Sponsor & Partner Ecosystems",
];

export default function ConferencesSummits() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">
        <Eyebrow>CONFERENCES &amp; SUMMITS</Eyebrow>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
          STAGES THAT SHAPE INDUSTRIES.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-navy/70">We don&apos;t fill agendas. We set them.</p>
      </section>

      <section className="border-t border-navy/20 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="mb-10 text-sm font-bold tracking-widest text-teal">WHAT WE DELIVER</h2>
          <ul className="grid gap-px bg-navy/20 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <li key={d} className="bg-white p-8 text-xl font-bold leading-snug text-navy">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/20 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-sm font-bold tracking-widest text-teal">OUR PROCESS</h2>
          <StepTimeline />
        </div>
      </section>

      <section className="border-t border-navy/20 bg-deep py-32 text-center text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tighter">
            NOT ANOTHER CONFERENCE.
            <br />
            <span className="text-teal">THE CONFERENCE.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/events" className="bg-teal px-7 py-4 font-bold text-deep transition hover:bg-cyan">
              Explore Upcoming Summits
            </Link>
            <Link href="/contact" className="border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-deep">
              Propose a Summit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
