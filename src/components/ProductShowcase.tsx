import Image from "next/image";

/**
 * Hero 右側のプロダクト・ショーケース。
 * ブラウザフレーム内に実プロダクトの画面を表示し、ステータスのタイトルを画像に浮かせる。
 * 「出荷している個人開発者」を一目で伝える視覚アンカー。
 */
export function ProductShowcase() {
  return (
    <div className="relative">
      {/* ブラウザフレーム */}
      <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface shadow-xl">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-surface-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-st-sell/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-st-store/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-st-live/70" />
          <span className="ml-2 truncate rounded-md bg-paper px-3 py-1 font-mono text-[0.62rem] tracking-[0.04em] text-ink/45">
            kaigo-dx.vercel.app
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/kaigo-dx/kaigo-dx-01.png"
            alt="kaigo-dx — 音声で介護記録を自動生成する B2B SaaS"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
      </div>

      {/* 画像に浮かぶステータス・タイトル */}
      <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-lg border border-ink/10 bg-surface px-4 py-2.5 shadow-lg">
        <span className="h-2 w-2 flex-none rounded-full bg-st-sell status-pulse" aria-hidden />
        <span className="font-mono text-[0.74rem] tracking-[0.02em] text-ink/85">
          kaigo-dx <span className="text-st-sell">/ 営業中</span>
        </span>
      </div>
    </div>
  );
}
