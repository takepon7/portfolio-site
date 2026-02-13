import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";

const GITHUB_SUPPLEMENT_APP =
  "https://github.com/takepon7/personal-growth-apps/tree/main/SupplementApp";
const GITHUB_PORTFOLIO = "https://github.com/takepon7"; // このサイトのソースリポジトリがあればURLを差し替えてください

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* ナビゲーション */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2D2D2D]/10 bg-[#F9F8F6]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8 sm:py-5 md:px-12">
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.2em] text-[#2D2D2D] transition-opacity hover:opacity-70 sm:text-sm md:text-base"
          >
            LOGIC & HEART
          </Link>
          <div className="flex gap-4 sm:gap-8 md:gap-10">
            <Link
              href="#logic"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              LOGIC (DEV)
            </Link>
            <Link
              href="#heart"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              HEART (HR)
            </Link>
            <Link
              href="#profile"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              PROFILE
            </Link>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <main className="relative pt-[4.5rem] pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            {/* コピーエリア */}
            <div className="flex flex-col justify-center space-y-8 sm:space-y-10 md:space-y-12">
              <h1 className="text-[1.75rem] font-medium leading-[1.45] tracking-wide text-[#2D2D2D] sm:text-[2.25rem] sm:leading-[1.5] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
                ロジックで組み、
                <br />
                心で動かす。
              </h1>
              <p className="max-w-lg text-[0.95rem] tracking-[0.01em] leading-[2.1] text-[#2D2D2D]/85 sm:text-base sm:leading-[2.15] md:leading-[2.2]">
                アプリケーション開発という論理の構築と、人事哲学という組織の血流。両輪を回すことで、再現性のある成長の方程式を実装します。
              </p>
            </div>

            {/* ヒーロー画像 */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(45,45,45,0.12),0_12px_24px_-8px_rgba(45,45,45,0.08)] sm:max-w-lg md:rounded-3xl">
                <Image
                  src="/hero-image.png"
                  alt=""
                  width={600}
                  height={400}
                  priority
                  className="aspect-[3/2] w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Works (LOGIC) */}
      <section id="logic" className="py-16 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
              Featured Works (LOGIC)
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <FadeInSection delay={80}>
              <Link
                href={GITHUB_SUPPLEMENT_APP}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-[#F9F8F6] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0EDE8] sm:p-8 md:p-10 md:rounded-3xl"
              >
                <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] transition-colors group-hover:text-[#2D2D2D] sm:text-lg md:text-xl sm:leading-[1.45]">
                  Supplement Management System
                </h3>
                <p className="mb-3 text-[0.9rem] tracking-[0.02em] leading-[2.05] text-[#2D2D2D]/75 sm:text-[0.95rem] sm:leading-[2.1]">
                  人事による、AIコーディングへの挑戦。
                </p>
                <p className="text-[0.9rem] tracking-[0.01em] leading-[2.1] text-[#2D2D2D]/80 sm:text-[0.95rem] sm:leading-[2.15]">
                  「エンジニアリングは専門外」という境界線が、AIによって消えようとしています。趣味の筋トレとサプリメント摂取をより快適にするために、人事である私がAI（Cursor）を相棒に初めて本格的なコーディングに挑戦して作り上げたのがこのアプリです。興味のある分野から、まず手を動かし、実装まで辿り着く。そのプロセス自体を形にしました。
                </p>
              </Link>
            </FadeInSection>
            <FadeInSection delay={160}>
              <Link
                href={GITHUB_PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-[#F9F8F6] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0EDE8] sm:p-8 md:p-10 md:rounded-3xl"
              >
                <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] transition-colors group-hover:text-[#2D2D2D] sm:text-lg md:text-xl sm:leading-[1.45]">
                  Logic & Heart Portfolio (This Site)
                </h3>
                <p className="mb-3 text-[0.9rem] tracking-[0.02em] leading-[2.05] text-[#2D2D2D]/75 sm:text-[0.95rem] sm:leading-[2.1]">
                  「まず、やってみる」を公開する場所。
                </p>
                <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 sm:text-[0.95rem] sm:leading-[2.1]">
                  人事の哲学と、AIを駆使した自作アプリ。この二つを一つのサイトにまとめたのは、職種に縛られず「やりたいことを形にする」今の時代の足跡を残すためです。技術スタックはNext.js。AIとの対話を通じて、一歩ずつビルドしています。
                </p>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Insights (HEART) */}
      <section id="heart" className="py-16 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
              Insights (HEART)
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <FadeInSection delay={80}>
              <Link
                href="/heart/business-growth-equation"
                className="group block rounded-2xl bg-[#F9F8F6] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#F0EDE8] hover:opacity-[0.98] sm:p-8 md:p-10 md:rounded-3xl"
              >
                <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] transition-colors group-hover:text-[#2D2D2D] sm:text-lg sm:leading-[1.45] md:text-[1.15rem] md:leading-[1.5]">
                  「事業成長の方程式」への挑戦：人事の私が、あえてコードを書く理由
                </h3>
                <p className="mb-3 text-[0.9rem] tracking-[0.02em] leading-[2.05] text-[#2D2D2D]/75 sm:text-[0.95rem] sm:leading-[2.1]">
                  完璧な戦略やシステムがあるのに、なぜかうまくいかない。そんな時は、「熱量」という変数が少し不足しているのかもしれません。
                </p>
                <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 transition-colors duration-300 group-hover:text-[#2D2D2D]/90 sm:text-[0.95rem] sm:leading-[2.1]">
                  人と組織が加速する仕組みの作り方。論理を組織に適用した知見を、記事でやわらかく紐解いています。
                </p>
              </Link>
            </FadeInSection>
            <FadeInSection delay={160}>
              <Link
                href="/heart/organizational-debt"
                className="group block rounded-2xl bg-[#F9F8F6] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#F0EDE8] hover:opacity-[0.98] sm:p-8 md:p-10 md:rounded-3xl"
              >
                <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] transition-colors group-hover:text-[#2D2D2D] sm:text-lg sm:leading-[1.45] md:text-[1.15rem] md:leading-[1.5]">
                  組織における「技術的負債」の正体：見えない借金をどう返すか
                </h3>
                <p className="mb-3 text-[0.9rem] tracking-[0.02em] leading-[2.05] text-[#2D2D2D]/75 sm:text-[0.95rem] sm:leading-[2.1]">
                  急成長の中で「とりあえず」と判断したこと。それは「技術的負債」のように、組織の成長痛として蓄積されていることがあります。
                </p>
                <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 transition-colors duration-300 group-hover:text-[#2D2D2D]/90 sm:text-[0.95rem] sm:leading-[2.1]">
                  エンジニアリングの概念を借りると、今の苦しさが説明できるかもしれません。見えない借金を、どう返すかのヒントを記事で提案しています。
                </p>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Profile */}
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
    </div>
  );
}
