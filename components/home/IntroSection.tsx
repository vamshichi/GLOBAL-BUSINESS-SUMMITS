export default function IntroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">

        {/* Main Introduction */}
        <p className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          GLOBAL BUSINESS SUMMITS is a full-spectrum business events
          company, we build Conferences, run Summits, train talent,
          and manage events end-to-end, across industries and
          continents.
        </p>

        {/* Statement */}
        <p className="self-end text-4xl font-extrabold italic leading-tight tracking-tighter">
          We don't fill seats.
          <br />
          We fill{" "}
          <span className="text-teal underline decoration-cyan decoration-4 underline-offset-8">
            pipelines
          </span>
          .
        </p>

      </div>
    </section>
  );
}