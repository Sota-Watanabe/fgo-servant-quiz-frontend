import type { Metadata } from "next";
import { OG_IMAGE_PATHS, buildPageMetadata } from "@/utils/seo";
import NoblePhantasmQuizClient from "./NoblePhantasmQuizClient";

export const dynamic = "force-static";

const pageTitle = "宝具クイズ";
const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/np",
  ogImagePath: OG_IMAGE_PATHS.quizNp,
});

export default function NoblePhantasmQuizPage() {
  return <NoblePhantasmQuizClient />;
}
