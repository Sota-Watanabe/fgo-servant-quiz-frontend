import { Suspense } from "react";
import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import SkillQuizClient, { SkillQuizLoading } from "./SkillQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "スキルクイズ";
export const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<
    Record<string, string | string[] | undefined> | URLSearchParams
  >;
}): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  let servantId: string | string[] | undefined;
  if (!resolvedSearchParams) {
    servantId = undefined;
  } else if (
    typeof (resolvedSearchParams as URLSearchParams).get === "function"
  ) {
    servantId =
      (resolvedSearchParams as URLSearchParams).get("servantId") ?? undefined;
  } else {
    servantId = (resolvedSearchParams as Record<string, string | string[] | undefined>)
      .servantId;
  }

  const quizSearchParams: QuizMetadataSearchParams | undefined = servantId
    ? { servantId }
    : undefined;

  return buildQuizMetadataWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/skill",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "skill",
    searchParams: quizSearchParams,
  });
}

export default function SkillQuizPage() {
  return (
    <Suspense fallback={<SkillQuizLoading />}>
      <SkillQuizClient />
    </Suspense>
  );
}
