import type { Metadata } from "next";
import NoblePhantasmQuizClient from "./NoblePhantasmQuizClient";

export const metadata: Metadata = {
  title: "宝具クイズ",
  description:
    "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。",
};

export default function NoblePhantasmQuizPage() {
  return <NoblePhantasmQuizClient />;
}
