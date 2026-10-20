import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const homeTitle = `${site.name} — Websites, AI & Digital Marketing`;
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({ title: homeTitle, description: site.description, path: "/" }),
};

export const viewport: Viewport = {
  themeColor: "#0b0814",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-[70] rounded-full bg-white px-4 py-2 text-ink-900 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
