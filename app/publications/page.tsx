import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const publications = [
  {
    title:
      "FusionFormer: A Lightweight Transformer-Based Continuous Authentication Using Keystroke Dynamics",
    venue: "Computer Networks",
    year: "2026",
    role: "First Author",
    status: "Submitted",
    href: "#",
  },

  {
    title:
      "SO-SIS: Storage-Optimized Secret Image Sharing Scheme with Reduced Share Size",
    venue: "Operations Research Forum",
    year: "2025",
    role: "First Author",
    status: "Submitted",
    href: "#",
  },

  {
    title:
      "On (k, n) Threshold Secret Image Sharing Based on Pixel Coordinates for Simple Images",
    venue: "ICCCNT · EPiC Series in Computing",
    year: "2025",
    role: "Co-author",
    status: "Presented · To Appear",
    href: "#",
  },
] as const;

export default function PublicationsPage() {
  return (
    <div className="px-6 sm:px-10 lg:px-14 space-y-14">
      <PageHeader
        eyebrow="Writing & research"
        title="Publications"
        description="Papers, talks and long-form posts — mostly written to think something through in public."
      />

      <ul className="max-w-content divide-y divide-line border-t border-line">
        {publications.map((p) => (
          <li key={p.title}>
            <a
              href={p.href}
              className="group flex items-start justify-between gap-6 py-6"
            >
              <div>
                <h2 className="font-display text-lg text-ink group-hover:text-brass transition-colors">
                  {p.title}
                </h2>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {p.role} · {p.venue}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-[11px] text-faint">
                  {p.year}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink/40 group-hover:text-brass transition-colors"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
