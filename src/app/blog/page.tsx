import type { Metadata } from "next";
import Link from "next/link";
import { listBlogPosts } from "@/lib/blog";

const BLOG_TITLE = "Blog — 要員計画・人事DX・AI実装の記録";
const BLOG_DESCRIPTION =
  "要員計画・人事DX・AIプロダクト開発について、人事16年目の実務視点で書いています。Sakigake Workforce の開発記録も。";

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: "website",
    locale: "ja_JP",
  },
};

export default function BlogIndexPage() {
  const posts = listBlogPosts();

  return (
    <div className="min-h-screen bg-paper pb-24 sm:pb-32">
      <header className="border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/"
            className="text-sm tracking-[0.06em] text-ink/80 transition-colors hover:text-accent"
          >
            ← Ryosuke Takeda
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[0.74rem] font-medium tracking-[0.04em] text-white transition-opacity hover:opacity-90"
          >
            30分相談
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14 sm:px-8 sm:py-16">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
            Blog
          </span>
          <h1 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem]">
            要員計画・人事DX・AI実装の記録
          </h1>
        </div>
        <p className="mb-12 max-w-2xl text-[0.92rem] leading-[2.05] text-ink/70 sm:mb-14">
          人事16年目の実務視点で、要員計画・人事DX・AIプロダクト開発について書いています。
        </p>

        {posts.length === 0 ? (
          <p className="text-[0.9rem] text-ink/60">記事は準備中です。</p>
        ) : (
          <ul className="space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-ink/08 bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/35 hover:bg-hover sm:p-8"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <time
                      dateTime={post.date}
                      className="font-mono text-[0.7rem] tracking-[0.08em] text-ink/45"
                    >
                      {post.date}
                    </time>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink/06 px-2.5 py-0.5 font-mono text-[0.64rem] tracking-[0.06em] text-ink/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mb-2 text-[1.05rem] font-medium leading-[1.75] tracking-[0.01em] text-ink">
                    {post.title}
                  </h2>
                  <p className="text-[0.88rem] leading-[2] text-ink/65">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-block font-mono text-[0.7rem] tracking-[0.04em] text-ink/45 transition-colors group-hover:text-accent">
                    読む →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
