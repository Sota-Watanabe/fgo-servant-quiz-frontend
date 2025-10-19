# GitHub Copilot カスタム指示# GitHub Copilot Instructions



## プロジェクト概要このプロジェクトは、Fate/Grand Order（FGO）のサーヴァントに関するクイズアプリケーションのフロントエンドです。



このプロジェクトは**Fate/Grand Order サーヴァントクイズアプリケーション**のフロントエンドです。## プロジェクト概要

ユーザーはサーヴァントのスキルやプロフィール情報からサーヴァントを当てるクイズに挑戦できます。

- **フレームワーク**: Next.js 15 (App Router)

## 技術スタック- **言語**: TypeScript

- **スタイリング**: Tailwind CSS

- **フレームワーク**: Next.js 15 (App Router)- **状態管理**: TanStack Query (React Query)

- **言語**: TypeScript 5- **デプロイ**: Cloud Run

- **UI**: React 19

- **スタイリング**: Tailwind CSS 4## コーディング規約

- **状態管理**: @tanstack/react-query 5

- **API型定義**: OpenAPI (openapi-typescript)### 一般原則

- **デプロイ**: Google Cloud Run

- **ビルドツール**: Turbopack1. **TypeScript**: 型安全性を最優先し、`any`型の使用は避ける

2. **関数コンポーネント**: すべてのReactコンポーネントは関数コンポーネントで実装

## コーディング規約3. **"use client"**: クライアントコンポーネントには必ず`"use client"`ディレクティブを付ける

4. **命名規則**:

### 全般   - コンポーネント: PascalCase（例: `PageLayout`, `SearchableSelect`）

- すべてのファイルで**TypeScript**を使用   - 関数・変数: camelCase（例: `handleNextQuestion`, `questionCount`）

- **厳密な型定義**を心がける（`any`の使用を避ける）   - 定数: UPPER_SNAKE_CASE（例: `API_BASE_URL`）

- コメントは**日本語**で記述   - 型定義: PascalCase（例: `ServantOption`, `QuizSkillResponse`）

- 関数やコンポーネントには適切なJSDoc/TSDocコメントを追加

### ファイル構成

### React/Next.js

- **関数コンポーネント**のみを使用（クラスコンポーネント禁止）```

- Client Componentは明示的に`"use client"`を指定src/

- Server Componentをデフォルトとして活用├── app/                    # Next.js App Router

- コンポーネント名は**PascalCase**（例: `SearchableSelect.tsx`）│   ├── components/        # 共通コンポーネント

- カスタムフックは`use`プレフィックスを使用（例: `useFetchQuizSkill.ts`）│   ├── quiz/             # クイズ関連ページ

- フックファイル名は**camelCase**│   └── layout.tsx        # ルートレイアウト

├── hooks/                 # カスタムフック

### 型定義├── models/               # ドメインモデル

- `src/types/api.ts`は**自動生成ファイル**のため直接編集禁止├── types/                # 型定義

- OpenAPI仕様から型を生成: `npm run generate:types`└── utils/                # ユーティリティ関数

- API型は`components["schemas"]["TypeName"]`形式で参照```

- ローカル型定義が必要な場合は適切なファイルに配置（例: `src/models/`）

### コンポーネント設計

### API通信

- すべてのAPI呼び出しは`apiClient`関数を使用1. **単一責任の原則**: 各コンポーネントは1つの責務のみを持つ

- React Queryの`useQuery`で非同期データを管理2. **props型定義**: すべてのpropsに明示的な型定義を行う

- エンドポイントは`API_ENDPOINTS`定数で管理3. **レスポンシブデザイン**: モバイルファーストで実装し、Tailwind CSSのブレークポイントを活用

- エラーハンドリングは`ApiError`クラスを活用   - デフォルト: モバイル

- ベースURLは環境変数`NEXT_PUBLIC_API_URL`から取得   - `sm:`: 640px以上

   - `lg:`: 1024px以上

### スタイリング

- **Tailwind CSSユーティリティクラス**を使用### API連携

- カスタムCSSは最小限に抑える

- レスポンシブデザインを必ず考慮（`sm:`, `md:`, `lg:`等）1. **TanStack Query**: データフェッチングには`@tanstack/react-query`を使用

- カラーパレットは主にグレー・ブルー系を使用2. **カスタムフック**: API呼び出しは`hooks/`ディレクトリのカスタムフックで管理

- アクセシビリティを考慮したスタイリング3. **型安全性**: APIレスポンスには`types/api.ts`で定義された型を使用



### ファイル構成### スタイリング

```

src/1. **Tailwind CSS**: 可能な限りTailwind CSSのユーティリティクラスを使用

  app/                    # App Router（ページ・レイアウト）2. **レスポンシブ**: `sm:`、`lg:`プレフィックスを活用

    components/           # 共通コンポーネント3. **カラーパレット**:

    quiz/                 # クイズ関連ページ   - プライマリ: blue系

  hooks/                  # カスタムフック   - セカンダリ: indigo/purple系

  models/                 # 定数・エンティティ定義   - 成功: green系

  types/                  # 型定義（自動生成含む）   - エラー: red系

  utils/                  # ユーティリティ関数   - 背景: グラデーション（`from-blue-50 to-indigo-100`など）

```

### 状態管理

## 重要な設計パターン

1. **ローカル状態**: `useState`で管理

### 1. API型定義の自動生成2. **サーバー状態**: TanStack Queryで管理

