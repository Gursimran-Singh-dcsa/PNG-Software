import { site } from "@/lib/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CtaBand() {
  return (
    <section className="section-y bg-ink-50">
      <div className="container-x">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div aria-hidden className="grid-bg fade-mask absolute inset-0" />
            <div aria-hidden className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-accent-400/25 blur-[100px] motion-safe:animate-float" />
            <div className="relative">
              <span className="eyebrow justify-center text-accent-300">Let&apos;s talk</span>
              <h2 className="text-h2 mx-auto mt-5 max-w-3xl">Let&apos;s build the future together.</h2>
              <p className="text-lead mx-auto mt-5 max-w-xl text-white/70">
                Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your vision into reality.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact/" variant="light">
                  Start a project
                </Button>
                <Button href={site.phones[0].href} variant="ghost" className="text-white">
                  Call {site.phones[0].display}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
