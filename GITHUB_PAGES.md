# GitHub Pages 公開手順

このリポジトリは `main` ブランチへの反映時に、GitHub Actionsで静的サイトをビルドし、GitHub Pagesへ公開する構成です。公開対象は `dist/public` です。

1. Management UIの **Settings → GitHub** を開き、リポジトリ名に **av-calculator-suite** を指定してコードをエクスポートします。
2. GitHubの新規リポジトリを開き、**Settings → Pages** を選択します。
3. **Build and deployment** の **Source** に **GitHub Actions** を設定します。
4. `main` ブランチへ反映すると、**Actions** の `Deploy AV Calculator Suite to GitHub Pages` が実行されます。
5. 成功後、**Settings → Pages** に表示される公開URLを各利用者へ共有してください。

## データの扱い

案件保存データはブラウザの端末内ストレージに保存されます。同じ公開URLを利用しても、利用者ごとの案件データは共有されません。ブラウザのサイトデータを削除すると、保存済み案件も削除されます。
