# ブログ・コンテンツプラン — Sakigake Workforce 展開のためのSEO

作成: 2026-07-06 ／ 目的: 「要員計画」領域の検索流入 → `/blog` 記事 → 30分相談（#contact）の導線を太くする。

## 運用ルール（重要）

- **note との関係**: リンクしない・転載しない（実名とぼかし記事の接続回避＋重複コンテンツ回避）。noteに書いた題材をこちらで書く場合は、実名・実務視点で**書き下ろす**。
- **表現ルール**: 「人事16年目」「複業で〜」のみ。「転向」「元人事」「エンジニアになった」は禁止。
- **事実のみ**: 架空の事例・数字・顧客の創作は禁止。一般論＋自分の実務観察で書く。
- **記事の追加方法**: `content/blog/<slug>.md` を置くだけ（frontmatter: title / description / date / updated / tags / draft）。`draft: true` は一覧・sitemap・RSSから除外される。
- **各記事の末尾CTA**はテンプレートに組み込み済み（30分相談＋サービス詳細）。本文中では売り込まない。

## キーワードクラスタ（狙い順）

### クラスタA: 要員計画（本丸・BOFU寄り）
- 要員計画 とは / 要員計画 立て方 / 要員計画 テンプレート
- 要員計画 エクセル 限界 / 要員計画 ツール 比較
- 要員計画 人員計画 違い ✅（初回記事でカバー）
- 要員計画 SaaS / ワークフォースプランニング ツール

### クラスタB: Capability・スキル管理（差別化軸）
- スキルマップ 作り方 / ケイパビリティ 人事
- スキルベース組織 / ジョブ型 要員計画
- タレントマネジメント 要員計画 連携

### クラスタC: 人事DX・HRテック選定（信頼形成・MOFU）
- HRテック 選定 ポイント / Workday 導入 注意点（導入PM経験の実話ベース）
- 人事システム 導入 失敗 / ベンダー選定 人事
- 人事 DX 進め方 中小企業

### クラスタD: AI×人事（発信の個性・TOFU）
- 人事 AI 活用 / Claude Code 業務改善
- 個人開発 SaaS 人事（開発記はQiita/Zennと役割分担：技術深掘り=Qiita/Zenn、業務文脈=Blog）

## 記事ネタ20本（優先度順）

| # | 仮タイトル | クラスタ | ファネル |
|---|---|---|---|
| 1 | ✅ 要員計画がExcelで破綻する5つの瞬間 | A | MOFU |
| 2 | ✅ 要員計画とは何か——人員計画・採用計画・配置計画との違い（workforce-planning-basics） | A | TOFU |
| 3 | ✅ 要員計画テンプレートを配る前に決めるべき3つのこと（workforce-planning-template-prep） | A | MOFU |
| 4 | ✅ 「ポジションベース」の組織図が要員計画を縛る（position-based-org-chart-limits） | B | MOFU |
| 5 | ✅ スキルマップが3ヶ月で放置される理由と、続く設計（skill-map-abandonment） | B | MOFU |
| 6 | ✅ Workday・ServiceNow導入PM経験から、HRテック選定で最初に確認すべき5つ（hr-tech-selection-questions） | C | MOFU |
| 7 | ✅ 要員計画ツールを入れる前にExcelでやるべき3ステップ（excel-3-steps-before-tools） | A | BOFU |
| 8 | ✅ 経営が欲しい要員計画・現場が欲しい要員計画・人事が作れる要員計画（three-views-of-workforce-planning） | A | TOFU |
| 9 | ✅ ベンダーの言葉を現場の言葉に翻訳する（translating-vendor-language） | C | TOFU |
| 10 | ✅ 要員計画の「実行管理」とは何か（workforce-plan-execution） | A | MOFU |
| 11 | ✅ Capability起点の要員計画——定義と最小の始め方（capability-based-workforce-planning・ハブ記事） | B | BOFU |
| 12 | ✅ 人事16年目が、複業でAIプロダクトを作る理由（why-hr-builds-ai-products） | D | TOFU |
| 13 | ✅ 採用計画と要員計画がずれる構造的な理由（hiring-plan-vs-workforce-plan） | A | MOFU |
| 14 | ✅ 「来期、何人必要？」に即答できない人事は悪くない（headcount-question） | A | TOFU |
| 15 | ✅ ServiceNow全社導入で学んだ、現場が使うシステムの条件（servicenow-lessons-usable-systems） | C | MOFU |
| 16 | ✅ 要員計画の承認フローをExcelの外に出す（approval-flow-beyond-excel） | A | BOFU |
| 17 | ✅ ジョブ型雇用と要員計画——箱から能力へ（job-based-employment-capability） | B | TOFU |
| 18 | ✅ 人事データの棚卸し（hr-data-inventory) | C | MOFU |
| 19 | ✅ AIで要員計画はどこまで自動化できるか（ai-workforce-planning-limits） | D | TOFU |
| 20 | ✅ 要員計画SaaSを自分で作りながら考えた「最小限の機能」（minimum-features-workforce-saas） | B/D | BOFU |

**→ ネタ表20本すべて公開済み（2026-07-06）。以降は既存記事の加筆更新（frontmatter `updated`）と、Search Console の検索クエリを見て新クラスタを追加する運用へ。**

## 内部リンク設計

- 各記事 → 関連記事2〜3本へ本文内リンク（クラスタ内を優先）
- 各記事 → 記事末CTA（30分相談・サービス詳細）※テンプレート組込済
- ホーム Writing セクション → `/blog` 一覧（組込済）
- HEART 記事 → `/blog`（組込済）

## 更新運用

- 目安: 週1本（DM期間中はクラスタA優先）
- 公開後: X で1ポスト（記事の要点1つ＋リンク）。売り込み文言なし
- 効果測定: Vercel Analytics でページ別流入 / Search Console（下記手順）

## Search Console 登録手順（所有権確認のみユーザー作業）

コード側は対応済み（`layout.tsx` の `verification.google`、env `GOOGLE_SITE_VERIFICATION` で有効化）。

1. https://search.google.com/search-console → プロパティを追加 → **URLプレフィックス** → `https://portfolio-site-xi-lime.vercel.app`
2. 確認方法で **HTMLタグ** を選び、`content="..."` のトークン部分をコピー
3. トークンを Claude Code に渡す → `vercel env add GOOGLE_SITE_VERIFICATION` → 再デプロイ（ここは自動化可能）
4. Search Console に戻って「確認」→ 完了後、サイトマップに `sitemap.xml` を送信

※ 所有権確認（Googleアカウントでの1〜2, 4）だけは本人しかできない。トークン設定・デプロイ・sitemap生成は自動化済み。
※ 独自ドメインを取得したら `NEXT_PUBLIC_SITE_URL` を設定し、プロパティを取り直す。
- 既存記事の更新時は frontmatter `updated` を入れる（sitemap の lastModified に反映される）
