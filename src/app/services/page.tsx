import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/visuals/ServiceIcon";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Web, AI, SEO & Marketing Services | PNG Software",
  description: "Website development, RAG and Generative AI, SEO, digital marketing, AI Centre of Excellence, app development and ERP software — one accountable team.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Strategy, engineering and growth — under one roof."
        lead="Pick a single service or bring us the whole journey. Either way you get one accountable team, on-time delivery and long-term support."
      />

      <section className="section-y bg-white">
        <div className="container-x divide-y divide-ink-200">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 py-14 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-12">
              <Reveal variant="left" className="lg:col-span-5">
                <span className="font-display text-sm font-semibold text-brand-500 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                    <ServiceIcon icon={s.icon} />
                  </span>
                  <h2 className="text-h3 text-ink-900 sm:text-3xl">{s.title}</h2>
                </div>
                <p className="text-lead mt-6">{s.summary}</p>
              </Reveal>
              <ul className="grid gap-3 self-center sm:grid-cols-2 lg:col-span-7">
                {s.points.map((pt, j) => (
                  <Reveal
                    as="li"
                    key={pt}
                    delay={j * 80}
                    className="flex items-start gap-3 rounded-xl border border-ink-200 bg-ink-50 p-5 text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <svg aria-hidden viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 text-brand-600">
                      <path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pt}
                  </Reveal>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
