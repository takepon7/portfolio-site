"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState<string>("");

  // スクロールスパイ：表示中のセクションをナビでハイライト
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function openPalette() {
    window.dispatchEvent(new Event("open-command-palette"));
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8 sm:py-4 md:px-12">
        <Link
          href="#top"
          className="flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-ink transition-opacity hover:opacity-70 sm:text-base"
        >
          <span className="h-2 w-2 rounded-full bg-accent status-pulse" aria-hidden />
          Ryosuke Takeda
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-4 sm:flex md:gap-7">
            {NAV_ITEMS.map(({ label, id }) => (
              <Link
                key={label}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`font-mono text-[0.7rem] tracking-[0.04em] transition-colors sm:text-[0.78rem] ${
                  active === id ? "text-accent" : "text-ink/70 hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ⌘K（デスクトップ） */}
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-1.5 rounded-md border border-ink/15 px-2.5 py-1 font-mono text-[0.66rem] text-ink/55 transition-colors hover:border-accent hover:text-accent sm:flex"
            aria-label="コマンドパレットを開く"
          >
            <span aria-hidden>⌘</span>K
          </button>

          {/* 検索アイコン（モバイル） */}
          <button
            type="button"
            onClick={openPalette}
            className="flex h-8 w-8 items-center justify-center rounded-md text-ink/60 transition-colors hover:bg-ink/05 hover:text-accent sm:hidden"
            aria-label="コマンドパレットを開く"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
