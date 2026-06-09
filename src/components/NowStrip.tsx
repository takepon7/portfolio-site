/**
 * Hero直下の build in public 入口。
 * 進行中プロダクトと、その前段検証（PoC）を1ブロックで提示する。
 */
export function NowStrip() {
  return (
    <div className="mt-10 flex flex-col gap-3 rounded border border-ink/12 border-l-[3px] border-l-accent bg-ink/03 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4 sm:px-6 sm:py-5">
      <span className="flex-none font-mono text-[0.72rem] font-bold tracking-[0.12em] text-accent">
        {"// NOW"}
      </span>
      <div className="min-w-0">
        <p className="text-[0.92rem] leading-relaxed text-ink/90">
          HRシステムの導入・移行・運用ドキュメントをAIで加速するプロダクトを設計中。元People
          Opsの現場知見そのものを武器にした、次のDXです。
        </p>
        <p className="mt-2 font-mono text-[0.72rem] leading-relaxed text-ink/55">
          前段の検証：人事評価サマリ自動生成のPoCで関連工数を約50%削減
        </p>
      </div>
    </div>
  );
}
