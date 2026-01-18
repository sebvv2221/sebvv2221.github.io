import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[0.7rem] uppercase tracking-[0.3em] transition ${
    isActive ? "text-ink" : "text-muted"
  } hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-ink">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="md:sticky md:top-6 z-40">
        <div className="mx-auto w-full max-w-5xl px-6 pt-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-nav px-6 py-4 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="font-display text-lg tracking-wide text-ink no-underline"
            >
              Sebastian Vo
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              <nav className="flex items-center gap-4" aria-label="Primary">
                <NavLink to="/" className={navLinkClass} end>
                  Home
                </NavLink>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" className="mx-auto w-full max-w-5xl px-6 pt-10">
        {children}
      </main>
      <footer className="mx-auto mt-16 w-full max-w-5xl px-6 pb-12">
        <div className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>(C) Sebastian Vo - 2026</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:seb.vv2221@gmail.com">Email</a>
            <a href="https://github.com/sebvv2221" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
