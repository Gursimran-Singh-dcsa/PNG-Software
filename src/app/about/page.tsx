import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Intro } from "@/components/sections/Intro";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} — a technology partner for growing businesses.`,
};

const values = [
  { title: "Our mission", text: "To deliver customised, efficient and scalable solutions that drive business growth, improve operational efficiency and foster innovation across industries." },
  { title: "Our approach", text: "Small, senior teams. Clear scope. Weekly demos. We'd rather tell you a hard truth early than a comfortable one late." },
  { title: "Our promise", text: "On-time delivery, honest guidance and support that continues long after the project goes live." },
];

const glance = [
  { label: "Delivered", text: "10+ web applications, built to scale and supported after launch." },
  { label: "Expertise", text: "Web & app development, RAG and Generative AI, CoE, SEO, digital marketing and ERP." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A forward-thinking technology partner for growing businesses."
        lead={`${site.legalName} builds digital products that help businesses thrive — with the care of a small team and the discipline of a large one.`}
      />

      <Intro />

      <section className="section-y bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="What drives us" title="Mission, approach and promise." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="rounded-2xl border-l-4 border-brand-600 bg-brand-50 p-8">
                <h3 className="text-h3 text-brand-800">{v.title}</h3>
                <p className="text-body mt-4 text-ink-700">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink-950 text-white">
        <div className="container-x">
          <SectionHeading dark eyebrow="The facts" title="PNG Software at a glance." />
          <ol className="relative mt-16 border-l border-white/15 pl-8 sm:pl-12">
            {glance.map((t, i) => (
              <Reveal as="li" key={t.label} delay={i * 100} className="relative pb-12 last:pb-0">
                <span className="absolute top-1.5 -left-[calc(2rem+6px)] size-3 rounded-full bg-accent-400 ring-4 ring-ink-950 sm:-left-[calc(3rem+6px)]" />
                <p className="font-display text-sm font-semibold tracking-wider text-accent-300 uppercase">{t.label}</p>
                <p className="text-lead mt-2 max-w-2xl text-white/75">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <WhyUs />
      <CtaBand />
    </>
  );
}
