import { ServiceIcon } from "./ServiceIcon";
import type { ServiceIcon as Kind } from "@/lib/site";

const orbitIcons: { icon: Kind; angle: number; ring: "outer" | "inner" }[] = [
  { icon: "web", angle: 0, ring: "outer" },
  { icon: "seo", angle: 90, ring: "outer" },
  { icon: "marketing", angle: 180, ring: "outer" },
  { icon: "app", angle: 270, ring: "outer" },
  { icon: "ai", angle: 45, ring: "inner" },
  { icon: "coe", angle: 225, ring: "inner" },
];

/** Decorative hero illustration: two counter-rotating rings of service icons around a pulsing core. Pure DOM/SVG + CSS. */
export function HeroOrbit() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* glow */}
      <div className="absolute inset-[18%] rounded-full bg-brand-500/30 blur-3xl" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="ring-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-brand-300)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--color-accent-400)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ring-g)" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="url(#ring-g)" strokeWidth="1" className="flow-line" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="var(--color-brand-300)" strokeOpacity="0.25" />
      </svg>

      {/* outer ring */}
      <div className="absolute inset-0 motion-safe:animate-spin-slow">
        {orbitIcons.filter((o) => o.ring === "outer").map((o) => (
          <Node key={o.icon} icon={o.icon} angle={o.angle} radiusPct={47.5} reverse />
        ))}
      </div>

      {/* inner ring, counter-rotating */}
      <div className="absolute inset-0 motion-safe:animate-spin-slow [animation-direction:reverse]">
        {orbitIcons.filter((o) => o.ring === "inner").map((o) => (
          <Node key={o.icon} icon={o.icon} angle={o.angle} radiusPct={30} />
        ))}
      </div>

      {/* core */}
      <div className="absolute top-1/2 left-1/2 size-24 -translate-1/2">
        <span className="absolute inset-0 rounded-full bg-accent-400/40 motion-safe:animate-pulse-ring" />
        <span className="absolute inset-0 rounded-full bg-brand-400/40 motion-safe:animate-pulse-ring [animation-delay:1.5s]" />
        <div className="relative grid size-full place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 font-display text-xl font-bold text-white shadow-2xl shadow-brand-900/60 ring-1 ring-white/20">
          PNG
        </div>
      </div>
    </div>
  );
}

function Node({ icon, angle, radiusPct, reverse }: { icon: Kind; angle: number; radiusPct: number; reverse?: boolean }) {
  const rad = (angle * Math.PI) / 180;
  const left = 50 + radiusPct * Math.cos(rad);
  const top = 50 + radiusPct * Math.sin(rad);
  return (
    <div className="absolute -translate-1/2" style={{ left: `${left}%`, top: `${top}%` }}>
      {/* counter-spin keeps the icon upright while its ring rotates */}
      <div
        className={`grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-accent-300 backdrop-blur-md sm:size-14 motion-safe:animate-spin-slow ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        <ServiceIcon icon={icon} className="size-6 sm:size-7" />
      </div>
    </div>
  );
}
