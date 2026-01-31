import { Link } from "react-router-dom";
import type { PostMeta } from "../content/posts";
import { formatDate } from "../content/posts";

export default function Hero({
  latestPost,
  onScrollToNotes,
}: {
  latestPost?: PostMeta;
  onScrollToNotes: () => void;
}) {
  return (
    <section
      className={`hero-card card grid gap-8 p-8 md:p-10 animate-fade-up ${
        latestPost ? "md:grid-cols-[1.6fr_1fr]" : "grid-cols-1"
      }`}
    >
      <div className="relative z-10">
        <p className="kicker">Research Notebook</p>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
          Sebastian Vo
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          I build leak-safe targets, recurrence indices, and benchmark suites for real-world
          automotive repair logs. The JRC project turns messy field data into reproducible
          signals with strict time windows, VIN disjointness, and artifact hashing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about" className="btn btn-primary">
            About the project
          </Link>
          <button type="button" className="btn btn-ghost" onClick={onScrollToNotes}>
            Latest notes
          </button>
        </div>
      </div>
      {latestPost ? (
        <div className="card relative z-10 flex h-full flex-col gap-4 bg-card-alt p-6">
          <div className="flex items-center gap-3">
            <span className="pill">Latest note</span>
          </div>
          <Link
            to={`/posts/${latestPost.slug}`}
            className="font-display text-xl text-ink no-underline"
          >
            {latestPost.title}
          </Link>
          <p className="text-sm text-muted">{latestPost.summary}</p>
          <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
            <span>{formatDate(latestPost.date)}</span>
            <Link to={`/posts/${latestPost.slug}`} className="text-accent">
              Read note -&gt;
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}
