import { Link } from "@tanstack/react-router";
const links = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
  { to: "/practice", label: "Practice" },
  { to: "/credentials", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
    return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Muhammad Kashif — home">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-semibold text-primary-foreground">MK</span>
          <span className="text-[13px] sm:text-[15px] font-semibold tracking-tight">Muhammad Kashif</span>
        </Link>
        <nav
  className="flex items-center gap-2 sm:gap-5 md:gap-7"
  aria-label="Primary">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] sm:text-sm font-medium whitespace-nowrap text-primary transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
                  </nav>
              </div>
          </header>
  );
}