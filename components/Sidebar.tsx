import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "github",
    href: "https://github.com/yourhandle",
    icon: Github,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/yourhandle",
    icon: Linkedin,
  },
  {
    label: "email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        relative w-full flex justify-center
        lg:fixed lg:inset-y-0 lg:left-0 lg:h-screen
        lg:w-[400px] xl:w-[440px]
        lg:items-center lg:p-8
        py-8 px-6
      "
    >
      {/* Floating code decoration */}
      <span
        aria-hidden="true"
        className="
          absolute hidden lg:block
          top-[12%] right-2
          font-mono text-4xl
          text-brass/20
          rotate-6
          select-none
        "
      >
        {"</>"}
      </span>

      {/* Floating plus decoration */}
      <span
        aria-hidden="true"
        className="
          absolute hidden lg:block
          bottom-[15%] left-7
          font-mono text-xl
          text-brass/30
          select-none
        "
      >
        +
      </span>

      {/* Profile card */}
      <div
        className="
          group/card relative
          w-full max-w-[300px]
          rounded-[28px]
          border border-line
          bg-base
          p-3
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
        "
      >
        {/* Corner sparkle */}
        <div
          aria-hidden="true"
          className="
            absolute -top-3 -right-3
            z-10
            flex h-7 w-7
            items-center justify-center
            rounded-full
            border border-line
            bg-base
            font-mono text-xs
            text-brass
            shadow-sm
          "
        >
          ✦
        </div>

        {/* Photo */}
        <div
          className="
            relative w-full
            aspect-[4/5]
            overflow-hidden
            rounded-[20px]
            bg-line
          "
        >
          <Image
            src="/profile.png"
            alt="Portrait of Yuvraj Chauhan"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 60vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover/card:scale-[1.025]
            "
          />

          {/* Soft image overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Brand badge */}
          <div className="absolute top-3 left-3">
            <span
              className="
                rounded-full
                border border-white/15
                bg-black/25
                px-2.5 py-1
                font-mono text-[9px]
                tracking-[0.16em]
                uppercase
                text-white/80
                backdrop-blur-md
              "
            >
              YC · 2026
            </span>
          </div>

          {/* Code decoration on image */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-3 right-3
              font-mono text-lg
              text-white/60
              select-none
            "
          >
            {"</>"}
          </div>
        </div>

        {/* Content */}
        <div className="px-2 pb-2 pt-5">
          {/* Role */}
          <div className="mb-2 flex items-center gap-2">
            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-brass
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-brass-dim
              "
            >
              Software Engineer
            </span>
          </div>

          {/* Name */}
          <h2
            className="
              font-display
              text-2xl
              leading-tight
              tracking-tight
              text-ink
            "
          >
            Yuvraj Chauhan
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-faint
            "
          >
            Building at the intersection of{" "}
            <span className="text-ink">security</span>,{" "}
            <span className="text-ink">systems</span>, and{" "}
            <span className="text-ink">intelligence</span>.
          </p>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-line" />

            <span
              aria-hidden="true"
              className="
                font-mono
                text-[9px]
                tracking-widest
                text-brass/50
              "
            >
              01 / YC
            </span>

            <div className="h-px w-5 bg-line" />
          </div>

          {/* Social links */}
          <ul className="flex flex-wrap items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label !== "email" ? "_blank" : undefined}
                  rel={label !== "email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="
                    group/social
                    inline-flex
                    h-8 w-8
                    items-center
                    justify-center
                    rounded-full
                    border border-line
                    text-faint
                    transition-all
                    duration-200
                    hover:border-brass/40
                    hover:bg-brass/10
                    hover:text-brass
                  "
                >
                  <Icon
                    size={14}
                    strokeWidth={1.75}
                    className="
                      transition-transform
                      duration-200
                      group-hover/social:scale-110
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
