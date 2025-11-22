import { Suspense } from "react";
import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import SkillQuizClient, { SkillQuizLoading } from "./SkillQuizClient";

export const pageTitle = "スキルクイズ";
export const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

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
