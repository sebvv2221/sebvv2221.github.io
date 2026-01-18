import cvRaw from "../content/cv.md?raw";
import { renderMarkdown } from "../content/markdown";
import { usePageMeta } from "../theme/usePageMeta";

export default function Cv() {
  usePageMeta({ title: "CV", noindex: true });

  return (
    <article className="card mx-auto w-full max-w-4xl p-8 md:p-10">
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(cvRaw) }}
      />
    </article>
  );
}
