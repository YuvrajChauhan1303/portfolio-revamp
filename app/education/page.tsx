import PageHeader from "@/components/PageHeader";
import { Folder, FileText } from "lucide-react";

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

const certifications = [
  "NPTEL Silver + Elite — Introduction to Large Language Models",
  "NVIDIA DLI — Foundations of Deep Learning",
] as const;

const achievements = [
  "GATE CSE 2026 — AIR 801",
  "GATE CSE 2025 — AIR 6277",
  "1st Place — Battlebots × Sentience, Horizon 2025",
  "1st Place — WebSurge, Horizon 2025",
] as const;

const coursework = [
  [
    "security",
    [
      "Introduction to Cryptography (UG)",
      "Introduction to Cryptography (PG)",
      "Topics in Security & Privacy",
      "Cyber Security",
    ],
  ],
  [
    "systems",
    [
      "Operating Systems",
      "Computer Networks",
      "Computer Organization & Architecture",
      "Database Systems",
      "Distributed & Parallel Computing",
      "Cloud Systems",
      "Software Engineering",
      "Design & Engineering of Computer Systems",
    ],
  ],
  [
    "artificial-intelligence",
    [
      "Artificial Intelligence",
      "Machine Learning",
      "Foundations of Machine Learning",
      "Introduction to Large Language Models",
    ],
  ],
  [
    "mathematics",
    [
      "Linear Algebra",
      "Probability & Statistics",
      "Mathematics for Visual Computing",
    ],
  ],
  [
    "core-cse",
    [
      "Introduction to Computer Programming & Problem Solving",
      "Data Structures",
      "Design & Analysis of Algorithms",
      "Formal Language & Automata Theory",
      "Digital Logic Design",
    ],
  ],
] as const;

function CourseworkTree() {
  return (
    <div className="font-mono text-[13px]">
      <div className="flex items-center gap-2 text-ink">
        <Folder className="h-4 w-4 text-brass" />
        <span>coursework</span>
      </div>

      <div className="ml-2 mt-3 border-l border-line pl-5 space-y-5">
        {coursework.map(([folder, files]) => (
          <div key={folder}>
            <div className="flex items-center gap-2">
              <Folder className="h-4 w-4 text-brass shrink-0" />
              <span className="text-ink">{folder}</span>
            </div>

            <div className="ml-2 mt-2 border-l border-line pl-5 space-y-2">
              {files.map((file) => (
                <div key={file} className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-muted shrink-0" />
                  <span className="text-ink/80">{file}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EducationPage() {
  return (
    <div className="space-y-14 px-6 sm:px-10 lg:px-14">
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
            <div className="flex items-baseline justify-between flex-wrap gap-4">
              <h2 className="font-display text-xl text-ink">{e.school}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wide text-faint">
                {e.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-brass/90">{e.degree}</p>
            <p className="mt-2 max-w-[58ch] leading-relaxed text-muted">
              {e.detail}
            </p>
          </div>
        ))}
      </div>

      <section className="max-w-content border-t border-line pt-8">
        <p className="eyebrow">Areas of Study</p>
        <div className="mt-6 rounded-xl border border-line bg-panel/40 p-6">
          <CourseworkTree />
        </div>
      </section>

      <section className="max-w-content border-t border-line pt-8">
        <p className="eyebrow">Certifications</p>
        <ul className="mt-4 space-y-2">
          {certifications.map((c) => (
            <li key={c} className="flex gap-3 items-center text-ink/80">
              <span className="h-1 w-1 rounded-full bg-brass" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-content border-t border-line pt-8">
        <p className="eyebrow">Achievements</p>
        <ul className="mt-4 space-y-2">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 items-center text-ink/80">
              <span className="h-1 w-1 rounded-full bg-brass" />
              {a}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
