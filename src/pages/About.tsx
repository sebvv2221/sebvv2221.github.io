import { usePageMeta } from "../theme/usePageMeta";

const selectedWork = [
  {
    title: "JRC Repairability Pipeline",
    description: "End-to-end pipeline for log hygiene, target construction, recurrence scoring, and benchmarking.",
    href: "https://github.com/sebvv2221/jrc-env-project",
  },
  {
    title: "Benchmark Suite + World Definitions",
    description: "World A/B/C split logic with leak-safe windows, VIN disjointness, and metadata-hashed artifacts.",
    href: "https://github.com/sebvv2221/jrc-env-project",
  },
  {
    title: "Recurrence Index Construction",
    description: "Rolling baselines and recurrence risk scores for fleet reliability and repair durability.",
    href: "https://github.com/sebvv2221/jrc-env-project",
  },
  {
    title: "Systems-First ML Notes",
    description: "Working notes on modeling, telemetry quality, and durable ML experiments.",
    href: "https://github.com/sebvv2221",
  },
];

export default function About() {
  usePageMeta({ title: "About" });

  return (
    <article className="card mx-auto w-full max-w-4xl p-8 md:p-10">
      <div>
        <p className="kicker">About</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Sebastian Vo</h1>
        <p className="mt-4 text-lg text-muted">
          I am a University of Florida researcher focused on ML systems, repairability, and
          recurrence modeling. The JRC work centers on how log hygiene, target design, and
          evaluation boundaries shape what we believe about reliability in the field.
        </p>
        <p className="mt-4 text-sm text-muted">
          The current codebase includes a full pipeline: bronze and silver data layers, feature
          engineering for shop context and diagnostics, leak-safe world splits, recurrence index
          construction, and a benchmark suite that emits hashed artifacts with reproducible run
          metadata. This site captures the reasoning behind those decisions.
        </p>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div>
            <p className="kicker">Focus</p>
            <h2 className="section-title">What I work on</h2>
          </div>
          <div className="card bg-card-alt p-5 text-sm text-muted">
            <p className="text-ink">Leak-safe target design</p>
            <p className="mt-2">
              Rolling baselines, recurrence windows, and guardrails that prevent future leakage
              from influencing training targets.
            </p>
          </div>
          <div className="card bg-card-alt p-5 text-sm text-muted">
            <p className="text-ink">Telemetry quality and schema drift</p>
            <p className="mt-2">
              Stable identifiers, deterministic ordering, and content hashing to keep logs
              trustworthy across months of iteration.
            </p>
          </div>
          <div className="card bg-card-alt p-5 text-sm text-muted">
            <p className="text-ink">Evaluation infrastructure</p>
            <p className="mt-2">
              Benchmark slices that compare recurrence signals, proxy scores, and baseline
              models with reproducible metadata.
            </p>
          </div>
          <div className="card bg-card-alt p-5 text-sm text-muted">
            <p className="text-ink">How I work</p>
            <p className="mt-2">
              Every run emits metadata, hashes, and run IDs so results can be reproduced and
              traced back to the exact data window and configuration.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="kicker">Selected work</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <div className="grid gap-4">
            {selectedWork.map((item) => (
              <div key={item.title} className="card card-hover p-5">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                <a
                  className="mt-3 inline-flex text-sm"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View link -&gt;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