- バックエンドのOpenAPI仕様から型を自動生成3. **フォーム**: 制御コンポーネントパターンを使用

- 型生成コマンド: `npm run generate:types`

- 生成ファイル: `src/types/api.ts`（手動編集禁止）## 特記事項



### 2. React Queryによるデータフェッチング### 広告表示

```typescript

// 良い例- Google AdSenseを使用

export const useFetchQuizSkill = (questionCount: number = 0) => {- `AdBanner`コンポーネントで広告を表示

  return useQuery({- 各ページで固有の`adKeyPrefix`を設定

    queryKey: [API_ENDPOINTS.QUIZ_SKILL, questionCount],

    queryFn: fetchQuizData,### アクセシビリティ

  });

};1. ボタンの`disabled`状態を適切に設定

```2. セマンティックなHTML要素を使用

3. `aria-*`属性は必要に応じて追加

### 3. クライアントコンポーネントの明示

```typescript### パフォーマンス

// 良い例

"use client";1. 不要な再レンダリングを避ける

2. `useMemo`、`useCallback`を適切に使用

import { useState } from "react";3. 画像は最適化された形式で使用



export default function SearchableSelect() {## コード例

  // インタラクティブなUI

}### 基本的なページコンポーネント

```

```tsx

### 4. 型安全なAPI呼び出し"use client";

```typescript

// 良い例import PageLayout from "@/app/components/PageLayout";

type SkillQuizResponse = components["schemas"]["ServantDetailGetResponseDto"];

export default function ExamplePage() {

const fetchQuizData = async (): Promise<SkillQuizResponse> => {  return (

  return apiClient<SkillQuizResponse>(API_ENDPOINTS.QUIZ_SKILL);    <PageLayout adKeyPrefix="example" minHeight={800}>

};      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">

```        {/* コンテンツ */}

      </main>

## コンポーネント設計ガイドライン    </PageLayout>

  );

### 検索・選択UI}

- `SearchableSelect`コンポーネントを参考に実装```

- ひらがな/カタカナの相互変換検索をサポート

- キーボードナビゲーション（矢印キー、Enter、Escape）を実装### カスタムフックの定義

- アクセシビリティ対応（tabIndex、ARIA属性）

```tsx

### クイズUIimport { useQuery } from "@tanstack/react-query";

- 問題表示、選択肢表示、結果表示を分離import { apiClient } from "@/utils/apiClient";

- 状態管理にuseStateを活用import type { ApiResponse } from "@/types/api";

- React Queryでクイズデータを取得

export const useFetchData = () => {

## よくある実装パターン  return useQuery({

    queryKey: ["data"],

### 新しいクイズタイプの追加    queryFn: async () => {

1. バックエンドにAPIエンドポイントを追加      const response = await apiClient.get<ApiResponse>("/endpoint");

2. `npm run generate:types`で型を再生成      return response;

3. `src/hooks/`にカスタムフックを作成    },

4. `src/app/quiz/`に新しいページを追加  });

};

### 新しいコンポーネントの作成```

1. `src/app/components/`に配置（共通）または`src/app/quiz/`配下（クイズ専用）

2. TypeScriptで型定義を厳密に## 注意事項

3. Propsインターフェースを定義

4. Client/Server Componentを適切に選択1. コンソールログは開発中のみ使用し、本番環境では削除する

2. エラーハンドリングを適切に実装する

### エラーハンドリング3. ローディング状態とエラー状態のUIを提供する

```typescript4. コメントは日本語で記述する

// 良い例

const { data, error, isLoading } = useFetchQuizSkill(questionCount);## 参考リンク



if (error) {- [Next.js Documentation](https://nextjs.org/docs)

  return <div>エラーが発生しました: {error.message}</div>;- [TanStack Query](https://tanstack.com/query/latest)

}- [Tailwind CSS](https://tailwindcss.com/docs)


if (isLoading) {
  return <div>読み込み中...</div>;
}
```

## 禁止事項

- ❌ `src/types/api.ts`の手動編集
- ❌ `any`型の多用
- ❌ インラインスタイルの使用（Tailwindを優先）
- ❌ クラスコンポーネントの作成
- ❌ 環境変数をハードコード
- ❌ 直接fetchを使用（apiClientを経由すること）

## 推奨事項

- ✅ Server ComponentとClient Componentの適切な使い分け
- ✅ React Queryでのキャッシュ戦略の活用
- ✅ TypeScript型の厳密な定義
- ✅ Tailwindユーティリティクラスの活用
- ✅ レスポンシブデザインの実装
- ✅ アクセシビリティの考慮
- ✅ パフォーマンスの最適化

## 環境変数

- `NEXT_PUBLIC_API_URL`: バックエンドAPIのベースURL
- 他の環境変数は必要に応じて`.env.local`に追加

## テスト・デプロイ

### ローカル開発
```bash
npm run dev          # 開発サーバー起動（Turbopack使用）
npm run build        # プロダクションビルド
npm run start        # プロダクションサーバー起動
npm run lint         # ESLint実行
npm run generate:types  # API型定義生成
```

### デプロイ
- `main`ブランチへのpushで自動的にGoogle Cloud Runにデプロイ
- CI/CDはGitHub Actionsで管理

## 参考リソース

- [Next.js 15 ドキュメント](https://nextjs.org/docs)
- [React Query ドキュメント](https://tanstack.com/query/latest)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
- [TypeScript ハンドブック](https://www.typescriptlang.org/docs/)

---

このプロジェクトでコードを生成する際は、上記のガイドラインに従ってください。
