import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import NoblePhantasmVoiceQuizClient from "./NoblePhantasmVoiceQuizClient";

const pageTitle = "宝具ボイスクイズ";
const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/np-voice",
  quizType: "np-voice",
});

type NoblePhantasmVoiceQuizPageProps = {
  searchParams: Promise<{ servantId?: string }>;
};

export default async function NoblePhantasmVoiceQuizPage({ searchParams }: NoblePhantasmVoiceQuizPageProps) {
  const params = await searchParams;
  const servantId = params.servantId;
  return <NoblePhantasmVoiceQuizClient initialServantId={servantId} />;
}
