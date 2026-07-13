import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/credentials")({
  component: Credentials,
  head: () => ({
    meta: [
      { title: "Credentials — Muhammad Kashif" },
      { name: "description", content: "Education, professional experience, certifications, and memberships." },
      { property: "og:title", content: "Credentials — Muhammad Kashif" },
      { property: "og:url", content: "/credentials" },
    ],
    links: [{ rel: "canonical", href: "/credentials" }],
  }),
});

const experience = [
  { period: "Aug 2018 — Present", role: "Engineer / Deputy Manager — IT (DR Site)", org: "Sui Southern Gas Company (SSGC)", place: "Hyderabad, Pakistan", note: "Governance and operations of the disaster-recovery estate for Pakistan's largest gas utility." },
  { period: "Dec 2017 — Jul 2018", role: "Assistant Director — Technical", org: "NACTA, Ministry of Interior", place: "Islamabad, Pakistan", note: "Advisory on datacentre strategy and delivery planning for a national programme." },
  { period: "Apr 2015 — Nov 2017", role: "Assistant Director — IT", org: "Ministry of Defence, Government of Pakistan", place: "Rawalpindi, Pakistan", note: "Tier-II datacentre planning, RFP authorship, procurement, and 24/7 SOPs." },
  { period: "Jun 2012 — Mar 2015", role: "Network / System Engineer", org: "Streebo Inc.", place: "Karachi, Pakistan", note: "Network, virtualization, Active Directory, Microsoft 365, IP telephony." },
  { period: "2010 — 2012", role: "Earlier roles", org: "Faran Sugar Mills · Abdullah Shah Ghazi Sugar Mills", place: "Sindh, Pakistan", note: "System support, programming, and early operational IT." },
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
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="max-w-3xl border-b border-border pb-12">
        <p className="eyebrow">Credentials</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">The record.</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          Education, professional experience, and certifications — the ledger against
          which everything else on this site is defensible.
        </p>
      </header>
      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <section className="md:col-span-8">
          <p className="eyebrow">Experience</p>
          <ol className="mt-6 divide-y divide-border">
            {experience.map((e) => (
              <li key={e.period} className="grid gap-3 py-6 md:grid-cols-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:col-span-4">{e.period}</p>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-xl">{e.role}</h3>
                  <p className="mt-1 text-[15px] text-foreground/80">{e.org}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.place}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <aside className="md:col-span-4 space-y-12">
          <div>
            <p className="eyebrow">Education</p>
            <ul className="mt-4 space-y-4 text-[15px]">
              <li><div className="font-serif text-lg">MBA — General Management</div><div className="text-muted-foreground">SZABIST, Karachi · 2019 — 2021</div></li>
              <li><div className="font-serif text-lg">BE — Computer Systems</div><div className="text-muted-foreground">MUET, Jamshoro · 2006 — 2010</div></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Certifications & Training</p>
            <ul className="mt-4 space-y-2 text-[14px] text-foreground/80">
              {certs.map((c) => <li key={c}>· {c}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Languages</p>
            <p className="mt-3 text-[15px]">English · Urdu · Sindhi</p>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li><a className="underline-offset-4 hover:underline" href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a className="underline-offset-4 hover:underline" href="mailto:Engr.KashifArain@gmail.com">Email ↗</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}