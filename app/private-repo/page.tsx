import Link from "next/link";
import { ArrowLeft, Github, LockKeyhole, FileText } from "lucide-react";

export default function CodeUnavailablePage() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <section className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-24">
        <div className="w-full">
          {/* Status */}
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-brass">
            <LockKeyhole size={15} />
            <span>Repository · Private</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The code exists.
            <br />
            <span className="text-muted">It&apos;s just not public yet.</span>
          </h1>

          {/* Explanation */}
          <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              Some of the projects featured here are part of ongoing research
              currently under review, submission, or publication at academic
              journals and conferences.
            </p>

            <p>
              To preserve research integrity and comply with publication and
              review requirements, their source code, experimental
              implementations, datasets, and supporting material may remain
              private until the corresponding work has completed the publication
              process.
            </p>

            <p className="text-ink/80">
              Once the work can be released publicly, the relevant repositories
              and supporting material will be made available here.
            </p>
          </div>

          {/* Terminal */}
          <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5 font-mono text-[13px] leading-7">
            <p className="text-brass">$ git status --research</p>

            <p className="mt-3 text-ink/70">
              → repository: <span className="text-brass">private</span>
            </p>
            <p className="text-ink/50">→ research: publication in progress</p>
            <p className="text-ink/50">→ source release: pending publication</p>
            <p className="text-ink/50">→ documentation: coming soon</p>
          </div>

          {/* Important clarification */}
          <div className="mt-8 flex gap-4 border-l border-brass/50 pl-5">
            <FileText size={18} className="mt-1 shrink-0 text-brass" />
            <p className="text-sm leading-relaxed text-muted">
              Interested in the research itself? Publication details,
              methodology, results, and citations can still be found in the
              <Link
                href="/publications"
                className="ml-1 text-ink underline decoration-brass/50 underline-offset-4 transition-colors hover:text-brass"
              >
                research & publications
              </Link>{" "}
              section.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-brass"
            >
              <ArrowLeft size={15} />
              Back to projects
            </Link>

            <span className="text-white/15">·</span>

            <Link
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brass"
            >
              <Github size={15} />
              Public repositories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
