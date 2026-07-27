import PageHeader from "@/components/PageHeader";

const education = [
  {
    school: "Indian Institute of Technology Bombay",
    degree: "M.Tech. in Computer Science & Engineering",
    period: "2026 — 2028",
    detail:
      "Graduate studies in Computer Science with interests spanning systems, security, artificial intelligence, and applied research.",
  },
  {
    school: "Indian Institute of Information Technology Vadodara",
    degree: "B.Tech. in Computer Science & Engineering",
    period: "2022 — 2026",
    detail:
      "Built a broad foundation across computer science while pursuing research in security, cryptography, AI/ML, IoT, and emerging technologies.",
  },
] as const;

const achievements = [
  "GATE CSE 2026 — AIR 801",
  "GATE CSE 2025 — AIR 6277",
  "1st Place — Battlebots × Sentience, Horizon 2025",
  "1st Place — WebSurge, Horizon 2025",
] as const;

const certifications = [
  "NPTEL Silver + Elite Certificate - Introductions to Large Language Models (LLMs) by IIT Bombay & IIT Delhi",
  "NVIDIA DLI Certificate - Foundations of Deep Learning",
] as const;

export default function EducationPage() {
  return (
    <div className="px-6 sm:px-10 lg:px-14 space-y-14">
      <PageHeader
        eyebrow="Background"
        title="Education"
        description="Formal training, and the parts of the craft I picked up chasing curiosity afterward."
      />

      <div className="max-w-content space-y-10">
        {education.map((e) => (
          <div
            key={e.school}
            className="border-t border-line pt-6 first:border-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-xl text-ink">{e.school}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wide text-faint">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-brass/90 font-medium">{e.degree}</p>
            <p className="mt-2 text-muted leading-relaxed max-w-[58ch]">
              {e.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-content border-t border-line pt-8">
        <p className="eyebrow">Certifications</p>
        <ul className="mt-4 space-y-2">
          {certifications.map((c) => (
            <li key={c} className="flex items-center gap-3 text-ink/80">
              <span className="w-1 h-1 rounded-full bg-brass" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-content border-t border-line pt-8">
        <p className="eyebrow">Achievements</p>
        <ul className="mt-4 space-y-2">
          {achievements.map((c) => (
            <li key={c} className="flex items-center gap-3 text-ink/80">
              <span className="w-1 h-1 rounded-full bg-brass" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
