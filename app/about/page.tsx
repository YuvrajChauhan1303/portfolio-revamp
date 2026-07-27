import Link from "next/link";
import {
  ArrowUpRight,
  Coffee,
  Dumbbell,
  Music,
  Code2,
  GraduationCap,
  ShieldCheck,
  BrainCircuit,
  Network,
  FlaskConical,
  Users,
} from "lucide-react";

const interests = [
  {
    number: "01",
    title: "Security",
    icon: ShieldCheck,
    text: "It started, somewhat predictably, with spy movies and Hollywood hacking scenes. Cryptography turned that fascination into something serious. Today, I'm interested in the assumptions that keep systems secure — and what happens when advances in algorithms, AI, and computing hardware begin challenging those assumptions.",
  },
  {
    number: "02",
    title: "Systems",
    icon: Network,
    text: "Writing code is becoming easier. Designing the right system isn't. I enjoy thinking beyond individual functions and into architecture, trade-offs, scalability, reliability, and how all the pieces fit together. Give me a difficult problem and a whiteboard and I'll probably be there for a while.",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    text: "AI feels like one of those technological shifts that changes what comes after it. I enjoy the mathematics behind machine learning and deep learning architectures, but I'm particularly curious about where AI intersects with security — both as something we need to secure and something that may challenge how we think about security itself.",
  },
];

const outsideTheTerminal = [
  {
    icon: "🏸",
    title: "Badminton",
    description: "My preferred way of pretending cardio is fun.",
  },
  {
    icon: "♟️",
    title: "Chess",
    description: "For when my problems don't already require enough thinking.",
  },
  {
    icon: "☕",
    title: "Coffee",
    description: "Operational dependency, particularly after sunset.",
  },
  {
    icon: "🎧",
    title: "Desi Hip-Hop",
    description: "Usually somewhere in the background.",
  },
  {
    icon: "🏋️",
    title: "Fitness",
    description: "Trying to keep the hardware healthy too.",
  },
  {
    icon: "🍳",
    title: "Cooking",
    description: "Love cooking. Washing the dishes is a separate matter.",
  },
];

const opinions = [
  {
    approved: "Coffee",
    rejected: "Black coffee",
  },
  {
    approved: "Lays",
    rejected: "Pringles",
  },
  {
    approved: "Cooking",
    rejected: "Washing dishes",
  },
];

