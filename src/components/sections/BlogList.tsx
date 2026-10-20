"use client";

import { useState } from "react";
import { categories, posts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === c ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-700 hover:border-brand-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} articles
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <div key={p.slug} className="motion-safe:animate-[fade-in_0.6s_ease-out]">
            <BlogCard post={p} />
          </div>
        ))}
      </div>
    </>
  );
}
