/** Prefix for files in /public — next/image does not add basePath on its own. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const site = {
  // Production domain — used for the sitemap, robots.txt and canonical URLs.
  // Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://www.yourdomain.com).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  name: "PNG Software",
  legalName: "PNG Software Technologies Private Limited",
  tagline: "Innovate. Develop. Succeed.",
  description:
    "PNG Software builds websites, AI solutions and digital-marketing programmes that help businesses grow — delivered on time and supported for the long term.",
  founded: "September 2022",
  phones: [
    { display: "+91-8950848075", href: "tel:+918950848075" },
    { display: "+91-9650684442", href: "tel:+919650684442" },
  ],
  whatsapp: {
    display: "+91-9650684442",
    href: `https://wa.me/919650684442?text=${encodeURIComponent("Hi PNG I want to connect with you.")}`,
  },
  instagram: { handle: "@png_software", href: "https://www.instagram.com/png_software/" },
  email: "pngsoftware22@gmail.com",
  address: [
    "Plot 77-79, Jaggi Garden, Mouja Dhulkote",
    "Near Universal Property Dealer",
    "Ambala City, Haryana 134003, India",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export type ServiceIcon = "web" | "ai" | "seo" | "marketing" | "coe" | "app" | "erp";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "web",
    title: "Website Development",
    summary: "Fast, responsive websites and web apps that captivate visitors and convert them into customers.",
    points: [
      "Modern stacks — React, Next.js, Node.js, Python",
      "Responsive design across every device",
      "Performance and security built in",
      "SEO-ready architecture from day one",
    ],
  },
  {
    slug: "generative-ai",
    icon: "ai",
    title: "AI: RAG & Generative AI",
    summary: "Retrieval-augmented assistants and GenAI workflows grounded in your own business knowledge.",
    points: [
      "RAG chatbots over your documents and data",
      "24/7 intelligent support assistants",
      "Automated content generation",
      "Custom model integration and evaluation",
    ],
  },
  {
    slug: "seo",
    icon: "seo",
    title: "SEO",
    summary: "Grow organic visibility and bring qualified traffic that actually turns into business.",
    points: [
      "Strategic keyword research",
      "On-page and off-page optimisation",
      "Local and global SEO strategies",
      "Measurable results with analytics",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "marketing",
    title: "Digital Marketing",
    summary: "Multi-channel campaigns that amplify your brand reach and maximise return on ad spend.",
    points: [
      "Data-driven social media campaigns",
      "Google Ads management",
      "Conversion-focused landing pages",
      "Multi-channel marketing strategy",
    ],
  },
  {
    slug: "centre-of-excellence",
    icon: "coe",
    title: "Centre of Excellence (CoE)",
    summary: "A dedicated CoE that sets standards, shares best practice and accelerates your technology adoption.",
    points: [
      "Engineering standards and governance",
      "AI adoption playbooks",
      "Reusable components and accelerators",
      "Team upskilling and mentoring",
    ],
  },
  {
    slug: "app-development",
    icon: "app",
    title: "App Development",
    summary: "Intuitive cross-platform mobile apps for iOS and Android, designed to engage.",
    points: [
      "Cross-platform iOS and Android",
      "Smooth UX/UI design",
      "AI-integration ready",
      "Scalable architecture",
    ],
  },
  {
    slug: "erp-software",
    icon: "erp",
    title: "ERP Software",
    summary: "Industry-tailored ERP systems that streamline operations and surface real-time insight.",
    points: [
      "Custom, industry-tailored solutions",
      "Seamless third-party integrations",
      "Built for scale",
      "Real-time business insights",
    ],
  },
];

export const strengths = [
  {
    title: "On-time project delivery",
    text: "Clear milestones, weekly demos and honest status updates — so launch day lands when we said it would.",
  },
  {
    title: "Long-term support",
    text: "We stay after go-live: maintenance, monitoring, upgrades and new features as your business grows.",
  },
  {
    title: "Project guidance",
    text: "From idea to roadmap, we help you choose the right scope, stack and priorities before a line of code is written.",
  },
  {
    title: "Client-centric",
    text: "Your success is our priority. One accountable team, direct communication, no hand-offs into the void.",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Web applications delivered" },
  { value: 2022, suffix: "", label: "Founded in September" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 7, suffix: "", label: "Core service lines" },
];

export const processSteps = [
  { step: "01", title: "Discover", text: "We learn your goals, users and constraints, then shape a focused scope." },
  { step: "02", title: "Design", text: "Wireframes, visual design and architecture — reviewed with you before build." },
  { step: "03", title: "Build", text: "Agile sprints with weekly demos, so you see progress, not promises." },
  { step: "04", title: "Launch & grow", text: "Go live, measure, optimise — and keep supporting you long after launch." },
];
