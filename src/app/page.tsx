import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";
import { LogicProductCard } from "@/components/LogicProductCard";

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
              href="#logic"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Works
            </Link>
            <Link
              href="#blog"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              Blog
            </Link>
            <Link
              href="#profile"
              className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
            >
              PROFILE
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

      {/* ヒーローセクション */}
      <main className="relative pt-[4.5rem] pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            {/* コピーエリア */}
            <div className="flex flex-col justify-center space-y-8 sm:space-y-10 md:space-y-12">
              <h1 className="text-[1.75rem] font-medium leading-[1.45] tracking-wide text-[#2D2D2D] sm:text-[2.25rem] sm:leading-[1.5] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
                つくって、
                <br />
                育てる。
              </h1>
              <p className="max-w-lg text-[0.95rem] tracking-[0.01em] leading-[2.1] text-[#2D2D2D]/85 sm:text-base sm:leading-[2.15] md:leading-[2.2]">
                仕組みをつくり、文化を育てる。その両方を、このサイトに残しています。
              </p>
            </div>

            {/* ヒーロー画像 */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#2D2D2D]/06 shadow-[0_25px_50px_-12px_rgba(45,45,45,0.08),0_12px_24px_-8px_rgba(45,45,45,0.06)] sm:max-w-lg md:rounded-3xl">
                <Image
                  src="/images/hero/hero-main.jpg"
                  alt=""
                  width={800}
                  height={533}
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
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-10 text-sm tracking-[0.22em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-12 md:mb-16">
              Blog
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.href} delay={80 + i * 80}>
                <Link
                  href={post.href}
                  className="group block overflow-hidden rounded-2xl bg-[#F9F8F6] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#F0EDE8] hover:opacity-[0.98] md:rounded-3xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-105"
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
      </section>
    </div>
  );
}
