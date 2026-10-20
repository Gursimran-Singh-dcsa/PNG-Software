import Link from "next/link";
import { services } from "@/lib/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ServiceIcon } from "../visuals/ServiceIcon";

export function ServicesGrid() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to launch, grow and scale online."
            lead="Seven service lines under one roof — so strategy, build and marketing all pull in the same direction."
          />
          <Reveal delay={200}>
            <Link href="/services/" className="group inline-flex items-center gap-2 font-semibold text-brand-700">
              All services
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 100}>
              <SpotlightCard className="h-full">
                <Link href={`/services/#${s.slug}`} className="flex h-full flex-col p-7 sm:p-8">
                  <span className="grid size-14 place-items-center rounded-xl bg-brand-50 text-brand-600 transition duration-500 group-hover:rotate-[-6deg] group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon icon={s.icon} />
                  </span>
                  <h3 className="text-h3 mt-6 text-ink-900">{s.title}</h3>
                  <p className="text-body mt-3">{s.summary}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <Link
              href="/contact/"
              className="group flex h-full min-h-64 flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 p-7 text-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px] hover:shadow-brand-600/50 sm:p-8"
            >
              <span className="text-h3">Not sure where to start?</span>
              <span>
                <span className="text-body block text-white/70">We&apos;ll guide you to the right mix of services.</span>
                <span className="mt-6 flex items-center gap-2 text-sm font-semibold">
                  Talk to us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
