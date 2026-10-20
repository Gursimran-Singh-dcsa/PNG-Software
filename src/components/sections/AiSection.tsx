import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { RagDiagram } from "../visuals/RagDiagram";

const points = [
  { title: "RAG assistants", text: "Chatbots that answer from your documents, with citations." },
  { title: "Generative AI", text: "Automated content, summaries and workflows that save hours." },
  { title: "AI Centre of Excellence", text: "Standards, accelerators and training to scale AI safely." },
];

export function AiSection() {
  return (
    <section className="section-y relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="grid-bg fade-mask absolute inset-0" />
      <div aria-hidden className="absolute top-1/3 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-brand-700/30 blur-[160px]" />
      <div className="container-x relative">
        <SectionHeading
          dark
          align="center"
          eyebrow="AI that knows your business"
          title="Retrieval-augmented generation, built for real work."
          lead="We connect large language models to your own data, so answers are accurate, current and traceable."
        />

        <Reveal variant="scale" delay={200} className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur sm:p-8">
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <RagDiagram />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-h3">{p.title}</h3>
              <p className="text-body mt-3 text-white/60">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="/blog/what-is-rag-and-why-your-business-needs-it/" variant="light">
            Read: What is RAG?
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
