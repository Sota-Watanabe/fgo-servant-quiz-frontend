import type { Metadata } from "next";
import {
  buildQuizMetadataWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import NoblePhantasmQuizClient from "./NoblePhantasmQuizClient";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const pageTitle = "宝具クイズ";
export const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const dynamic = "force-dynamic";

export function generateMetadata({
  searchParams,
}: {
  searchParams?: QuizMetadataSearchParams;
}): Metadata {
  return buildQuizMetadataWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/np",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "np",
    searchParams,
  });
}

export default function NoblePhantasmQuizPage() {
  return <NoblePhantasmQuizClient />;
}
