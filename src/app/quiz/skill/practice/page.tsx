"use client";

import { useState } from "react";
import { getClassTypeName } from "@/models/classTypes";
import PageLayout from "@/app/components/PageLayout";
import { getDisplaySkills } from "@/utils/skillUtils";
import { useFetchQuizSkill } from "@/hooks/useApi";

export default function SkillQuizPage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  // ページ名（skill-practice）+クエスチョン番号でキーを生成
  const pageKey = `skill-practice-${questionCount}`;

  const { data: quizData, isFetching: loading } = useFetchQuizSkill(pageKey);

  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
    setShowAnswer(false); // 答えを非表示にする
    setQuestionCount((prev) => prev + 1); // questionCountを更新して新しいクエリとして認識させる
    // ページ上部へスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 表示用のスキルデータを定義
  const displaySkills = getDisplaySkills(quizData?.skills);

  return (
    <PageLayout adKeyPrefix={questionCount.toString()} showSkillTabs={true}>
      {/* クイズエリア */}
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          {loading ? (
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
            </>
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

          {/* 答えボタン */}
          <div className="flex justify-center px-2">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 sm:py-2 px-8 sm:px-6 rounded-lg transition-colors duration-200 text-base sm:text-sm w-full sm:w-auto max-w-xs"
            >
              {showAnswer ? "答えを隠す" : "答え"}
            </button>
          </div>

          {/* 答えの表示 */}
          {showAnswer && quizData && (
            <div className="mt-4 sm:mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mx-2 sm:mx-0">
              <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2">
                正解
              </h3>
              <p className="text-lg sm:text-xl font-bold text-yellow-900">
                {quizData.name}
                {quizData.ruby && (
                  <span className="ml-1 sm:ml-2 text-sm sm:text-base font-normal text-yellow-700">
                    ({quizData.ruby})
                  </span>
                )}
                <span className="ml-1 sm:ml-2 text-sm sm:text-base font-normal text-yellow-700">
                  - {getClassTypeName(quizData.classId)}
                </span>
              </p>
              {/* 次の問題ボタン */}
              <div className="mt-3 sm:mt-4 text-center">
                <button
                  onClick={handleNextQuestion}
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-3 sm:py-2 px-8 sm:px-6 rounded-lg transition-colors duration-200 text-base sm:text-sm w-full sm:w-auto max-w-xs"
                >
                  {loading ? "読み込み中..." : "次の問題"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </PageLayout>
  );
}
