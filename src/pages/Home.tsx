import { useRef } from "react";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import { allPosts } from "../content/posts";
import { usePageMeta } from "../theme/usePageMeta";

export default function Home() {
  usePageMeta({ title: "Home" });
  const notesRef = useRef<HTMLDivElement | null>(null);

  const latestPosts = allPosts.slice(0, 6);
  const latestPost = latestPosts[0];

  const scrollToNotes = () => {
    if (!notesRef.current) {
      return;
    }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    notesRef.current.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <div className="flex flex-col gap-12">
      <Hero latestPost={latestPost} onScrollToNotes={scrollToNotes} />
      <section className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="card p-6 md:p-8">
          <p className="kicker">Project snapshot</p>
          <h2 className="section-title">JRC repairability research</h2>
          <p className="mt-3 text-sm text-muted">
            The JRC project models how often repairs recur after a fix, instead of optimizing on
            cost alone. The codebase builds leak-safe targets, recurrence indices, and benchmark
            slices that let us evaluate models on clean temporal splits.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-muted">
            <div className="card bg-card-alt p-4">
              <p className="text-ink">Leak-safe targets</p>
              <p className="mt-1 text-xs">
                World definitions enforce time ordering and VIN disjointness. Targets are computed
                from rolling windows and validated per year.
              </p>
            </div>
            <div className="card bg-card-alt p-4">
              <p className="text-ink">Recurrence index</p>
              <p className="mt-1 text-xs">
                A stable risk score derived from repair codes, shop context, and lag-safe
                aggregates. Outputs include calibration metrics and benchmark slices.
              </p>
            </div>
            <div className="card bg-card-alt p-4">
              <p className="text-ink">Benchmark suite</p>
              <p className="mt-1 text-xs">
                Side-by-side evaluation of JRC proxy scores, recurrence scores, and baseline
                models with run metadata and artifact hashing.
              </p>
            </div>
          </div>
        </div>
        <div className="card p-6 md:p-8">
          <p className="kicker">Core workflow</p>
          <h2 className="section-title">From logs to signals</h2>
          <ol className="mt-4 grid gap-3 text-sm text-muted">
            <li className="card bg-card-alt p-4">
              <p className="text-ink">1. Normalize logs</p>
              <p className="mt-1 text-xs">
                Bronze and silver layers enforce schema, dtypes, and deterministic ordering.
              </p>
            </li>
            <li className="card bg-card-alt p-4">
              <p className="text-ink">2. Build features</p>
              <p className="mt-1 text-xs">
                Repair code prefixes, shop tiers, seasonality, and text-derived diagnostics.
              </p>
            </li>
            <li className="card bg-card-alt p-4">
              <p className="text-ink">3. Compute targets</p>
              <p className="mt-1 text-xs">
                Rolling baselines, recurrence scores, and residual metrics with leakage checks.
              </p>
            </li>
            <li className="card bg-card-alt p-4">
              <p className="text-ink">4. Validate &amp; report</p>
              <p className="mt-1 text-xs">
                Benchmark suites emit run metadata, hashes, and per-world diagnostics.
              </p>
            </li>
          </ol>
          <div className="mt-6">
            <p className="kicker">Current questions</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              <li>How sensitive is recurrence risk to signature drift?</li>
              <li>Which baseline features stay robust as shops change mix?</li>
              <li>What is the smallest benchmark that still catches leakage?</li>
            </ul>
          </div>
        </div>
      </section>
      <section ref={notesRef} id="notes" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="kicker">Notes feed</p>
          <h2 className="section-title">Latest notes</h2>
          <p className="text-muted">
            Short research fragments, system notes, and experiments in progress.
          </p>
        </div>
        <div className="grid gap-6">
          {latestPosts.length > 0 ? (
            latestPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))
          ) : (
            <div className="card p-6 text-sm text-muted">Notes are coming soon.</div>
          )}
        </div>
      </section>
    </div>
  );
}
