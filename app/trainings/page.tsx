import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Trainings | Global Business Summits",
  description: "Training built for performance, not paperwork.",
};

const offerings = [
  "Open-Enrolment Programs",
  "Corporate In-House Trainings",
  "Expert-Led Facilitation",
  "Interactive Formats",
];

export default function Trainings() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">
        <Eyebrow>TRAININGS</Eyebrow>
        <h1 className="text-[clamp(2.25rem,6.5vw,5.5rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
          SKILLS THAT SHOW UP AT WORK ON MONDAY.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-navy/70">Training built for performance, not paperwork.</p>
      </section>

      <section className="border-t border-navy/20 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="mb-10 text-sm font-bold tracking-widest text-teal">WHAT WE OFFER</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {offerings.map((o, i) => (
              <li key={o} className="group border border-navy/20 p-8 transition-colors hover:bg-navy hover:text-white">
                <span className="mb-4 block text-4xl font-extrabold text-teal">0{i + 1}</span>
                <span className="text-xl font-bold">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/20 bg-deep py-32 text-center text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tighter">
            LEARN TODAY.
            <br />
            <span className="text-teal">LEAD TOMORROW.</span>
          </h2>
          <div className="mt-10">
            <Link href="/contact" className="inline-block bg-teal px-7 py-4 font-bold text-deep transition hover:bg-cyan">
              Request In-House Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
