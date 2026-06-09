import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { NowStrip } from "@/components/NowStrip";
import { HeroBackground } from "@/components/HeroBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { CodePanel } from "@/components/CodePanel";
import { StatusRegistry, type WorkItem } from "@/components/StatusRegistry";

const WORKS: WorkItem[] = [
  {
    name: "biz-english-master",
    status: "live",
    domain: "英語学習 / B2C",
    desc: "外資系で働く日本人向けのAI英会話練習サービス。月額¥2,980・7日間無料。Stripe本番審査を申請から24時間で通過。",
    stack: ["Next.js", "Clerk", "Stripe", "Gemini API"],
    url: "https://biz-english-master.com",
    image: "/images/biz-english-master/biz-english-master-01.png",
  },
  {
    name: "kaigo-dx",
    status: "selling",
    domain: "介護DX / B2B",
    desc: "音声で話すだけで介護記録が完成するB2B SaaS。音声→文字起こし→AIが記録を構造化。β運用・ユーザー獲得中。",
    stack: ["Next.js", "Supabase", "Stripe", "Whisper", "Claude API"],
    url: "https://kaigo-dx.vercel.app",
    image: "/images/kaigo-dx/kaigo-dx-01.png",
  },
  {
    name: "papatto-hp",
    status: "selling",
    domain: "中小企業DX",
    desc: "中小企業（工務店・士業）のホームページを、AIで最短24時間・定額で制作するサービス。",
    stack: ["Next.js", "生成AI"],
    url: "https://papatto-hp.com",
    image: "/images/papatto-hp/papatto-hp-01.png",
  },
  {
    name: "そいね / Soine",
    status: "store",
    domain: "入眠 / ヘルスケア",
    desc: "眠りにつくための“語り”のアプリ。日本語の物語とAI音声で入眠を誘うモバイルプロダクト。App Storeで配信中。",
    stack: ["Flutter (iOS/Android)", "サブスクリプション"],
    url: "https://apps.apple.com/jp/app/%E3%81%9D%E3%81%84%E3%81%AD/id6775675437",
    image: "/images/soine/soine-01.png",
  },
  {
    name: "pelago",
    status: "prep",
    domain: "グローバル / コミュニティ",
    desc: "世界の誰かと文通できるWebアプリ。AI翻訳で言語の壁を越えて手紙を交わす。コミュニティ醸成中。",
    stack: ["Web", "AI翻訳・モデレーション"],
    // 準備中：公開URL・スクショなし（プレースホルダ表示）
  },
];

const ABOUT_PILLARS = [
  {
    title: "ドメイン知識",
    body: "人事 / People Ops（VP）として、採用・評価・労務・組織設計の業務フローを内側から理解。現場の本当の痛みを知っているから、何を作って何を作らないかの判断がぶれない。",
  },
  {
    title: "フルスタック開発",
    body: "Next.js / Flutter / Supabase / Stripe を用いた商用プロダクトを単独で設計・実装・販売。要件定義・DB設計・認証・決済・AI連携まで一気通貫で出荷する。",
  },
  {
    title: "AI実装",
    body: "Claude API・Whisper・Gemini をプロダクトに組み込む実装力。LLMを「使う」だけでなく、業務の痛みを解く機能として届けることに軸を置く。",
  },
];

const CREDENTIALS = [
  {
    k: "BACKGROUND",
    v: "人事 / People Ops（VP）・10年以上",
    sub: "採用・評価・労務・組織設計",
  },
  {
    k: "ENTERPRISE",
    v: "Workday（HCM/LMS）・ServiceNow 全社導入PM",
    sub: "15名以上の部門横断チームを統括・データ移行を完遂",
  },
  {
    k: "STACK",
    v: "Next.js · Flutter · Supabase · Stripe",
    sub: "Claude API · Whisper · Gemini · DDD設計",
  },
  {
    k: "FOCUS",
    v: "介護 · 中小企業 · HR のDX / AX",
    sub: "現場のドメイン知識 × AI実装力",
  },
];

