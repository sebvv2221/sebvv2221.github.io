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
