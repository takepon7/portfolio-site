/**
 * Hero の背景アート。微細なドットグリッドと、ゆっくり漂う2つのオーラ（緑＝アクセント / ゴールド）。
 * テキストの可読性を保つため低不透明度・blur で奥に敷く。pointer-events なし。
 * 動きは globals.css のキーフレームで、prefers-reduced-motion 時は自動停止する。
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="hero-aura hero-aura-1" />
      <div className="hero-aura hero-aura-2" />
    </div>
  );
}
