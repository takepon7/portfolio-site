"use client";

import { usePathname } from "next/navigation";
import { FadeInSection } from "@/components/FadeInSection";

/**
 * トップページ（/）でのみ表示するプロフィールセクション。
 * 記事ページなどでは表示しない。
 */
export function ProfileSection() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <section id="profile" className="py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-12">
        <FadeInSection>
          <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
            Profile
          </p>
        </FadeInSection>
        <FadeInSection delay={80}>
          <p className="text-[0.95rem] tracking-[0.02em] leading-[2.2] text-[#2D2D2D]/85 sm:text-[1rem] sm:leading-[2.25]">
            人事として働くかたわら、身体を動かすことやサプリメントの試行錯誤が日課です。アニメや本をゆっくり楽しむ静かな暮らしが好きで、ここ数年はAI（Cursor）と一緒にコードを書くのが新しい趣味になりました。専門外だった開発に、少しずつ手を伸ばしているところです。等身大の足跡を、このサイトに残しています。
          </p>
          <p className="mt-8 text-right text-xs tracking-[0.18em] text-[#2D2D2D]/40 sm:mt-10 sm:text-[#2D2D2D]/45">
            Itabashi, Tokyo
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