const blogPosts = [
  {
    source: "Qiita",
    title: "連休4日で個人開発SaaSのStripe本番審査を通した話 - 申請から24時間で通過するための判断ログ",
    href: "https://qiita.com/takepon7/items/55628b2091c43af5c5d4",
    image: "/images/blog/qiita-article-04.jpeg",
    lead: "コードを書く時間と同じくらい「審査・法令・本番運用準備」に時間が消えていく。連休4日間で個人開発のB2C SaaSを実際に決済できる状態まで持っていった判断ログ。",
    description: "Stripe本番審査・Clerk Production移行・独自ドメイン取得・法的ページ整備。LP公開だけでは通らない、コード以外の戦いの記録。",
  },
  {
    source: "Zenn",
    title: "Claude Codeが出した提案を却下する技術 - 個人開発SaaSをDDDで作りながら学んだこと",
    href: "https://zenn.dev/takepon7/articles/3dd56bd4c46304",
    image: "/images/blog/zenn-claude-code-reject.png",
    lead: "AIに丸投げするのではなく、AIと判断する。Claude Codeの提案を1つずつ吟味し、却下・採用・後回しを判断ログとして残す開発の進め方。",
    description: "個人開発SaaSで実践したDDD設計とAIコーディングの融合。判断軸を持って開発するための実践的な技術。",
  },
  {
    source: "Qiita",
    title: "人事がClaude Codeで介護記録SaaSを作ってみた",
    href: "https://qiita.com/takepon7/items/aab9486f8e3d2b807e4e",
    image: "/images/blog/qiita-kaigo-dx.jpg",
    lead: "AIコーディングツールが気になって、音声から介護記録を自動生成するWebアプリを作ってみました。うまくいったことも、いかなかったことも正直に書いています。",
    description: "Claude Codeを使った非エンジニアの開発体験記。Next.js / Supabase / Stripe / Claude APIを使ったフルスタックSaaSの構築記録。",
  },
  {
    source: "Essay",
    title: "MVC（Minimum Viable Culture）——組織というプロダクトの「初期実装」",
    href: "/heart/minimum-viable-culture",
    image: "/images/blog/mvc-culture.jpg",
    lead: "プロダクト開発の「MVP」という概念を組織に。オーバーエンジニアリングを防ぎ、事業成長に合わせて文化を「実装」する人事の視点。",
    description: "人事もまた、アジャイルな開発者である。文化を小さく試し、育てる。Build & Culture の視点でまとめています。",
  },
  {
    source: "Essay",
    title: "「事業成長の方程式」への挑戦：人事の私が、あえてコードを書く理由",
    href: "/heart/business-growth-equation",
    image: "/images/blog/growth-equation.jpg",
    lead: "完璧な戦略やシステムがあるのに、なぜかうまくいかない。そんな時は、「熱量」という変数が少し不足しているのかもしれません。",
    description: "人と組織が加速する仕組みの作り方。論理を組織に適用した知見を、記事でやわらかく紐解いています。",
  },
  {
    source: "Essay",
    title: "組織における「技術的負債」の正体：見えない借金をどう返すか",
    href: "/heart/organizational-debt",
    image: "/images/blog/organizational-debt.jpg",
    lead: "急成長の中で「とりあえず」と判断したこと。それは「技術的負債」のように、組織の成長痛として蓄積されていることがあります。",
    description: "エンジニアリングの概念を借りると、今の苦しさが説明できるかもしれません。見えない借金を、どう返すかのヒントを記事で提案しています。",
  },
];

