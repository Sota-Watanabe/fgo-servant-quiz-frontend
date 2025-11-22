import { Suspense } from "react";
import { createQuizGenerateMetadata } from "@/app/quiz/utils/metadata";
import ProfileQuizClient, {
  ProfileQuizLoading,
} from "./ProfileQuizClient";

export const pageTitle = "プロフィールクイズ";
export const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

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
