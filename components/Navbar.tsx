"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  Briefcase,
  GraduationCap,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const items: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Publications", href: "/publications", icon: BookOpen },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="
        fixed z-50
        bottom-5 left-1/2 -translate-x-1/2
        lg:top-6 lg:bottom-auto lg:left-1/2 lg:translate-x-[-50%]
      "
    >
      <ul
        className="
          flex items-center gap-1
          bg-surface/80 backdrop-blur-md border border-line
          rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        "
      >
        {items.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname?.startsWith(href);

          return (
            <li key={href} className="relative group">
              <Link
                href={href}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className={`
                  relative flex items-center justify-center
                  w-11 h-11 rounded-full transition-colors duration-200
                  ${active ? "text-base bg-brass" : "text-ink/65 hover:text-ink hover:bg-surface2"}
                `}
              >
                <Icon size={18} strokeWidth={1.75} />
              </Link>

              {/* tooltip */}
              <span
                role="tooltip"
                className="
                  pointer-events-none absolute left-1/2 -translate-x-1/2
                  bottom-full mb-2 lg:bottom-auto lg:top-full lg:mt-2
                  whitespace-nowrap rounded-md border border-line bg-surface2
                  px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/85
                  opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-150
                "
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
