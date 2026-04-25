import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import { LogicProductCard } from "@/components/LogicProductCard";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";

const WORKS = [
  {
    title: "介護DXアシスト",
    subtitle: "BtoB SaaS（商用）",
    description:
      "音声入力で介護記録を自動生成するBtoB SaaS。Next.js / Supabase / Stripe / Claude APIを用いてゼロから単独開発。月額サブスクリプション決済・テナント分離・AI記録生成を実装。",
    images: [
      "/images/kaigo-dx/kaigo-dx-01.png",
      "/images/kaigo-dx/kaigo-dx-02.png",
    ],
    href: "https://kaigo-dx.vercel.app",
  },
  {
    title: "人事評価AI自動化（PoC）",
    subtitle: "社内AI実装",
    description:
      "カレンダー・週報データとClaude APIを連携し、マネジメント層の評価サマリーを自動生成。人事関連工数を約50%削減するPoCを成功裏に確立。",
    images: ["/images/ai-hr/ai-hr-concept.svg"],
    href: undefined,
  },
  {
    title: "Workday / ServiceNow 全社導入PM",
    subtitle: "グローバルSaaS導入",
    description:
      "Workday（HCM/LMS）・ServiceNowの全社導入をエンドツーエンドで主導。15名以上の部門横断チームを統括し、要件定義・ベンダーマネジメント・データ移行を完遂。",
    images: ["/images/pm-works/pm-concept.svg"],
    href: undefined,
  },
];

const ABOUT_CARDS = [
  {
    title: "ドメイン知識",
    body: "人事責任者（VP of People）として、採用・評価・労務・組織設計の業務フローを深く理解。現場の痛みを誰よりもわかるからこそ、本質的なシステム要件を定義できる。",
  },
  {
    title: "フルスタック開発",
    body: "Next.js / TypeScript / Supabase / Stripe APIを用いた商用レベルのBtoB SaaS開発を単独で完遂。要件定義・DB設計・認証・決済・AIインテグレーションまで一気通貫。",
  },
  {
    title: "AI実装",
    body: "Claude API・OpenAI Whisperを活用した業務自動化システムを設計・実装。LLMを「使う」だけでなく、プロダクトに組み込む実装力を持つ。",
  },
];

const SKILLS = [
  { category: "フロントエンド", items: ["Next.js", "TypeScript", "Tailwind CSS", "React"] },
  { category: "バックエンド・DB", items: ["Supabase", "PostgreSQL", "Node.js", "REST API"] },
  { category: "AI・LLM", items: ["Claude API", "OpenAI Whisper", "RAG", "Prompt Engineering"] },
  { category: "決済・認証", items: ["Stripe API", "Supabase Auth", "JWT", "RLS"] },
  { category: "SaaS導入PM", items: ["Workday（HCM/LMS）", "ServiceNow", "要件定義", "データ移行"] },
  { category: "その他", items: ["Claude Code", "GitHub", "Vercel", "アジャイル開発"] },
];

