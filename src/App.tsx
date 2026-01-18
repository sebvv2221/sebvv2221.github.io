import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
