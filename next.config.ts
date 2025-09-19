import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  // Cloud Run では通常 HTTP/1.1 を使用
  compress: true,
  // 環境変数でバックエンドAPIのURLを設定可能にする
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3388",
  },
};

export default nextConfig;
