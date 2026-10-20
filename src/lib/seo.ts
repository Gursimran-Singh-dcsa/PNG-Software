import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  /** Full title as it should appear in search results and share cards (aim for 30–60 characters). */
  title: string;
  /** 55–200 characters. */
  description: string;
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
  article?: { publishedTime: string; author: string; section: string };
};

const shareImage = {
  url: `${site.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: `${site.name} — websites, AI and digital marketing`,
};

/**
 * One place that builds every page's title, description, canonical URL, Open Graph
 * (Facebook, LinkedIn, WhatsApp, Pinterest) and Twitter/X card tags, so no page ships
 * with a missing tag. URLs are absolute and already include the GitHub Pages sub-path.
 */
export function pageMetadata({ title, description, path, article }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      images: [shareImage],
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            authors: [article.author],
            section: article.section,
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}
