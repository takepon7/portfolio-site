import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/FadeInSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { SiteHeader } from "@/components/SiteHeader";
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
    links: [
      { label: "Qiita: Stripe審査の判断ログ ↗", href: "https://qiita.com/takepon7/items/55628b2091c43af5c5d4" },
    ],
  },
  {
    name: "kaigo-dx",
    status: "selling",
    domain: "介護DX / B2B",
    desc: "音声で話すだけで介護記録が完成するB2B SaaS。音声→文字起こし→AIが記録を構造化。β運用・ユーザー獲得中。",
    stack: ["Next.js", "Supabase", "Stripe", "Whisper", "Claude API"],
    url: "https://kaigo-dx.vercel.app",
    image: "/images/kaigo-dx/kaigo-dx-01.png",
    links: [
      { label: "事例紹介 ↗", href: "https://github.com/takepon7/kaigo-dx-case-study" },
      { label: "Qiita: 開発記 ↗", href: "https://qiita.com/takepon7/items/aab9486f8e3d2b807e4e" },
    ],
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
    stack: ["SwiftUI (iOS)", "Azure Neural TTS", "サブスクリプション"],
    url: "https://apps.apple.com/jp/app/%E3%81%9D%E3%81%84%E3%81%AD/id6775675437",
    image: "/images/soine/soine-01.png",
    links: [
      { label: "Qiita: AI音声の作り直し ↗", href: "https://qiita.com/takepon7/items/7a5baa9d115c4a28abde" },
    ],
  },
  {
    name: "sakigake / 魁",
    status: "prep",
    domain: "SaaS基盤 / DevTool",
    desc: "Claude Code・AIエージェントネイティブな日本語ファーストSaaSボイラープレート。厳格なDDD構成（321 tests / 151 modules / DDD違反0 / ADR 7本）で開発中。",
    stack: ["Next.js", "DDD", "Claude Code"],
    url: "https://sakigake.dev",
    links: [
      { label: "Zenn: AIの提案を却下する技術 ↗", href: "https://zenn.dev/takepon7/articles/3dd56bd4c46304" },
      { label: "Claude Code × DDD 事例 ↗", href: "https://github.com/takepon7/claude-code-ddd-case-study" },
    ],
  },
  {
    name: "pelago",
    status: "prep",
    domain: "グローバル / コミュニティ",
    desc: "世界の誰かと文通できるWebアプリ。AI翻訳で言語の壁を越えて手紙を交わす。コミュニティ醸成中。",
    stack: ["Web", "AI翻訳・モデレーション"],
    // 準備中：公開URL・スクショなし（プレースホルダ表示）
  },
  {
    name: "個人開発者向けGTM支援ツール",
    status: "prep",
    domain: "GTM / 個人開発者支援",
    desc: "個人開発者の「作れるけど売れない」を解決するGTM支援ツール。Coming Soon。",
    stack: ["Web", "生成AI"],
    // 準備中：名称・公開URL未定（Coming Soon プレースホルダ表示）
  },
];

// ── SERVICES（提供メニュー。このLPの主役）──────────────────────────
// カード1（人事コンサル）は骨組みのみ実装し、今週は非表示。
// インタビューで「単発で相談したい」が出たら true にして公開する。
const SHOW_CONSULTING_CARD = false;

// PLACEHOLDER: 提案資料（Google Slides 共有リンク）。確定後に差し替える。
const SERVICE_DECK_URL = "#"; // ← PLACEHOLDER

