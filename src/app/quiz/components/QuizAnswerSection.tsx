"use client";

import { useState } from "react";
import SearchableSelect from "@/app/components/SearchableSelect";
import { getClassTypeName } from "@/models/classTypes";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";

type ServantOption = ServantsOptionsResponse["options"][number];

type ResultStatus = "waiting" | "correct" | "incorrect" | "revealed";

type BaseQuizData = {
  id: number;
  name: string;
  classId: number;
  rarity: number;
  originalName: string;
  ruby: string;
  imageUrl: string;
};

type QuizAnswerSectionProps<T extends BaseQuizData> = {
  quizData: T;
  options: ServantOption[];
  onNextQuestion: () => void;
};

export default function QuizAnswerSection<T extends BaseQuizData>({
  quizData,
  options,
  onNextQuestion,
}: QuizAnswerSectionProps<T>) {
  const [selectedServantId, setSelectedServantId] = useState<number | null>(
    null
  );
  const [resultStatus, setResultStatus] = useState<ResultStatus>("waiting");

  const handleStatusUpdate = (status: ResultStatus) => {
    setResultStatus(status);
  };

  const handleServantChange = (servantId: number | null) => {
    setSelectedServantId(servantId);
    handleStatusUpdate("waiting");
  };

  const handleCheckAnswer = () => {
    if (selectedServantId === null) return;
    const status = selectedServantId === quizData.id ? "correct" : "incorrect";
    handleStatusUpdate(status);
  };

  const handleRevealTrueName = () => {
    handleStatusUpdate("revealed");
  };

  const handleNextQuestion = () => {
    setSelectedServantId(null);
    handleStatusUpdate("waiting");
    onNextQuestion();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isWaiting = resultStatus === "waiting";
  const showResult = resultStatus !== "waiting";
  const showRevealButton = resultStatus === "incorrect";
  const nextButtonText =
    resultStatus === "correct" || resultStatus === "revealed"
      ? "次の問題"
      : "この問題をスキップ";

  return (
    <>
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          真名解析：対象を選択
        </h3>
        <SearchableSelect
          options={options}
          value={selectedServantId}
          onChange={handleServantChange}
          placeholder="サーヴァント名（第一再臨）"
          disabled={!options.length}
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          <button
            onClick={handleCheckAnswer}
            disabled={selectedServantId === null || !isWaiting}
            className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base text-white ${
              selectedServantId === null || !isWaiting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
            }`}
          >
            真名判定
          </button>
        </div>
      </div>

      {showResult && (
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

                {quizData.imageUrl && (
                  <div className="mt-4 sm:mt-5">
                    <div className="mx-auto w-full max-w-xs sm:max-w-sm overflow-hidden rounded-lg border bg-white shadow-sm">
                      <img
                        src={quizData.imageUrl}
                        alt={`${quizData.name}のイラスト`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-white rounded-lg border">
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                    {quizData.name}
                    {quizData.ruby && (
                      <span className="ml-2 text-xs sm:text-sm font-normal text-blue-600">
                        ({quizData.ruby})
                      </span>
                    )}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {getClassTypeName(quizData.classId)} / ★{quizData.rarity}
                  </p>
                  {quizData.originalName && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {quizData.originalName}
                    </p>
                  )}
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
                  {quizData.ruby && (
                    <span className="ml-2 text-xs sm:text-sm font-normal text-blue-600">
                      ({quizData.ruby})
                    </span>
                  )}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  {getClassTypeName(quizData.classId)} / ★{quizData.rarity}
                </p>
                {quizData.originalName && (
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {quizData.originalName}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {showResult && (
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          {showRevealButton && (
            <button
              type="button"
              onClick={handleRevealTrueName}
              className="w-full sm:w-auto sm:min-w-[160px] font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
            >
              真名開帳
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            className="w-full sm:w-auto sm:min-w-[160px] bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            {nextButtonText}
          </button>
        </div>
      )}
    </>
  );
}
