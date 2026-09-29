import type { Metadata } from "next";
import ApartBlocks from "@/components/sections/ApartBlocks";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedWords from "@/components/sections/AnimatedWords";

export const metadata: Metadata = {
  title: "About Us | Global Business Summits",
  description: "Architects of the rooms where industries move forward.",
};

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">
        <Eyebrow>ABOUT US</Eyebrow>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
          WE ARE GLOBAL BUSINESS SUMMITS.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-navy/70">
          Architects of the rooms where industries move forward.
        </p>
      </section>

      <section className="border-t border-navy/20 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <p className="max-w-2xl text-2xl font-semibold leading-snug text-navy md:text-3xl">
            We didn&apos;t set out to organize events. We set out to solve a problem —
            that most industry gatherings talk a lot and deliver little.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/20 bg-deep py-32 text-white">
        <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-12">
          <AnimatedWords lines={[{ text: "LESS NOISE." }, { text: "MORE SIGNAL.", accent: true }]} />
        </div>
      </section>

      <ApartBlocks />
    </>
  );
}
