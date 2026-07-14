import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/kashif-portrait.jpg.asset.json";

export const Route = createFileRoute("/profile")({
  component: Profile,
  head: () => ({
    meta: [
      { title: "About — Muhammad Kashif" },
      { name: "description", content: "About Muhammad Kashif — engineer, MBA, and enterprise technology leader based in Pakistan." },
      { property: "og:title", content: "About — Muhammad Kashif" },
      { property: "og:url", content: "/profile" },
    ],
    links: [{ rel: "canonical", href: "/profile" }],
  }),
});

function Profile() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-4">
          <img
            src={portrait.url}
            alt="Portrait of Muhammad Kashif"
            className="mx-auto aspect-square w-full max-w-[280px] rounded-2xl object-cover object-top grayscale ring-1 ring-border md:max-w-none"
          />
        </div>
        <div className="md:col-span-8">
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            An engineer who grew into a technology leader.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            I&apos;m Muhammad Kashif. I&apos;ve spent the past fifteen years
            working in IT inside government and enterprise organizations in
            Pakistan — the kind of places where systems have to run, budgets
            are tight, and decisions carry weight.
          </p>
        </div>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div>
              <p className="eyebrow">On this page</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/75">
                <li>My story, in short</li>
                <li>How I work</li>
                <li>What I care about</li>
                <li>Outside of work</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-secondary/40 p-5">
              <p className="text-sm font-semibold text-primary">Currently</p>
              <p className="mt-2 text-sm text-foreground/75">
                Deputy Manager — IT (DR Site) at Sui Southern Gas Company. Based
                in Hyderabad, Pakistan.
              </p>
              <Link to="/contact" className="mt-4 inline-flex text-sm font-medium text-accent hover:underline">Get in touch →</Link>
            </div>
          </div>
        </aside>

        <div className="space-y-12 text-[17px] leading-[1.75] text-foreground/85 md:col-span-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary">My story, in short</h2>
            <p className="mt-4">
              I studied Computer Systems Engineering at Mehran University and
              started out doing hands-on IT — networks, servers, virtualization,
              backup. Later I did my MBA at SZABIST, which changed how I saw the
              same work: less as boxes and cables, more as budgets, vendors,
              risk, and people.
            </p>
            <p className="mt-4">
              Engineering gave me technical depth. Government service taught me
              discipline and how institutions actually work. Enterprise IT
              taught me scale. Leadership roles taught me how to work with
              people and get things delivered.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary">How I work</h2>
            <p className="mt-4">
              I&apos;m practical. I like understanding how a system actually
              behaves before I offer an opinion on it. I like clear
              documentation, honest status reports, and simple procedures that
              a team can follow at 3 a.m. when something breaks.
            </p>
            <p className="mt-4">
              I&apos;ve found that most technology problems in large
              organizations aren&apos;t really about technology. They&apos;re
              about how decisions get made, how ownership is defined, and how
              vendors are managed. That&apos;s where I try to add value.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary">What I care about</h2>
            <p className="mt-4">
              I&apos;m genuinely interested in technology governance — how
              organizations plan, procure, and manage technology in a
              structured way. I&apos;m also learning more about enterprise
              architecture, and how AI can be adopted responsibly in the public
              sector.
            </p>
            <p className="mt-4">
              I don&apos;t claim to be an authority on any of these — I&apos;m
              a working professional who&apos;s investing in these areas
              because I think they matter for the next stage of my career.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary">Outside of work</h2>
            <p className="mt-4">
              I&apos;m based in Hyderabad with my family. I read, I follow the
              enterprise-tech industry, and I like straightforward conversations
              with people who take their work seriously.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}