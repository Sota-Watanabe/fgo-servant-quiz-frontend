import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import SkillQuizClient from "./SkillQuizClient";

const pageTitle = "スキルクイズ";
const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/skill",
  quizType: "skill",
});

type SkillQuizPageProps = {
  searchParams: Promise<{ servantId?: string }>;
};

export default async function SkillQuizPage({ searchParams }: SkillQuizPageProps) {
  const params = await searchParams;
  const servantId = params.servantId;
  return <SkillQuizClient initialServantId={servantId} />;
}
