import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/kashif-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Muhammad Kashif — Technology Governance & Enterprise Architecture" },
      {
        name: "description",
        content:
          "Engineer and MBA advising institutions on technology governance, enterprise architecture, and responsible digital modernization.",
      },
      { property: "og:title", content: "Muhammad Kashif — Technology Governance & Enterprise Architecture" },
      {
        property: "og:description",
        content:
          "Fifteen years inside Pakistan's energy, defence, and national-security institutions — translated into governance, architecture, and modernization advice.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const engagements = [
  {
    domain: "Energy · Critical Infrastructure",
    year: "2018 — Present",
    title: "Governance of a national gas utility's disaster-recovery site",
    org: "Sui Southern Gas Company (SSGC)",
    body:
      "Steward operations, controls, and vendor governance for the disaster-recovery estate of Pakistan's largest gas utility — the systems a regulated national operator relies on when its primary site cannot.",
  },
  {
    domain: "Defence · Institutional IT",
    year: "2015 — 2017",
    title: "Standing up a tier-II data centre for a federal ministry",
    org: "Ministry of Defence, Government of Pakistan",
    body:
      "Drafted the RFP, ran the procurement, and codified 24/7 operating procedures for a tier-II data centre supporting a federal ministry — the governance scaffolding that outlasts any single deployment.",
  },
  {
    domain: "National Security · Digital Government",
    year: "2017 — 2018",
    title: "Advising on datacentre strategy for a national counter-terrorism authority",
    org: "NACTA, Ministry of Interior",
    body:
      "Advised leadership on the target-state architecture and delivery plan for a national datacentre programme — where classification, sovereignty, and inter-agency integration meet.",
  },
];

const practice = [
  {
    n: "01",
    title: "Technology Governance",
    body:
      "Policy, controls, risk, and board-level oversight for institutions where technology decisions carry public consequence.",
  },
  {
    n: "02",
    title: "Enterprise Architecture & Modernization",
    body:
      "Target-state architecture, cloud and AI readiness, and portfolio rationalization — the strategy behind the estate, not the tools inside it.",
  },
  {
    n: "03",
    title: "Digital Government & Responsible AI",
    body:
      "Institutional capacity, sovereign infrastructure, and responsible-AI guardrails for public-sector modernization programmes.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Muhammad Kashif · Est. 2010</p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Governing the technology that
              <span className="italic text-accent"> institutions cannot afford to fail.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Engineer and MBA with fifteen years inside Pakistan's energy,
              defence, and national-security institutions — translating that
              experience into governance, enterprise architecture, and
              responsible modernization advice for leadership teams.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-none border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore the practice
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/thesis"
                className="inline-flex items-center gap-2 rounded-none border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:border-foreground"
              >
                Read the thesis
              </Link>
              <a
                href="https://linkedin.com/in/kashifarain"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-foreground/70 underline-offset-4 hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <figure className="relative">
              <div className="absolute -left-3 -top-3 hidden h-full w-full border border-accent/40 md:block" />
              <img
                src={portrait.url}
                alt="Portrait of Muhammad Kashif"
                className="relative aspect-[4/5] w-full object-cover grayscale contrast-105"
                loading="eager"
              />
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Muhammad Kashif · Hyderabad, Pakistan
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Executive stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-6 md:grid-cols-4">
          {[
            ["15+", "Years in enterprise IT"],
            ["4", "National institutions served"],
            ["2", "Degrees — Engineering & MBA"],
            ["3", "Practice areas"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-8 first:pl-0 last:pr-0">
              <div className="font-serif text-3xl md:text-4xl">{n}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Practice</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                Three areas where institutional decisions get made.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-border">
                {practice.map((p) => (
                  <li key={p.n} className="grid grid-cols-12 gap-6 py-8 first:pt-0">
                    <div className="col-span-2 font-mono text-sm text-muted-foreground">{p.n}</div>
                    <div className="col-span-10">
                      <h3 className="font-serif text-2xl leading-tight">{p.title}</h3>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/practice" className="text-sm text-accent underline-offset-4 hover:underline">
                  See the full practice →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected Engagements</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                Work inside institutions that shape a country.
              </h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {engagements.map((e) => (
              <article key={e.title} className="flex flex-col border-t border-foreground/80 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {e.domain} · {e.year}
                </p>
                <h3 className="mt-4 font-serif text-xl leading-snug">{e.title}</h3>
                <p className="mt-3 text-sm text-foreground/75">{e.body}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                  {e.org}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <p className="eyebrow text-center">Professional Philosophy</p>
          <blockquote className="mt-6 text-center font-serif text-3xl leading-[1.2] tracking-tight md:text-4xl">
            “Technology creates lasting value only when it is governed with
            purpose, aligned with institutional strategy, and implemented with
            the long view in mind.”
          </blockquote>
          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            — Muhammad Kashif
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow">Inquiries</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                A considered conversation begins with a clear question.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-foreground bg-transparent px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background"
              >
                Begin an inquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
