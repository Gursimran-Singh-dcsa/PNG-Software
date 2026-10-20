import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, lead, align = "left", dark = false }: Props) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`eyebrow ${dark ? "text-accent-300" : ""}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={`text-h2 mt-5 ${dark ? "text-white" : "text-ink-900"}`}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className={`text-lead mt-5 ${dark ? "text-white/65" : ""}`}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
