import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import NoblePhantasmQuizClient from "./NoblePhantasmQuizClient";

const pageTitle = "宝具クイズ";
const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/np",
  quizType: "np",
});

type NoblePhantasmQuizPageProps = {
  searchParams: Promise<{ servantId?: string }>;
};

export default async function NoblePhantasmQuizPage({ searchParams }: NoblePhantasmQuizPageProps) {
  const params = await searchParams;
  const servantId = params.servantId;
  return <NoblePhantasmQuizClient initialServantId={servantId} />;
}
