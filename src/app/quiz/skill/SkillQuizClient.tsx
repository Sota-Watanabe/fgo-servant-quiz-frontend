"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import { useFetchQuizSkill } from "@/hooks/useFetchQuizSkill";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import type { SkillQuizResponse } from "@/hooks/useFetchQuizSkill";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import { getDisplaySkills } from "@/utils/skillUtils";

type ServantOption = ServantsOptionsResponse["options"][number];

type SkillQuizProps = {
  quizData: SkillQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

const SkillQuiz = ({ quizData, options, onNextQuestion }: SkillQuizProps) => {
  const displaySkills = getDisplaySkills(quizData.skills);

  return (
    <>
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2">
        このスキルを持つサーヴァントは？
      </h2>
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        {displaySkills.map((skill, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-2 sm:mb-3">
              スキル{index + 1}: {skill.name}
              {skill.ruby && (
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-normal text-blue-600">
                  ({skill.ruby})
                </span>
              )}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              {skill.detail || "スキル詳細が読み込まれていません"}
            </p>
          </div>
        ))}
      </div>

      <QuizAnswerSection
        quizData={quizData}
        options={options}
        onNextQuestion={onNextQuestion}
        shareType="skill"
      />
    </>
  );
};

const SkillQuizLoading = () => (
  <PageLayout>
    <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          問題準備中...
        </h2>
        <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
          <p className="text-gray-500 text-base sm:text-lg">
            スキル情報を読み込んでいます
          </p>
        </div>
      </div>
    </main>
  </PageLayout>
);

function SkillQuizPageBody() {
  const searchParams = useSearchParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [initialServantId] = useState<string | undefined>(() => {
    return searchParams.get("servantId") ?? undefined;
  });
  const servantId = questionCount === 0 ? initialServantId : undefined;

  const { data: quizData, isFetching: quizFetching } =
    useFetchQuizSkill(questionCount, servantId);

  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOption();

  const isFetching = quizFetching || optionFetching;

  return (
    <PageLayout>
      {/* クイズエリア */}
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          {isFetching ? (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                問題準備中...
              </h2>
              <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
                <p className="text-gray-500 text-base sm:text-lg">
                  スキル情報を読み込んでいます
                </p>
              </div>
            </>
          ) : quizData && optionData ? (
            <SkillQuiz
              quizData={quizData}
              options={optionData.options}
              onNextQuestion={() => setQuestionCount((prev) => prev + 1)}
            />
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                データが見つかりません
              </h2>
              <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
                <p className="text-gray-500 text-base sm:text-lg">
                  クイズデータを取得できませんでした
                </p>
              </div>
            </>
          )}
        </div>
      </main>
    </PageLayout>
  );
}

export default function SkillQuizClient() {
  return (
    <Suspense fallback={<SkillQuizLoading />}>
      <SkillQuizPageBody />
    </Suspense>
  );
}
