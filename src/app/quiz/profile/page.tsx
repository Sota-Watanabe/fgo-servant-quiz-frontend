"use client";

import { useState } from "react";
import { useFetchQuizProfile } from "@/hooks/useFetchQuizProfile";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import ProfileSection from "./components/ProfileSection";
import StatusSection from "./components/StatusSection";
import RelatedInfoSection from "./components/RelatedInfoSection";
import type { ProfileQuizResponse } from "@/hooks/useFetchQuizProfile";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import { useLatchedQueryParam } from "@/hooks/useLatchedQueryParam";

type ServantOption = ServantsOptionsResponse["options"][number];

type ProfilePracticeProps = {
  quizData: ProfileQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

const ProfilePracticeQuiz = ({
  quizData,
  options,
  onNextQuestion,
}: ProfilePracticeProps) => {
  const profile = quizData.baseProfile;
  if (!profile) return null;

  const relatedInfo = {
    cv: quizData.cv,
    illustrator: quizData.illustrator,
  };

  return (
    <div className="relative p-5 sm:p-8 space-y-6 sm:space-y-8">
      <section className="space-y-6">
        <>
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 text-center">
            このプロフィールを持つサーヴァントは？
          </h2>
          <div className="space-y-6 sm:space-y-7">
            <ProfileSection baseProfile={profile} />
            <StatusSection stats={quizData.stats} />
            <RelatedInfoSection relatedInfo={relatedInfo} />
          </div>
        </>
      </section>

      <QuizAnswerSection
        quizData={quizData}
        options={options}
        onNextQuestion={onNextQuestion}
      />
    </div>
  );
};

export default function ProfileQuizPage() {
  const [questionCount, setQuestionCount] = useState(0);
  const servantId = useLatchedQueryParam("servantId");

  // ページ名（profile-practice）+クエスチョン番号（+サーヴァントID）でキーを生成
  const pageKey = servantId
    ? `profile-practice-${questionCount}-${servantId}`
    : `profile-practice-${questionCount}`;

  const { data: quizData, isFetching: quizFetching } =
    useFetchQuizProfile(pageKey, servantId);
  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOption();

  const isFetching = quizFetching || optionFetching;

  return (
    <PageLayout adKeyPrefix={questionCount.toString()}>
      {/* クイズエリア */}
      <main className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent"
        />
        {isFetching ? (
          <div className="relative p-5 sm:p-8 space-y-6 sm:space-y-8">
            <section className="space-y-6">
              <div className="space-y-4">
                <div className="mx-auto max-w-sm text-center">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    問題を準備しています…
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    AIによる霊基再構成を開始します。十数秒の刻を要します——
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
            </section>
          </div>
        ) : quizData && optionData ? (
          <ProfilePracticeQuiz
            quizData={quizData}
            options={optionData.options}
            onNextQuestion={() => setQuestionCount((prev) => prev + 1)}
          />
        ) : (
          <div className="relative p-5 sm:p-8 space-y-6 sm:space-y-8">
            <div className="mx-auto max-w-sm text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                データが見つかりません
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                クイズデータを取得できませんでした。時間を置いて再試行してください。
              </p>
            </div>
          </div>
        )}
      </main>
    </PageLayout>
  );
}
