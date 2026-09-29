import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Gallery, { type Photo } from "@/components/media/Gallery";

export const metadata: Metadata = {
  title: "Media | Global Business Summits",
  description: "Press & news, photo gallery and testimonials from Global Business Summits.",
};

// Add real photos here as { id, src, alt } — none are invented.
const photos: Photo[] = [];

export default function Media() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-40 lg:px-12">
        <Eyebrow>MEDIA</Eyebrow>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tighter text-navy">
          Media
        </h1>
      </section>

      <section id="press" className="border-t border-navy/20 py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy">Press &amp; News</h2>
          <p className="mt-6 max-w-md text-navy/70">
            Coverage and announcements will appear here as they are published.
          </p>
        </div>
      </section>

      <section id="gallery" className="border-t border-navy/20 py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-navy">Photo Gallery</h2>
          <Gallery photos={photos} />
        </div>
      </section>

      <section id="testimonials" className="border-t border-navy/20 py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy">Testimonials</h2>
          <p className="mt-6 max-w-md text-navy/70">
            Delegate and partner testimonials will be added here.
          </p>
        </div>
      </section>
    </>
  );
}
