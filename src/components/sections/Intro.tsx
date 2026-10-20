import { stats } from "@/lib/site";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { ScrollText } from "../ui/ScrollText";

export function Intro() {
  return (
    <section className="section-y bg-ink-50">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Who we are</span>
        </Reveal>
        <ScrollText
          className="mt-8 max-w-5xl font-display text-2xl leading-snug font-medium tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]"
          text="PNG Software helps ambitious businesses grow with modern websites, practical AI and marketing that is measured in results — not vanity metrics."
        />

        <dl className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-ink-200 bg-ink-200 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-white p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-tight text-brand-700 sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-3 text-sm text-ink-500">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
