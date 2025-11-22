import { Suspense } from "react";
import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import ProfileQuizClient, {
  ProfileQuizLoading,
} from "./ProfileQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "プロフィールクイズ";
export const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

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
    path: "/quiz/profile",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "profile",
    searchParams: quizSearchParams,
  });
}

export default function ProfileQuizPage() {
  return (
    <Suspense fallback={<ProfileQuizLoading />}>
      <ProfileQuizClient />
    </Suspense>
  );
}
