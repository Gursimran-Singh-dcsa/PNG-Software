import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { BlogList } from "@/components/sections/BlogList";

export const metadata: Metadata = pageMetadata({
  title: "Blog — AI, Web & Growth Insights | PNG Software",
  description: "Practical insights on AI, RAG, SEO, digital marketing and web development from the PNG Software team — what works and how to apply it.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on AI, web and growth."
        lead="Practical notes from our projects — what works, what doesn't, and how to apply it to your business."
      />
      <section className="section-y bg-ink-50">
        <div className="container-x">
          <BlogList />
        </div>
      </section>
    </>
  );
}
