export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="size-9" role="img" aria-labelledby="logo-title">
        <title id="logo-title">PNG Software</title>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-brand-500)" />
            <stop offset="1" stopColor="var(--color-brand-800)" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#logo-g)" />
        <path d="M12 28V12h7.5a5 5 0 0 1 0 10H12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="27" r="3" fill="var(--color-accent-400)" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        PNG<span className="font-normal opacity-70"> Software</span>
      </span>
    </span>
  );
}
