import type { Metadata } from "next";
import { OG_IMAGE_PATHS, buildPageMetadata } from "@/utils/seo";
import SkillQuizClient from "./SkillQuizClient";

export const dynamic = "force-static";

const pageTitle = "スキルクイズ";
const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/skill",
  ogImagePath: OG_IMAGE_PATHS.quizSkill,
});

export default function SkillQuizPage() {
  return <SkillQuizClient />;
}
