import { AiSection } from "@/components/sections/AiSection";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Intro } from "@/components/sections/Intro";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Intro />
      <ServicesGrid />
      <AiSection />
      <WhyUs />
      <Process />
      <BlogTeaser />
      <CtaBand />
    </>
  );
}
