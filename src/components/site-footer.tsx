import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="eyebrow">Muhammad Kashif</p>
          <p className="mt-3 max-w-sm font-serif text-lg leading-snug">
            Technology governance, enterprise architecture, and institutional
            modernization — considered work for institutions that cannot afford
            to fail.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/profile" className="hover:text-accent">Profile</Link></li>
            <li><Link to="/practice" className="hover:text-accent">Practice</Link></li>
            <li><Link to="/thesis" className="hover:text-accent">Thesis</Link></li>
            <li><Link to="/credentials" className="hover:text-accent">Credentials</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
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
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Muhammad Kashif. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">Hyderabad · Pakistan</p>
        </div>
      </div>
    </footer>
  );
}