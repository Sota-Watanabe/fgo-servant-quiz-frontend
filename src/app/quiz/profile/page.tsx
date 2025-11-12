import type { Metadata } from "next";
import ProfileQuizClient from "./ProfileQuizClient";

export const metadata: Metadata = {
  title: "プロフィールクイズ",
  description:
    "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。",
};

export default function ProfileQuizPage() {
  return <ProfileQuizClient />;
}