const EXTERNAL_LINKS = [
  { label: "Qiita ↗", href: "https://qiita.com/takepon7" },
  { label: "Zenn ↗", href: "https://zenn.dev/takepon7" },
  { label: "X / @takepon_7 ↗", href: "https://x.com/takepon_7" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ヒーローセクション */}
      <ScrollRevealSection
        id="top"
        className="relative overflow-hidden bg-surface pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        scale={true}
        borderTop={false}
      >
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-14">
            <div>
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[0.72rem] tracking-[0.12em] text-ink/55">
              個人開発者 / 個人事業主
            </span>
            <span className="font-mono text-[0.72rem] tracking-[0.12em] text-accent">
              元 People Ops（VP）
            </span>
          </div>
          <h1 className="mb-6 text-left text-[1.9rem] font-bold leading-[1.25] tracking-[0.01em] text-ink sm:text-[2.4rem] md:text-[2.9rem] lg:text-[3.15rem]">
            AIプロダクトを、
            <br />
            個人で開発・運営しています。
          </h1>
          <p className="mb-7 text-left text-[1.05rem] font-medium tracking-[0.01em] text-accent sm:text-[1.2rem] md:text-[1.3rem]">
            People Ops出身の個人開発者。業務の痛みを知る人間が、実装して世に出す。
          </p>
          <p className="max-w-[52ch] text-left text-[0.95rem] leading-[2.1] tracking-[0.01em] text-ink/70 sm:text-[1rem] md:text-[1.05rem]">
            人事／People Opsの現場を10年以上見てきた人間が、いまは自分でコードを書いて
            <strong className="font-medium text-ink">AIプロダクトを実装し、世に出しています</strong>
            。業務の“本当の痛み”を知っているから、何を作って何を作らないかの判断がぶれない——それが軸です。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.74rem] text-ink/55">
            <span>
              領域 / <b className="font-medium text-ink/80">介護・中小企業・HR・英語学習</b>
            </span>
            <span className="hidden h-3 w-px bg-ink/15 sm:inline-block" />
            <span>
              実装 /{" "}
              <b className="font-medium text-ink/80">Next.js · Flutter · Supabase · Claude · Whisper</b>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="#work"
              className="inline-block rounded-lg bg-ink px-7 py-3 text-[0.9rem] font-medium tracking-[0.04em] text-paper transition-all duration-200 hover:bg-ink/85 sm:px-8"
            >
              プロダクトを見る
            </Link>
            <Link
              href="#contact"
              className="inline-block rounded-lg border border-ink/20 px-7 py-3 text-[0.9rem] font-medium tracking-[0.04em] text-ink transition-all duration-200 hover:border-accent hover:text-accent sm:px-8"
            >
              相談する
            </Link>
          </div>
            </div>
            <div className="hidden lg:block">
              <CodePanel />
            </div>
          </div>

          {/* NOW: build in public の入口 */}
          <NowStrip />
        </div>
      </ScrollRevealSection>

      {/* Work：ステータス・レジストリ */}
      <ScrollRevealSection
        id="work"
        className="bg-paper py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <div className="mb-10 flex items-baseline gap-4 sm:mb-12 md:mb-14">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
                01 — Work
              </span>
              <h2 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem] md:text-[2rem]">
                つくっているプロダクト
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={80}>
            <StatusRegistry items={WORKS} />
          </FadeInSection>
        </div>
      </ScrollRevealSection>

      {/* About */}
      <ScrollRevealSection
        id="about"
        className="bg-surface-2 py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <div className="mb-10 flex items-baseline gap-4 sm:mb-12 md:mb-14">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
                02 — About
              </span>
              <h2 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem] md:text-[2rem]">
                現場とシステムの、あいだに立つ
              </h2>
            </div>
          </FadeInSection>

          <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-16">
            {/* ポートレート */}
            <FadeInSection>
              <figure className="lg:sticky lg:top-28">
                <div className="group relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl border border-ink/10 bg-surface-3 shadow-sm transition-transform duration-500 hover:scale-[1.02] lg:mx-0">
                  <Image
                    src="/images/profile/portrait.jpg"
                    alt="Ryosuke Takeda"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 220px, 240px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent" />
                </div>
                <figcaption className="mt-3 text-center font-mono text-[0.66rem] tracking-[0.1em] text-ink/45 lg:text-left">
                  Ryosuke Takeda ／ 個人開発者
                </figcaption>
              </figure>
            </FadeInSection>

            {/* 本文＋クレジット */}
            <div className="grid gap-12 md:grid-cols-2 md:gap-12">
              {/* ナラティブ */}
              <FadeInSection>
              <div className="space-y-5">
                <p className="text-[0.98rem] leading-[2.05] text-ink/90">
                  10年以上、人事／People Opsの現場にいました。採用・評価・労務・組織設計の業務フローを内側から理解し、Workday HCM/LMS や ServiceNow の全社導入を、現場と開発の間に立って動かしてきました。
                </p>
                <p className="text-[0.98rem] leading-[2.05] text-ink/90">
                  いまはその現場感を持ったまま、自分でコードを書き、AIプロダクトとして実装・販売しています。Cursor / Gemini を経て Claude Code を主戦場に、独学で開発へ移行しました。
                </p>
                <p className="text-[0.98rem] leading-[2.05] text-ink/65">
                  業務の本当の痛みを知っている人間が設計すると、判断がぶれない。設計の理由を言葉で説明できるエンジニアでありたい、と思っています。
                </p>
              </div>
            </FadeInSection>

            {/* クレジット（PM経歴を含む） */}
            <FadeInSection delay={80}>
              <div className="flex flex-col gap-5 border-l-2 border-ink/12 pl-6">
                {CREDENTIALS.map((c) => (
                  <div key={c.k}>
                    <p className="mb-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-accent">
                      {c.k}
                    </p>
                    <p className="text-[0.92rem] leading-relaxed text-ink">
                      {c.v}
                    </p>
                    <p className="text-[0.85rem] leading-relaxed text-ink/55">
                      {c.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
            </div>
          </div>

          {/* 3本柱 */}
          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-8">
            {ABOUT_PILLARS.map((card, i) => (
              <FadeInSection key={card.title} delay={80 + i * 80}>
                <div className="h-full rounded-2xl border border-ink/08 bg-surface p-7 sm:p-8">
                  <h3 className="mb-4 font-mono text-[0.76rem] tracking-[0.1em] text-accent-gold">
                    {card.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[2.05] text-ink/80">
                    {card.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      {/* Writing */}
      <ScrollRevealSection
        id="writing"
        className="bg-paper py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-4">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
                03 — Writing
              </span>
              <h2 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem] md:text-[2rem]">
                現場のDX実装と、組織の話
              </h2>
            </div>
            <p className="mb-10 text-[0.9rem] tracking-[0.02em] text-ink/50 sm:mb-12 md:mb-14">
              開発記事（Qiita / Zenn）と、組織・人事のエッセイ（HEART）。
            </p>
          </FadeInSection>

          <div className="grid gap-10 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {blogPosts.map((post, i) => {
              const isExternal = post.href.startsWith("http");
              const cardClass =
                "group block overflow-hidden rounded-2xl bg-surface transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-hover";
              const cardContent = (
                <>
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded bg-paper/90 px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.08em] text-accent">
                      {post.source}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="mb-2 text-base font-medium leading-snug tracking-[0.01em] text-ink sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="mb-3 text-[0.9rem] leading-[2] text-ink/70">
                      {post.lead}
                    </p>
                    <p className="text-[0.9rem] leading-[2] text-ink/80">
                      {post.description}
                    </p>
                  </div>
                </>
              );
              return (
                <FadeInSection key={post.href} delay={60 + i * 60}>
                  {isExternal ? (
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {cardContent}
                    </a>
                  ) : (
                    <Link href={post.href} className={cardClass}>
                      {cardContent}
                    </Link>
                  )}
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection delay={80}>
            <div className="mt-10 flex flex-wrap gap-3">
              {EXTERNAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2 font-mono text-[0.78rem] tracking-[0.03em] text-ink/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </ScrollRevealSection>
    </div>
  );
}
