import { Link } from "react-router-dom";
import type { PostMeta } from "../content/posts";
import { formatDate } from "../content/posts";

export default function PostCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <article
      className="card card-hover flex flex-col gap-3 p-6 md:p-7 focus-within:-translate-y-1 focus-within:shadow-lift animate-fade-up"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        {formatDate(post.date)}
      </p>
      <Link to={`/posts/${post.slug}`} className="font-display text-xl text-ink no-underline">
        {post.title}
      </Link>
      <p className="text-sm text-muted">{post.summary}</p>
    </article>
  );
}
