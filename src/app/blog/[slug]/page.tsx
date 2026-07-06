import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import { getBlogPost, getBlogSlugs, getRelatedPosts } from "@/lib/blog";
import { ShareButtons } from "@/components/ShareButtons";
import { SITE_URL } from "@/lib/site";

/** 本文のh2見出しから目次を組み立てる（rehype-slug と同じ github-slugger でIDを一致させる） */
function extractToc(body: string): { text: string; id: string }[] {
  const slugger = new GithubSlugger();
  const toc: { text: string; id: string }[] = [];
  let inCodeBlock = false;
  for (const line of body.split("\n")) {
    if (/^```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock || !/^## /.test(line)) continue;
    const text = line
      .replace(/^## /, "")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .trim();
    toc.push({ text, id: slugger.slug(text) });
  }
  return toc;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || post.draft) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || post.draft) notFound();

  const relatedPosts = getRelatedPosts(slug);
  const toc = extractToc(post.body);
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "ja",
    keywords: post.tags.join(", "),
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Ryosuke Takeda",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-paper pb-24 sm:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/blog"
            className="text-sm tracking-[0.06em] text-ink/80 transition-colors hover:text-accent"
          >
            ← Blog
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[0.74rem] font-medium tracking-[0.04em] text-white transition-opacity hover:opacity-90"
          >
            30分相談
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <time
            dateTime={post.date}
            className="font-mono text-[0.72rem] tracking-[0.08em] text-ink/50"
          >
            {post.date}
          </time>
          {post.updated && (
            <span className="font-mono text-[0.72rem] tracking-[0.08em] text-ink/40">
              （更新: {post.updated}）
            </span>
          )}
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink/06 px-2.5 py-0.5 font-mono text-[0.64rem] tracking-[0.06em] text-ink/55"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mb-10 text-[1.45rem] font-bold leading-[1.6] tracking-[0.01em] text-ink sm:text-[1.75rem]">
          {post.title}
        </h1>

        {/* 目次（h2が3つ以上ある記事のみ） */}
        {toc.length >= 3 && (
          <nav
            aria-label="目次"
            className="mb-12 rounded-2xl border border-ink/08 bg-surface p-6 sm:p-7"
          >
            <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-ink/45">
              INDEX
            </p>
            <ol className="space-y-2">
              {toc.map((heading, i) => (
                <li key={heading.id} className="flex gap-3">
                  <span className="font-mono text-[0.7rem] leading-[1.9] text-ink/35 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${heading.id}`}
                    className="text-[0.9rem] leading-[1.9] tracking-[0.01em] text-ink/75 transition-colors hover:text-accent"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:mt-10 prose-headings:mb-4 prose-headings:font-medium prose-headings:tracking-wide prose-headings:text-ink prose-h2:text-[1.15rem] sm:prose-h2:text-[1.25rem] prose-h3:text-[1.02rem] sm:prose-h3:text-[1.08rem] prose-p:text-[0.9875rem] sm:prose-p:text-[1rem] prose-p:leading-[2.2] prose-p:tracking-[0.02em] prose-p:text-ink/90 prose-li:leading-[2.15] prose-li:tracking-[0.01em] prose-li:text-ink/90 prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-strong:font-semibold prose-code:text-ink/80 prose-code:before:content-none prose-code:after:content-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
            {post.body}
          </ReactMarkdown>
        </div>

        {/* シェア導線 */}
        <div className="mt-12">
          <ShareButtons url={articleUrl} title={post.title} />
        </div>

        {/* 著者 */}
        <aside className="mt-16 border-t border-ink/08 pt-10">
          <p className="mb-2 font-mono text-[0.68rem] tracking-[0.14em] text-ink/45">
            AUTHOR
          </p>
          <p className="text-[0.92rem] leading-[2.1] tracking-[0.02em] text-ink/80">
            Ryosuke Takeda ── 本業で人事16年目（採用・評価・労務・組織設計、Workday / ServiceNow 導入PM）。複業で、現場の課題をAIプロダクトとして実装しています。
          </p>
        </aside>

        {/* サービス導線（ブログ → 30分相談 の一本道） */}
        <div className="mt-10 rounded-2xl border border-ink/08 bg-surface p-7 sm:p-8">
          <p className="mb-2 font-mono text-[0.68rem] tracking-[0.12em] text-accent-gold">
            Sakigake Workforce
          </p>
          <p className="mb-5 text-[0.92rem] leading-[2.05] text-ink/80">
            Capability起点の要員計画・実行管理SaaSを開発しています。要員計画の運用にお悩みの方は、30分のオンライン相談で現場の言葉から一緒に整理します。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[0.86rem] font-medium tracking-[0.03em] text-white shadow-sm transition-opacity hover:opacity-90"
            >
              30分オンラインを予約
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-[0.86rem] font-medium tracking-[0.03em] text-ink/75 transition-colors hover:border-accent hover:text-accent"
            >
              サービスの詳細を見る
            </Link>
          </div>
        </div>

        {/* 関連記事（タグベースの内部リンク） */}
        {relatedPosts.length > 0 && (
          <nav aria-label="関連記事" className="mt-14">
            <p className="mb-5 font-mono text-[0.68rem] tracking-[0.14em] text-ink/45">
              RELATED
            </p>
            <ul className="space-y-4">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block rounded-2xl border border-ink/08 bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/35 hover:bg-hover"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <time
                        dateTime={related.date}
                        className="font-mono text-[0.68rem] tracking-[0.08em] text-ink/45"
                      >
                        {related.date}
                      </time>
                      {related.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-ink/06 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.06em] text-ink/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.95rem] font-medium leading-[1.85] tracking-[0.01em] text-ink transition-colors group-hover:text-accent">
                      {related.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </div>
  );
}
