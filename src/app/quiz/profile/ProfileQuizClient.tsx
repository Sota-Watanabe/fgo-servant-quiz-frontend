"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFetchQuizProfile } from "@/hooks/useFetchQuizProfile";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import QuizLoading from "@/app/quiz/components/QuizLoading";
import ProfileSection from "./components/ProfileSection";
import StatusSection from "./components/StatusSection";
import RelatedInfoSection from "./components/RelatedInfoSection";
import type { ProfileQuizResponse } from "@/hooks/useFetchQuizProfile";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";

type ServantOption = ServantsOptionsResponse["options"][number];

export const ProfileQuizLoading = () => (
  <QuizLoading
    title="問題を準備しています…"
    message="AIによる霊基再構成を開始します。十数秒の刻を要します——"
  />
);

type ProfileQuizPageBodyProps = {
  quizData?: ProfileQuizResponse;
  options?: ServantOption[];
  onNextQuestion: () => void;
};

function ProfileQuizPageBody({
  quizData,
  options,
  onNextQuestion,
}: ProfileQuizPageBodyProps) {
  if (!quizData || !options) {
    return <ProfileQuizLoading />;
  }

  const profile = quizData.baseProfile;
  const relatedInfo = {
    cv: quizData.cv,
    illustrator: quizData.illustrator,
  };

  if (!profile) {
    return (
      <PageLayout>
        <main className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent"
          />
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
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent"
        />
        <div className="relative p-5 sm:p-8 space-y-6 sm:space-y-8">
          <section className="space-y-6">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 text-center">
              このプロフィールを持つサーヴァントは？
            </h2>
            <div className="space-y-6 sm:space-y-7">
              <ProfileSection baseProfile={profile} />
              <StatusSection stats={quizData.stats} />
              <RelatedInfoSection relatedInfo={relatedInfo} />
            </div>
          </section>

          <QuizAnswerSection
            quizData={quizData}
            options={options}
            onNextQuestion={onNextQuestion}
            shareType="profile"
          />
        </div>
      </main>
    </PageLayout>
  );
}

export default function ProfileQuizClient() {
  const searchParams = useSearchParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [initialServantId] = useState<string | undefined>(() => {
    return searchParams.get("servantId") ?? undefined;
  });
  const servantId = questionCount === 0 ? initialServantId : undefined;

  const { data: quizData } = useFetchQuizProfile(questionCount, servantId);
  const { data: optionData } = useFetchServantsOption();

  return (
    <ProfileQuizPageBody
      quizData={quizData}
      options={optionData?.options}
      onNextQuestion={() => setQuestionCount((prev) => prev + 1)}
    />
  );
}
