import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost" | "light";
  children: ReactNode;
  className?: string;
};

const styles = {
  primary: "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/30",
  light: "bg-white text-ink-900 hover:bg-brand-50",
  ghost: "border border-current/25 hover:border-current/60",
};

export function Button({ href, variant = "primary", children, className = "" }: Props) {
  const external = /^(https?:|tel:|mailto:)/.test(href);
  const cls = `group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <svg aria-hidden viewBox="0 0 16 16" className="size-4 transition-transform duration-300 group-hover:translate-x-1">
        <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  return external ? (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
