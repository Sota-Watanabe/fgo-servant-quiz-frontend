"use client";

import { useState } from "react";
import { getClassTypeName } from "@/models/classTypes";
import PageLayout from "@/app/components/PageLayout";
import SearchableSelect from "@/app/components/SearchableSelect";
import { useFetchQuizSkill, useFetchServantsOptions } from "@/hooks/useApi";
import { getDisplaySkills } from "@/utils/skillUtils";

export default function ProfileQuizPage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedServantId, setSelectedServantId] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // ページ名（profile-challenge）+クエスチョン番号でキーを生成
  const pageKey = `profile-challenge-${questionCount}`;

  const { data: quizData, isFetching: quizFetching } =
    useFetchQuizSkill(pageKey);

  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOptions();

  const isFetching = quizFetching || optionFetching;

  console.log("optionData:", optionData?.options.length);

  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
  setShowAnswer(false); // 答えを非表示にする
  setSelectedServantId(null); // 選択をリセット
  setIsAnswerChecked(false); // 答えチェック状態をリセット
  setQuestionCount((prev) => prev + 1); // questionCountを更新して新しいクエリとして認識させる
  // ページ上部へスクロール
  window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 答えを確認する関数
  const handleCheckAnswer = () => {
    if (selectedServantId !== null) {
      setShowAnswer(true);
      setIsAnswerChecked(true);
    }
  };

  // セレクト変更時の処理
  const handleServantChange = (servantId: number | null) => {
    setSelectedServantId(servantId);
    // セレクトが変更されたら答えチェック状態をリセット
    if (isAnswerChecked) {
      setIsAnswerChecked(false);
      setShowAnswer(false);
    }
  };

  // 表示用のスキルデータを定義
  const displaySkills = getDisplaySkills(quizData?.skills);

  return (
    <PageLayout adKeyPrefix={questionCount.toString()} minHeight={1200} showSkillTabs={true}>
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
                <SearchableSelect
                  options={optionData?.options || []}
                  value={selectedServantId}
                  onChange={handleServantChange}
                  placeholder="サーヴァントを選択してください"
                  disabled={isFetching || !optionData?.options}
                />

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                  <button
                    onClick={handleCheckAnswer}
                    disabled={
                      selectedServantId === null || 
                      isFetching || 
                      (isAnswerChecked && quizData && selectedServantId !== quizData.id)
                    }
                    className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base text-white ${
                      selectedServantId === null || isFetching
                        ? "bg-gray-400 cursor-not-allowed"
                        : isAnswerChecked && quizData && selectedServantId !== quizData.id
                        ? "bg-gray-400 cursor-default"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    答えを確認
                  </button>
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

              {/* 次の問題ボタン - 答えが表示された後に表示 */}
              {showAnswer && (
                <div className="flex justify-center mt-4 sm:mt-6">
                  <button
                    onClick={handleNextQuestion}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    {selectedServantId === quizData.id ? "次の問題" : "この問題をスキップ"}
                  </button>
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
    </PageLayout>
  );
}
