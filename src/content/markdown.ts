import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
  mangle: false,
  headerIds: false,
});

export const renderMarkdown = (input: string) => marked.parse(input) as string;
