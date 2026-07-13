import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Kashif" },
      { name: "description", content: "Begin an inquiry regarding governance, enterprise architecture, consulting, speaking, or collaboration." },
      { property: "og:title", content: "Contact — Muhammad Kashif" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const intents = [
  { label: "Technology Governance", subject: "Inquiry — Technology Governance" },
  { label: "Enterprise Architecture", subject: "Inquiry — Enterprise Architecture" },
  { label: "Consulting Engagement", subject: "Inquiry — Consulting Engagement" },
  { label: "Speaking", subject: "Inquiry — Speaking" },
  { label: "Collaboration", subject: "Inquiry — Collaboration" },
  { label: "General", subject: "Inquiry — General" },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="max-w-3xl border-b border-border pb-12">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A considered inquiry.</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          Choose the intent that best fits your question. Each opens a drafted email so
          a conversation begins with a clear subject and context.
        </p>
      </header>
      <div className="mt-14 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow">By intent</p>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {intents.map((i) => (
              <li key={i.label}>
                <a href={`mailto:Engr.KashifArain@gmail.com?subject=${encodeURIComponent(i.subject)}`} className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-secondary/60">
                  <span className="font-serif text-2xl md:text-3xl">{i.label}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent">Begin →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-4 space-y-10">
          <div>
            <p className="eyebrow">Direct</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li><a href="mailto:Engr.KashifArain@gmail.com" className="underline-offset-4 hover:underline">Engr.KashifArain@gmail.com</a></li>
              <li><a href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">linkedin.com/in/kashifarain ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Based in</p>
            <p className="mt-3 text-[15px]">Hyderabad, Sindh · Pakistan</p>
            <p className="mt-1 text-xs text-muted-foreground">Available for engagements across Pakistan, the Gulf, and international advisory.</p>
          </div>
          <div>
            <p className="eyebrow">Response</p>
            <p className="mt-3 text-[15px] text-foreground/80">Every inquiry receives a considered reply, typically within a few business days.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}