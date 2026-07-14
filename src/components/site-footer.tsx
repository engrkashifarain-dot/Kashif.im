import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded bg-primary text-sm font-semibold text-primary-foreground">MK</span>
            <span className="text-base font-semibold">Muhammad Kashif</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Enterprise technology leader working across government and industry.
            Interested in infrastructure, business continuity, and technology
            governance.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/75">
            <li><Link to="/profile" className="hover:text-accent">Profile</Link></li>
            <li><Link to="/practice" className="hover:text-accent">Practice</Link></li>
            <li><Link to="/credentials" className="hover:text-accent">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/75">
            <li>
              <a href="https://linkedin.com/in/kashifarain" className="hover:text-accent" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:Engr.KashifArain@gmail.com" className="hover:text-accent">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Muhammad Kashif. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Hyderabad · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}