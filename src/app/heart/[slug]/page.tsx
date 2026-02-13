import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getArticle, getSlugs } from "@/lib/heart";
import "katex/dist/katex.min.css";

const NOTE_URL = "https://note.com/";

export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function HeartArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24 sm:pb-32">
      <header className="border-b border-[#2D2D2D]/10 bg-[#F9F8F6]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/#heart"
            className="text-sm tracking-[0.2em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B]"
          >
            ← Insights (HEART)
          </Link>
          <Link
            href="/"
            className="text-sm tracking-[0.2em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B]"
          >
            LOGIC & HEART
          </Link>
        </nav>
      </header>

      <article className="heart-article mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <h1 className="mb-4 text-[1.45rem] font-medium leading-[1.5] tracking-wide text-[#2D2D2D] sm:text-[1.75rem] sm:leading-[1.55]">
          {article.title}
        </h1>
        <p className="mb-10 text-sm tracking-[0.02em] text-[#2D2D2D]/55">
          {article.date}
        </p>

        <div className="prose prose-lg max-w-none prose-headings:mt-10 prose-headings:mb-4 prose-headings:font-medium prose-headings:tracking-wide prose-headings:text-[#2D2D2D] prose-headings:text-[1.05rem] sm:prose-headings:text-[1.1rem] prose-p:text-[0.9875rem] sm:prose-p:text-[1rem] prose-p:leading-[2.2] prose-p:tracking-[0.02em] prose-p:text-[#2D2D2D]/90 prose-li:leading-[2.15] prose-li:tracking-[0.01em] prose-a:text-[#B5A48B] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#2D2D2D] prose-strong:font-medium [&_.katex]:text-[#2D2D2D]/90">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {article.body}
          </ReactMarkdown>
        </div>

        <aside className="mt-16 border-t border-[#2D2D2D]/08 pt-10">
          <p className="mb-2 text-xs tracking-[0.2em] text-[#2D2D2D]/45">
            AUTHOR
          </p>
          <p className="text-[0.9625rem] leading-[2.15] tracking-[0.02em] text-[#2D2D2D]/82">
            システムエンジニアリングの思考を組織開発に応用する、人事プロフェッショナル。再現性と測定可能性を軸に、人と組織が加速する仕組みづくりを実務と執筆で展開しています。
          </p>
        </aside>

        <div className="mt-12 rounded-2xl border border-[#2D2D2D]/08 bg-[#F9F8F6] px-6 py-5 sm:px-7 sm:py-6 md:rounded-2xl">
          <p className="text-[0.9rem] leading-[2.05] tracking-[0.02em] text-[#2D2D2D]/75">
            AIコーディングの試行錯誤や、より具体的な人事の実務知見は
            <Link
              href={NOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#B5A48B] transition-colors hover:text-[#2D2D2D]/80"
            >
              note
            </Link>
            でゆるやかに発信しています。
          </p>
        </div>
      </article>
    </div>
  );
}
