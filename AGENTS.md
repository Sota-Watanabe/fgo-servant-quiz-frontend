# AGENTS

このドキュメントは、リポジトリ内の主要ファイルや役割を把握しやすくするための概要です。新しく作業するエージェントや開発者が、構造と責務を素早く理解できることを目的としています。

## リポジトリ概要
- Next.js App Router 構成のフロントエンド。トップ (`src/app/page.tsx`) は `/quiz/skill/challenge` へリダイレクト。
- React Query（`QueryProvider`）で API フェッチを集約し、FGO クイズ（スキル／プロフィール）の問題を表示。
- Tailwind CSS を `globals.css` からインライン @import し、独自のフォントと装飾を適用。
- Google Analytics (Gタグ) と Google AdSense をクライアントコンポーネントで読み込む。

## ディレクトリ構成の要点
- インポート時はルートエイリアス `@` から記述する。
- `src/app` — App Router のページと共通 UI。
  - `components/`：`PageLayout`（広告付き3カラム）、`GlobalNav`、`AdSense` 系、`SearchableSelect` など。
  - `quiz/skill/**`・`quiz/profile/**`：PRACTICE/CHALLENGE それぞれのページ。
- `src/hooks` — React Query を使った API 呼び出し。`useFetchQuizSkill.ts`、`useFetchQuizProfile.ts`、`useFetchServantsOption.ts` など個別フックで構成。
- `src/utils` — API クライアント (`apiClient.ts`)、スキル整形 (`skillUtils.ts`)。
- `src/models` — サーヴァントのクラス／カード種別を ID ↔ 日本語名でマッピング。
- `src/types` — OpenAPI から生成された `api.ts`（`npm run generate:types`）、`gtag.d.ts`。
- ルートには Cloud Run 向けの `DEPLOY.md`、サービスアカウント作成手順、Dockerfile などがある。

## クイズページの流れ
- Practice ページ（`skill/practice/page.tsx`、`profile/practice/page.tsx`）
  - `useFetchQuizSkill` / `useFetchQuizProfile` で問題を取得し、`questionCount` に連動したクエリキーで再フェッチ。
  - `getDisplaySkills` やプロフィール情報を整形して表示、回答ボタンで正解をトグル表示。
- Challenge ページ（`skill/challenge/page.tsx`、`profile/challenge/page.tsx`）
  - Practice と同じ表示に加えて `SearchableSelect` でサーヴァントを検索・回答。
  - 回答確認後に正解／不正解の UI を出し、次の問題ボタンで再フェッチ。
- いずれも `PageLayout` を経由して広告枠と共通ヘッダーを提供。

## データ取得と状態管理
- `src/utils/apiClient.ts`
  - `NEXT_PUBLIC_API_URL` をベースとしたフェッチ。失敗時は `ApiError` をスロー。
  - `API_ENDPOINTS` でバックエンドのパスを管理。
- `src/hooks/useFetchQuizSkill.ts`
  - React Query の `useQuery` を使ったスキル問題取得フック。`queryKey` にページ固有キーを渡して問題を更新。
- `src/hooks/useFetchQuizProfile.ts`
  - プロフィール問題取得用の React Query フック。
- `src/hooks/useFetchServantsOption.ts`
  - 回答セレクト用のサーヴァント選択肢一覧を取得。
- `QueryProvider` はクエリのデフォルト（staleTime 5 分 / retry 1 回）を設定。

## 共通 UI とスタイリング
- `PageLayout`：ヘッダー・ナビ・広告枠・フッターを含む。開発環境では広告枠をダミー表示。
- `GlobalNav`：4 つのクイズページへのリンクをカード状に表示。`usePathname` でアクティブ判定。
- `SearchableSelect`：サーヴァントを日本語のひらがな／カタカナ変換まで考慮して検索。キーボード操作・外部クリックをサポート。
- `globals.css`：テキスト選択禁止、背景グラデーション、Tailwind テーマ変数、外部フォントなどを設定。

## 計測・広告
- `GoogleAnalytics`：`G-R5XW321DL4` を読み込むラッパー。`RootLayout` の `<head>` で使用。
- `AdSense` / `AdBanner`：広告インスタンスを遅延初期化。開発環境では枠のみ表示されるため UI の崩れを確認しやすい。

## 開発・運用メモ
- 開発サーバー：`npm run dev`。環境変数 `NEXT_PUBLIC_API_URL` が未指定なら `http://localhost:1234` を参照。
- 型生成：バックエンドの OpenAPI (`../fgo-servant-quiz-backend/openapi.json`) から `npm run generate:types`。
- デプロイ：`DEPLOY.md` に Cloud Run への GitHub Actions 自動デプロイ手順。サービスアカウント設定は `create-service-account.md` を参照。
- 公開用の Google AdSense client ID は `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` に設定。

## 注意点・改善の余地
- `src/hooks` に旧カスタムフック (`useFetchQuizSkill.ts` など) が残っている。重複を整理すると参照ミスを防げる。
- `PageLayout` の `showSkillTabs` プロップは現状未使用。必要に応じてタブ UI を実装、不要なら削除。
- `profile/practice/page.tsx` では `metadataEntries` を使用するセクションがあり、空判定に依存した UI があるため null/undefined チェックのロジック調整時は注意。
- テキスト選択を全体で無効化しているため、コピーが必要な運用ケースがあれば再検討が必要。
