import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${site.name}. Call ${site.phones.map((p) => p.display).join(" / ")} or email ${site.email}.`,
};

export default function ContactPage() {
  const cards = [
    ...site.phones.map((p, i) => ({ label: `Call us${site.phones.length > 1 ? ` · line ${i + 1}` : ""}`, value: p.display, href: p.href })),
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to innovate? Let's talk."
        lead="Tell us about your project. We usually reply within one business day."
      />

      <section className="section-y bg-ink-50">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10"
                >
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">{c.label}</span>
                    <span className="mt-2 block font-display text-lg font-semibold break-all text-ink-900">{c.value}</span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
