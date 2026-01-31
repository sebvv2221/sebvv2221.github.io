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
                <NavLink to="/cv" className={navLinkClass}>
                  CV
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
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.93 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.156-5.144-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  className="icon-button"
                  href="https://linkedin.com/in/sebvv2221"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
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
