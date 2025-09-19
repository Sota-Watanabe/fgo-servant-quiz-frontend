"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SkillQuizResponse } from "@/types/api";
import { getClassTypeName } from "@/models/classTypes";

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
  };

  // 表示用のスキルデータを定義
  const displaySkills = quizData?.skills
    .reduce((acc, skill) => {
      // skillNumbers毎に配列の後ろ（最後）のスキルのみを保持
      const existingSkill = acc.find(
        (s) => s.skillNumbers === skill.skillNumbers
      );
      if (!existingSkill) {
        return acc.concat(skill);
      } else {
        // 既存のスキルを新しいスキルで置き換え（配列の後ろを優先）
        return acc
          .filter((s) => s.skillNumbers !== skill.skillNumbers)
          .concat(skill);
      }
    }, [] as typeof quizData.skills)
    .sort((a, b) => a.skillNumbers - b.skillNumbers) // skillNumbers順にソート
    .slice(0, 3) || []; // 3つだけ表示

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            スキルクイズ
          </h1>
          <p className="text-lg text-gray-600">
            FGOサーヴァントを当てるクイズです
          </p>
        </header>

        {/* クイズエリア */}
        <main className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="text-center">
            {loading ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  問題準備中...
                </h2>
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <p className="text-gray-500 text-lg">
                    スキル情報を読み込んでいます
                  </p>
                </div>
              </>
            ) : error ? (
              <>
                <h2 className="text-2xl font-semibold text-red-600 mb-6">
                  エラーが発生しました
                </h2>
                <div className="bg-red-100 rounded-lg p-8 mb-6">
                  <p className="text-red-700 text-lg">
                    {error?.message || "データの取得に失敗しました"}
                  </p>
                  <p className="text-red-600 text-sm mt-2">
                    バックエンドサーバー が起動していることを確認してください
                  </p>
                </div>
              </>
            ) : quizData ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  このスキルはどのサーヴァントのものでしょう？
                </h2>
                <div className="space-y-4 mb-6">
                  {displaySkills.map((skill, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-3">
                        スキル{index + 1}: {skill.name}
                        {skill.ruby && (
                          <span className="ml-2 text-sm font-normal text-blue-600">
                            ({skill.ruby})
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {skill.details[0] ||
                          "スキル詳細が読み込まれていません"}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  データが見つかりません
                </h2>
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <p className="text-gray-500 text-lg">
                    クイズデータを取得できませんでした
                  </p>
                </div>
              </>
            )}

            {/* 操作ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNextQuestion}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                {loading ? "読み込み中..." : "次の問題"}
              </button>
              <button
                onClick={() => setShowAnswer(true)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                答え
              </button>
            </div>

            {/* 答えの表示 */}
            {showAnswer && quizData && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">正解</h3>
                <p className="text-xl font-bold text-yellow-900">
                  {quizData.servant.name}
                  {quizData.servant.ruby && (
                    <span className="ml-2 text-base font-normal text-yellow-700">
                      ({quizData.servant.ruby})
                    </span>
                  )}
                  <span className="ml-2 text-base font-normal text-yellow-700">
                    - {getClassTypeName(quizData.servant.classId)}
                  </span>
                </p>
              </div>
            )}
          </div>
        </main>

        {/* ナビゲーション */}
        <nav className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            ホームに戻る
          </Link>
        </nav>
      </div>
    </div>
  );
}
