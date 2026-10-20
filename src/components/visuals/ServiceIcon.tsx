import type { ServiceIcon as Kind } from "@/lib/site";

const paths: Record<Kind, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="5" width="26" height="20" rx="3" />
      <path d="M3 10h26M8 7.5h.01M11 7.5h.01M12 16l-3 3 3 3M20 16l3 3-3 3M17.5 15l-3 8" />
    </>
  ),
  ai: (
    <>
      <circle cx="16" cy="16" r="5" />
      <path d="M16 3v6M16 23v6M3 16h6M23 16h6M6.8 6.8l4.2 4.2M21 21l4.2 4.2M6.8 25.2l4.2-4.2M21 11l4.2-4.2" />
    </>
  ),
  seo: (
    <>
      <circle cx="14" cy="14" r="9" />
      <path d="M21 21l7 7M10 16l3-3 2 2 4-4" />
    </>
  ),
  marketing: (
    <>
      <path d="M5 13v6l4 1 2 7h4l-2-6 14 4V5L13 11H7a2 2 0 0 0-2 2z" />
    </>
  ),
  coe: (
    <>
      <path d="M16 3l11 6v14l-11 6-11-6V9z" />
      <path d="M16 3v26M5 9l11 7 11-7" />
    </>
  ),
  app: (
    <>
      <rect x="9" y="3" width="14" height="26" rx="3" />
      <path d="M14 25h4M13 9h6M13 13h6M13 17h3" />
    </>
  ),
  erp: (
    <>
      <rect x="4" y="4" width="10" height="10" rx="2" />
      <rect x="18" y="4" width="10" height="10" rx="2" />
      <rect x="4" y="18" width="10" height="10" rx="2" />
      <path d="M23 18v10M18 23h10" />
    </>
  ),
};

export function ServiceIcon({ icon, className = "size-7" }: { icon: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[icon]}
    </svg>
  );
}
