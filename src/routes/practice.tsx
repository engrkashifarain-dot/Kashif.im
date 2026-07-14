import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/practice")({
  component: Practice,
  head: () => ({
    meta: [
      { title: "What I Do — Muhammad Kashif" },
      { name: "description", content: "How I help organizations with IT infrastructure, business continuity, technology governance, and enterprise architecture." },
      { property: "og:title", content: "What I Do — Muhammad Kashif" },
      { property: "og:url", content: "/practice" },
    ],
    links: [{ rel: "canonical", href: "/practice" }],
  }),
});

const areas = [
  {
    n: "01",
    title: "IT Infrastructure & Operations",
    lede: "Keeping the core systems of a large organization running well, day after day.",
    body: [
      "Networks, servers, virtualization (VMware, Hyper-V), storage, and backup.",
      "Active Directory, Microsoft 365, identity, and endpoint management.",
      "Monitoring, patching, capacity planning, and incident handling.",
      "Working with vendors and support partners to deliver reliable service.",
    ],
    evidence: "Ran enterprise infrastructure for a national gas utility and enterprise IT teams over 15+ years.",
  },
  {
    n: "02",
    title: "Business Continuity & Disaster Recovery",
    lede: "Making sure the organization can keep operating when something goes wrong.",
    body: [
      "Disaster-recovery site operations and readiness testing.",
      "Tier-II data-centre design, build, and 24/7 operating procedures.",
      "DR drills, run-books, and recovery-time objectives that reflect reality.",
      "Backup strategy, offsite replication, and restore verification.",
    ],
    evidence: "Currently responsible for the DR site of Pakistan's largest gas utility. Previously planned and built a tier-II data centre for a federal ministry.",
  },
  {
    n: "03",
    title: "Technology Governance",
    lede: "Bringing structure to how technology is planned, procured and managed.",
    body: [
      "IT policies, SOPs, and controls for day-to-day operations.",
      "RFPs, vendor evaluation, and procurement for infrastructure projects.",
      "SLA design, contract management, and vendor performance reviews.",
      "Reporting to leadership in a language they can act on.",
    ],
    evidence: "Wrote SOPs for 24/7 IT and security operations of a federal ministry, and drafted RFPs for its data-centre procurement.",
  },
  {
    n: "04",
    title: "Enterprise Architecture & Modernization",
    lede: "An area I&apos;m actively building expertise in — the whole estate, not just single systems.",
    body: [
      "Understanding the current-state IT estate and where the pain points are.",
      "Thinking about cloud, hybrid, and on-prem trade-offs honestly.",
      "Consolidating and rationalizing over time — not big-bang rewrites.",
      "Preparing organizations for responsible AI adoption at the platform level.",
    ],
    evidence: "Advised on data-centre strategy for a national counter-terrorism authority. Currently expanding into enterprise architecture through study and hands-on work.",
  },
];

function Practice() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow">What I do</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Four areas where I can help.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/75">
          These are the areas where I have real experience and where I&apos;m
          continuing to grow. I&apos;ve tried to describe each one plainly —
          what it means, what I&apos;ve done, and how I&apos;d help.
        </p>
      </header>

      <div className="mt-14 space-y-6">
        {areas.map((a) => (
          <section key={a.n} className="rounded-xl border border-border bg-card p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Area {a.n}</p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-primary md:text-3xl">{a.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{a.lede}</p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {a.body.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-md border-l-2 border-accent bg-secondary/60 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Evidence</p>
                  <p className="mt-1 text-[14px] text-foreground/80">{a.evidence}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-10">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-accent">Discuss a specific need →</Link>
        <Link to="/credentials" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent">See my full experience</Link>
      </div>
    </div>
  );
}