# Google Cloud サービスアカウント作成手順

## 前提条件
- Google Cloud プロジェクトが作成済み
- gcloud CLI がインストール・認証済み
- 適切な権限を持つユーザーでログイン済み

## 1. プロジェクト設定の確認
```bash
# 現在のプロジェクトを確認
gcloud config get-value project

# プロジェクトを設定（必要に応じて）
gcloud config set project YOUR_PROJECT_ID
```

## 2. サービスアカウント作成コマンド
```bash
# サービスアカウントを作成
gcloud iam service-accounts create [SERVICE_ACCOUNT_ID] \
    --display-name="[表示名]" \
    --description="FGO Quiz フロントエンド用サービスアカウント"
```

## 3. 必要な権限の付与
```bash
# Cloud Run Admin権限
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:[SERVICE_ACCOUNT_ID]@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/run.admin"

# Artifact Registry Administrator権限
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:[SERVICE_ACCOUNT_ID]@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.admin"

# Service Account User権限
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:[SERVICE_ACCOUNT_ID]@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"
```

## 4. JSONキーファイルの作成
```bash
gcloud iam service-accounts keys create ~/[SERVICE_ACCOUNT_ID]-key.json \
    --iam-account=[SERVICE_ACCOUNT_ID]@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

## 5. 作成確認
```bash
# サービスアカウント一覧を確認
gcloud iam service-accounts list

# 権限を確認
gcloud projects get-iam-policy YOUR_PROJECT_ID \
    --flatten="bindings[].members" \
    --format="table(bindings.role)" \
    --filter="bindings.members:[SERVICE_ACCOUNT_ID]@YOUR_PROJECT_ID.iam.gserviceaccount.com"
```

## 注意事項
- JSONキーファイルは安全に保管してください
- GitHubのSecretsに設定後、ローカルのキーファイルは削除することを推奨します
- サービスアカウントIDは6-30文字、英数字とハイフンのみ使用可能です
