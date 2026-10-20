import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.reduce((max, p) => (p.date > max ? p.date : max), posts[0].date);

  const pages: MetadataRoute.Sitemap = nav.map((item) => ({
    url: `${site.url}${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
    ...(item.href === "/blog/" ? { lastModified: latestPost, changeFrequency: "weekly" as const } : {}),
  }));

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
