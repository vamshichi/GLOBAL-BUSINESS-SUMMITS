import HeroSection from "@/components/home/HeroSection";
import TaglineMarquee from "@/components/home/TaglineMarquee";
import IntroSection from "@/components/home/IntroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyUs from "@/components/sections/WhyUs";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <TaglineMarquee />

      <IntroSection />

      <WhatWeDo />

      <FeaturedEvents />

      <WhyUs />

      <ContactSection />
    </>
  );
}