type ServiceCard = {
  eyebrow: string;
  title: string;
  limited?: string;
  body: string;
  price: string; // PLACEHOLDER 値を含む（下記コメント参照）
  priceNote?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

// カード1: 人事・組織のスポット相談 / 顧問（今週は SHOW_CONSULTING_CARD=false で非表示）
const SERVICE_CONSULTING: ServiceCard = {
  eyebrow: "人事・組織",
  title: "人事・組織のスポット相談 / 顧問",
  body: "採用体制、制度設計、HRテック選定（Workday / ServiceNow 導入PM経験）、要員計画の運用設計。「導入する側」を16年やった人間として、ベンダーの言葉を現場の言葉に翻訳します。",
  // PLACEHOLDER: 価格は仮置き。確定後に差し替える。
  price: "スポット90分 ¥30,000 / 月次顧問 ¥100,000〜",
  priceNote: "（稼働に応じて）",
  primary: { label: "30分無料相談を予約", href: "#contact" },
};

// カード2: Sakigake Workforce デザインパートナー（限定2社）— 今週の主役
const SERVICE_WORKFORCE: ServiceCard = {
  eyebrow: "Sakigake Workforce",
  title: "Sakigake Workforce デザインパートナー",
  limited: "限定2社",
  body: "Capability 起点の要員計画・実行管理 SaaS を、貴社の課題で共同検証。週1セッション込みで、現場に効く形を一緒に設計します。",
  // PLACEHOLDER: 価格は仮置き。確定後に差し替える。
  price: "¥150,000 / 3ヶ月",
  priceNote: "（週1セッション込み）",
  primary: { label: "30分オンラインを予約", href: "#contact" },
  secondary: { label: "提案資料を見る ↗", href: SERVICE_DECK_URL }, // PLACEHOLDER リンク
};

const SERVICE_CARDS: ServiceCard[] = SHOW_CONSULTING_CARD
  ? [SERVICE_CONSULTING, SERVICE_WORKFORCE]
  : [SERVICE_WORKFORCE];

const ABOUT_PILLARS = [
  {
    title: "ドメイン知識",
    body: "いまも人事 / People Ops（VP）として、採用・評価・労務・組織設計を内側から見ています。現場の困りごとがわかるぶん、何を作って何を作らないかで迷いにくい。",
  },
  {
    title: "フルスタック開発",
    body: "Next.js / Flutter / Supabase / Stripe で、ひとりでプロダクトを設計・実装。要件定義・DB設計・認証・決済・AI連携まで、ひと通り自分で作っています。",
  },
  {
    title: "AI実装",
    body: "Claude API・Whisper・Gemini をプロダクトに組み込んでいます。LLMを「使う」だけでなく、現場の困りごとを解く機能として届けることを大事にしています。",
  },
];

const CREDENTIALS = [
  {
    k: "BACKGROUND",
    v: "人事 / People Ops（VP）・16年目",
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

      {/* ヒーロー：全面背景写真＋オーバーレイ（papatto 風） */}
      <section id="top" className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            priority
            className="hero-kenburns object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgba(18,22,20,0.92) 0%, rgba(18,22,20,0.70) 44%, rgba(18,22,20,0.34) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 sm:px-8 md:px-12 md:py-32">
          <p className="hero-fade-up mb-6 font-mono text-[0.7rem] tracking-[0.3em] text-[#D8C7B0]">
            個人開発者 ・ 本業は人事
          </p>
          <h1 className="hero-fade-up d1 mb-7 max-w-4xl text-[2rem] font-bold leading-[1.22] tracking-[0.01em] text-white sm:text-[2.8rem] md:text-[3.3rem]">
            Claude Codeで、アプリやサービスを
            <br />
            ひとりで作っています。
          </h1>
          <p className="hero-fade-up d2 mb-9 max-w-xl text-[0.98rem] leading-[1.95] text-white/85 md:text-[1.1rem]">
            本業は人事16年目。複業で、自分や身近な人の
            <strong className="font-semibold text-white">「これ欲しい」</strong>
            を、ひとつずつ形にしています。
          </p>

          <div className="hero-fade-up d3 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-[0.92rem] font-medium tracking-[0.04em] text-white shadow-lg transition-opacity hover:opacity-90"
            >
              作ったものを見る
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-[0.92rem] font-medium tracking-[0.04em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              相談する
            </Link>
          </div>

          <div className="hero-fade-up d3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.72rem] text-white/65">
            <span>
              領域 / <b className="font-medium text-white/85">介護・中小企業・HR・英語学習</b>
            </span>
            <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
            <span>
              実装 / <b className="font-medium text-white/85">Next.js · Flutter · Supabase · Claude · Whisper</b>
            </span>
          </div>
        </div>
      </section>

      {/* Services：提供メニュー（このLPの主役） */}
      <ScrollRevealSection
        id="services"
        className="bg-surface-2 py-16 sm:py-24 md:py-28 lg:py-32"
        borderTop={true}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
          <FadeInSection>
            <div className="mb-4 flex items-baseline gap-4">
              <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/55">
                01 — Services
              </span>
              <h2 className="text-[1.4rem] font-bold tracking-[0.01em] text-ink sm:text-[1.7rem] md:text-[2rem]">
                お手伝いできること
              </h2>
            </div>
            <p className="mb-10 max-w-2xl text-[0.95rem] leading-[2.05] text-ink/70 sm:mb-12 md:mb-14">
              人事16年 × 自分で実装する。現場とシステムの間を、言葉と手で埋めます。
            </p>
          </FadeInSection>

          <div
            className={
              SERVICE_CARDS.length === 1
                ? "mx-auto max-w-2xl"
                : "grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-8"
            }
          >
            {SERVICE_CARDS.map((card, i) => (
              <FadeInSection key={card.title} delay={80 + i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/08 bg-surface p-7 sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[0.7rem] tracking-[0.12em] text-accent-gold">
                      {card.eyebrow}
                    </span>
                    {card.limited && (
                      <span className="rounded-full bg-st-sell/10 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.08em] text-st-sell">
                        {card.limited}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 text-[1.05rem] font-bold leading-snug tracking-[0.01em] text-ink sm:text-[1.15rem]">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-[0.9rem] leading-[2.05] text-ink/80">
                    {card.body}
                  </p>
                  <div className="mt-auto">
                    <p className="mb-5 font-mono text-[0.82rem] tracking-[0.02em] text-ink/90">
                      {card.price}
                      {card.priceNote && (
                        <span className="text-ink/50">{card.priceNote}</span>
                      )}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {card.primary && (
                        <Link
                          href={card.primary.href}
                          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[0.86rem] font-medium tracking-[0.03em] text-white shadow-sm transition-opacity hover:opacity-90"
                        >
                          {card.primary.label}
                        </Link>
                      )}
                      {card.secondary && (
                        <a
                          href={card.secondary.href}
                          {...(card.secondary.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-[0.86rem] font-medium tracking-[0.03em] text-ink/75 transition-colors hover:border-accent hover:text-accent"
                        >
                          {card.secondary.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
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
                02 — Work
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
                03 — About
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
                  いまも会社で人事／People Opsをしています。今年で16年目、採用・評価・労務・組織設計を内側から見てきて、Workday HCM/LMS や ServiceNow の全社導入も、現場と開発の間に立って動かしてきました。
                </p>
                <p className="text-[0.98rem] leading-[2.05] text-ink/90">
                  その傍らで、自分でコードを書いて、アプリやサービスを作っています。Cursor / Gemini を経て、いまは Claude Code を主に使っていて、開発はぜんぶ独学で覚えました。
                </p>
                <p className="text-[0.98rem] leading-[2.05] text-ink/65">
                  現場の困りごとを知っていると、何を作って何を作らないかで迷いにくい。作ったものは、なぜそう作ったかを自分の言葉で説明できるようにしておきたいと思っています。
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
                04 — Writing
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
