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
              <nav className="flex items-center gap-2" aria-label="Social links">
                <a className="icon-button" href="mailto:seb.vv2221@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </a>
                <a
                  className="icon-button"
                  href="https://x.com/sebastianvv2221"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 3h3.5l-7.7 8.8L22 21h-6.5l-5.1-6.3L4.8 21H1.3l8.2-9.4L2 3h6.6l4.6 5.7L17.5 3z" />
                  </svg>
                </a>
                <a
                  className="icon-button"
                  href="https://github.com/sebvv2221"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5 0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.7c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-1 .8-1-.8-1-.1-2.1-.1-2.1.9-.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.4-1 .7-1.2-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.1 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.6-.3 2.5-.3.9 0 1.7.1 2.5.3 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.7.7 1 1.7 1 2.8 0 4.2-2.5 5.1-4.9 5.4.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4.2-1.4 7.2-5.3 7.2-9.9C22.5 6.2 17.8 1.5 12 1.5z" />
                  </svg>
                </a>
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
        </div>
      </footer>
    </div>
  );
}
