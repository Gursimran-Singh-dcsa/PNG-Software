import { InView } from "../ui/InView";
import { Reveal } from "../ui/Reveal";

const items = [
  {
    title: "On-time delivery",
    text: "Clear milestones and weekly demos.",
    // clock
    paths: ["M16 4a12 12 0 1 1 0 24a12 12 0 1 1 0-24", "M16 9v7l5 3"],
  },
  {
    title: "Long-term support",
    text: "We stay with you after launch.",
    // shield with check
    paths: ["M16 3l10 4v8c0 7-4.5 11.5-10 14C10.5 26.5 6 22 6 15V7z", "M11.5 15.5l3 3 6-6"],
  },
  {
    title: "Project guidance",
    text: "Right scope, stack and priorities.",
    // compass
    paths: ["M16 4a12 12 0 1 1 0 24a12 12 0 1 1 0-24", "M20.5 11.5l-2.8 6.2-6.2 2.8 2.8-6.2z"],
  },
  {
    title: "AI-first engineering",
    text: "RAG and GenAI where they add value.",
    // spark
    paths: ["M16 3v6M16 23v6M3 16h6M23 16h6", "M16 11l1.6 3.4L21 16l-3.4 1.6L16 21l-1.6-3.4L11 16l3.4-1.6z"],
  },
];

/** Four promises under the hero. Icons draw themselves in when the band scrolls into view. */
export function Highlights() {
  return (
    <section aria-label="Why clients choose us" className="relative z-10 bg-ink-50">
      <div className="container-x">
        <InView className="-mt-14 grid overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-[0_30px_80px_-40px] shadow-brand-900/40 sm:grid-cols-2 lg:-mt-16 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 110}
              className="group relative flex items-start gap-4 border-ink-200 p-6 not-last:border-b sm:p-7 sm:border-b-0 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+2)]:border-b-0 lg:not-last:border-r"
            >
              {/* accent bar that grows on hover */}
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <svg viewBox="0 0 32 32" aria-hidden className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {item.paths.map((d, j) => (
                    <path key={j} d={d} pathLength={1} className="draw-line" style={{ transitionDelay: `${300 + i * 150 + j * 250}ms` }} />
                  ))}
                </svg>
              </span>
              <span>
                <span className="block font-display text-base font-semibold text-ink-900">{item.title}</span>
                <span className="mt-1 block text-sm text-ink-500">{item.text}</span>
              </span>
            </Reveal>
          ))}
        </InView>
      </div>
    </section>
  );
}
