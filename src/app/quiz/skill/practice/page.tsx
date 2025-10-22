"use client";

import { useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import { getDisplaySkills } from "@/utils/skillUtils";
import { useFetchQuizSkill } from "@/hooks/useApi";
import { components } from "@/types/api";

type SkillQuizResponse = components["schemas"]["ServantDetailGetResponseDto"];

type SkillPracticeProps = {
  quizData: SkillQuizResponse;
  onNextQuestion: () => void;
};

const SkillPracticeQuiz = ({
  quizData,
  onNextQuestion,
}: SkillPracticeProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const displaySkills = getDisplaySkills(quizData.skills);

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    onNextQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        showAnswer={showAnswer}
        onToggleAnswer={handleToggleAnswer}
        onNextQuestion={handleNextQuestion}
        nextButtonLabel="次の問題へ"
      />
    </>
  );
};

export default function SkillQuizPage() {
  const [questionCount, setQuestionCount] = useState(0);

  // ページ名（skill-practice）+クエスチョン番号でキーを生成
  const pageKey = `skill-practice-${questionCount}`;

  const { data: quizData, isFetching: isLoading } = useFetchQuizSkill(pageKey);

  return (
    <PageLayout adKeyPrefix={questionCount.toString()} showSkillTabs={true}>
      {/* クイズエリア */}
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          {isLoading ? (
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
          ) : quizData ? (
            <SkillPracticeQuiz
              quizData={quizData}
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
