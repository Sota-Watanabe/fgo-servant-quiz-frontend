"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

// export const metadata: Metadata = {
//   title: 'スキルクイズ | FGO Servant Quiz',
//   description: 'FGOサーヴァントに関するクイズページです。',
// };

interface QuizData {
  mstSvt: {
    name: string;
    ruby: string;
  };
  mstSkill: Array<{
    mstSkill: {
      name: string;
      ruby: string;
    };
    mstSkillDetail: Array<{
      detail: string;
    }>;
  }>;
  mstTreasureDevice: Array<{
    mstTreasureDevice: {
      name: string;
      ruby: string;
    };
    mstSvtTreasureDevice: Array<{
      cardId: number;
    }>;
  }>;
}

// API関数
const fetchQuizData = async (): Promise<QuizData> => {
  const response = await fetch("http://localhost:8888/quiz/skill");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("取得したデータ:", data);
  return data;
};

export default function SkillQuizPage() {
  const {
    data: quizData,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["/quiz/skill"],
    queryFn: fetchQuizData,
  });
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
                    バックエンドサーバー
                    が起動していることを確認してください
                  </p>
                </div>
              </>
            ) : quizData ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  このスキルはどのサーヴァントのものでしょう？
                </h2>
                <div className="space-y-4 mb-6">
                  {quizData.mstSkill.map((skill, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-3">
                        スキル{index + 1}: {skill.mstSkill.name}
                        {skill.mstSkill.ruby && (
                          <span className="ml-2 text-sm font-normal text-blue-600">
                            ({skill.mstSkill.ruby})
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {skill.mstSkillDetail[0]?.detail || "スキル詳細が読み込まれていません"}
                      </p>
                    </div>
                  ))}
                </div>
                {/* <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-700">
                    正解: <span className="font-bold">{quizData.mstSvt.name}</span>
                    {quizData.mstSvt.ruby && (
                      <span className="ml-2 text-xs">({quizData.mstSvt.ruby})</span>
                    )}
                  </p>
                </div> */}
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

            {/* 選択肢エリア */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {["選択肢 1", "選択肢 2", "選択肢 3", "選択肢 4"].map(
                (choice, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
                    disabled={loading || !!error}
                  >
                    {choice}
                  </button>
                )
              )}
            </div>

            {/* 操作ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                次の問題
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                ヒント
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
                リセット
              </button>
            </div>
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
