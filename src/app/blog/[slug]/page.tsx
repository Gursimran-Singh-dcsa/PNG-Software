import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/sections/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { formatDate, getPost, posts, type Block } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    // Keep share titles within the recommended 60 characters.
    title: post.title.length + 15 <= 60 ? `${post.title} | PNG Software` : post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    article: { publishedTime: post.date, author: post.author, section: post.category },
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pt-40 pb-20 text-white sm:pt-48">
        <div aria-hidden className="grid-bg fade-mask absolute inset-0" />
        <div aria-hidden className="absolute -top-40 right-[-10%] size-[520px] rounded-full bg-brand-600/35 blur-[120px]" />
        <div className="container-x relative max-w-4xl">
          <Reveal>
            <Link href="/blog/" className="text-sm text-white/60 transition-colors hover:text-white">
              ← All articles
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <span className="mt-8 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-300">
              {post.category}
            </span>
          </Reveal>
          <h1 className="text-h1 mt-6">
            <SplitWords text={post.title} start={120} step={50} />
          </h1>
          <Reveal delay={400}>
            <p className="mt-6 text-sm text-white/55">
              {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMinutes} min read
            </p>
          </Reveal>
        </div>
      </section>

      <article className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-lead text-ink-700">{post.excerpt}</p>
          <div className="mt-10 space-y-6">
            {post.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      <section className="section-y bg-ink-50">
        <div className="container-x">
          <h2 className="text-h2 text-ink-900">Keep reading</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-h3 pt-6 text-ink-900 sm:text-3xl">{block.text}</h2>;
    case "p":
      return <p className="text-body text-lg text-ink-700">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-700">
              <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-brand-500 bg-brand-50 px-6 py-6 font-display text-xl leading-snug font-medium text-brand-900 sm:px-8 sm:text-2xl">
          {block.text}
        </blockquote>
      );
  }
}
