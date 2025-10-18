"use client";

import { useState } from "react";
import { getClassTypeName } from "@/models/classTypes";
import QuizLayout from "../../../components/QuizLayout";
import { useFetchQuizSkill, useFetchServantsOptions } from "@/hooks/useApi";
import { getDisplaySkills } from "@/utils/skillUtils";

export default function SkillQuizPage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedServantId, setSelectedServantId] = useState<number | null>(
    null
  );

  const { data: quizData, isFetching: quizFetching } =
    useFetchQuizSkill(questionCount);

  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOptions();

  const isFetching = quizFetching || optionFetching;

  console.log("optionData:", optionData?.options.length);

  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
    setShowAnswer(false); // 答えを非表示にする
    setSelectedServantId(null); // 選択をリセット
    setQuestionCount((prev) => prev + 1); // questionCountを更新して新しいクエリとして認識させる
  };

  // 答えを確認する関数
  const handleCheckAnswer = () => {
    if (selectedServantId !== null) {
      setShowAnswer(true);
    }
  };

  // 表示用のスキルデータを定義
  const displaySkills = getDisplaySkills(quizData?.skills);

  return (
    <QuizLayout adKeyPrefix={questionCount.toString()}>
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
          ) : quizData ? (
            <>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2">
                このスキルはどのサーヴァントのものでしょう？
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

              {/* 答え選択セクション */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  答えを選択してください
                </h3>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedServantId || ""}
                  onChange={(e) =>
                    setSelectedServantId(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                  disabled={isFetching || !optionData?.options}
                >
                  <option value="">サーヴァントを選択してください</option>
                  {optionData?.options.map((servant) => (
                    <option key={servant.id} value={servant.id}>
                      {servant.name} ({getClassTypeName(servant.classId)})
                    </option>
                  ))}
                </select>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                  <button
                    onClick={handleCheckAnswer}
                    disabled={selectedServantId === null || isFetching}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    答えを確認
                  </button>

                  {showAnswer && (
                    <button
                      onClick={handleNextQuestion}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      次の問題
                    </button>
                  )}
                </div>
              </div>

              {/* 答え表示セクション */}
              {showAnswer && quizData && (
                <div
                  className={`rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 ${
                    selectedServantId === quizData.id
                      ? "bg-green-50 border-2 border-green-300"
                      : "bg-red-50 border-2 border-red-300"
                  }`}
                >
                  <div className="text-center">
                    {selectedServantId === quizData.id ? (
                      <>
                        <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
                          正解！
                        </h3>
                        <p className="text-green-600 text-sm sm:text-base">
                          おめでとうございます！正しい答えです。
                        </p>

                        <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-white rounded-lg border">
                          <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                            {quizData.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {getClassTypeName(quizData.classId)} / ★
                            {quizData.rarity}
                          </p>
                          {quizData.originalName && (
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                              {quizData.originalName}
                            </p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-2">
                          不正解
                        </h3>
                        <p className="text-red-600 text-sm sm:text-base">
                          残念！もう一度挑戦してみてください。
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}
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
        </div>
      </main>
    </QuizLayout>
  );
}
