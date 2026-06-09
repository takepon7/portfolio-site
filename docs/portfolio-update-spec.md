# portfolio-site 改修スペック（Option A：既存Next.jsを生かす）

> Claude Code 用。`takepon7/portfolio-site`（Next.js 14 / Tailwind / `content/heart` MDX / Vercel）の**中身と目的だけ**を作り替える。土台・ブログ・デプロイは維持する。視覚リファレンスは同梱の `index.html`（ステータス・レジストリ＋NOW）を参照。既存のTailwind設定・デザイントークンには無理に置換せず馴染ませること。

## 0. ゴール
就活向け「コーポレートエンジニア」ポジショニング → **個人開発者として5プロダクトを訴求＋build in public** へ転換する。

## 1. フレーミング／コピー変更
- 実名 **Ryosuke Takeda** を前面に（ワードマーク・フッター）。
- アイデンティティ：**個人開発者 / 個人事業主・People Ops (VP) 出身**。在職は事実だが**強調しない**。
- 注記「所属する組織の…」は**フッターに小さく1行だけ残す**（在職中ゆえ保持、目立たせない）。
- Hero：
  - 見出し「**業務の痛みを、システムで解く。**」（既存の強い一文を維持）
  - サブ「現場のドメイン知識 × AI実装力で、DXをつくる。」
  - リード文を「雇われる」トーン→「**実装して世に出している**」トーンへ。
  - CTA：「実績を見る」→「**プロダクトを見る**」、加えて「相談する」。

## 2. Works（データ差し替え）
既存のWorksデータ配列（`src` 配下の data または component 内）を以下5件に置換。既存の型に合わせてマップすること。ステータスは4分類：`live(運用中)` / `store(配信中)` / `selling(営業中)` / `prep(準備中)`。

```ts
export const works = [
  {
    name: "biz-english-master",
    status: "live",            // 運用中（商用）
    domain: "英語学習 / B2C",
    desc: "外資系で働く日本人向けのAI英会話練習サービス。月額¥2,980・7日間無料。Stripe本番審査を申請から24時間で通過。",
    stack: ["Next.js", "Clerk", "Stripe", "Gemini API"],
    url: "https://biz-english-master.com",
  },
  {
    name: "kaigo-dx",
    status: "selling",         // 営業中（β・獲得中）
    domain: "介護DX / B2B",
    desc: "音声で話すだけで介護記録が完成するB2B SaaS。音声→文字起こし→AIが記録を構造化。β運用・ユーザー獲得中。",
    stack: ["Next.js", "Supabase", "Stripe", "Whisper", "Claude API"],
    url: "https://kaigo-dx.vercel.app",
  },
  {
    name: "papatto-hp",
    status: "selling",         // 営業中
    domain: "中小企業DX",
    desc: "中小企業（工務店・士業）のホームページを、AIで最短24時間・定額で制作するサービス。",
    stack: ["Next.js", "生成AI"],
    url: "https://papatto-hp.com",
  },
  {
    name: "そいね / Soine",
    status: "store",           // 配信中（App Store）
    domain: "入眠 / ヘルスケア",
    desc: "眠りにつくための“語り”のアプリ。日本語の物語とAI音声で入眠を誘うモバイルプロダクト。App Storeで配信中。",
    stack: ["Flutter (iOS/Android)", "サブスクリプション"],
    url: "https://apps.apple.com/jp/app/%E3%81%9D%E3%81%84%E3%81%AD/id6775675437",
  },
  {
    name: "pelago",
    status: "prep",            // 準備中
    domain: "グローバル / コミュニティ",
    desc: "世界の誰かと文通できるWebアプリ。AI翻訳で言語の壁を越えて手紙を交わす。コミュニティ醸成中。",
    stack: ["Web", "AI翻訳・モデレーション"],
    url: "",                   // 準備中（リンクなし or coming）
  },
];
```

### Worksから外す／移すもの
- **MeetingMind AI** → Worksから削除（PoC・改善優先度低）。
- **人事評価AI自動化（PoC）** → Worksから外し、**NOWブロック**へ前段validationとして1行に圧縮（下記§3）。
- **Workday / ServiceNow 全社導入PM** → プロダクトではないので **About の経歴（ENTERPRISE）** へ移設。

## 3. NOW（新規ブロック・Heroの下）
build in public の入口。

> **// NOW** ― HRシステムの導入・移行・運用ドキュメントをAIで加速するプロダクトを設計中。元People Opsの現場知見そのものを武器にした、次のDX。
> 前段の検証：人事評価サマリ自動生成のPoCで関連工数を約50%削減。

## 4. About
- 個人開発者ナラティブ（現場×実装×AIで“出荷する”）。
- 既存の3本柱（ドメイン知識 / フルスタック開発 / AI実装）は維持してトーンだけ調整。
- 経歴クレジット：BACKGROUND（People Ops VP）、ENTERPRISE（Workday/ServiceNow導入PM・15名+統括）、STACK、FOCUS（介護・中小企業・HRのDX/AX）。

## 5. Writing
- `content/heart` のMDXエッセイは**維持**。
- 開発記事（Qiita / Zenn）を同列にsurfaceする。リンク：
  - Qiita: `https://qiita.com/takepon7/items/55628b2091c43af5c5d4`（Stripe本番審査）
  - Zenn: `https://zenn.dev/takepon7/articles/3dd56bd4c46304`（Claude Code提案を却下する技術）
  - Qiita: `https://qiita.com/takepon7/items/aab9486f8e3d2b807e4e`（介護記録SaaS）
  - 一覧導線：`https://qiita.com/takepon7` / `https://zenn.dev/takepon7` / `https://x.com/takepon_7`

## 6. デザイン（推奨・任意）
- 視覚目標は同梱 `index.html`：**ステータス・レジストリ**（プロダクトを正直なステータス付きの行で並べる）＋ **NOWストリップ**。
- ステータス色：運用中=green / 配信中=blue / 営業中=amber / 準備中=grey（機能的に意味を持たせる、装飾にしない）。
- 既存Tailwindのトークンに馴染ませる。全面置換ではなく、Worksの表現とHero/NOWを優先的に寄せる。
- 品質床：モバイル対応・キーボードフォーカス可視・`prefers-reduced-motion` 尊重を維持。

## 7. スクリーンショット再取得（Claudeで取得→`public/images/`へ）
- biz-english-master：`https://biz-english-master.com`
- kaigo-dx：`https://kaigo-dx.vercel.app`
- papatto-hp：`https://papatto-hp.com`
- そいね：App Store ページ または アプリ画面
- pelago：準備中（プレースホルダ画像でよい）

## 8. Definition of Done
- [ ] Worksに5プロダクトが正しいステータスで表示される
- [ ] MeetingMind / 人事評価PoC / 導入PM が Works から消えている（PoC→NOW、PM→About）
- [ ] 実名 Ryosuke Takeda 表示、所属注記はフッター1行のみ
- [ ] Hero見出し・CTAが個人開発者トーンに更新
- [ ] ブログが `content/heart` ＋ Qiita/Zenn の両方をsurface
- [ ] モバイル / フォーカス / reduced-motion 維持、Lighthouse劣化なし
- [ ] Vercel本番デプロイ確認
