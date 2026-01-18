import { useParams } from "react-router-dom";
import { getPostBySlug, formatDate } from "../content/posts";
import { renderMarkdown } from "../content/markdown";
import { usePageMeta } from "../theme/usePageMeta";
import NotFound from "./NotFound";

export default function Post() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  usePageMeta({ title: post?.title ?? "Not found" });

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="card mx-auto w-full max-w-4xl p-8 md:p-10">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {formatDate(post.date)}
        </p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">{post.title}</h1>
        {post.tags && post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div
        className="markdown mt-8"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
      />
    </article>
  );
}
