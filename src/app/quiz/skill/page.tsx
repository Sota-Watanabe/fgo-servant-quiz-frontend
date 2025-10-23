"use client";

import { useState } from "react";
import { getClassTypeName } from "@/models/classTypes";
import PageLayout from "@/app/components/PageLayout";
import SearchableSelect from "@/app/components/SearchableSelect";
import { useFetchQuizSkill, useFetchServantsOptions } from "@/hooks/useApi";
import { getDisplaySkills } from "@/utils/skillUtils";
import { components } from "@/types/api";

type ServantsOptions =
  components["schemas"]["ServantsOptionsGetResponseDto"]["options"];
type SkillQuizResponse = components["schemas"]["ServantSkillGetResponseDto"];

type SkillQuizProps = {
  quizData: SkillQuizResponse;
  options: ServantsOptions;
  onNextQuestion: () => void;
};

const SkillQuiz = ({ quizData, options, onNextQuestion }: SkillQuizProps) => {
  const [selectedServantId, setSelectedServantId] = useState<number | null>(
    null
  );
  const [resultStatus, setResultStatus] = useState<
    "correct" | "incorrect" | "waiting" | "revealed"
  >("waiting");

  const handleRevealTrueName = () => {
    if (!quizData?.id) return;
    setResultStatus("revealed");
  };

  // 次の問題を取得する関数
  const handleNextQuestion = async () => {
    setSelectedServantId(null); // 選択をリセット
    setResultStatus("waiting");
    onNextQuestion();
    // ページ上部へスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 答えを確認する関数
  const handleCheckAnswer = () => {
    if (selectedServantId !== null) {
      if (selectedServantId === quizData.id) {
        setResultStatus("correct");
      } else {
        setResultStatus("incorrect");
      }
    }
  };

  // セレクト変更時の処理
  const handleServantChange = (servantId: number | null) => {
    setSelectedServantId(servantId);
    setResultStatus("waiting");
  };

  // 表示用のスキルデータを定義
  const displaySkills = getDisplaySkills(quizData.skills);
  const imageUrl = quizData.imageUrl;
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

      {/* 答え選択セクション */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          真名解析：対象を選択
        </h3>
        <SearchableSelect
          options={options || []}
          value={selectedServantId}
          onChange={handleServantChange}
          placeholder="サーヴァントを選択してください"
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          <button
            onClick={handleCheckAnswer}
            disabled={selectedServantId === null || resultStatus !== "waiting"}
            className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base text-white ${
              selectedServantId === null
                ? "bg-gray-400 cursor-not-allowed"
                : resultStatus !== "waiting"
                ? "bg-gray-400 cursor-default"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            真名判定
          </button>
        </div>
      </div>

      {/* 答え表示セクション */}
      {resultStatus !== "waiting" && (
        <div
          className={`rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 ${
            resultStatus === "correct"
              ? "bg-green-50 border-2 border-green-300"
              : "bg-red-50 border-2 border-red-300"
          }`}
        >
          <div className="text-center">
            {resultStatus === "correct" && (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
                  正解
                </h3>
                <p className="text-green-600 text-sm sm:text-base">
                  真名、解き明かされた。
                </p>

                <div className="mt-4 sm:mt-5">
                  <div className="mx-auto w-full max-w-xs sm:max-w-sm overflow-hidden rounded-lg border bg-white shadow-sm">
                    <img
                      src={imageUrl}
                      alt={`${quizData.name}のイラスト`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-white rounded-lg border">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                    {quizData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {getClassTypeName(quizData.classId)} / ★{quizData.rarity}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {quizData.originalName}
                  </p>
                </div>
              </>
            )}
            {(resultStatus === "incorrect" || resultStatus === "revealed") && (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-2">
                  不正解
                </h3>
                <p className="text-red-600 text-sm sm:text-base">
                  ──真名、看破できず……
                </p>
              </>
            )}
            {resultStatus === "revealed" && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-white rounded-lg border">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                  {quizData.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  {getClassTypeName(quizData.classId)} / ★{quizData.rarity}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {quizData.originalName}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 次の問題ボタン - 答えが表示された後に表示 */}
      {resultStatus !== "waiting" && (
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          <button
            type="button"
            onClick={handleRevealTrueName}
            className="w-full sm:w-auto sm:min-w-[160px] font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            真名開帳
          </button>
          <button
            onClick={handleNextQuestion}
            className="w-full sm:w-auto sm:min-w-[160px] bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            {resultStatus === "correct" ? "次の問題" : "この問題をスキップ"}
          </button>
        </div>
      )}
    </>
  );
};

export default function SkillQuizPage() {
  const [questionCount, setQuestionCount] = useState(0);

  // ページ名（skill-challenge）+クエスチョン番号でキーを生成
  const pageKey = `skill-challenge-${questionCount}`;

  const { data: quizData, isFetching: quizFetching } =
    useFetchQuizSkill(pageKey);

  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOptions();

  const isFetching = quizFetching || optionFetching;

  return (
    <PageLayout
      adKeyPrefix={questionCount.toString()}
      minHeight={1200}
      showSkillTabs={true}
    >
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
