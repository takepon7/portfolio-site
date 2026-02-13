#!/usr/bin/env bash
# personal-growth-apps を Workout Tracker / Speak English / Fortune App の3リポジトリに分割するスクリプト
# Usage: ./split-personal-growth-apps.sh <path-to-personal-growth-apps> [output-dir]
# Example: ./split-personal-growth-apps.sh ../personal-growth-apps ./split-output

set -e

SOURCE_DIR="${1:?Usage: $0 <path-to-personal-growth-apps> [output-dir]}"
OUTPUT_DIR="${2:-$(dirname "$SOURCE_DIR")/personal-growth-apps-split}"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Error: Source directory does not exist: $SOURCE_DIR"
  exit 1
fi

# 絶対パスに正規化（cp 時に cd の影響を受けないように）
SOURCE_DIR=$(cd "$SOURCE_DIR" && pwd)
mkdir -p "$OUTPUT_DIR"
OUTPUT_DIR=$(cd "$OUTPUT_DIR" && pwd)

echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
echo ""

# --- Workout Tracker ---
echo "[1/3] Creating workout-tracker..."
WT_DIR="$OUTPUT_DIR/workout-tracker"
rm -rf "$WT_DIR"
mkdir -p "$WT_DIR"
if [[ -d "$SOURCE_DIR/WorkoutTracker" ]]; then
  cp -R "$SOURCE_DIR/WorkoutTracker"/. "$WT_DIR/"
fi
[[ -d "$SOURCE_DIR/WorkoutTracker_Archived" ]] && cp -R "$SOURCE_DIR/WorkoutTracker_Archived" "$WT_DIR/" || true
cp "$SOURCE_DIR/WorkoutTracker_SPEC.md" "$WT_DIR/" 2>/dev/null || true
for f in FIX_COREDATA_IMPORT.md FIX_COREDATA_MODEL.md FIX_INFO_PLIST_ERROR.md FIX_WHITE_SCREEN.md \
         WORKOUT_INFO_PLIST_FIX.md XCODE_CONSOLE_GUIDE.md XCODE_REVIEW_GUIDE.md fix_info_plist_copy.md; do
  [[ -f "$SOURCE_DIR/$f" ]] && cp "$SOURCE_DIR/$f" "$WT_DIR/" || true
done
# .gitignore for iOS
cat > "$WT_DIR/.gitignore" << 'GITIGNORE'
# Xcode
build/
DerivedData/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/
*.xccheckout
*.moved-aside
*.hmap
*.ipa
# Swift
.swiftpm/
GITIGNORE
# README
cat > "$WT_DIR/README.md" << 'README'
# Workout Tracker

筋トレ記録iOSアプリ。週間目標リング・多言語対応・Core Data永続化。

## Tech

Swift, SwiftUI, Core Data, Combine

## Run

```bash
open WorkoutTracker.xcodeproj
# or open WorkoutTracker.xcworkspace
```

Xcodeでスキームを **WorkoutTracker** にし、シミュレータまたは実機で Run (⌘R)。

## Docs

- `WorkoutTracker_SPEC.md` — 仕様
README

echo "  -> done"

# --- Speak English ---
echo "[2/3] Creating speak-english..."
SE_DIR="$OUTPUT_DIR/speak-english"
rm -rf "$SE_DIR"
mkdir -p "$SE_DIR"
if [[ -d "$SOURCE_DIR/SpeakEnglish" ]]; then
  cp -R "$SOURCE_DIR/SpeakEnglish"/. "$SE_DIR/"
fi
for f in SIMULATOR_GUIDE.md XCODE_CONSOLE_GUIDE.md XCODE_REVIEW_GUIDE.md FIX_INFO_PLIST_ERROR.md fix_info_plist_copy.md; do
  [[ -f "$SOURCE_DIR/$f" ]] && cp "$SOURCE_DIR/$f" "$SE_DIR/" || true
done
cat > "$SE_DIR/.gitignore" << 'GITIGNORE'
# Xcode
build/
DerivedData/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/
*.xccheckout
*.moved-aside
*.hmap
*.ipa
.swiftpm/
GITIGNORE
cat > "$SE_DIR/README.md" << 'README'
# Speak English

シナリオ型英語スピーキング練習iOSアプリ。

## Tech

Swift, SwiftUI, Speech framework（想定）

## Run

```bash
open SpeakEnglish.xcodeproj
```

Xcodeでスキームを選び Run (⌘R)。

## Docs

- ルートの各種 FIX_*.md / XCODE_*.md は開発メモです。
README

echo "  -> done"

# --- Fortune App ---
echo "[3/3] Creating fortune-app..."
FA_DIR="$OUTPUT_DIR/fortune-app"
rm -rf "$FA_DIR"
mkdir -p "$FA_DIR"
if [[ -d "$SOURCE_DIR/FortuneApp" ]] && [[ -n "$(ls -A "$SOURCE_DIR/FortuneApp" 2>/dev/null)" ]]; then
  cp -R "$SOURCE_DIR/FortuneApp"/. "$FA_DIR/"
else
  echo "  (FortuneApp empty or missing, only SPEC/doc copied)"
fi
cp "$SOURCE_DIR/FortuneApp_SPEC.md" "$FA_DIR/" 2>/dev/null || true
[[ -f "$SOURCE_DIR/FIX_FORTUNEAPP_FOLDER.md" ]] && cp "$SOURCE_DIR/FIX_FORTUNEAPP_FOLDER.md" "$FA_DIR/" || true
# .gitignore for Next.js
cat > "$FA_DIR/.gitignore" << 'GITIGNORE'
# Dependencies
node_modules/
.pnp
.pnp.js
# Build
.next/
out/
build
# Env
.env
.env.local
.env.*.local
# Misc
.DS_Store
*.pem
# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
GITIGNORE
cat > "$FA_DIR/README.md" << 'README'
# Fortune App（占い）

「星天の館」コンセプトのデイリー運勢Next.jsアプリ。

## Tech

Next.js, React, TypeScript, Framer Motion, Tailwind CSS

## Run

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## Docs

- `FortuneApp_SPEC.md` — 仕様
README

echo "  -> done"

echo ""
echo "Split complete. Output: $OUTPUT_DIR"
echo "  - workout-tracker"
echo "  - speak-english"
echo "  - fortune-app"
echo ""
echo "Next: cd each dir, run 'git init && git add . && git commit -m \"chore: split from personal-growth-apps\"'"
echo "Then create GitHub repos and push (see docs/SPLIT_PERSONAL_GROWTH_APPS.md)."
