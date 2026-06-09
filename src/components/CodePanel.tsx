"use client";

import { useEffect, useState } from "react";

type Line = { text: string; tone: "prompt" | "ok" | "info" | "final" };

const LINES: Line[] = [
  { text: "$ npm run build", tone: "prompt" },
  { text: "▲ Next.js 16 — compiled successfully", tone: "info" },
  { text: "✓ works: 5 products / 4 statuses", tone: "ok" },
  { text: "✓ a11y: focus-visible · reduced-motion", tone: "ok" },
  { text: "$ vercel deploy --prod", tone: "prompt" },
  { text: "✓ shipped — 業務の痛みを、システムで解く", tone: "final" },
];

const TONE_CLASS: Record<Line["tone"], string> = {
  prompt: "text-ink/45",
  info: "text-ink/70",
  ok: "text-accent",
  final: "text-ink font-medium",
};

export function CodePanel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const id = setTimeout(() => setCount(LINES.length), 0);
      return () => clearTimeout(id);
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= LINES.length) clearInterval(id);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="overflow-hidden rounded-xl border border-ink/10 bg-surface-2 shadow-sm"
    >
      {/* タイトルバー */}
      <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-st-sell/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-st-store/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-st-live/70" />
        <span className="ml-2 font-mono text-[0.66rem] tracking-[0.06em] text-ink/40">
          ~/portfolio — zsh
        </span>
      </div>
      {/* 本文 */}
      <div className="space-y-1.5 px-4 py-4 font-mono text-[0.74rem] leading-relaxed">
        {LINES.slice(0, count).map((line, i) => (
          <p key={line.text} className={TONE_CLASS[line.tone]}>
            {line.text}
            {i === count - 1 && count < LINES.length && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[0.5em] translate-y-[1px] bg-accent status-pulse align-middle" />
            )}
          </p>
        ))}
        {count >= LINES.length && (
          <p className="text-ink/45">
            $ <span className="ml-0.5 inline-block h-[0.9em] w-[0.5em] translate-y-[1px] bg-accent status-pulse align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}
