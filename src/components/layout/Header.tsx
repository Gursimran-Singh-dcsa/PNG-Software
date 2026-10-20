"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "../visuals/Logo";

// The desktop header pill has room for one number.
const headerPhone = site.phones.find((p) => p.display === "+91-9650684442") ?? site.phones[0];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile menu after navigating (state reset during render, no effect needed).
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));
  // No backdrop-filter while the menu is open: it would make the header the containing block for the fixed menu.
  const bar = open
    ? "bg-ink-950 py-3"
    : scrolled
      ? "bg-ink-950/85 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
      : "py-5";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bar}`}>
      <div className="container-x flex items-center justify-between text-white">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "bg-white text-ink-900" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={headerPhone.href}
          className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-500 lg:inline-flex"
        >
          <PhoneIcon /> {headerPhone.display}
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative grid size-11 place-items-center rounded-full border border-white/15 lg:hidden"
        >
          <span className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[68px] bottom-0 bg-ink-950 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex h-full flex-col pt-8 pb-10">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-white/10 py-5 font-display text-3xl font-semibold transition-all duration-500 ${
                isActive(item.href) ? "text-accent-300" : "text-white"
              } ${open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto grid gap-3">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 py-4 font-semibold text-white">
                <PhoneIcon /> Call {p.display}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
