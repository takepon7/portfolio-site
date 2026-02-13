"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const currentSrc = images[selectedIndex];
  const hasImages = images.length > 0 && !mainError;

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

      {/* ギャラリー: メイン画像（全体が収まるよう contain、余白は薄いグレー背景で統一） */}
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
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
      </div>

      {/* サムネイル一覧 */}
      {images.length > 1 && !mainError && (
        <div className="mb-4 flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedIndex(i);
              }}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#B5A48B]/40"
              aria-label={`画像 ${i + 1} を表示`}
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

      <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 sm:text-[0.95rem] sm:leading-[2.1]">
        {description}
      </p>
    </>
  );

  const className =
    "group block rounded-2xl border border-gray-100 bg-[#F9F8F6] p-6 transition-all duration-300 hover:bg-[#F0EDE8] sm:p-8 md:rounded-3xl";

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
