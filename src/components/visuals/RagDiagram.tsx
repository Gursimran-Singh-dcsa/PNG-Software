/** Inline SVG explaining a RAG pipeline. Animated dashed connectors show data flowing left→right. */
export function RagDiagram() {
  const steps = [
    { x: 20, label: "Your data", sub: "PDFs · docs · web" },
    { x: 220, label: "Embeddings", sub: "meaning → vectors" },
    { x: 420, label: "Vector store", sub: "semantic search" },
    { x: 620, label: "LLM", sub: "grounded answer" },
  ];
  return (
    <svg viewBox="0 0 800 220" className="h-auto w-full text-white" role="img" aria-labelledby="rag-t rag-d">
      <title id="rag-t">How retrieval-augmented generation works</title>
      <desc id="rag-d">
        Your documents are converted to embeddings, stored in a vector database, and the most relevant passages are given to a
        large language model so it answers from your own data.
      </desc>
      <defs>
        <linearGradient id="rag-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {steps.slice(0, -1).map((s) => (
        <path
          key={s.x}
          d={`M${s.x + 160} 90 H${s.x + 200}`}
          stroke="var(--color-accent-400)"
          strokeWidth="2"
          className="flow-line"
          fill="none"
        />
      ))}
      {/* feedback arc: question in, answer out */}
      <path d="M700 150 C700 205, 100 205, 100 150" fill="none" stroke="var(--color-brand-300)" strokeOpacity="0.6" strokeWidth="1.5" className="flow-line" />
      <text x="400" y="212" textAnchor="middle" fontSize="13" fill="currentColor" fillOpacity="0.55">
        cited answer back to your user
      </text>
      {steps.map((s, i) => (
        <g key={s.label}>
          <rect x={s.x} y="40" width="160" height="100" rx="14" fill="url(#rag-card)" stroke="currentColor" strokeOpacity="0.18" />
          <circle cx={s.x + 26} cy="68" r="11" fill="var(--color-brand-500)" />
          <text x={s.x + 26} y="72.5" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">
            {i + 1}
          </text>
          <text x={s.x + 20} y="104" fontSize="17" fontWeight="600" fill="currentColor">
            {s.label}
          </text>
          <text x={s.x + 20} y="125" fontSize="12.5" fill="currentColor" fillOpacity="0.6">
            {s.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
