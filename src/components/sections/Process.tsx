import { processSteps } from "@/lib/site";
import { InView } from "../ui/InView";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading align="center" eyebrow="How we work" title="A clear path from idea to launch." />

        <InView className="relative mt-16">
          {/* connector line that draws itself on scroll (desktop) */}
          <svg aria-hidden className="absolute top-[27px] left-0 hidden h-0.5 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line x1="12.5" y1="1" x2="87.5" y2="1" pathLength={1} stroke="var(--color-brand-300)" strokeWidth="2" className="draw-line" />
          </svg>
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 150} className="text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full border-4 border-white bg-brand-600 font-display text-sm font-semibold text-white shadow-lg shadow-brand-600/30">
                  {p.step}
                </span>
                <h3 className="text-h3 mt-6 text-ink-900">{p.title}</h3>
                <p className="text-body mx-auto mt-3 max-w-xs">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