const workingStyle = [
  "prototype quickly",
  "draw everything",
  "question assumptions",
  "iterate aggressively",
  '"one last attempt"',
  "somehow 8 hours have passed",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-ink">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-brass">
          <span>~/about</span>
        </div>

        <h1 className="mt-6 max-w-5xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[4rem]">
          I like understanding how things work.
          <br className="hidden sm:block" />
          <span className="text-muted">
            {" "}
            Then I like asking how they break.
          </span>
        </h1>

        <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-white">
          I&apos;m an M.Tech Computer Science student at{" "}
          <span className="text-brass font-display">IIT Bombay</span>,
          interested in security, systems, and artificial intelligence. I like
          difficult problems, whiteboards full of half-baked ideas, and spending
          slightly unreasonable amounts of time figuring out why something
          works.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-ink/50">
          <span>Mumbai, India</span>
          <span className="hidden sm:inline">·</span>
          <span>M.Tech CSE @ IIT Bombay</span>
          <span className="hidden sm:inline">·</span>
          <span>Security · Systems · AI</span>
        </div>
      </section>

      {/* =========================================================
          ORIGIN
      ========================================================== */}
      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              01 / Origin
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              It started with
              <br />
              an instruction.
            </h2>
          </div>

          <div className="max-w-[65ch] space-y-6 text-[15px] leading-[1.8] text-muted">
            <p>
              I didn&apos;t grow up knowing everything about computers. In fact,
              I knew surprisingly little before starting my degree. But once I
              realised that I could give a computer a precise set of
              instructions and have it do exactly what I wanted, something
              clicked.
            </p>

            <p className="text-xl leading-relaxed text-brass font-display ">
              Being able to turn an idea into instructions, and instructions
              into solutions, felt a little like having superpowers.
            </p>

            <p>
              That curiosity eventually turned into an obsession with what
              happens underneath those instructions: how systems are designed,
              where they fail, and how we can make them more intelligent and
              secure.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERESTS
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
            02 / What keeps me curious
          </p>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Security. Systems. Intelligence.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {interests.map((interest) => {
            const Icon = interest.icon;

            return (
              <div
                key={interest.title}
                className="grid gap-5 py-9 sm:grid-cols-[60px_200px_1fr] sm:gap-8 sm:py-10"
              >
                <div className="flex items-start justify-between sm:block">
                  <span className="font-mono text-xs text-brass">
                    {interest.number}
                  </span>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-ink/30 sm:mt-5"
                  />
                </div>

                <h3 className="font-display text-2xl text-ink">
                  {interest.title}
                </h3>

                <p className="max-w-[65ch] text-sm leading-[1.8] text-muted sm:text-[15px]">
                  {interest.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          WORKING STYLE
      ========================================================== */}
      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              03 / How I work
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Give me a whiteboard.
            </h2>

            <div className="mt-7 max-w-[58ch] space-y-5 text-[15px] leading-[1.8] text-muted">
              <p>
                I&apos;m happiest when there&apos;s a problem I don&apos;t
                immediately know how to solve. I prototype quickly, draw ideas
                out, throw away the bad ones, and iterate until something starts
                making sense.
              </p>

              <p>
                I&apos;m also perfectly capable of spending eight hours on one
                problem because I&apos;m convinced the next attempt will work.
              </p>

              <p className="text-white">Sometimes it does.</p>
            </div>
          </div>

          <div className="card self-start px-5 py-5 font-mono text-[13px] leading-7 sm:px-6 sm:py-6">
            <p className="text-brass">$ yuvraj --working-style</p>

            <div className="mt-4">
              {workingStyle.map((item, index) => (
                <p
                  key={item}
                  className={
                    index === workingStyle.length - 1
                      ? "text-ink/40"
                      : "text-ink/65"
                  }
                >
                  → {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <FlaskConical
                size={17}
                strokeWidth={1.5}
                className="text-brass"
              />

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                04 / Research
              </p>
            </div>

            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              I like research.
              <br />
              <span className="text-muted">
                I don&apos;t need it to be my entire life.
              </span>
            </h2>
          </div>

          <div className="max-w-[65ch] space-y-6 text-[15px] leading-[1.8] text-muted">
            <p>
              What I enjoy is the process: finding a problem that doesn&apos;t
              already have an obvious answer, diving into the literature,
              understanding a domain deeply enough to question existing
              approaches, and eventually contributing something new.
            </p>

            <p>
              Research has taken me through cryptography, secret image sharing,
              continuous authentication, machine learning, and deep learning.
              More than any individual result, I value what that process has
              taught me about approaching unfamiliar problems.
            </p>

            <p>
              Long term, I see myself closer to engineering and R&amp;D —
              building real systems while staying close enough to research to
              keep asking difficult questions.
            </p>

            <Link
              href="/research"
              className="inline-flex items-center gap-2 pt-2 font-mono text-xs text-ink transition-colors hover:text-brass"
            >
              Research & publications
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEACHING
      ========================================================== */}
      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <Users size={17} strokeWidth={1.5} className="text-brass" />

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                05 / Teaching
              </p>
            </div>

            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              Teaching is less about
              <br />
              knowing the answer.
            </h2>
          </div>

          <div className="max-w-[65ch] space-y-6 text-[15px] leading-[1.8] text-muted">
            <p>
              I&apos;ve had the opportunity to teach and mentor hundreds of
              students. The part I remember isn&apos;t grading assignments or
              running labs. It&apos;s the occasional student who comes back and
              tells me that a conversation, explanation, or piece of advice
              genuinely changed how they approached something.
            </p>

            <p>
              I like interacting with people who are still discovering what
              they&apos;re capable of. There&apos;s something incredibly
              rewarding about helping someone look at a problem from a direction
              they hadn&apos;t considered before.
            </p>

            <p className="text-ink">
              Be relaxed with people. Be rigorous with the work. Treat everyone
              fairly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHERE I'M HEADED
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap
                size={18}
                strokeWidth={1.5}
                className="text-brass"
              />

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                06 / What&apos;s next
              </p>
            </div>

            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              Getting exceptionally
              <br />
              good at hard things.
            </h2>
          </div>

          <div className="max-w-[65ch] space-y-6 text-[15px] leading-[1.8] text-muted">
            <p>
              Right now, I&apos;m at IIT Bombay trying to become exceptionally
              good at two things:{" "}
              <span className="text-ink">security and systems.</span>
            </p>

            <p>
              Along the way, I want to publish work I&apos;m proud of, learn
              from people significantly better than me, and eventually build
              systems at a scale where engineering decisions genuinely matter.
            </p>

            <p>
              I see myself growing into a senior engineering or R&amp;D role —
              somewhere difficult problems, security, systems, and emerging
              technology overlap.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTSIDE THE TERMINAL
      ========================================================== */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
            07 / Outside the terminal
          </p>

          <div className="mt-4 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl">
              Occasionally, I close the laptop.
            </h2>

            <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-muted">
              There are, allegedly, things to do that don&apos;t involve a
              compiler, terminal, research paper, or whiteboard.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {outsideTheTerminal.map((item) => (
              <div
                key={item.title}
                className="border-b border-r border-ink/10 p-6 sm:p-7"
              >
                <span className="text-2xl">{item.icon}</span>

                <h3 className="mt-5 font-display text-xl">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-[70ch] text-[15px] leading-[1.8] text-muted">
            My entertainment preferences are fairly predictable: spies, science
            fiction, superheroes, anime, and whatever Christopher Nolan decides
            to make next. <span className="text-ink">One Piece</span> and{" "}
            <span className="text-ink">Dragon Ball</span> have permanent seats
            at the table.
          </p>
        </div>
      </section>

      {/* =========================================================
          OPINIONS
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
          08 / Important distinctions
        </p>

        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          Some opinions are non-negotiable.
        </h2>

        <div className="mt-10 max-w-3xl overflow-hidden border border-ink/10">
          <div className="grid grid-cols-2 border-b border-ink/10 bg-ink/[0.02]">
            <div className="px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-brass sm:px-6">
              Approved
            </div>

            <div className="border-l border-ink/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40 sm:px-6">
              Not approved
            </div>
          </div>

          {opinions.map((opinion) => (
            <div
              key={opinion.approved}
              className="grid grid-cols-2 border-b border-ink/10 last:border-b-0"
            >
              <div className="px-5 py-4 text-sm text-ink sm:px-6">
                {opinion.approved}
              </div>

              <div className="border-l border-ink/10 px-5 py-4 text-sm text-muted sm:px-6">
                {opinion.rejected}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================== */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-content px-5 py-24 sm:px-6 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
            09 / A principle
          </p>

          <blockquote className="mt-7 max-w-5xl font-display text-3xl leading-[1.25] sm:text-4xl lg:text-5xl">
            “Technology was made to help man.
            <br className="hidden sm:block" />
            <span className="text-muted">
              {" "}
              Man was never made to help technology.”
            </span>
          </blockquote>

          <p className="mt-8 max-w-[62ch] text-[15px] leading-[1.8] text-muted">
            I think good technology should ultimately disappear into the problem
            it solves. Complexity may be necessary underneath; making people
            carry that complexity shouldn&apos;t be.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHOAMI / FOOTER
      ========================================================== */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-6 lg:py-28">
        <div className="card grid gap-10 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="font-mono text-[13px] leading-7">
            <p className="text-brass">$ whoami</p>

            <div className="mt-4 text-ink/60">
              <p>→ M.Tech CSE @ IIT Bombay</p>
              <p>→ security & systems enthusiast</p>
              <p>→ occasional researcher</p>
              <p>→ former TA</p>
              <p>→ badminton player</p>
              <p>→ desi hip-hop listener</p>
              <p>→ coffee-powered after dark</p>
            </div>

            <p className="mt-4 text-ink/35">
              status: probably debugging something
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-ink transition-colors hover:text-brass"
            >
              View projects
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-brass"
            >
              Say hello
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 font-mono text-[11px] text-ink/30">
          <Coffee size={13} />
          <span>Best viewed with coffee.</span>
        </div>
      </section>
    </main>
  );
}
