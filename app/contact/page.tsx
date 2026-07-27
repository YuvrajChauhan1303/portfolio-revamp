"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const EMAIL = "dcodr1303@gmail.com";

const socials = [
  {
    name: "GitHub",
    handle: "@YuvrajChauha1303",
    href: "https://github.com/YuvrajChauhan1303",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "Yuvraj Chauhan",
    href: "https://linkedin.com/in/dcodr1303",
    icon: Linkedin,
  },
];

const reasons = [
  "Security & systems",
  "Research & collaboration",
  "Engineering opportunities",
  "Teaching & mentoring",
  "Something interesting",
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-background text-ink">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="mx-auto max-w-content px-5 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
          ~/contact
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[4rem]">
          Have something
          <br />
          interesting in mind?
          <br />
          <span className="text-white/45">I&apos;m listening.</span>
        </h1>

        <p className="mt-8 max-w-[58ch] text-[15px] leading-[1.8] text-white/60 sm:text-base">
          Whether it&apos;s an engineering opportunity, a research idea,
          something involving security or systems, or simply a conversation
          worth having — my inbox is open.
        </p>
      </section>

      {/* =====================================================
          PRIMARY CONTACT
      ====================================================== */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              01 / Say hello
            </p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl">
              The easiest way
              <br />
              to reach me.
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="max-w-[58ch] text-[15px] leading-[1.8] text-white/60">
              Email is usually the best way to get in touch. Tell me what
              you&apos;re working on, what you&apos;re thinking about, or why
              you think we should talk.
            </p>

            {/* EMAIL */}
            <div className="mt-8 border-y border-white/10">
              <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex min-w-0 items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Mail size={16} strokeWidth={1.5} className="text-brass" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm text-white transition-colors group-hover:text-brass">
                      {EMAIL}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6 flex items-center gap-3 text-sm text-white/45">
              <MapPin size={15} strokeWidth={1.5} className="text-brass" />

              <span>IIT Bombay · Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT TO REACH OUT ABOUT
      ====================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              02 / Good reasons
            </p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl">
              We should
              <br />
              probably talk if...
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-t border-white/10">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[10px] text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[15px] text-white/70 transition-colors group-hover:text-white">
                    {reason}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/20 transition-colors group-hover:text-brass"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIALS
      ====================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-28">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              03 / Elsewhere
            </p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl">
              Find me around
              <br />
              the internet.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="border-t border-white/10">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-6"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={18} strokeWidth={1.5} className="text-brass" />

                    <div>
                      <p className="text-[15px] text-white">{social.name}</p>

                      <p className="mt-1 font-mono text-[11px] text-white/35">
                        {social.handle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMINAL CTA
      ====================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <div className="card grid gap-10 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="font-mono text-[13px] leading-7">
            <p className="text-brass">$ contact --status</p>

            <div className="mt-4 text-white/55">
              <p>→ inbox: open</p>
              <p>→ location: IIT Bombay</p>
              <p>→ interests: security / systems / AI</p>
              <p>→ coffee: probably</p>
            </div>

            <p className="mt-4 text-white/30">
              response_time: depends on how interesting the problem is
            </p>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 self-start border border-brass/40 px-5 py-3 font-mono text-xs text-brass transition-colors hover:bg-brass hover:text-black lg:self-auto"
          >
            <Send size={14} strokeWidth={1.5} />
            Send an email
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
