import { createFileRoute } from "@tanstack/react-router";
import portrait from "../assets/kashif-portrait.jpg.asset.json";

export const Route = createFileRoute("/profile")({
  component: Profile,
  head: () => ({
    meta: [
      { title: "Profile — Muhammad Kashif" },
      {
        name: "description",
        content:
          "How engineering, an MBA, and fifteen years inside Pakistan's public-sector institutions shape a governance-first view of technology.",
      },
      { property: "og:title", content: "Profile — Muhammad Kashif" },
      { property: "og:url", content: "/profile" },
    ],
    links: [{ rel: "canonical", href: "/profile" }],
  }),
});

function Profile() {
  return (
    <article className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="grid gap-10 border-b border-border pb-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={portrait.url}
            alt="Portrait of Muhammad Kashif"
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </div>
        <div className="md:col-span-8">
          <p className="eyebrow">Profile</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            An engineer's discipline. A manager's judgment. An institution's memory.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Muhammad Kashif is a technology practitioner working at the
            intersection of governance, enterprise architecture, and the
            institutional realities of the public sector. He has spent his
            career inside the organizations a country depends on — energy,
            defence, national security — where the interesting question is
            rarely which technology, but how it will be governed.
          </p>
        </div>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4">
          <p className="eyebrow">Contents</p>
          <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <li>01 &nbsp; The engineer</li>
            <li>02 &nbsp; The manager</li>
            <li>03 &nbsp; The institution</li>
            <li>04 &nbsp; Where next</li>
          </ul>
        </aside>
        <div className="md:col-span-8 space-y-10 text-[17px] leading-[1.75] text-foreground/85">
          <section>
            <p className="eyebrow">01 · The engineer</p>
            <h2 className="mt-3 font-serif text-2xl">A bias for how things actually work.</h2>
            <p className="mt-4">
              A Bachelor of Engineering in Computer Systems from Mehran University shaped
              an early bias — for how systems actually work rather than how they are
              described in slide decks. Early roles across manufacturing and IT services
              built the muscle of network design, virtualization, backup, and identity —
              the unglamorous layers on which every later governance conversation stands.
            </p>
          </section>
          <section>
            <p className="eyebrow">02 · The manager</p>
            <h2 className="mt-3 font-serif text-2xl">Widening the frame.</h2>
            <p className="mt-4">
              An MBA at SZABIST widened the frame from systems to strategy — procurement,
              finance, stakeholder management, and the language executives use to make
              decisions under uncertainty. Technology, seen this way, is a means;
              institutional outcomes are the end.
            </p>
          </section>
          <section>
            <p className="eyebrow">03 · The institution</p>
            <h2 className="mt-3 font-serif text-2xl">Where the stakes are institutional.</h2>
            <p className="mt-4">
              Roles at the Ministry of Defence, the National Counter Terrorism Authority,
              and Sui Southern Gas Company placed him inside institutions where a failed
              system is a public failure. The recurring lesson: outcomes come less from
              any specific technology choice and more from the governance, procurement
              discipline, and operating rituals that surround it.
            </p>
          </section>
          <section>
            <p className="eyebrow">04 · Where next</p>
            <h2 className="mt-3 font-serif text-2xl">A governance-first practice.</h2>
            <p className="mt-4">
              The natural next step is a practice that treats governance, enterprise
              architecture, and institutional capability as the first-order problem —
              with infrastructure, cloud, and AI as instruments in service of it. That
              is the work this site is organized around.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}