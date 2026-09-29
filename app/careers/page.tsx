import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Careers | Global Business Summits",
  description: "Opportunities to join Global Business Summits.",
};

// Add real roles here as { id, title, location, type } — none are invented.
type Role = { id: string; title: string; location: string; type: string };
const roles: Role[] = [];

export default function Careers() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-40 lg:px-12">
      <Eyebrow>CAREERS</Eyebrow>
      <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
        Opportunities
      </h1>
      <p className="mt-6 max-w-xl text-xl text-navy/70">
        Join the team behind the rooms where industries move forward.
      </p>

      <div className="mt-16 border-t border-navy/20">
        {roles.length ? (
          <ul>
            {roles.map((r) => (
              <li key={r.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/20 py-6">
                <div>
                  <p className="text-xl font-bold text-navy">{r.title}</p>
                  <p className="text-navy/60">
                    {r.location} · {r.type}
                  </p>
                </div>
                <Link href="/contact" className="border border-navy px-5 py-2.5 font-semibold text-navy hover:bg-navy hover:text-white">
                  Apply
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-md py-12 text-navy/70">
            We don&apos;t have open roles listed right now. Send us your details and we&apos;ll reach out when a fit comes up.
          </p>
        )}
      </div>

      <Link href="/contact" className="mt-4 inline-block bg-navy px-7 py-4 font-bold text-white transition hover:bg-teal">
        Get in Touch
      </Link>
    </section>
  );
}
