import Image from "next/image";
import Link from "next/link";
import { asset, nav, services, site } from "@/lib/site";
import { Logo } from "../visuals/Logo";


export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg fade-mask absolute inset-0 opacity-60" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-body mt-6 max-w-sm text-white/60">{site.description}</p>
            <p className="mt-6 font-display text-lg font-semibold text-accent-300">{site.tagline}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "WhatsApp", detail: site.whatsapp.display, href: site.whatsapp.href, icon: asset("/icons/whatsapp.svg") },
                { label: "Instagram", detail: site.instagram.handle, href: site.instagram.href, icon: asset("/icons/instagram.svg") },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pr-5 pl-1.5 text-sm text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:text-white"
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
                      <Image src={s.icon} alt="" width={20} height={20} className="size-5" />
                    </span>
                    <span>
                      <span className="sr-only">{s.label}: </span>
                      {s.detail}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Company">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services" span="lg:col-span-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/#${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact" span="lg:col-span-3">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="whitespace-nowrap transition-colors hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, span = "lg:col-span-2", children }: { title: string; span?: string; children: React.ReactNode }) {
  return (
    <div className={span}>
      <h3 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/70">{children}</ul>
    </div>
  );
}
