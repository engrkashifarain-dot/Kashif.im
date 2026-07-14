import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/credentials")({
  component: Credentials,
  head: () => ({
    meta: [
      { title: "Experience — Muhammad Kashif" },
      { name: "description", content: "Professional experience, education, and certifications of Muhammad Kashif." },
      { property: "og:title", content: "Experience — Muhammad Kashif" },
      { property: "og:url", content: "/credentials" },
    ],
    links: [{ rel: "canonical", href: "/credentials" }],
  }),
});

const experience = [
  {
    period: "Aug 2018 — Present",
    role: "Engineer / Deputy Manager — IT (DR Site)",
    org: "Sui Southern Gas Company (SSGC)",
    place: "Hyderabad, Pakistan",
    notes: [
      "Run day-to-day operations of the disaster-recovery site for Pakistan's largest gas utility.",
      "Manage virtualization, backup, monitoring, and DR readiness for critical business systems.",
      "Work with vendors, internal teams, and audit functions on controls and reporting.",
    ],
  },
  {
    period: "Dec 2017 — Jul 2018",
    role: "Assistant Director — Technical",
    org: "NACTA, Ministry of Interior",
    place: "Islamabad, Pakistan",
    notes: [
      "Advised on data-centre strategy and technical planning for a national programme.",
      "Worked with leadership on requirements, vendors, and delivery approach.",
    ],
  },
  {
    period: "Apr 2015 — Nov 2017",
    role: "Assistant Director — IT",
    org: "Ministry of Defence, Government of Pakistan",
    place: "Rawalpindi, Pakistan",
    notes: [
      "Planned and set up a tier-II data centre for a federal ministry.",
      "Drafted RFPs, ran procurement evaluations, and wrote 24/7 operating SOPs.",
      "Coordinated between technical teams, vendors, and senior stakeholders.",
    ],
  },
  {
    period: "Jun 2012 — Mar 2015",
    role: "Network / System Engineer",
    org: "Streebo Inc.",
    place: "Karachi, Pakistan",
    notes: [
      "Network design and support, Active Directory, Microsoft 365 administration.",
      "Virtualization (VMware, Hyper-V), backup, and IP telephony.",
    ],
  },
  {
    period: "2010 — 2012",
    role: "Earlier IT roles",
    org: "Faran Sugar Mills · Abdullah Shah Ghazi Sugar Mills",
    place: "Sindh, Pakistan",
    notes: ["System support, programming, and early operational IT."],
  },
];

const certs = [
  "VMware Certified Associate — Cloud (VCA-Cloud)",
  "VMware Certified Associate — Data Center Virtualization (VCA-DCV)",
  "Veeam Backup Academy Certified Professional",
  "Microsoft Server Virtualization — Hyper-V & System Center",
  "Microsoft Certified Professional (MCP)",
  "Information & Cyber Security Awareness",
  "Integrated Management System",
  "HSE Passport Awareness for Executives",
];

function Credentials() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow">Experience</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          The work I&apos;ve done.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/75">
          Fifteen years of hands-on IT and IT leadership across government,
          energy, and enterprise organizations in Pakistan.
        </p>
      </header>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <section className="md:col-span-8">
          <p className="eyebrow">Career timeline</p>
          <ol className="mt-6 space-y-6">
            {experience.map((e) => (
              <li key={e.period} className="rounded-lg border border-border bg-card p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-primary">{e.role}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{e.period}</p>
                </div>
                <p className="mt-1 text-[15px] font-medium text-foreground/85">{e.org}</p>
                <p className="text-xs text-muted-foreground">{e.place}</p>
                <ul className="mt-4 space-y-2">
                  {e.notes.map((n) => (
                    <li key={n} className="flex gap-3 text-[14.5px] leading-relaxed text-foreground/80">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-10 md:col-span-4">
          <div className="rounded-lg border border-border bg-secondary/40 p-6">
            <p className="eyebrow">Education</p>
            <ul className="mt-4 space-y-4 text-[15px]">
              <li>
                <div className="font-semibold text-primary">MBA — General Management</div>
                <div className="text-sm text-muted-foreground">SZABIST, Karachi · 2019 — 2021</div>
              </li>
              <li>
                <div className="font-semibold text-primary">BE — Computer Systems</div>
                <div className="text-sm text-muted-foreground">MUET, Jamshoro · 2006 — 2010</div>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Certifications & training</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {certs.map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Languages</p>
            <p className="mt-3 text-[15px] text-foreground/80">English · Urdu · Sindhi</p>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-accent underline-offset-4 hover:underline" href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a className="text-accent underline-offset-4 hover:underline" href="mailto:Engr.KashifArain@gmail.com">Email</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}