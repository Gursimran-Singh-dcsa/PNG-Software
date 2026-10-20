import { SplitWords } from "../ui/SplitWords";
import { Reveal } from "../ui/Reveal";

/** Dark hero band used at the top of every inner page so they all share the same rhythm. */
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-40 pb-20 text-white sm:pt-48 sm:pb-28">
      <div aria-hidden className="grid-bg fade-mask absolute inset-0" />
      <div aria-hidden className="absolute -top-40 right-[-10%] size-[520px] rounded-full bg-brand-600/35 blur-[120px] motion-safe:animate-float" />
      <div aria-hidden className="absolute bottom-[-30%] left-[-10%] size-[420px] rounded-full bg-accent-500/15 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow text-accent-300">{eyebrow}</span>
        </Reveal>
        <h1 className="text-h1 mt-6 max-w-4xl">
          <SplitWords text={title} start={100} />
        </h1>
        {lead && (
          <Reveal delay={400}>
            <p className="text-lead mt-6 max-w-2xl text-white/65">{lead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
