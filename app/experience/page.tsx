import PageHeader from "@/components/PageHeader";

const roles = [
  {
    company: "IIIT Vadodara",
    role: "Research Intern",
    period: "Jan 2026 — May 2026",
    summary:
      "Researched continuous authentication using keystroke dynamics and transformer-based models. Developed FusionFormer, a lightweight approach achieving competitive authentication performance.",
  },
  {
    company: "IIIT Vadodara",
    role: "Teaching Assistant — Design & Analysis of Algorithms",
    period: "Sep 2025 — Nov 2025",
    summary:
      "Mentored and evaluated 100+ students while designing algorithmic problems across multiple paradigms and deploying them through HackerRank.",
  },
  {
    company: "NIT Karnataka",
    role: "Research Intern",
    period: "May 2025 — Aug 2025",
    summary:
      "Researched Secret Image Sharing schemes and developed a storage-optimized approach that improved upon existing techniques through reduced share sizes.",
  },
  {
    company: "IIIT Vadodara",
    role: "Teaching Assistant — Basics of Electrical Engineering",
    period: "Jan 2025 — May 2025",
    summary:
      "Taught 100+ students and supervised laboratory sessions, helping students bridge fundamental electrical concepts with computational experimentation.",
  },
  {
    company: "Dhankhar Technologies Pvt. Limited",
    role: "Web Developer Intern",
    period: "Sep 2024 — Nov 2024",
    summary:
      "Engineered and deployed the company's web presence using Next.js and AWS Amplify, focusing on responsive design, performance and production deployment.",
  },
  {
    company: "IIIT Vadodara",
    role: "Teaching Assistant — Physics",
    period: "Sep 2024 — Dec 2024",
    summary:
      "Guided 100+ students through weekly computational physics laboratory sessions using MATLAB and numerical methods.",
  },
  {
    company: "Technical Committee · IIITV-ICD",
    role: "Technical Committee Member",
    period: "Aug 2023 — Apr 2024",
    summary:
      "Built official festival platforms for Horizon and Stavya, conducted a frontend development workshop, and contributed to the planning and technical operations of institute events.",
  },
] as const;

export default function ExperiencePage() {
  return (
    <div className="px-6 sm:px-10 lg:px-14 space-y-14">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="Somewhere between cryptography, transformers, embedded systems, and teaching algorithms, I developed a habit of wanting to know what happens beneath the abstraction."
      />

      <ol className="max-w-content space-y-10">
        {roles.map((r) => (
          <li key={r.company} className="relative pl-6 border-l border-line">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brass" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-xl text-ink">{r.company}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wide text-faint">
                {r.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-brass/90 font-medium">{r.role}</p>
            <p className="mt-2 text-muted leading-relaxed max-w-[58ch]">
              {r.summary}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
