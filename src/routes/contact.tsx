import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Kashif" },
      { name: "description", content: "Get in touch with Muhammad Kashif about roles, projects, consulting, or a conversation about technology governance." },
      { property: "og:title", content: "Contact — Muhammad Kashif" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const reasons = [
  { label: "A role or opportunity", subject: "Opportunity — for Muhammad Kashif", hint: "Full-time, contract, or advisory positions." },
  { label: "A consulting or advisory project", subject: "Consulting inquiry — Muhammad Kashif", hint: "Short engagements around governance, DR, or infrastructure." },
  { label: "A speaking or panel invitation", subject: "Speaking invitation — Muhammad Kashif", hint: "Meetups, university sessions, industry panels." },
  { label: "Just a professional conversation", subject: "Hello — professional conversation", hint: "Happy to talk about the industry or share notes." },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Let&apos;s talk.</h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground/75">
          The easiest way to reach me is email or LinkedIn. If you want, pick
          the option that best describes what you have in mind — it opens a
          pre-filled email so we start with a clear subject.
        </p>
      </header>

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow">What&apos;s this about?</p>
          <ul className="mt-6 space-y-3">
            {reasons.map((r) => (
              <li key={r.label}>
                <a
                  href={`mailto:Engr.KashifArain@gmail.com?subject=${encodeURIComponent(r.subject)}`}
                  className="group flex items-center justify-between gap-6 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-accent"
                >
                  <div>
                    <p className="text-base font-semibold text-primary group-hover:text-accent">{r.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{r.hint}</p>
                  </div>
                  <span aria-hidden className="font-mono text-sm text-muted-foreground group-hover:text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="md:col-span-5 space-y-6">
          <div className="rounded-lg border border-border bg-secondary/40 p-6">
            <p className="eyebrow">Direct</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                <a href="mailto:Engr.KashifArain@gmail.com" className="font-medium text-primary underline-offset-4 hover:text-accent hover:underline">Engr.KashifArain@gmail.com</a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">LinkedIn</p>
                <a href="https://linkedin.com/in/kashifarain" target="_blank" rel="noreferrer" className="font-medium text-primary underline-offset-4 hover:text-accent hover:underline">linkedin.com/in/kashifarain ↗</a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-6">
            <p className="eyebrow">Based in</p>
            <p className="mt-2 text-[15px] font-medium text-primary">Hyderabad, Sindh · Pakistan</p>
            <p className="mt-1 text-sm text-muted-foreground">Open to international opportunities, including relocation, where I can contribute to enterprise technology, governance, and digital transformation initiatives.</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <p className="eyebrow">Response time</p>
            <p className="mt-2 text-sm text-foreground/80">I usually reply within a couple of business days. If it&apos;s urgent, mention it in the subject.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}