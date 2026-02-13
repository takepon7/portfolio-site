# personal-growth-apps を3リポジトリに分割する手順

`personal-growth-apps` を次の3つの独立したリポジトリに分割します。

| 新リポジトリ名       | 内容           | 技術スタック              |
|----------------------|----------------|---------------------------|
| **workout-tracker**  | 筋トレ記録     | Swift, SwiftUI, Core Data |
| **speak-english**    | 英語スピーキング | Swift, SwiftUI            |
| **fortune-app**      | 占い（星天の館） | Next.js, React, Tailwind |

※ **SupplementApp** はこの手順では分割しません。必要なら同様の手順で別リポジトリにできます。

---

## 前提

- ローカルに `personal-growth-apps` をクローンする場所を用意する
- GitHub に新しいリポジトリを作成する権限（または GitHub CLI `gh` で作成）
- （任意）元リポジトリをアーカイブする

---

## Step 1: 元リポジトリをクローン

```bash
cd /Applications/src   # または任意の親ディレクトリ
git clone https://github.com/takepon7/personal-growth-apps.git
```

---

## Step 2: 分割スクリプトを実行

```bash
cd /Applications/src
chmod +x scripts/split-personal-growth-apps.sh
./scripts/split-personal-growth-apps.sh ./personal-growth-apps ./personal-growth-apps-split
```

- 第1引数: クローンした `personal-growth-apps` のパス
- 第2引数: 3つの新リポジトリを出力するディレクトリ（省略時は `personal-growth-apps-split`）

実行後、次の3ディレクトリができます。

- `personal-growth-apps-split/workout-tracker`
- `personal-growth-apps-split/speak-english`
- `personal-growth-apps-split/fortune-app`

---

## Step 3: 各ディレクトリで Git 初期化と初回コミット

```bash
cd personal-growth-apps-split/workout-tracker
git init
git add .
git commit -m "chore: split from personal-growth-apps (Workout Tracker)"

cd ../speak-english
git init
git add .
git commit -m "chore: split from personal-growth-apps (Speak English)"

cd ../fortune-app
git init
git add .
git commit -m "chore: split from personal-growth-apps (Fortune App)"
```

---

## Step 4: GitHub に新リポジトリを作成して push

**事前:** `gh auth login` で GitHub CLI にログインしておく。

### 方法A: GitHub CLI（推奨）

```bash
cd /Applications/src/personal-growth-apps-split/workout-tracker
gh repo create takepon7/workout-tracker --private --source=. --remote=origin --push

cd ../speak-english
gh repo create takepon7/speak-english --private --source=. --remote=origin --push

cd ../fortune-app
gh repo create takepon7/fortune-app --private --source=. --remote=origin --push
```

- 公開リポジトリにする場合は `--private` を外す。
- リポジトリ名は `workout-tracker` / `speak-english` / `fortune-app` のままでも、任意の名前にしてもよい。

### 方法B: GitHub Web でリポジトリ作成後に push

1. GitHub で **workout-tracker** / **speak-english** / **fortune-app** を空の状態で作成（README なしでOK）。
2. 各ディレクトリで:

```bash
git remote add origin https://github.com/takepon7/workout-tracker.git
git branch -M main
git push -u origin main
```

（speak-english / fortune-app も同様に `origin` とブランチ名を合わせる。）

---

## Step 5: 元リポジトリ（personal-growth-apps）の整理

### オプションA: アーカイブして「分割済み」と明示

1. GitHub: **Settings** → **Danger Zone** → **Archive this repository**
2. リポジトリの README の先頭に、例えば以下を追加してからアーカイブ:

```markdown
> **このモノレポは分割済みです。** 各プロダクトは以下で管理しています。
> - [workout-tracker](https://github.com/takepon7/workout-tracker) — 筋トレ記録
> - [speak-english](https://github.com/takepon7/speak-english) — 英語スピーキング
> - [fortune-app](https://github.com/takepon7/fortune-app) — 占い
> SupplementApp は引き続きこのリポジトリの `SupplementApp/` にあります（必要なら別リポジトリに分割可能）。
```

### オプションB: 残すが README のみ更新

- 上記のような「分割済み」の案内を README に書く。
- 開発は新リポジトリで行い、このリポジトリは参照用として残す。

---

## ローカルでの今後の作業

- 新しく使うのは **workout-tracker** / **speak-english** / **fortune-app** の3つのクローンだけにすると整理しやすいです。
- 元の `personal-growth-apps` クローンは、必要がなければ削除して構いません（GitHub 上でアーカイブ済みなら参照は可能）。

```bash
# 例: 3つをまとめてクローンし直す場合
git clone https://github.com/takepon7/workout-tracker.git
git clone https://github.com/takepon7/speak-english.git
git clone https://github.com/takepon7/fortune-app.git
```

---

## SupplementApp も別リポジトリにしたい場合

同じ考え方で、`SupplementApp` だけを別リポジトリにできます。

1. 新ディレクトリを作成し、`personal-growth-apps/SupplementApp` の中身をコピー。
2. `.gitignore` と `README.md` は既に SupplementApp 内にあるのでそのまま利用。
3. `git init` → `git add .` → `git commit` → GitHub に新リポジトリ作成 → `git remote add` → `git push`。

必要なら、SupplementApp 用の分割スクリプトを別途用意できます。
