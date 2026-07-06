"use client";

import { useState } from "react";

const pillClass =
  "inline-flex items-center rounded-full border border-ink/15 px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.04em] text-ink/60 transition-colors hover:border-accent hover:text-accent";

/** 記事のシェア導線（X・はてなブックマーク・リンクコピー） */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const xHref = `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const hatenaHref = `https://b.hatena.ne.jp/entry/s/${url.replace(/^https:\/\//, "")}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボード不許可時は何もしない（ボタン表示は維持）
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink/45">
        SHARE
      </span>
      <a href={xHref} target="_blank" rel="noopener noreferrer" className={pillClass}>
        X でシェア ↗
      </a>
      <a href={hatenaHref} target="_blank" rel="noopener noreferrer" className={pillClass}>
        はてなブックマーク ↗
      </a>
      <button type="button" onClick={copyLink} className={pillClass}>
        {copied ? "コピーしました ✓" : "リンクをコピー"}
      </button>
    </div>
  );
}
