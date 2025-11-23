import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import ProfileQuizClient from "./ProfileQuizClient";

const pageTitle = "プロフィールクイズ";
const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/profile",
  quizType: "profile",
});

export default function ProfileQuizPage() {
  return <ProfileQuizClient />;
}
