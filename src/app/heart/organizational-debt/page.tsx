import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getArticle } from "@/lib/heart";
import "katex/dist/katex.min.css";

const NOTE_URL = "https://note.com/";

export default async function OrganizationalDebtPage() {
  const article = getArticle("organizational-debt");
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-paper pb-24 sm:pb-32">
      <header className="border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/#blog"
            className="text-sm tracking-[0.2em] text-ink/80 transition-colors hover:text-accent-gold"
          >
            ← Blog
          </Link>
          <Link
            href="/"
            className="text-sm tracking-[0.2em] text-ink/80 transition-colors hover:text-accent-gold"
          >
            BUILD & CULTURE
          </Link>
        </nav>
      </header>

      <article className="heart-article mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <h1 className="mb-4 text-[1.45rem] font-medium leading-[1.5] tracking-wide text-ink sm:text-[1.75rem] sm:leading-[1.55]">
          {article.title}
        </h1>
        <p className="mb-10 text-sm tracking-[0.02em] text-ink/55">
          {article.date}
        </p>

        <div className="prose prose-lg max-w-none prose-headings:mt-10 prose-headings:mb-4 prose-headings:font-medium prose-headings:tracking-wide prose-headings:text-ink prose-headings:text-[1.05rem] sm:prose-headings:text-[1.1rem] prose-p:text-[0.9875rem] sm:prose-p:text-[1rem] prose-p:leading-[2.2] prose-p:tracking-[0.02em] prose-p:text-ink/90 prose-li:leading-[2.15] prose-li:tracking-[0.01em] prose-a:text-accent-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-strong:font-medium [&_.katex]:text-ink/90">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {article.body}
          </ReactMarkdown>
        </div>

        <aside className="mt-16 border-t border-ink/08 pt-10">
          <p className="mb-2 text-xs tracking-[0.2em] text-ink/45">
            AUTHOR
          </p>
          <p className="text-[0.9625rem] leading-[2.15] tracking-[0.02em] text-ink/82">
            システムエンジニアリングの思考を組織開発に応用する、人事プロフェッショナル。再現性と測定可能性を軸に、人と組織が加速する仕組みづくりを実務と執筆で展開しています。
          </p>
        </aside>

        <div className="mt-12 rounded-2xl border border-ink/08 bg-paper px-6 py-5 sm:px-7 sm:py-6 md:rounded-2xl">
          <p className="text-[0.9rem] leading-[2.05] tracking-[0.02em] text-ink/75">
            AIコーディングの試行錯誤や、より具体的な人事の実務知見は
            <Link
              href={NOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-gold transition-colors hover:text-ink/80"
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
