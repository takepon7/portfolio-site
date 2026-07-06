# Project memory

## Workflow

- main への直接 push は禁止。feature ブランチ → PR → CLI マージ（push 後は PR head 一致を確認してから `gh pr merge`）。
- PR 作成後は CI 失敗・レビューコメントを取りこぼさないよう追跡する:
  - 進行中は `gh pr checks <PR番号>`（CI 状況）と `gh pr view <PR番号> --comments`（レビュー）で確認する。
  - 継続的に通知が欲しい場合は GitHub 側でリポジトリを Watch する（メール / GitHub 通知で届く）。
- ※ 以前ここにあった `mcp__github__subscribe_pr_activity` によるウォッチ設定は、この環境に存在しない MCP ツールを前提としていたため削除した。公式 GitHub MCP を導入しても同名ツールは提供されない。
