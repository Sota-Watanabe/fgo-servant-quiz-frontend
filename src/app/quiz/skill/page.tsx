import type { Metadata } from "next";
import SkillQuizClient from "./SkillQuizClient";

export const metadata: Metadata = {
  title: "スキルクイズ",
  description:
    "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。",
};

export default function SkillQuizPage() {
  return <SkillQuizClient />;
}
