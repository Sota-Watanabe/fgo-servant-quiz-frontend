# Fate/Grand Quiz フロントエンド

Fate/Grand Order のサーヴァントに関するクイズアプリケーションのフロントエンドです。スキル、プロフィール、宝具の3種類のクイズモードを提供し、ユーザーがFGOの知識を試せる非公式ファンサイトです。

## 主な機能

- **スキルクイズ**: スキル効果テキストからサーヴァントを推理
- **プロフィールクイズ**: プロフィール情報からサーヴァントを当てる
- **宝具クイズ**: 宝具名や説明からサーヴァントを特定
- **FGO用語集**: 初心者向けの用語解説ページ
- **利用ガイド**: クイズの遊び方と攻略のコツ
- **FAQ**: よくある質問と回答
- **レスポンシブデザイン**: スマートフォン・タブレット・PC対応

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript 5
- **UI**: React 19
- **スタイリング**: Tailwind CSS 4
- **状態管理**: @tanstack/react-query 5
- **API型定義**: OpenAPI (openapi-typescript)
- **デプロイ**: Google Cloud Run
- **ビルドツール**: Turbopack

## はじめに

### 必要な環境

- Node.js 20以上
- npm または yarn

### インストール

```bash
npm install
```

### 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
NEXT_PUBLIC_API_URL=http://localhost:1234  # バックエンドAPIのURL
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX  # Google AdSense Client ID（本番環境のみ）
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

`app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると自動的にページが更新されます。

## スクリプト

### 開発

```bash
npm run dev          # 開発サーバー起動（Turbopack使用）
npm run build        # プロダクションビルド
npm run start        # プロダクションサーバー起動
npm run lint         # ESLint実行
```

### API型定義の生成

バックエンドのOpenAPI仕様から型定義を生成する場合：

```bash
npm run generate:types
```

このコマンドは、`../fgo-servant-quiz-backend/openapi.json` から `src/types/api.ts` を自動生成します。
**注意**: `src/types/api.ts` は自動生成ファイルのため、直接編集しないでください。

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── components/        # 共通コンポーネント
│   │   ├── PageLayout.tsx      # ページレイアウト（広告枠含む）
│   │   ├── GlobalNav.tsx       # グローバルナビゲーション
│   │   ├── SearchableSelect.tsx # サーヴァント選択UI
│   │   └── ...
│   ├── quiz/              # クイズ関連ページ
│   │   ├── skill/         # スキルクイズ
│   │   ├── profile/       # プロフィールクイズ
│   │   └── np/            # 宝具クイズ
│   ├── about/             # サイトについて
│   ├── guide/             # 利用ガイド
│   ├── glossary/          # FGO用語集
│   ├── faq/               # よくある質問
│   ├── contact/           # お問い合わせ
│   └── privacy/           # プライバシーポリシー
├── hooks/                 # カスタムフック
│   ├── useFetchQuizSkill.ts
│   ├── useFetchQuizProfile.ts
│   ├── useFetchQuizNp.ts
│   └── useFetchServantsOption.ts
├── models/                # ドメインモデル
│   ├── cardTypes.ts       # カード種別定義
│   ├── classTypes.ts      # クラス定義
│   └── ...
├── types/                 # 型定義
│   ├── api.ts             # 自動生成API型定義
│   └── gtag.d.ts          # Google Analytics型定義
└── utils/                 # ユーティリティ関数
    ├── apiClient.ts       # APIクライアント
    ├── seo.ts             # SEOヘルパー
    └── skillUtils.ts      # スキル整形関数
```

## コーディング規約

プロジェクトのコーディング規約は `.github/copilot-instructions.md` に記載されています。主なポイント：

- TypeScriptで厳密な型定義を使用
- 関数コンポーネントのみを使用
- Client Componentには `"use client"` ディレクティブを明示
- Tailwind CSSのユーティリティクラスを優先
- React Queryでデータフェッチングを管理
- コメントは日本語で記述

## デプロイ

### 自動デプロイ

このプロジェクトは `main` ブランチに変更がプッシュされると、GitHub Actionsにより自動的にGoogle Cloud Runにデプロイされます。

### セットアップ手順

詳細なセットアップ手順については以下を参照してください：
- [DEPLOY.md](DEPLOY.md) - デプロイ手順とGitHub Secretsの設定
- [create-service-account.md](create-service-account.md) - サービスアカウントのセットアップ

### 手動デプロイ

GitHub Actionsから手動でデプロイをトリガーすることもできます。

## SEO対策

サイトの検索エンジン最適化とGoogle AdSense対策については [docs/seo.md](docs/seo.md) を参照してください。

主なSEO機能：
- 静的サイト生成（SSG）による高速読み込み
- 各ページの固有メタデータ（title、description、OGP）
- XMLサイトマップ自動生成
- レスポンシブデザイン
- 充実したコンテンツページ（用語集、FAQ、ガイドなど）

## データソース

このサイトは [Atlas Academy API](https://atlasacademy.io/) を利用して、FGOのサーヴァント情報を取得しています。

## ライセンスと免責事項

本サイトは非公式のファンサイトです。Fate/Grand Order は TYPE-MOON/FGO PROJECT の著作物であり、本プロジェクトは公式とは一切関係ありません。

## 貢献

バグ報告や機能提案は、GitHubのIssueまたはお問い合わせページからお願いします。

## 詳細情報

Next.jsについてより詳しく学びたい場合は、以下のリソースを参照してください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル
- [TanStack Query](https://tanstack.com/query/latest) - データフェッチングライブラリ
- [Tailwind CSS](https://tailwindcss.com/docs) - ユーティリティファーストCSSフレームワーク
