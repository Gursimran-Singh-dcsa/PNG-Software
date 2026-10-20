import Link from "next/link";
import { posts } from "@/lib/posts";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { BlogCard } from "./BlogCard";

export function BlogTeaser() {
  return (
    <section className="section-y bg-ink-50">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Insights" title="Ideas from our team." />
          <Reveal delay={150}>
            <Link href="/blog/" className="group inline-flex items-center gap-2 font-semibold text-brand-700">
              View all articles
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
