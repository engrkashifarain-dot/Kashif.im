import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thesis")({
  component: Thesis,
  head: () => ({
    meta: [
      { title: "Institutional Technology — A Thesis" },
      { name: "description", content: "An essay on why governance, enterprise architecture, and institutional capability matter more than the next technology purchase." },
      { property: "og:title", content: "Institutional Technology — A Thesis" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/thesis" },
    ],
    links: [{ rel: "canonical", href: "/thesis" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Institutional Technology",
          author: { "@type": "Person", name: "Muhammad Kashif" },
          datePublished: "2026-07-13",
        }),
      },
    ],
  }),
});

function Thesis() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <header className="border-b border-border pb-10">
        <p className="eyebrow">A thesis · 2026</p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight md:text-6xl">Institutional Technology.</h1>
        <p className="mt-6 font-serif text-xl italic leading-snug text-foreground/75">
          The hardest technology problem of this decade is not invention. It is teaching
          public and regulated institutions to govern what they already own — before
          layering AI on top.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          By Muhammad Kashif · Hyderabad · ~9 min read
        </p>
      </header>
      <div className="mt-12 space-y-6 text-[17px] leading-[1.8] text-foreground/85">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.9]">
          Every institution I have worked inside — a national gas utility, a federal
          ministry, a counter-terrorism authority — has been offered the same story about
          technology. That story goes: buy the newer system, hire the newer people, and
          outcomes will follow. It is a convenient story. It is also, in most cases, wrong.
        </p>
        <p>
          The observable pattern across critical institutions is that outcomes rarely fail
          for lack of technology. They fail for lack of governance — the mundane,
          unglamorous machinery of policy, roles, controls, procurement discipline, and
          operating rituals that decide whether any technology, new or old, is used well.
          What we call modernization is almost always a governance problem in disguise.
        </p>
        <h2 className="mt-12 font-serif text-2xl">The three-decade inheritance</h2>
        <p>
          Public and regulated institutions do not buy technology the way a startup does.
          They inherit it — across three decades, four administrations, and a dozen
          procurement cycles. Every system currently in production was purchased under a
          different mandate, integrated by a different team, and secured against a
          different threat model than the one it faces today. The estate is not a product;
          it is a sediment.
        </p>
        <p>
          The instinct to layer something new on top of that sediment — a cloud migration,
          an AI pilot, a data platform — is understandable and often correct. But without
          a governance layer capable of deciding what to retire, what to consolidate, and
          who is accountable for what, each new layer becomes another stratum for the next
          generation to inherit.
        </p>
        <h2 className="mt-12 font-serif text-2xl">Why architecture is a governance instrument</h2>
        <p>
          Enterprise architecture, at its best, is not a diagram. It is the institutional
          argument about which capabilities matter, which systems own them, and where the
          seams between them lie. Done seriously, it becomes the vocabulary a leadership
          team uses to decide what to fund, what to sunset, and what to leave alone.
        </p>
        <p>
          Done poorly — as a shelf artefact commissioned once and never consulted — it
          becomes the reason two ministries buy the same platform twice, and neither
          integrates with the third that already had it. Architecture is a governance
          instrument or it is nothing.
        </p>
        <h2 className="mt-12 font-serif text-2xl">The AI question, correctly posed</h2>
        <p>
          The question institutions are being asked today is not whether to adopt AI. It
          is whether their data foundations, identity systems, integration fabric, and
          policy environment are capable of hosting it responsibly. In most institutions
          the honest answer is: not yet. The gap is not a modelling gap; it is an
          institutional readiness gap.
        </p>
        <p>
          A responsible-AI posture in the public sector is not a set of prohibitions. It
          is a set of preconditions: clear ownership of data, auditable decisions, human
          oversight where consequences are irreversible, and procurement rules that make
          vendor claims verifiable. These preconditions are governance work.
        </p>
        <h2 className="mt-12 font-serif text-2xl">Digital resilience is a public good</h2>
        <p>
          When a private company's system fails, the market absorbs the consequence. When
          a national utility's disaster-recovery site fails, so does the country's ability
          to trust the utility. Digital resilience in institutional settings is therefore
          not an IT concern; it is a public good.
        </p>
        <h2 className="mt-12 font-serif text-2xl">What follows</h2>
        <p>
          The practice this site is organized around begins from that conviction.
          Governance first, architecture as its instrument, institutional capability as
          its measure. Infrastructure, cloud, and AI are important — but they are the
          second question. The first question is whether the institution is capable of
          governing what it already has. Everything else, in the long run, follows.
        </p>
        <hr className="my-14 border-border" />
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Muhammad Kashif · Hyderabad, Pakistan · 2026
        </p>
      </div>
    </article>
  );
}