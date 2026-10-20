export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI" | "SEO" | "Marketing" | "Web" | "Delivery";
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  author: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "what-is-rag-and-why-your-business-needs-it",
    title: "What is RAG, and why does your business need it?",
    excerpt:
      "Retrieval-augmented generation lets an AI assistant answer from your own documents instead of guessing. Here is how it works, in plain English.",
    category: "AI",
    date: "2026-09-28",
    readMinutes: 6,
    author: "PNG Software AI Team",
    body: [
      {
        type: "p",
        text: "Large language models are impressive generalists, but they don't know your price list, your policies or last quarter's product changes. Ask them anyway and they may answer confidently — and wrongly. Retrieval-augmented generation (RAG) fixes that by giving the model the right facts at the moment it answers.",
      },
      { type: "h2", text: "How RAG works" },
      {
        type: "ul",
        items: [
          "Ingest: your PDFs, help-desk articles and web pages are split into small passages.",
          "Embed: each passage is turned into a vector — a numeric fingerprint of its meaning.",
          "Retrieve: when a user asks a question, the most relevant passages are found in a vector database.",
          "Generate: the model writes an answer using only those passages, and can cite them.",
        ],
      },
      { type: "h2", text: "Where it pays off" },
      {
        type: "p",
        text: "The quickest wins we see are customer-support assistants that work 24/7, internal knowledge search for sales and operations teams, and onboarding bots that answer the same hundred questions new hires always ask.",
      },
      {
        type: "quote",
        text: "A good RAG system doesn't just answer — it shows where the answer came from, so people can trust it.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "Start small: one document set, one audience, one measurable goal such as fewer support tickets. Evaluate answers against real questions before you widen the scope. That discipline is what separates a demo from a dependable product.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist-for-2026",
    title: "A practical technical-SEO checklist",
    excerpt:
      "Before you write another blog post, make sure search engines can crawl, render and understand the site you already have.",
    category: "SEO",
    date: "2026-09-12",
    readMinutes: 5,
    author: "PNG Software SEO Team",
    body: [
      {
        type: "p",
        text: "Great content can't rank if search engines struggle to reach it. Technical SEO is the foundation everything else stands on — and it's usually where the fastest gains hide.",
      },
      { type: "h2", text: "The checklist" },
      {
        type: "ul",
        items: [
          "Every important page returns a 200 status and is linked from somewhere.",
          "An up-to-date XML sitemap is submitted in Search Console.",
          "Titles and meta descriptions are unique and written for people.",
          "Core Web Vitals pass on mobile: LCP, INP and CLS.",
          "Canonical tags point to the version you want indexed.",
          "Structured data describes your organisation, articles and products.",
        ],
      },
      { type: "h2", text: "Measure, then fix" },
      {
        type: "p",
        text: "Crawl the site, sort issues by how many pages they affect, and fix the template-level problems first. One fix to a shared layout can repair hundreds of pages at once.",
      },
    ],
  },
  {
    slug: "how-we-deliver-projects-on-time",
    title: "How we deliver projects on time — every time",
    excerpt:
      "On-time delivery isn't luck. It's a handful of habits we apply to every engagement, from the first call to launch day.",
    category: "Delivery",
    date: "2026-08-30",
    readMinutes: 4,
    author: "PNG Software",
    body: [
      {
        type: "p",
        text: "Most late projects are late on day one: the scope was fuzzy, the risks were unspoken and nobody agreed what 'done' meant. We fix that before development starts.",
      },
      { type: "h2", text: "Our habits" },
      {
        type: "ul",
        items: [
          "A written scope with explicit 'not in this phase' items.",
          "Two-week sprints with a live demo at the end of each one.",
          "A risk list reviewed every week, not discovered at the deadline.",
          "One accountable project lead you can call directly.",
        ],
      },
      {
        type: "quote",
        text: "If something is going to slip, you hear it from us early — with options, not excuses.",
      },
    ],
  },
  {
    slug: "landing-pages-that-convert",
    title: "Seven landing-page fixes that lift conversions",
    excerpt:
      "Paid traffic is expensive. These small, testable changes help more of those visitors become leads.",
    category: "Marketing",
    date: "2026-08-14",
    readMinutes: 5,
    author: "PNG Software Marketing Team",
    body: [
      {
        type: "p",
        text: "A landing page has one job. Every element either helps the visitor take the next step or gets in the way.",
      },
      { type: "h2", text: "What to change first" },
      {
        type: "ul",
        items: [
          "Match the headline to the ad the visitor just clicked.",
          "Put one clear call to action above the fold.",
          "Cut form fields to the minimum you truly need.",
          "Show proof — results, logos or testimonials you have permission to use.",
          "Make it load in under two and a half seconds on mobile.",
          "Remove the main navigation so attention stays on the offer.",
          "A/B test one change at a time and wait for enough data.",
        ],
      },
    ],
  },
  {
    slug: "why-nextjs-for-business-websites",
    title: "Why we build business websites with Next.js",
    excerpt:
      "Static speed, great SEO and room to grow into an application — the case for Next.js on your next website.",
    category: "Web",
    date: "2026-07-25",
    readMinutes: 4,
    author: "PNG Software Web Team",
    body: [
      {
        type: "p",
        text: "A business website has to be fast, easy to find on Google and simple to extend. Next.js lets us ship all three without compromise.",
      },
      { type: "h2", text: "The benefits" },
      {
        type: "ul",
        items: [
          "Pages can be pre-rendered to static HTML — fast and cheap to host.",
          "Search engines receive fully rendered content.",
          "Images, fonts and scripts are optimised by default.",
          "The same codebase can grow into a full web application later.",
        ],
      },
      {
        type: "p",
        text: "This very website is a static Next.js export: no server to maintain, and it loads in a blink.",
      },
    ],
  },
  {
    slug: "building-an-ai-centre-of-excellence",
    title: "Building an AI Centre of Excellence that actually ships",
    excerpt:
      "A CoE should speed teams up, not add paperwork. Here's the lightweight model we recommend to growing companies.",
    category: "AI",
    date: "2026-07-08",
    readMinutes: 6,
    author: "PNG Software AI Team",
    body: [
      {
        type: "p",
        text: "Many companies now have a dozen AI experiments and no way of knowing which ones work. A Centre of Excellence brings order — if it is designed to enable rather than to gatekeep.",
      },
      { type: "h2", text: "Four responsibilities" },
      {
        type: "ul",
        items: [
          "Standards: approved models, data-handling rules and evaluation methods.",
          "Accelerators: reusable RAG pipelines, prompt libraries and UI components.",
          "Enablement: training so every team can build safely on its own.",
          "Portfolio: a shared view of what's live, what's piloting and what was stopped.",
        ],
      },
      {
        type: "quote",
        text: "Measure a CoE by how many good ideas reach production — not by how many documents it writes.",
      },
    ],
  },
];

export const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))] as const;

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
