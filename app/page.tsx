import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Students Mentored" },
  { value: "10+", label: "Critical Projects" },
  { value: "3", label: "Research Publications" },
];

const focusAreas = [
  "Cybersecurity",
  "Systems Engineering",
  "Artificial Intelligence",
  "Deep Learning & Transformers",
];

export default function HomePage() {
  return (
    <div className="px-6 sm:px-10 lg:px-14 space-y-20 sm:space-y-24">
      <section className="max-w-content">
        {/* Hero title */}
        <div className="relative inline-block">
          <h1 className="hero-title">SOFTWARE ENGINEER</h1>

          <span className="sparkle sparkle-1">✦</span>
          <span className="sparkle sparkle-2">✦</span>
          <span className="sparkle sparkle-3">✧</span>
        </div>

        {/* Two-line statement */}
        <div className="mt-8 text-xl sm:text-2xl md:text-3xl leading-snug tracking-tight text-ink">
          <p>Security, systems, and intelligence.</p>
          <p className="text-ink/55">
            Built with curiosity. Broken down with purpose.
          </p>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-ink/65">
          I'm an M.Tech Computer Science student at IIT Bombay, interested in
          understanding how complex systems are built, how they behave, and
          where they fail. My work spans cybersecurity, systems, and artificial
          intelligence, with research shaping how I approach problems —
          questioning assumptions, exploring beneath abstractions, and turning
          ideas into working systems.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-base hover:bg-brass-soft transition-colors"
          >
            View projects
            <ArrowUpRight size={15} strokeWidth={2} />
          </Link>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink/80 hover:text-ink hover:border-ink/30 transition-colors"
          >
            See experience
          </Link>
        </div>
      </section>

      {/* status line — terminal-style signature */}
      <section className="max-w-content">
        <div className="card px-5 py-4 sm:px-6 sm:py-5 font-mono text-[13px] leading-relaxed">
          <p className="text-brass">$ status --now</p>

          <p className="mt-2 text-ink/80">
            → exploring systems, security, and AI as an M.Tech CSE student at
            IIT Bombay.
          </p>

          <p className="text-ink/50">
            → pursuing research, building things, and mentoring 100+ students
            along the way.
          </p>
        </div>
      </section>

      <section className="max-w-content grid grid-cols-3 gap-6 sm:gap-10 border-t border-line pt-10">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl sm:text-4xl text-ink">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-content border-t border-line pt-10">
        <p className="eyebrow">Currently sharpening</p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {focusAreas.map((f) => (
            <li
              key={f}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink/80"
            >
              {f}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
