import Image from "next/image";

export type WorkStatus = "live" | "store" | "selling" | "prep";

export interface WorkItem {
  /** プロダクト名（表示・key兼用） */
  name: string;
  /** 機能的ステータス（色と稼働ドットに対応） */
  status: WorkStatus;
  /** ドメイン / 区分（例: 英語学習 / B2C） */
  domain: string;
  /** 一行説明 */
  desc: string;
  /** 技術スタック */
  stack: string[];
  /** 公開URL（無ければ非リンク＝準備中など） */
  url?: string;
  /** スクリーンショット画像パス（無ければプレースホルダ） */
  image?: string;
}

/** ステータスごとの和名ラベル・色クラス・稼働パルス有無を一元管理 */
const STATUS_META: Record<
  WorkStatus,
  { label: string; tone: string; dot: string; pulse: boolean }
> = {
  live: { label: "運用中", tone: "text-st-live", dot: "bg-st-live", pulse: true },
  store: { label: "配信中", tone: "text-st-store", dot: "bg-st-store", pulse: true },
  selling: { label: "営業中", tone: "text-st-sell", dot: "bg-st-sell", pulse: false },
  prep: { label: "準備中", tone: "text-st-prep", dot: "bg-st-prep", pulse: false },
};

function ProductCard({ item }: { item: WorkItem }) {
  const meta = STATUS_META[item.status];

  const inner = (
    <>
      {/* プロダクト画像（大きく・はっきり） */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-3">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.name} の画面`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-[0.8rem] tracking-wider text-ink/35">
            Coming Soon
          </div>
        )}

        {/* ステータスバッジ（画像に浮かぶ） */}
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-ink/08 bg-surface/90 px-2.5 py-1 font-mono text-[0.68rem] font-medium shadow-sm backdrop-blur ${meta.tone}`}
        >
          <span
            className={`h-2 w-2 flex-none rounded-full ${meta.dot} ${meta.tone} ${meta.pulse ? "status-pulse" : ""}`}
            aria-hidden
          />
          {meta.label}
        </span>
      </div>

      {/* 本文 */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[1.1rem] font-medium tracking-[0.01em] text-ink">
            {item.name}
          </h3>
          {item.url && (
            <span
              className="flex-none text-lg text-ink/25 transition-transform group-hover:translate-x-1 group-hover:text-accent"
              aria-hidden
            >
              →
            </span>
          )}
        </div>
        <span className="mt-2 inline-block rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[0.64rem] tracking-[0.06em] text-ink/60">
          {item.domain}
        </span>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/70">{item.desc}</p>
        <p className="mt-4 font-mono text-[0.72rem] leading-relaxed text-ink/50">
          {item.stack.join(" / ")}
        </p>
      </div>
    </>
  );

  const cardClass =
    "group block overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function StatusRegistry({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
      {items.map((item) => (
        <ProductCard key={item.name} item={item} />
      ))}
    </div>
  );
}
