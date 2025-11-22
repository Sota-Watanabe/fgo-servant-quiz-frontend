import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import ProfileQuizClient from "./ProfileQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "プロフィールクイズ";
export const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<QuizMetadataSearchParams>;
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  return buildQuizMetadataWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/profile",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "profile",
    searchParams: resolvedSearchParams,
  });
}

export default function ProfileQuizPage() {
  return <ProfileQuizClient />;
}
