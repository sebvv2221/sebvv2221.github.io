const modules = import.meta.glob("./posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

export type Post = PostMeta & {
  body: string;
};

type Frontmatter = {
  slug?: string;
  title?: string;
  date?: string;
  summary?: string;
  tags?: string[];
};

const parseFrontmatter = (raw: string): { frontmatter: Frontmatter; body: string } => {
  const match = raw.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*[\r\n]+/);
  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const frontmatterRaw = match[1];
  const body = raw.slice(match[0].length).trim();
  const frontmatter: Frontmatter = {};

  for (const line of frontmatterRaw.split(/\r?\n/)) {
    if (!line.trim()) {
      continue;
    }
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const valueRaw = line.slice(idx + 1).trim();
    if (!valueRaw) {
      frontmatter[key as keyof Frontmatter] = "";
      continue;
    }

    let value: string | string[] = valueRaw;
    if (valueRaw.startsWith("[") && valueRaw.endsWith("]")) {
      try {
        value = JSON.parse(valueRaw) as string[];
      } catch {
        value = valueRaw;
      }
    } else if (
      (valueRaw.startsWith('"') && valueRaw.endsWith('"')) ||
      (valueRaw.startsWith("'") && valueRaw.endsWith("'"))
    ) {
      value = valueRaw.slice(1, -1);
    }

    switch (key) {
      case "slug":
        frontmatter.slug = String(value);
        break;
      case "title":
        frontmatter.title = String(value);
        break;
      case "date":
        frontmatter.date = String(value);
        break;
      case "summary":
        frontmatter.summary = String(value);
        break;
      case "tags":
        if (Array.isArray(value)) {
          frontmatter.tags = value;
        } else if (value) {
          frontmatter.tags = [String(value)];
        }
        break;
      default:
        break;
    }
  }

  return { frontmatter, body };
};

const stripMarkdown = (body: string) =>
  body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[#>*_~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildSummary = (body: string) => {
  const cleaned = stripMarkdown(body);
  if (cleaned.length <= 160) {
    return cleaned;
  }
  return `${cleaned.slice(0, 157).trim()}...`;
};

const parsePost = (raw: string, filePath: string): Post => {
  const { frontmatter, body } = parseFrontmatter(raw);
  const fileSlug = filePath.split("/").pop()?.replace(/\.md$/, "") ?? "note";

  return {
    slug: frontmatter.slug ?? fileSlug,
    title: frontmatter.title ?? "Untitled note",
    date: frontmatter.date ?? "2026-01-01",
    summary: frontmatter.summary ?? buildSummary(body),
    tags: frontmatter.tags ?? [],
    body,
  };
};

export const allPosts = Object.entries(modules)
  .map(([path, raw]) => parsePost(raw, path))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = (slug: string) => allPosts.find((post) => post.slug === slug);

export const formatDate = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
};
