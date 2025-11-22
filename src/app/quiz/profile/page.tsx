import { Suspense } from "react";
import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import ProfileQuizClient from "./ProfileQuizClient";
import QuizLoading from "@/app/quiz/components/QuizLoading";

const pageTitle = "プロフィールクイズ";
const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

const ProfileQuizLoading = () => (
  <QuizLoading
    title="問題を準備しています…"
    message="AIによる霊基再構成を開始します。十数秒の刻を要します——"
  />
);

export const dynamic = "force-dynamic";

export const generateMetadata = createQuizGenerateMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/profile",
  quizType: "profile",
});

export default function ProfileQuizPage() {
  return (
    <Suspense fallback={<ProfileQuizLoading />}>
      <ProfileQuizClient />
    </Suspense>
  );
}
