import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/kashif-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Muhammad Kashif — Enterprise Technology Leader" },
      {
        name: "description",
        content:
          "Enterprise technology leader with 15+ years across government and industry. Focused on IT infrastructure, business continuity, and technology governance.",
      },
      { property: "og:title", content: "Muhammad Kashif — Enterprise Technology Leader" },
      {
        property: "og:description",
        content: "15+ years across government and enterprise IT. Growing into technology governance and enterprise architecture.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const focus = [
  {
    title: "IT Infrastructure & Operations",
    body: "Designing, running, and improving the day-to-day systems large organizations rely on — networks, servers, virtualization, backup, and identity.",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    body: "Helping organizations stay operational when things go wrong. Data centres, DR sites, drills, and the procedures that hold under pressure.",
  },
  {
    title: "Technology Governance",
    body: "Bringing structure to how technology is planned, procured, and managed — policies, controls, vendor management, and reporting leaders can trust.",
  },
  {
    title: "Enterprise Architecture (growing)",
    body: "Learning to think about the whole estate, not just individual systems — how to modernize, consolidate, and prepare for cloud and AI responsibly.",
  },
];

const highlights = [
  { org: "Sui Southern Gas Company", role: "Deputy Manager — IT (DR Site)", years: "2018 — Present", tag: "Energy" },
  { org: "NACTA, Ministry of Interior", role: "Assistant Director — Technical", years: "2017 — 2018", tag: "National Security" },
  { org: "Ministry of Defence", role: "Assistant Director — IT", years: "2015 — 2017", tag: "Government" },
  { org: "Streebo Inc.", role: "Network / System Engineer", years: "2012 — 2015", tag: "Enterprise IT" },
];

function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-24">
          <div className="md:col-span-8">
            <p className="eyebrow">Muhammad Kashif · Hyderabad, Pakistan</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Enterprise technology leader.
              <span className="block text-accent">Engineer at heart.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
              I&apos;m Kashif — an engineer and MBA with 15+ years in IT. I&apos;ve
              spent my career inside government and large enterprise organizations,
              running infrastructure, disaster-recovery sites, and data-centre
              projects. Today I&apos;m focused on technology governance and
              enterprise architecture — helping organizations plan and manage
              technology better as they modernize.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/practice" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent">
                What I do <span aria-hidden>→</span>
              </Link>
              <Link to="/credentials" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent">
                See my experience
              </Link>
              <a href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground/70 underline-offset-4 hover:text-accent hover:underline">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <figure className="mx-auto max-w-[260px] md:max-w-none">
              <div className="relative">
                <div aria-hidden className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 blur-xl" />
                <img
                  src={portrait.url}
                  alt="Portrait of Muhammad Kashif"
                  className="aspect-square w-full rounded-2xl object-cover object-top grayscale ring-1 ring-border"
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

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["15+ yrs", "In enterprise & government IT"],
            ["4 sectors", "Government · Energy · Defence · Enterprise"],
            ["MBA + BE", "Business + engineering foundation"],
            ["Pakistan", "Open to regional & remote roles"],
          ].map(([n, l]) => (
            <div key={String(l)} className="bg-background px-6 py-7">
              <div className="text-2xl font-semibold tracking-tight text-primary">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">What I do</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Practical technology work, from operations to governance.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              My work sits between engineering and management. I&apos;ve built and run
              the systems, and I&apos;ve also written the policies, RFPs and SOPs that
              wrap around them. That combination is what I bring to every role.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focus.map((f) => (
              <article key={f.title} className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent">
                <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/practice" className="text-sm font-medium text-accent underline-offset-4 hover:underline">
              See how I approach each area →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Where I&apos;ve worked</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A career built inside real organizations.</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                I&apos;ve been fortunate to work in places where technology genuinely
                matters — a national gas utility, federal ministries, and enterprise
                IT teams. Each role taught me something different.
              </p>
            </div>
            <Link to="/credentials" className="text-sm font-medium text-accent underline-offset-4 hover:underline">Full experience →</Link>
          </div>
          <ul className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border bg-background">
            {highlights.map((h) => (
              <li key={h.org} className="grid gap-2 px-6 py-5 md:grid-cols-12 md:items-center">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:col-span-2">{h.years}</p>
                <div className="md:col-span-7">
                  <p className="text-[15px] font-semibold text-primary">{h.org}</p>
                  <p className="text-sm text-foreground/70">{h.role}</p>
                </div>
                <p className="md:col-span-3 md:text-right">
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{h.tag}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow">Where I&apos;m heading</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Growing into governance and architecture.</h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>I&apos;m at a point in my career where I want to do more than run systems. I want to help organizations decide what technology to build, what to retire, and how to govern the whole picture.</p>
            <p>That means investing in technology governance, enterprise architecture, and responsible AI adoption — practical skills for the kind of modernization work public and private institutions are taking on right now.</p>
            <p>If that&apos;s the kind of work you&apos;re thinking about, I&apos;d enjoy a conversation.</p>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-accent">Get in touch →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}