const blogPosts = [
  {
    title: "人事がClaude Codeで介護記録SaaSを作ってみた",
    href: "https://qiita.com/takepon7/items/aab9486f8e3d2b807e4e",
    image: "/images/blog/qiita-kaigo-dx.jpg",
    lead: "AIコーディングツールが気になって、音声から介護記録を自動生成するWebアプリを作ってみました。うまくいったことも、いかなかったことも正直に書いています。",
    description: "Claude Codeを使った非エンジニアの開発体験記。Next.js / Supabase / Stripe / Claude APIを使ったフルスタックSaaSの構築記録。",
  },
  {
    title: "「事業成長の方程式」への挑戦：人事の私が、あえてコードを書く理由",
    href: "/heart/business-growth-equation",
    image: "/images/blog/growth-equation.jpg",
    lead: "完璧な戦略やシステムがあるのに、なぜかうまくいかない。そんな時は、「熱量」という変数が少し不足しているのかもしれません。",
    description:
      "人と組織が加速する仕組みの作り方。論理を組織に適用した知見を、記事でやわらかく紐解いています。",
  },
  {
    title: "組織における「技術的負債」の正体：見えない借金をどう返すか",
    href: "/heart/organizational-debt",
    image: "/images/blog/organizational-debt.jpg",
    lead: "急成長の中で「とりあえず」と判断したこと。それは「技術的負債」のように、組織の成長痛として蓄積されていることがあります。",
    description:
      "エンジニアリングの概念を借りると、今の苦しさが説明できるかもしれません。見えない借金を、どう返すかのヒントを記事で提案しています。",
  },
  {
    title: "組織を「正解」で上書きしない——事業成長のバグを見つける問い方",
    href: "/heart/redefining-organization",
    image: "/images/blog/redefining-org.jpg",
    lead: "世の中の「組織論の正解」を疑い、自社独自の熱中の源泉を定義し直す。事業を有機的に育てるための人事の視点。",
    description:
      "外の正解で上書きせず、自社の文脈で問い続ける。事業を長期的に育てる視点を、記事でまとめています。",
  },
  {
    title: "MVC（Minimum Viable Culture）——組織というプロダクトの「初期実装」",
    href: "/heart/minimum-viable-culture",
    image: "/images/blog/mvc-culture.jpg",
    lead: "プロダクト開発の「MVP」という概念を組織に。オーバーエンジニアリングを防ぎ、事業成長に合わせて文化を「実装」する人事の視点。",
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
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Works", href: "#works" },
              { label: "Blog", href: "#blog" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[0.65rem] font-medium tracking-[0.12em] text-[#2D2D2D]/80 transition-colors hover:text-[#B5A48B] sm:text-xs sm:tracking-[0.15em] md:text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <ScrollRevealSection
        className="relative overflow-hidden bg-[#FCFCFB] pt-[4.5rem] pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
        scale={true}
        borderTop={false}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
            {/* テキスト */}
            <div className="flex-1 md:max-w-[52%]">
              <h1 className="mb-8 text-left text-[1.75rem] font-medium tracking-[0.04em] text-[#2D2D2D] leading-tight sm:mb-10 sm:text-[2.25rem] md:mb-12 md:text-[2.75rem] lg:text-[3rem]">
                業務の痛みを、
                <br />
                システムで解く。
              </h1>
              <p className="mb-10 text-left text-[0.9375rem] leading-[2.4] tracking-[0.02em] text-[#2D2D2D]/75 sm:mb-12 sm:text-[1rem] sm:leading-[2.5] md:text-[1.0625rem] md:leading-[2.6]">
                バックオフィスのドメイン知識 × フルスタック開発力 × AI実装。
                <br className="hidden sm:block" />
                現場課題の要件定義から商用SaaSのデリバリーまで、一気通貫で牽引します。
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="#works"
                  className="inline-block rounded-lg border border-[#2D2D2D]/20 bg-[#2D2D2D] px-6 py-3 text-[0.875rem] font-medium tracking-[0.06em] text-[#F9F8F6] transition-all duration-200 hover:bg-[#2D2D2D]/85 sm:px-8 sm:text-[0.9375rem]"
                >
                  実績を見る
                </Link>
                <Link
                  href="#contact"
                  className="inline-block rounded-lg border border-[#2D2D2D]/20 px-6 py-3 text-[0.875rem] font-medium tracking-[0.06em] text-[#2D2D2D] transition-all duration-200 hover:border-[#2D2D2D]/40 hover:bg-[#2D2D2D]/05 sm:px-8 sm:text-[0.9375rem]"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            {/* ヒーロー画像 */}
            <div className="relative w-full overflow-hidden rounded-2xl md:flex-1 md:rounded-3xl">
              <div className="relative aspect-[4/3] w-full md:aspect-[3/4]">
                <Image
                  src="/images/hero/hero-main.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* About */}
      <ScrollRevealSection
        id="about"
        className="bg-[#F9F8F6] py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-8 text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-10 sm:text-sm sm:tracking-[0.22em] md:mb-16">
              ABOUT
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
            {ABOUT_CARDS.map((card, i) => (
              <FadeInSection key={card.title} delay={80 + i * 80}>
                <div className="rounded-2xl border border-[#2D2D2D]/08 bg-[#FCFCFB] p-7 sm:p-8 md:p-9">
                  <h3 className="mb-4 text-[0.8rem] font-medium tracking-[0.18em] text-[#B5A48B] sm:mb-5 sm:text-[0.85rem]">
                    {card.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[2.1] tracking-[0.02em] text-[#2D2D2D]/80 sm:text-[0.9375rem] sm:leading-[2.2]">
                    {card.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* Skills */}
      <ScrollRevealSection
        id="skills"
        className="bg-[#F7F6F4] py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-8 text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:mb-10 sm:text-sm sm:tracking-[0.22em] md:mb-16">
              SKILLS
            </p>
          </FadeInSection>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {SKILLS.map((group, i) => (
              <FadeInSection key={group.category} delay={60 + i * 60}>
                <div>
                  <p className="mb-3 text-[0.75rem] font-medium tracking-[0.16em] text-[#B5A48B] sm:mb-4">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[#2D2D2D]/10 bg-[#F9F8F6] px-3 py-1.5 text-[0.8rem] tracking-[0.03em] text-[#2D2D2D]/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* Works */}
      <ScrollRevealSection
        id="works"
        className="bg-[#F9F8F6] py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <div className="mb-8 flex items-center justify-between sm:mb-10 md:mb-16">
              <p className="text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:text-sm sm:tracking-[0.22em]">
                WORKS
              </p>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#2D2D2D]/08 sm:h-14 sm:w-14">
                <Image
                  src="/images/profile/profile-concept.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                  unoptimized
                />
              </div>
            </div>
          </FadeInSection>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            {WORKS.map((product, i) => (
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

      {/* Blog */}
      <ScrollRevealSection
        id="blog"
        className="bg-[#F7F6F4] py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <p className="mb-2 text-xs tracking-[0.2em] leading-[1.6] text-[#2D2D2D]/60 sm:text-sm sm:tracking-[0.22em]">
              BLOG / INSIGHT
            </p>
            <p className="mb-8 text-[0.875rem] tracking-[0.04em] leading-[1.8] text-[#2D2D2D]/50 sm:mb-10 sm:text-[0.9375rem] md:mb-16">
              組織・人事・テクノロジーの交差点から。
            </p>
          </FadeInSection>
          <div className="grid gap-10 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.href} delay={80 + i * 80}>
                <Link
                  href={post.href}
                  {...(post.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
    </div>
  );
}
