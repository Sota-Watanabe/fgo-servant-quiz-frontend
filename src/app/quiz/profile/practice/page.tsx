"use client";

import { useFetchQuizProfile } from "@/hooks/useApi";
import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import { getClassTypeName } from "@/models/classTypes";
import ProfileSection from "./components/ProfileSection";
import StatusSection from "./components/StatusSection";
import RelatedInfoSection from "./components/RelatedInfoSection";

type ProfileStats = Record<string, string | number | null | undefined>;
type MetadataEntry = { label: string; value: string | number };

const statLabelMap: Record<string, string> = {
  strength: "筋力",
  endurance: "耐久",
  agility: "敏捷",
  magic: "魔力",
  luck: "幸運",
  np: "宝具",
  policy: "属性",
  personality: "性格",
  deity: "神性",
};

const formatStatLabel = (key: string) =>
  statLabelMap[key] ??
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .trim()
    .toUpperCase();

export default function ProfileQuizPage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  // ページ名（profile-practice）+クエスチョン番号でキーを生成
  const pageKey = `profile-practice-${questionCount}`;

  const { data: quizData, isFetching: loading } = useFetchQuizProfile(pageKey);
  // if (!quizData) return;
  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
    setShowAnswer(false); // 答えを非表示にする
    setQuestionCount((prev) => prev + 1); // questionCountを更新して新しいクエリとして認識させる
    // ページ上部へスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stats = (quizData?.stats ?? {}) as ProfileStats;
  const filteredStatEntries = Object.entries(stats)
    .filter(
      ([, value]) => value !== null && value !== undefined && value !== ""
    )
    .map(([key, value]) => [key, value as string | number] as const);
  const statEntries = filteredStatEntries.map(([key, value]) => ({
    key,
    label: formatStatLabel(key),
    value,
  }));

  const rawBaseProfile = quizData?.baseProfile;
  const baseProfileComment = rawBaseProfile?.comment?.trim();
  const baseProfileCondMessage = rawBaseProfile?.condMessage?.trim();
  const baseProfile =
    rawBaseProfile && baseProfileComment
      ? {
          ...rawBaseProfile,
          comment: baseProfileComment,
          condMessage: baseProfileCondMessage ?? "",
        }
      : null;

  const metadataEntries: MetadataEntry[] = quizData
    ? [
        {
          label: "CV",
          value: quizData.cv,
        },
        {
          label: "イラストレーター",
          value: quizData.illustrator,
        },
      ]
        .filter(
          ({ value }) =>
            value !== undefined &&
            value !== null &&
            `${value}`.trim().length > 0
        )
        .map(({ label, value }) => ({
          label,
          value: value as string | number,
        }))
    : [];

  const hasProfileContent =
    !!baseProfile || statEntries.length > 0 || metadataEntries.length > 0;

  const answerHighlightEntries = metadataEntries.filter(
    ({ label }) => label === "CV" || label === "イラストレーター"
  );

  return (
    <PageLayout adKeyPrefix={questionCount.toString()} showSkillTabs={true}>
      {/* クイズエリア */}
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent"
        />
        <div className="relative p-5 sm:p-8 space-y-6 sm:space-y-8">
          <section className="space-y-6">
            {loading ? (
              <div className="space-y-4">
                <div className="mx-auto max-w-sm text-center">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    問題を準備しています…
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    プロフィール情報を読み込んでいます。少々お待ちください。
                  </p>
                </div>
                <div className="grid gap-3 sm:gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse rounded-xl border border-sky-50 bg-sky-50/40 p-4 sm:p-6"
                    >
                      <div className="h-4 w-1/3 rounded bg-sky-100" />
                      <div className="mt-3 h-3 w-full rounded bg-sky-100" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-sky-100" />
                    </div>
                  ))}
                </div>
              </div>
            ) : quizData ? (
              <>
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 text-center">
                  このプロフィールを持つサーヴァントは？
                </h2>
                {!hasProfileContent ? (
                  <p className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-sm text-gray-500">
                    プロフィール情報が見つかりませんでした。他の問題で再挑戦してみましょう。
                  </p>
                ) : (
                  <div className="space-y-6 sm:space-y-7">
                    {baseProfile && (
                      <ProfileSection baseProfile={baseProfile} />
                    )}

                    {statEntries.length > 0 && (
                      <StatusSection entries={statEntries} />
                    )}

                    {metadataEntries.length > 0 && (
                      <RelatedInfoSection entries={metadataEntries} />
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="mx-auto max-w-sm text-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  データが見つかりません
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  クイズデータを取得できませんでした。時間を置いて再試行してください。
                </p>
              </div>
            )}
          </section>

          <footer className="space-y-4 sm:space-y-5">
            <div className="flex justify-center">
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 sm:text-sm"
              >
                {showAnswer ? "答えを隠す" : "答えを見る"}
              </button>
            </div>

            {showAnswer && quizData && (
              <div className="space-y-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 text-center shadow-inner">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    正解
                  </p>
                  <p className="mt-1 text-xl sm:text-2xl font-bold text-amber-900">
                    {quizData.name}
                    {quizData.ruby && (
                      <span className="ml-2 text-sm sm:text-base font-semibold text-amber-700">
                        ({quizData.ruby})
                      </span>
                    )}
                  </p>
                  {quizData.originalName && (
                    <p className="text-xs sm:text-sm text-amber-700">
                      {quizData.originalName}
                    </p>
                  )}
                  <p className="text-sm sm:text-base text-amber-800">
                    {getClassTypeName(quizData.classId)}
                  </p>
                </div>

                {answerHighlightEntries.length > 0 && (
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {answerHighlightEntries.map(({ label, value }) => (
                      <div
                        key={label}
                        className="rounded-xl border border-amber-100 bg-white/70 px-3 py-3"
                      >
                        <dt className="text-xs font-medium uppercase tracking-wide text-amber-600">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm sm:text-base font-semibold text-gray-900">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="flex justify-center">
                  <button
                    onClick={handleNextQuestion}
                    disabled={loading}
                    className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-400 sm:text-sm"
                  >
                    {loading ? "読み込み中..." : "次の問題へ"}
                  </button>
                </div>
              </div>
            )}
          </footer>
        </div>
      </main>
    </PageLayout>
  );
}
