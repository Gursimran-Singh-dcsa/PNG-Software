import type { CSSProperties } from "react";

/** Splits text into masked words that slide up one after another on load. */
export function SplitWords({ text, start = 0, step = 70, className }: { text: string; start?: number; step?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word-mask">
          <span className={className} style={{ "--delay": `${start + i * step}ms` } as CSSProperties}>
            {word}
          </span>
          {" "}
        </span>
      ))}
    </>
  );
}
