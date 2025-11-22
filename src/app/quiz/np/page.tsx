import { Suspense } from "react";
import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import NoblePhantasmQuizClient, {
  NoblePhantasmQuizLoading,
} from "./NoblePhantasmQuizClient";

export const pageTitle = "宝具クイズ";
export const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const dynamic = "force-dynamic";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/np",
  quizType: "np",
});

export default function NoblePhantasmQuizPage() {
  return (
    <Suspense fallback={<NoblePhantasmQuizLoading />}>
      <NoblePhantasmQuizClient />
    </Suspense>
  );
}
