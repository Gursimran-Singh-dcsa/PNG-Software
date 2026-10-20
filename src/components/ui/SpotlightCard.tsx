"use client";

import type { MouseEvent, ReactNode } from "react";

/** Card with a soft radial glow that follows the pointer. */
export function SpotlightCard({ className = "", children }: { className?: string; children: ReactNode }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-ink-200 bg-white transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_60px_-24px] hover:shadow-brand-600/30 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--color-brand-400) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
