"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SkillQuizResponse } from "@/types/api";
import { getClassTypeName } from "@/models/classTypes";
import AdSense from "../../components/AdSense";

// API関数
const fetchQuizData = async (): Promise<SkillQuizResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1234';
  const response = await fetch(`${apiUrl}/quiz/skill`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("取得したデータ:", data);
  return data;
};

export default function SkillQuizPage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(0);

  const {
    data: quizData,
    isFetching: loading,
    error,
  } = useQuery({
    queryKey: ["/quiz/skill", questionId],
    queryFn: fetchQuizData,
  });

  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
    setShowAnswer(false); // 答えを非表示にする
    setQuestionId((prev) => prev + 1); // questionIdを更新して新しいクエリとして認識させる
    
    // 広告を再読み込み
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense reload error:", error);
    }
  };

  // 表示用のスキルデータを定義
  const displaySkills = quizData?.skills
    .reduce((acc, skill) => {
      // num毎に最適なスキルを保持（priorityが高いものを優先）
      const existingSkill = acc.find(
        (s) => s.num === skill.num
      );
      
      if (!existingSkill) {
        // 同じnumのスキルがまだない場合は追加
        acc.push(skill);
      } else {
        // 既に同じnumのスキルがある場合、priorityを比較
        const existingIndex = acc.findIndex((s) => s.num === skill.num);
        if (skill.priority > existingSkill.priority) {
          // より高いpriorityの場合は置き換え
          acc[existingIndex] = skill;
        }
      }
      
      return acc;
    }, [] as typeof quizData.skills)
    .sort((a, b) => {
      // まずnum順でソート
      if (a.num !== b.num) {
        return a.num - b.num;
      }
      // numが同じ場合はpriorityの降順でソート（高い方が優先）
      return b.priority - a.priority;
    })
    .slice(0, 3) || []; // 3つだけ表示

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            スキルクイズ
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            FGOサーヴァントを当てるクイズです
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* 左側の広告（デスクトップ） / 上部広告（モバイル） */}
          <div className="lg:w-64 flex-shrink-0 order-1 lg:order-1">
            <div className="lg:sticky lg:top-4">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-2 border-dashed border-gray-300">
                <p className="text-xs text-gray-500 mb-2">広告</p>
                <AdSense
                  adSlot="2934488082"
                  style={{ 
                    display: "block", 
                    minHeight: "100px",
                    width: "100%" 
                  }}
                />
              </div>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="flex-1 max-w-4xl order-2 lg:order-2">

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
            ) : error ? (
              <>
                <h2 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4 sm:mb-6">
                  エラーが発生しました
                </h2>
                <div className="bg-red-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
                  <p className="text-red-700 text-base sm:text-lg">
                    {error?.message || "データの取得に失敗しました"}
                  </p>
                  <p className="text-red-600 text-sm mt-2">
                    バックエンドサーバー が起動していることを確認してください
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
                        {skill.detail ||
                          "スキル詳細が読み込まれていません"}
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
                <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2">正解</h3>
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
          </div>

          {/* 右側の広告（デスクトップ） / 下部広告（モバイル） */}
          <div className="lg:w-64 flex-shrink-0 order-3 lg:order-3">
            <div className="lg:sticky lg:top-4">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-4 border-2 border-dashed border-gray-300">
                <p className="text-xs text-gray-500 mb-2">広告</p>
                <AdSense
                  adSlot="2934488082"
                  style={{ 
                    display: "block", 
                    minHeight: "100px",
                    width: "100%" 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
