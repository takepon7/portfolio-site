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
  /** 公開URL（無ければ非リンク行＝準備中など） */
  url?: string;
  /** サムネイル画像パス（無ければプレースホルダ） */
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

function Thumbnail({ image, name }: { image?: string; name: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-[#2D2D2D]/08 bg-[#2D2D2D]/04 md:aspect-auto md:h-[58px]">
      {image ? (
        <Image
          src={image}
          alt={`${name} のスクリーンショット`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 92px"
        />
      ) : (
        <div className="flex h-full items-center justify-center font-mono text-[0.6rem] tracking-wider text-[#2D2D2D]/40">
          Coming Soon
        </div>
      )}
    </div>
  );
}

function RegistryRow({ item }: { item: WorkItem }) {
  const meta = STATUS_META[item.status];

  const inner = (
    <>
      {/* サムネイル（モバイル:上部 / デスクトップ:左端の小プレビュー） */}
      <Thumbnail image={item.image} name={item.name} />

      {/* ステータスバッジ */}
      <span
        className={`flex items-center gap-2 font-mono text-[0.76rem] font-medium tracking-[0.02em] ${meta.tone}`}
      >
        <span
          className={`h-2.5 w-2.5 flex-none rounded-full ${meta.dot} ${meta.tone} ${
            meta.pulse ? "status-pulse" : ""
          }`}
          aria-hidden
        />
        {meta.label}
      </span>

      {/* 本文 */}
      <div>
        <div className="text-[1.1rem] font-medium leading-snug tracking-[0.01em] text-[#2D2D2D]">
          {item.name}
        </div>
        <p className="mt-1 text-[0.85rem] leading-relaxed text-[#2D2D2D]/65">
          {item.desc}
        </p>
        <span className="mt-2.5 inline-block rounded-full border border-[#2D2D2D]/15 px-2.5 py-0.5 font-mono text-[0.64rem] tracking-[0.06em] text-[#2D2D2D]/60">
          {item.domain}
        </span>
      </div>

      {/* スタック */}
      <div className="font-mono text-[0.72rem] leading-relaxed text-[#2D2D2D]/55">
        {item.stack.join(" / ")}
      </div>

      {/* 矢印（リンク行のみ・デスクトップ） */}
      <span
        className={`hidden justify-self-end text-lg transition-transform md:block ${
          item.url ? "text-[#2D2D2D]/25 group-hover:translate-x-1 group-hover:text-accent" : "text-transparent"
        }`}
        aria-hidden
      >
        →
      </span>
    </>
  );

  const gridClass =
    "group grid grid-cols-1 items-start gap-3 border-b border-[#2D2D2D]/10 py-6 transition-colors md:grid-cols-[92px_120px_1fr_150px_18px] md:items-center md:gap-5 md:py-7";

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${gridClass} hover:bg-[#2D2D2D]/04`}
      >
        {inner}
      </a>
    );
  }

  return <div className={gridClass}>{inner}</div>;
}

export function StatusRegistry({ items }: { items: WorkItem[] }) {
  return (
    <div className="border-t border-[#2D2D2D]/10">
      {items.map((item) => (
        <RegistryRow key={item.name} item={item} />
      ))}
    </div>
  );
}
