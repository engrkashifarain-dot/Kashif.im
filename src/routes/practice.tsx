import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/practice")({
  component: Practice,
  head: () => ({
    meta: [
      { title: "Practice — Muhammad Kashif" },
      { name: "description", content: "Technology governance, enterprise architecture and modernization, and digital government with responsible AI." },
      { property: "og:title", content: "Practice — Muhammad Kashif" },
      { property: "og:url", content: "/practice" },
    ],
    links: [{ rel: "canonical", href: "/practice" }],
  }),
});

const areas = [
  {
    n: "01",
    title: "Technology Governance",
    lede: "Policy, controls, and oversight for institutions where technology decisions carry public consequence.",
    body: [
      "IT policy design and controls libraries aligned to ISO/NIST families and institutional mandates.",
      "Board-ready reporting: risk posture, resilience, third-party exposure, change health.",
      "Procurement and vendor governance — RFPs, evaluation frameworks, SLA and O&M design.",
      "Operating rituals: change advisory, incident review, DR drills, control attestation.",
    ],
    evidence: "Formulated SOPs for 24/7 IT and security operations of a federal ministry; drafted the RFP and ran procurement for its tier-II data centre.",
  },
  {
    n: "02",
    title: "Enterprise Architecture & Modernization",
    lede: "Target-state architecture, cloud and AI readiness, and portfolio rationalization.",
    body: [
      "Current-state estate discovery and target-state architecture aligned to institutional strategy.",
      "Cloud, hybrid, and sovereignty trade-offs — where workloads should live and why.",
      "Modernization roadmaps that respect regulatory, procurement, and workforce realities.",
      "AI-readiness of the estate: data foundations, identity, and integration before models.",
    ],
    evidence: "Designed and operated tier-II datacentre and disaster-recovery estates across defence, national-security, and energy contexts.",
  },
  {
    n: "03",
    title: "Digital Government & Responsible AI",
    lede: "Institutional capacity, sovereign infrastructure, and responsible-AI guardrails for public-sector modernization.",
    body: [
      "Institutional capability assessments: people, process, platform, and policy readiness.",
      "Sovereign infrastructure design: classification, residency, and inter-agency integration.",
      "Responsible-AI guardrails: permissible use, human oversight, auditability.",
      "Programme structuring for multi-year digital-government initiatives.",
    ],
    evidence: "Advised on datacentre planning for a national counter-terrorism authority, translating mandate into technology strategy.",
  },
];

function Practice() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="max-w-3xl">
        <p className="eyebrow">Practice</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">The practice, in three parts.</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          Infrastructure, cloud, cybersecurity, and disaster recovery appear throughout the
          work — as evidence, not as identity. The work itself is organized around three
          areas where institutional decisions get made.
        </p>
      </header>
      <div className="mt-16 divide-y divide-border">
        {areas.map((a) => (
          <section key={a.n} className="grid gap-10 py-16 first:pt-0 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-sm text-muted-foreground">{a.n}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">{a.title}</h2>
              <p className="mt-4 text-[15px] text-foreground/75">{a.lede}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-3">
                {a.body.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                    <span aria-hidden className="mt-2 h-px w-6 flex-none bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-accent pl-5">
                <p className="eyebrow">Evidence</p>
                <p className="mt-2 text-[15px] italic text-foreground/80">{a.evidence}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-10">
        <Link to="/contact" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background">
          Discuss a specific engagement →
        </Link>
      </div>
    </div>
  );
}