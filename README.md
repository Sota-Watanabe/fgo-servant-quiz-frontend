# FGOサーヴァントクイズ フロントエンド

これは [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) でブートストラップされた [Next.js](https://nextjs.org) プロジェクトです。

## はじめに

まず、開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

`app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると自動的にページが更新されます。

## API型定義の生成

バックエンドのOpenAPI仕様から型定義を生成する場合：

```bash
npm run generate:types
```

このコマンドは、`../fgo-servant-quiz-backend/openapi.json` から `src/types/api.ts` を生成します。

## デプロイ

このプロジェクトは `main` ブランチに変更がプッシュされると、自動的にGoogle Cloud Runにデプロイされます。

### セットアップ手順

詳細なセットアップ手順については [DEPLOY.md](DEPLOY.md) を参照してください：
- GitHub Secrets の設定
- Google Cloud サービスアカウントのセットアップ
- 必要な権限

### 手動デプロイ

GitHub Actions から手動でデプロイをトリガーすることもできます。

このプロジェクトは [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用して、Vercelの新しいフォントファミリーである [Geist](https://vercel.com/font) を自動的に最適化し読み込みます。

## 詳細情報

Next.jsについてより詳しく学びたい場合は、以下のリソースを参照してください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル

[Next.js GitHubリポジトリ](https://github.com/vercel/next.js) もチェックしてください。フィードバックと貢献を歓迎します！

## Vercelでのデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) を使用することです。

詳細については [Next.jsデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) をご確認ください。
