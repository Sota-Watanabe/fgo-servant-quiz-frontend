import { Suspense } from "react";
import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import NoblePhantasmQuizClient, {
  NoblePhantasmQuizLoading,
} from "./NoblePhantasmQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "宝具クイズ";
export const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

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
    path: "/quiz/np",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "np",
    searchParams: quizSearchParams,
  });
}

export default function NoblePhantasmQuizPage() {
  return (
    <Suspense fallback={<NoblePhantasmQuizLoading />}>
      <NoblePhantasmQuizClient />
    </Suspense>
  );
}
