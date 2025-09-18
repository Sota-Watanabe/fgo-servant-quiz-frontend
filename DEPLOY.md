# Cloud Run 自動デプロイ設定手順

## 必要な GitHub Secrets の設定

GitHubリポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定してください：

### 1. GCP_PROJECT_ID
Google Cloud プロジェクトのプロジェクトIDを設定

### 2. GCP_SA_KEY
Google Cloud サービスアカウントのJSONキーファイルの内容を設定

## Google Cloud サービスアカウントの作成手順

1. Google Cloud Console でプロジェクトを選択
2. IAM > サービスアカウント で新しいサービスアカウントを作成
3. 以下の権限を付与：
   - Cloud Run Admin
   - Artifact Registry Administrator
   - Service Account User

4. サービスアカウントのJSONキーを生成してダウンロード

## Google Cloud の設定

### APIの有効化
Google Cloud Console で以下のAPIを有効化：
- Cloud Run API
- Artifact Registry API

### Artifact Registryリポジトリの作成
以下のコマンドでArtifact Registryリポジトリを作成：

```bash
gcloud artifacts repositories create fgo-quiz \
    --repository-format=docker \
    --location=asia-northeast1 \
    --description="FGO Quiz application images"
```

## 環境変数設定（オプション）

本番環境用の設定が必要な場合は、GitHub Actionsワークフローファイルで以下の環境変数を設定可能：

```yaml
--set-env-vars NODE_ENV=production,NEXT_PUBLIC_API_URL=https://your-backend-url
```

## 実行について

- `main` ブランチへのpushで自動的にデプロイが実行されます
- `fgo-servant-quiz-frontend/` 配下のファイルが変更された場合のみ実行されます
- 手動実行も可能です（GitHub Actions > Deploy Frontend to Cloud Run > Run workflow）

## デプロイ後の確認

Cloud Runサービスが正常にデプロイされると、GitHub ActionsのログでサービスのURLが表示されます。

## Artifact Registry設定

このプロジェクトはGoogle Cloud Artifact Registryを使用してDockerイメージを管理します：

- **リポジトリ名**: `fgo-quiz`
- **場所**: `asia-northeast1`
- **イメージ名**: `frontend`
- **フルパス**: `asia-northeast1-docker.pkg.dev/[PROJECT_ID]/fgo-quiz/frontend`

Container Registry（gcr.io）は非推奨となっているため、新しいプロジェクトではArtifact Registryを使用することを推奨します。
