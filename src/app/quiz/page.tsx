import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { OG_IMAGE_PATHS, buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "クイズモード一覧";
const pageDescription =
  "スキル／プロフィール／宝具の3種類から、遊び方や得意分野に合わせて挑戦するモードを選べます。";

const quizModes = [
  {
    href: "/quiz/skill",
    label: "Skill Quiz",
    title: "スキルクイズ",
    summary:
      "サーヴァント固有のアクティブスキルだけを手がかりに真名を推理するモード。最大3つの効果テキストとルビ表記を読み解き、覚えている演出や周回編成を思い出しながら回答します。",
    highlights: [
      "Atlas Academy 由来の最新スキル効果をそのまま表示",
      "React Query の再フェッチで連続プレイしても問題が偏りにくい",
      "真名判定後はクラス・レアリティ・真名ルビを確認可能",
    ],
    cta: "スキル問題で遊ぶ",
  },
  {
    href: "/quiz/profile",
    label: "Profile Quiz",
    title: "プロフィールクイズ",
    summary:
      "マテリアルのプロフィール本文・ステータス欄・関連情報を読み込み、人物像からサーヴァントを当てるモード。CV やイラストレーターなどの付帯情報も揃っているので、設定好きのマスターにおすすめです。",
    highlights: [
      "Base Profile・Status・Related Info の3パートを順番に表示",
      "霊基再構成中のローディング文で初見でも遊び方が分かる",
      "回答候補は検索可能なサーヴァントセレクトに統一",
    ],
    cta: "プロフィール問題で遊ぶ",
  },
  {
    href: "/quiz/np",
    label: "Noble Phantasm Quiz",
    title: "宝具クイズ",
    summary:
      "宝具名・ルビ・ランク・種別・カード属性・解説文を総覧し、持ち主を割り出す定番モード。偽名宝具や複合宝具も出題対象なので、イベントやストーリーの記憶をフル活用しましょう。",
    highlights: [
      "カード種別は ID を日本語ラベルへ変換して表示",
      "詳細テキスト付きなので初見でも背景設定を楽しめる",
      "真名判定の結果を確認しながら次の問題へシームレスに移行",
    ],
    cta: "宝具問題で遊ぶ",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz",
  ogImagePath: OG_IMAGE_PATHS.quizIndex,
});

export default function QuizIndexPage() {
  return (
    <PageLayout>
      <main className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-indigo-500">
            QUIZ SELECTION
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            各クイズモードの概要と遊び方
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            どのモードも1問ごとに真名判定と解説が行える共通 UI を採用。難易度や好みに合わせて、気になる出題タイプから挑戦してください。
          </p>
        </header>

        <section className="mt-10 space-y-10">
          {quizModes.map((mode) => (
            <article
              key={mode.href}
              className="rounded-[28px] border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-6 sm:p-8 shadow-md"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-indigo-500">
                {mode.label}
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {mode.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {mode.summary}
                </p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-gray-700 sm:text-base">
                {mode.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={mode.href}
                  className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  {mode.cta}
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.22 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L8.94 8 5.22 4.53a.75.75 0 0 1 0-1.06z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageLayout>
  );
}
