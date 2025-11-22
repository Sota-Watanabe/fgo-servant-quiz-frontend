import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import SkillQuizClient from "./SkillQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "スキルクイズ";
export const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

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
    path: "/quiz/skill",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "skill",
    searchParams: resolvedSearchParams,
  });
}

export default function SkillQuizPage() {
  return <SkillQuizClient />;
}
