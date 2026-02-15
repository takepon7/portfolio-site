"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface LogicProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  href?: string;
}

export function LogicProductCard({
  title,
  subtitle,
  description,
  images,
  href,
}: LogicProductCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainError, setMainError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const currentSrc = images[selectedIndex];
  const hasImages = images.length > 0 && !mainError;

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasImages && currentSrc) setLightboxOpen(true);
  };

  const openLightboxWithIndex = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIndex(i);
    setLightboxOpen(true);
  };

  const cardContent = (
    <>
      <span className="mb-3 inline-block text-[0.7rem] tracking-[0.15em] text-[#2D2D2D]/50">
        In Development
      </span>
      <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] sm:text-lg sm:leading-[1.45]">
        {title}
      </h3>
      <p className="mb-3 text-[0.8rem] tracking-[0.02em] text-[#2D2D2D]/60">
        {subtitle}
      </p>

      {/* ギャラリー: メイン画像（クリックでライトボックス） */}
      <button
        type="button"
        onClick={openLightbox}
        className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50 text-left focus:outline-none focus:ring-2 focus:ring-[#B5A48B]/40"
        disabled={!hasImages}
        aria-label="画像を拡大表示"
      >
        {hasImages && currentSrc ? (
          <Image
            src={currentSrc}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setMainError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[0.85rem] tracking-wide text-[#2D2D2D]/40">
            Coming Soon
          </div>
        )}
      </button>

      {/* サムネイル一覧（クリックで選択＋ライトボックス） */}
      {images.length > 1 && !mainError && (
        <div className="mb-4 -mx-1 overflow-x-auto scrollbar-hide pr-6 sm:pr-0 sm:mx-0 sm:overflow-visible sm:flex sm:gap-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch]">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={(e) => openLightboxWithIndex(e, i)}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-opacity [scroll-snap-align:start] active:opacity-90 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#B5A48B]/40"
              aria-label={`画像 ${i + 1} を拡大表示`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain"
                sizes="56px"
              />
              {selectedIndex === i && (
                <span className="absolute inset-0 border-2 border-[#B5A48B] rounded-lg" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* ライトボックス（ポータルで body 直下に描画し、Link の外でクリックがリンクに飛ばないようにする） */}
      {typeof document !== "undefined" &&
        lightboxOpen &&
        currentSrc &&
        createPortal(
          <div
            ref={lightboxRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2D2D2D]/85 p-4"
            onClick={() => setLightboxOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                setLightboxOpen(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="画像を拡大表示"
            tabIndex={-1}
          >
            {/* 閉じるボタン（右上・明確な ✕ 閉じる） */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-[#2D2D2D] shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2D2D2D]/85"
              aria-label="閉じる"
            >
              <span className="text-lg font-medium" aria-hidden>✕</span>
              <span className="text-sm font-medium">閉じる</span>
            </button>
            {/* 画像エリア：クリックでリンクに飛ばない（オーバーレイのみ閉じる） */}
            <div
              className="relative h-[85vh] w-[90vw] max-w-4xl shrink-0 cursor-default"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <Image
                src={currentSrc}
                alt=""
                fill
                className="rounded-lg object-contain shadow-2xl"
                sizes="90vw"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                draggable={false}
              />
            </div>
          </div>,
          document.body
        )}

      <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 sm:text-[0.95rem] sm:leading-[2.1]">
        {description}
      </p>
    </>
  );

  // 拡大表示中は背後のメイン画面をスクロールさせない
  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // キーボードで Esc が効くようダイアログにフォーカス
    requestAnimationFrame(() => lightboxRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

  const className =
    "group block rounded-2xl border border-gray-100 bg-[#F9F8F6] p-6 transition-all duration-300 active:opacity-95 hover:bg-[#F0EDE8] sm:p-8 md:rounded-3xl";

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:-translate-y-0.5`}
      >
        {cardContent}
      </Link>
    );
  }

  return <div className={className}>{cardContent}</div>;
}
