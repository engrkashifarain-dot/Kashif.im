import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/kashif-portrait-color.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Muhammad Kashif — Enterprise Technology Leader" },
      {
        name: "description",
        content:
          "Enterprise technology leader with 15+ years across government and industry. Engineering roots, operational depth, and a deliberate move toward governance and architecture.",
      },
      { property: "og:title", content: "Muhammad Kashif — Enterprise Technology Leader" },
      {
        property: "og:description",
        content:
          "Engineer, MBA and technology leader with 15+ years across government and enterprise IT. Growing into governance, enterprise architecture and responsible AI.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const chapters = [
  {
    year: "2009",
    title: "Started as an engineer.",
    body: "Computer systems engineering at Mehran UET. My first years were spent close to the hardware — networks, servers, the fundamentals.",
  },
  {
    year: "2012",
    title: "Moved into enterprise IT.",
    body: "Larger environments, more moving parts. I learned how real organizations depend on the systems most people never see.",
  },
  {
    year: "2016",
    title: "Took on operational leadership.",
    body: "Running infrastructure, data centres and business continuity for government and industry. Fewer heroics, more discipline.",
  },
  {
    year: "2021",
    title: "Added the business lens.",
    body: "Completed an MBA at SZABIST. Started to see technology decisions in terms of strategy, cost and outcomes — not just uptime.",
  },
  {
    year: "Today",
    title: "Growing toward governance and architecture.",
    body: "Deepening my work in enterprise architecture, technology governance and responsible AI — the areas I believe define the next decade of enterprise IT.",
  },
];

const credibility = [
  ["15+ yrs", "Enterprise & government IT"],
  ["4 sectors", "Government · Energy · Defence · Enterprise"],
  ["MBA + BE", "Business and engineering foundation"],
  ["Team lead", "Operations, projects and vendors"],
];

const principles = [
  {
    n: "01",
    title: "Technology exists to serve the business.",
    body: "The best system is the one the organization barely notices — because it quietly does what it was built to do.",
  },
  {
    n: "02",
    title: "Simpler is almost always better.",
    body: "A modern estate should be smaller and clearer than the one it replaces. Complexity is a cost, not a feature.",
  },
  {
    n: "03",
    title: "Good governance speeds people up.",
    body: "Structure should remove ambiguity for the people making decisions, not add another layer of paperwork.",
  },
  {
    n: "04",
    title: "People run the technology, not the other way around.",
    body: "I plan for the team that will operate a system long after the project closes. That is where reliability actually lives.",
  },
];

const highlights = [
  { label: "Disaster Recovery Leadership", note: "Running a live DR site for a national utility." },
  { label: "Tier-II Data Centre", note: "Operations, capacity planning and audits." },
  { label: "Government Technology", note: "Projects across Interior and Defence ministries." },
  { label: "Enterprise Infrastructure", note: "Networks, servers, virtualization and identity." },
  { label: "Vendor & Contract Management", note: "OEMs, SIs and long-term support contracts." },
  { label: "Technology Planning", note: "Roadmaps, budgets and procurement." },
];

const ahead = [
  "Enterprise Architecture",
  "Technology Governance",
  "Responsible AI",
  "Technology Strategy",
  "Digital Transformation",
];

function Home() {
  return (
    <div>
      {/* 1. WHO I AM */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-28 md:pb-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Muhammad Kashif · Hyderabad, Pakistan</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[64px]">
              Enterprise technology,<br className="hidden sm:block" />
              built to be reliable.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              I&apos;m an engineer and MBA with more than fifteen years leading
              enterprise IT inside government and industry — infrastructure,
              data centres and business continuity. Today I&apos;m building on
              that foundation with a focus on governance and enterprise
              architecture.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent">
                Get in touch <span aria-hidden>→</span>
              </Link>
              <Link to="/credentials" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent">
                See my experience
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <figure className="mx-auto max-w-[300px] md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-border">
                <img
                  src={portrait.url}
                  alt="Portrait of Muhammad Kashif"
                  className="absolute inset-0 h-full w-full scale-125 object-cover object-[50%_18%] grayscale contrast-[1.05]"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                MBA · BE (Computer Systems)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. WHAT I DO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">What I do</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-[40px]">
                I help organizations run technology they can rely on.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/75">
                Most of my work sits between engineering and management —
                keeping core systems steady while planning what comes next.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                {problems.map((p) => (
                  <li key={p.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                    <h3 className="text-[15px] font-semibold text-primary md:col-span-5">{p.title}</h3>
                    <p className="text-[15px] leading-relaxed text-foreground/75 md:col-span-7">{p.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY TRUST ME */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-[40px]">
              A career built inside real organizations.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Government, energy, defence and enterprise IT — the environments
              where technology has to work every day.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-px bg-primary-foreground/10 md:grid-cols-4">
            {credibility.map(([n, l]) => (
              <div key={l} className="bg-primary px-6 py-8">
                <div className="text-3xl font-semibold tracking-tight">{n}</div>
                <div className="mt-2 text-sm text-primary-foreground/70">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Business Continuity",
              "Enterprise Infrastructure",
              "Data Centre Operations",
              "Vendor Management",
              "Technology Planning",
              "Governance",
            ].map((t) => (
              <span key={t} className="rounded-full border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW I THINK */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">My approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
              Four ideas that guide the way I work.
            </h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="border-t border-border pt-6">
                <div className="font-mono text-xs tracking-[0.18em] text-accent">{p.n}</div>
                <h3 className="mt-3 text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAREER DIRECTION */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow">Where I&apos;m heading</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
              Building on the work, expanding the view.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              My career so far has been built on enterprise infrastructure,
              business continuity and day-to-day technology operations.
            </p>
            <p>
              I&apos;m now expanding that experience toward technology
              governance, enterprise architecture and responsible AI — so I
              can contribute at a broader strategic level as organizations
              modernize.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SELECTED HIGHLIGHTS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected highlights</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
                Work I&apos;ve been responsible for.
              </h2>
            </div>
            <Link to="/credentials" className="text-sm font-medium text-accent underline-offset-4 hover:underline">Full experience →</Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="bg-background p-6">
                <h3 className="text-[15px] font-semibold text-primary">{h.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            If your organization needs someone with real operational depth and a
            genuine interest in where technology is heading, I&apos;d be glad to
            connect.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent">
              Start a conversation →
            </Link>
            <a href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent">
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}