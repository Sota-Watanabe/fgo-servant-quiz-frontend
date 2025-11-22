import { Suspense } from "react";
import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import SkillQuizClient from "./SkillQuizClient";
import QuizLoading from "@/app/quiz/components/QuizLoading";

const pageTitle = "スキルクイズ";
const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

const SkillQuizLoading = () => (
  <QuizLoading title="問題準備中..." message="スキル情報を読み込んでいます" />
);

export const dynamic = "force-dynamic";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/skill",
  quizType: "skill",
});

export default function SkillQuizPage() {
  return (
    <Suspense fallback={<SkillQuizLoading />}>
      <SkillQuizClient />
    </Suspense>
  );
}
