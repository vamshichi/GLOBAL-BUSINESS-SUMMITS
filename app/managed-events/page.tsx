import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Journey from "@/components/sections/Journey";

export const metadata: Metadata = {
  title: "Managed Events | Global Business Summits",
  description: "End-to-end event management — from first concept to final applause.",
};

const managed = ["Full Event Production", "Delegate Acquisition", "On-Ground Operations", "Post-Event Reporting"];

export default function ManagedEvents() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">
        <Eyebrow>MANAGED EVENTS</Eyebrow>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
          YOUR VISION.
          <br />
          OUR EXECUTION.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-navy/70">
          End-to-end event management — from first concept to final applause.
        </p>
        <Journey />
      </section>

      <section className="border-t border-navy/20 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="mb-10 text-sm font-bold tracking-widest text-teal">WHAT WE MANAGE</h2>
          <ul className="grid gap-px bg-navy/20 md:grid-cols-2">
            {managed.map((m) => (
              <li key={m} className="bg-white p-8 text-xl font-bold leading-snug text-navy">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/20 bg-deep py-32 text-center text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tighter">
            WE DON&apos;T JUST MANAGE EVENTS.
            <br />
            <span className="text-teal">WE MAKE THEM MATTER.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-teal px-7 py-4 font-bold text-deep transition hover:bg-cyan">
              Get a Proposal
            </Link>
            <Link href="/contact" className="border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-deep">
              Talk to Our Events Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
