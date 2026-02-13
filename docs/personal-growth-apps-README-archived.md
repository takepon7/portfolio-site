# personal-growth-apps アーカイブ用 README 案

元の `personal-growth-apps` リポジトリをアーカイブする際に、README を以下に差し替えると、新リポジトリへの誘導ができます。

---

```markdown
# personal-growth-apps（分割済み）

このモノレポは **3つの独立したリポジトリに分割しました。**

| リポジトリ | 内容 | 技術 |
|-----------|------|------|
| [workout-tracker](https://github.com/takepon7/workout-tracker) | 筋トレ記録 | Swift, SwiftUI, Core Data |
| [speak-english](https://github.com/takepon7/speak-english) | 英語スピーキング | Swift, SwiftUI |
| [fortune-app](https://github.com/takepon7/fortune-app) | 占い（星天の館） | Next.js, React, Tailwind |

**SupplementApp**（サプリ管理Webアプリ）は、分割時点ではこのリポジトリの `SupplementApp/` に残しています。必要に応じて別リポジトリへ移行できます。

新規の開発は上記の各リポジトリで行ってください。
```

---

GitHub で **Settings** → **Danger Zone** → **Archive this repository** を実行する前に、上記で README を更新してください。
