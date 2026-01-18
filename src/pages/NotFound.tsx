import { Link } from "react-router-dom";
import { usePageMeta } from "../theme/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "Not found" });

  return (
    <section className="card flex flex-col items-center gap-4 p-10 text-center">
      <p className="text-5xl font-display">404</p>
      <h1 className="font-display text-2xl">Page not found</h1>
      <p className="text-sm text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </section>
  );
}
