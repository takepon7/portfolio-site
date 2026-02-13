import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/heart");

export interface HeartArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string;
}

export function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

const SAFE_SLUG_REGEX = /^[a-z0-9-]+$/;

export function getArticle(slug: string): HeartArticle | null {
  if (!SAFE_SLUG_REGEX.test(slug)) return null;
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(CONTENT_DIR))) return null;
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    body: content.trim(),
  };
}
