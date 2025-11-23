"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import QuizLoading from "@/app/quiz/components/QuizLoading";
import { useFetchQuizSkill } from "@/hooks/useFetchQuizSkill";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import type { SkillQuizResponse } from "@/hooks/useFetchQuizSkill";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import { getDisplaySkills } from "@/utils/skillUtils";

type ServantOption = ServantsOptionsResponse["options"][number];

type SkillQuizPageBodyProps = {
  quizData: SkillQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

function SkillQuizPageBody({
  quizData,
  options,
  onNextQuestion,
}: SkillQuizPageBodyProps) {
  const displaySkills = getDisplaySkills(quizData.skills);

  return (
    <PageLayout>
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
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
        </div>
      </main>
    </PageLayout>
  );
}

export default function SkillQuizClient() {
  const searchParams = useSearchParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [initialServantId] = useState<string | undefined>(() => {
    return searchParams.get("servantId") ?? undefined;
  });
  const servantId = questionCount === 0 ? initialServantId : undefined;

  const { data: quizData, isLoading: isQuizLoading } = useFetchQuizSkill(questionCount, servantId);
  const { data: optionData, isLoading: isOptionLoading } = useFetchServantsOption();

  if (isQuizLoading || isOptionLoading) {
    return (
      <QuizLoading title="問題準備中..." message="スキル情報を読み込んでいます" />
    );
  }

  if (!quizData || !optionData?.options) return;

  return (
    <SkillQuizPageBody
      quizData={quizData}
      options={optionData.options}
      onNextQuestion={() => setQuestionCount((prev) => prev + 1)}
    />
  );
}
