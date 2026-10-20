import { site } from "@/lib/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { HeroOrbit } from "../visuals/HeroOrbit";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg fade-mask absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-48 -left-40 -z-10 size-[620px] rounded-full bg-brand-600/40 blur-[140px] motion-safe:animate-float" />
      <div aria-hidden className="absolute right-[-15%] bottom-[-25%] -z-10 size-[520px] rounded-full bg-accent-500/20 blur-[140px] motion-safe:animate-float [animation-delay:-4s]" />

      <div className="container-x grid min-h-[100svh] items-center gap-12 pt-32 pb-32 lg:grid-cols-[1.15fr_1fr] lg:pt-36">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-accent-400 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-accent-400" />
              </span>
              Building digital products since {site.founded}
            </span>
          </Reveal>

          <h1 className="text-display mt-8">
            <SplitWords text="We build websites," start={150} />
            <br className="hidden sm:block" />
            <SplitWords text="AI & growth" start={430} className="text-gradient" />
            <br className="hidden sm:block" />
            <SplitWords text="that deliver." start={640} />
          </h1>

          <Reveal delay={850}>
            <p className="text-lead mt-8 max-w-xl text-white/65">
              PNG Software is a full-service technology partner — from custom websites and AI solutions to SEO and digital
              marketing, built on the right technology for your business. Delivered on time, supported for the long term.
            </p>
          </Reveal>

          <Reveal delay={1000}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Start your project</Button>
              <Button href="/services/" variant="ghost" className="text-white">
                Explore services
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={300}>
          <HeroOrbit />
        </Reveal>
      </div>

      {/* scroll cue */}
      <div aria-hidden className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-white/40 uppercase lg:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-accent-400 motion-safe:animate-[scroll-cue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
