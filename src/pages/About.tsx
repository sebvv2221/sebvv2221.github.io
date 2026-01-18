import { usePageMeta } from "../theme/usePageMeta";

const selectedWork = [
  {
    title: "World A Cold: Leak-Safe 90-Day Recurrence Targets",
    description: "Rethinking automotive warranty targets through recurrence risk modeling.",
    href: "https://github.com/sebvv2221",
  },
  {
    title: "Trace Repairability Benchmarks",
    description: "A compact benchmark suite for system repair workflows and telemetry hygiene.",
    href: "https://github.com/sebvv2221",
  },
  {
    title: "Recurrence-Aware Fleet Monitoring",
    description: "A notes-driven prototype for linking field logs to recurrence windows.",
    href: "https://github.com/sebvv2221",
  },
  {
    title: "Systems-First ML Notes",
    description: "Personal notebook on ML systems, reliability, and inference infrastructure.",
    href: "https://github.com/sebvv2221",
  },
];

export default function About() {
  usePageMeta({ title: "About" });

  return (
    <article className="card p-8 md:p-10">
      <div>
        <p className="kicker">About</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Sebastian Vo</h1>
        <p className="mt-4 text-lg text-muted">
          I am a University of Florida researcher focused on ML systems, repairability, and
          recurrence modeling. I care about how logs, targets, and infrastructure choices affect
          real-world reliability. This site collects short research fragments and experiments in
          progress.
        </p>
      </div>

      <section className="mt-10 flex flex-col gap-4">
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
      </section>
    </article>
  );
}
