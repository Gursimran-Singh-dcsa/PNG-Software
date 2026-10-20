import { strengths } from "@/lib/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyUs() {
  return (
    <section className="section-y bg-ink-50">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            eyebrow="Why PNG Software"
            title="A partner that's still here after launch day."
            lead="We measure ourselves by deadlines met and relationships kept — not by how fast we can hand over a project."
          />
        </div>
        <ol className="lg:col-span-7">
          {strengths.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="group flex gap-6 border-t border-ink-200 py-8 last:border-b sm:gap-10">
              <span className="font-display text-sm font-semibold text-brand-500 tabular-nums">0{i + 1}</span>
              <div>
                <h3 className="text-h3 text-ink-900 transition-colors duration-300 group-hover:text-brand-700">{s.title}</h3>
                <p className="text-body mt-3 max-w-lg">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
