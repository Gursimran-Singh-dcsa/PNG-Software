"use client";

import { useEffect, useRef } from "react";

/**
 * Counts up when scrolled into view. The server-rendered text is the final value,
 * so no-JS and reduced-motion visitors simply see the number.
 */
export function Counter({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Years count up from a few years back rather than from zero.
    const from = value > 1000 ? value - 30 : 0;
    const render = (n: number) => (el.textContent = `${n}${suffix}`);
    let raf = 0;
    render(from);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          render(Math.round(from + (value - from) * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      render(value);
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
