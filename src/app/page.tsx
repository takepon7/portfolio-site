import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";
import { LogicProductCard } from "@/components/LogicProductCard";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const GITHUB_PERSONAL_GROWTH_APPS =
  "https://github.com/takepon7/personal-growth-apps";

const LOGIC_PRODUCTS = [
  {
    title: "Web占いアプリ",
    subtitle: "Web App",
    description:
      "生年月日や星座に基づいた、日々の指針を提案するWebサービス。Next.jsで構築。",
    images: ["/images/web-fortune/web-fortune-01.png", "/images/web-fortune/web-fortune-02.png"],
    href: undefined,
  },
  {
    title: "筋トレ記録アプリ",
    subtitle: "iOS App",
    description:
      "トレーニングと栄養管理をロジックで最適化するためのiOSアプリケーション。",
    images: [
      "/images/ios-training/ios-training-01.png",
      "/images/ios-training/ios-training-02.png",
      "/images/ios-training/ios-training-03.png",
    ],
    href: GITHUB_PERSONAL_GROWTH_APPS,
  },
  {
    title: "サプリメント管理アプリ",
    subtitle: "iOS App",
    description:
      "AIコーディングによる個人開発。自身の体調管理ロジックを反映した、ミニマルなサプリメント服用管理システム。",
    images: [
      "/images/ios-supplement/ios-supplement-01.png",
      "/images/ios-supplement/ios-supplement-02.png",
    ],
    href: GITHUB_PERSONAL_GROWTH_APPS,
  },
  {
    title: "英会話学習アプリ",
    subtitle: "iOS App",
    description:
      "AIを活用したフレーズ学習と発音練習を支援するiOSアプリケーション。",
    images: [
      "/images/ios-english/ios-english-01.png",
      "/images/ios-english/ios-english-02.png",
    ],
    href: GITHUB_PERSONAL_GROWTH_APPS,
  },
];

const blogPosts = [
  {
    title:
      "「事業成長の方程式」への挑戦：人事の私が、あえてコードを書く理由",
    href: "/heart/business-growth-equation",
    image: "/images/blog/growth-equation.jpg",
    lead:
      "完璧な戦略やシステムがあるのに、なぜかうまくいかない。そんな時は、「熱量」という変数が少し不足しているのかもしれません。",
    description:
      "人と組織が加速する仕組みの作り方。論理を組織に適用した知見を、記事でやわらかく紐解いています。",
  },
  {
    title:
      "組織における「技術的負債」の正体：見えない借金をどう返すか",
    href: "/heart/organizational-debt",
    image: "/images/blog/organizational-debt.jpg",
    lead:
      "急成長の中で「とりあえず」と判断したこと。それは「技術的負債」のように、組織の成長痛として蓄積されていることがあります。",
    description:
      "エンジニアリングの概念を借りると、今の苦しさが説明できるかもしれません。見えない借金を、どう返すかのヒントを記事で提案しています。",
  },
  {
    title:
      "組織を「正解」で上書きしない——事業成長のバグを見つける問い方",
    href: "/heart/redefining-organization",
    image: "/images/blog/redefining-org.jpg",
    lead:
      "世の中の「組織論の正解」を疑い、自社独自の熱中の源泉を定義し直す。事業を有機的に育てるための人事の視点。",
    description:
      "外の正解で上書きせず、自社の文脈で問い続ける。事業を長期的に育てる視点を、記事でまとめています。",
  },
  {
    title:
      "MVC（Minimum Viable Culture）——組織というプロダクトの「初期実装」",
    href: "/heart/minimum-viable-culture",
    image: "/images/blog/mvc-culture.jpg",
    lead:
      "プロダクト開発の「MVP」という概念を組織に。オーバーエンジニアリングを防ぎ、事業成長に合わせて文化を「実装」する人事の視点。",
    description:
      "人事もまた、アジャイルな開発者である。文化を小さく試し、育てる。Build & Culture の視点でまとめています。",
  },
];

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
            BUILD & CULTURE
          </Link>
          <div className="flex gap-4 sm:gap-8 md:gap-10">
            <Link
              href="#blog"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Blog
            </Link>
            <Link
              href="#works"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Works
            </Link>
            <Link
              href="#profile"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Profile
            </Link>
            <Link
              href="#contact"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション（理念文） */}
      <ScrollRevealSection
        className="relative bg-[#FCFCFB] pt-[4.5rem] pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
        scale={true}
        borderTop={false}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-10 text-left text-[1.4rem] font-medium tracking-[0.08em] text-[#2D2D2D] leading-tight sm:mb-12 sm:text-[1.75rem] md:mb-14 md:text-[2rem] md:tracking-[0.1em] lg:text-[2.25rem]">
              Build & Culture
              <span className="block mt-2 font-normal tracking-[0.04em] sm:mt-4 md:mt-5 md:text-[1.75rem] md:tracking-[0.06em] lg:text-[2rem]">
                / つくって、育てる。
              </span>
            </h1>
            <p className="max-w-[90vw] text-left text-[0.9375rem] leading-[2.4] tracking-[0.02em] text-[#2D2D2D] sm:max-w-none sm:text-[1rem] sm:leading-[2.5] md:text-[1.0625rem] md:leading-[2.6]">
              効率やロジックで仕組みを書き換え、対話と情熱で文化を編み直す。
              <br className="sm:hidden" />
              プロダクトをビルドすることと、組織を育てること。私の中では、その二つは分かちがたく繋がっています。
              <br className="sm:hidden" />
              どちらも、誰かの不便を心地よさに変えるための、終わりのないクラフトマンシップ。現場の体温を感じながら、確かな手触りのある未来を、つくって、育てる。
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Blog */}
      <ScrollRevealSection
        id="blog"
        className="bg-[#F9F8F6] pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-8 text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-10 sm:text-sm sm:tracking-[0.22em] md:mb-16">
              BLOG
            </p>
          </FadeInSection>
          <div className="grid gap-10 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.href} delay={80 + i * 80}>
                <Link
                  href={post.href}
                  className="group block overflow-hidden rounded-2xl bg-[#F9F8F6] transition-all duration-300 ease-out active:opacity-90 hover:-translate-y-0.5 hover:bg-[#F0EDE8] hover:opacity-[0.98] md:rounded-3xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-active:opacity-95 group-hover:scale-105 group-hover:brightness-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-10">
                    <h3 className="mb-2 text-base font-medium tracking-[0.02em] text-[#2D2D2D] transition-colors group-hover:text-[#2D2D2D] sm:text-lg sm:leading-[1.45] md:text-[1.15rem] md:leading-[1.5]">
                      {post.title}
                    </h3>
                    <p className="mb-3 text-[0.9rem] tracking-[0.02em] leading-[2.05] text-[#2D2D2D]/75 sm:text-[0.95rem] sm:leading-[2.1]">
                      {post.lead}
                    </p>
                    <p className="text-[0.9rem] tracking-[0.01em] leading-[2.05] text-[#2D2D2D]/80 transition-colors duration-300 group-hover:text-[#2D2D2D]/90 sm:text-[0.95rem] sm:leading-[2.1]">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* Works */}
      <ScrollRevealSection
        id="works"
        className="bg-[#F7F6F4] py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-8 text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-10 sm:text-sm sm:tracking-[0.22em] md:mb-16">
              WORKS
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            {LOGIC_PRODUCTS.map((product, i) => (
              <FadeInSection key={product.title} delay={80 + i * 40}>
                <LogicProductCard
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  images={product.images}
                  href={product.href}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </ScrollRevealSection>
    </div>
  );
}
