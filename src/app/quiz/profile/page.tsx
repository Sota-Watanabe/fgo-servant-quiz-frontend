import type { Metadata } from "next";
import { OG_IMAGE_PATHS, buildPageMetadata } from "@/utils/seo";
import ProfileQuizClient from "./ProfileQuizClient";

export const dynamic = "force-static";

const pageTitle = "プロフィールクイズ";
const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/profile",
  ogImagePath: OG_IMAGE_PATHS.quizProfile,
});

export default function ProfileQuizPage() {
  return <ProfileQuizClient />;
}
