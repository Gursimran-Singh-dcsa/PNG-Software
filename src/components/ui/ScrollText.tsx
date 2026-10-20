"use client";

import { useEffect, useRef } from "react";

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-word]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => (w.style.opacity = "1"));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the paragraph's top reaches 85% of the viewport, 1 when its bottom reaches 45%.
      const progress = Math.min(Math.max((vh * 0.85 - rect.top) / (rect.height + vh * 0.4), 0), 1);
      const lit = progress * words.length;
      words.forEach((w, i) => {
        w.style.opacity = String(Math.min(Math.max(lit - i, 0.15), 1));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} data-word className="transition-opacity duration-200" style={{ opacity: 0.15 }}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
