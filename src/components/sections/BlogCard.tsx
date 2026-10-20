import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

const tint: Record<Post["category"], string> = {
  AI: "from-brand-600 to-ink-950",
  SEO: "from-accent-500 to-brand-800",
  Marketing: "from-brand-400 to-brand-800",
  Web: "from-brand-700 to-accent-500",
  Delivery: "from-ink-700 to-brand-700",
};

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px] hover:shadow-brand-600/30">
      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${tint[post.category]}`}>
        <div aria-hidden className="grid-bg absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
        <span aria-hidden className="absolute right-5 bottom-3 font-display text-7xl font-bold text-white/10 transition-transform duration-700 group-hover:-translate-y-2">
          {post.category}
        </span>
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs text-ink-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMinutes} min read
        </p>
        <h3 className="text-h3 mt-3 text-ink-900 transition-colors group-hover:text-brand-700">
          <Link href={`/blog/${post.slug}/`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-body mt-3 line-clamp-3">{post.excerpt}</p>
      </div>
    </article>
  );
}
