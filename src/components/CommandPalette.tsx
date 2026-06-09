"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Command = {
  group: string;
  label: string;
  hint?: string;
  run: () => void;
};

function go(hash: string) {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", hash);
  } else {
    window.location.assign("/" + hash);
  }
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const COMMANDS: Command[] = [
  { group: "移動", label: "Work — つくっているプロダクト", hint: "01", run: () => go("#work") },
  { group: "移動", label: "About — 現場とシステムのあいだ", hint: "02", run: () => go("#about") },
  { group: "移動", label: "Writing — 開発記事とエッセイ", hint: "03", run: () => go("#writing") },
  { group: "移動", label: "Contact — 相談する", hint: "04", run: () => go("#contact") },
  { group: "プロダクト", label: "biz-english-master", run: () => openExternal("https://biz-english-master.com") },
  { group: "プロダクト", label: "kaigo-dx", run: () => openExternal("https://kaigo-dx.vercel.app") },
  { group: "プロダクト", label: "papatto-hp", run: () => openExternal("https://papatto-hp.com") },
  { group: "プロダクト", label: "そいね / Soine", run: () => openExternal("https://apps.apple.com/jp/app/%E3%81%9D%E3%81%84%E3%81%AD/id6775675437") },
  { group: "リンク", label: "GitHub / takepon7", run: () => openExternal("https://github.com/takepon7") },
  { group: "リンク", label: "Qiita / takepon7", run: () => openExternal("https://qiita.com/takepon7") },
  { group: "リンク", label: "Zenn / takepon7", run: () => openExternal("https://zenn.dev/takepon7") },
  { group: "リンク", label: "X / @takepon_7", run: () => openExternal("https://x.com/takepon_7") },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q));
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    restoreFocusRef.current?.focus?.();
  }, []);

  // ⌘K / Ctrl+K で開閉、カスタムイベントでも開く
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    function onOpen() {
      restoreFocusRef.current = document.activeElement as HTMLElement;
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      restoreFocusRef.current = restoreFocusRef.current ?? (document.activeElement as HTMLElement);
      requestAnimationFrame(() => inputRef.current?.focus());
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = results[active];
      if (cmd) {
        close();
        cmd.run();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-ink/40 px-4 pt-[12vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="コマンドパレット"
      onClick={close}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-ink/10 bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onListKey}
      >
        <div className="flex items-center gap-3 border-b border-ink/10 px-4">
          <span className="font-mono text-[0.7rem] text-ink/40" aria-hidden>
            ⌘K
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="セクション・プロダクト・リンクへ移動…"
            className="w-full bg-transparent py-4 text-[0.95rem] text-ink placeholder:text-ink/40 focus:outline-none"
            aria-label="コマンドを検索"
          />
        </div>
        <ul className="max-h-[52vh] overflow-y-auto py-2">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center text-[0.85rem] text-ink/45">該当なし</li>
          )}
          {results.map((cmd, i) => {
            const showGroup = i === 0 || results[i - 1].group !== cmd.group;
            return (
              <li key={cmd.label}>
                {showGroup && (
                  <p className="px-4 pb-1 pt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink/40">
                    {cmd.group}
                  </p>
                )}
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    close();
                    cmd.run();
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[0.9rem] transition-colors ${
                    active === i ? "bg-accent/10 text-accent" : "text-ink/80"
                  }`}
                >
                  <span>{cmd.label}</span>
                  {cmd.hint && <span className="font-mono text-[0.66rem] text-ink/35">{cmd.hint}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
