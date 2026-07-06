import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string; // 更新日（任意）
  tags: string[];
  draft: boolean;
  body: string;
}

const SAFE_SLUG_REGEX = /^[a-z0-9-]+$/;

export function getBlogPost(slug: string): BlogPost | null {
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
    updated: (data.updated as string) || undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    draft: data.draft === true,
    body: content.trim(),
  };
}

/** 公開記事のみ、日付降順。draft: true は一覧・sitemap・RSS・静的生成すべてから除外。 */
export function listBlogPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getBlogPost(f.replace(/\.md$/, "")))
    .filter((p): p is BlogPost => p !== null && !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogSlugs(): string[] {
  return listBlogPosts().map((p) => p.slug);
}
