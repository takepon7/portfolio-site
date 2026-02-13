"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FadeInSection } from "@/components/FadeInSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const PROFILE_IMAGE = "/images/profile/profile-concept.jpg";

/**
 * トップページ（/）でのみ表示するプロフィールセクション。
 * 記事ページなどでは表示しない。
 */
export function ProfileSection() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <ScrollRevealSection
      id="profile"
      className="bg-[#F9F8F6] py-16 sm:py-24 md:py-28 lg:py-32"
      borderTop={true}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
        <FadeInSection>
            <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
            PROFILE
          </p>
        </FadeInSection>

        <div className="flex flex-col gap-10 md:grid md:grid-cols-[1fr_1.2fr] md:items-start md:gap-12 lg:gap-16">
          <FadeInSection delay={80}>
            <div className="relative w-full max-w-sm md:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[#2D2D2D]/08 bg-[#F9F8F6]">
                <Image
                  src={PROFILE_IMAGE}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  unoptimized
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={120}>
            <div className="flex flex-col space-y-6 sm:space-y-8">
              <h2 className="text-[1.1rem] font-medium tracking-[0.02em] text-[#2D2D2D] sm:text-[1.2rem]">
                Build & Culture について
              </h2>
              <p className="text-[0.95rem] tracking-[0.02em] leading-[2.2] text-[#2D2D2D]/85 sm:text-[1rem] sm:leading-[2.25]">
                東京都板橋区を拠点に、人事として組織づくりと人材開発に携わっています。専門は人事でしたが、AIコーディング（Cursor）との出会いをきっかけに、開発の世界にも少しずつ足を踏み入れています。
              </p>
              <p className="text-[0.95rem] tracking-[0.02em] leading-[2.2] text-[#2D2D2D]/85 sm:text-[1rem] sm:leading-[2.25]">
                「Build & Culture」は、仕組みをつくること。文化を育てること。等身大の足跡を、このサイトに残しています。
              </p>
              <p className="pt-2 text-right text-xs tracking-[0.18em] text-[#2D2D2D]/40 sm:text-[#2D2D2D]/45">
                Itabashi, Tokyo
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
