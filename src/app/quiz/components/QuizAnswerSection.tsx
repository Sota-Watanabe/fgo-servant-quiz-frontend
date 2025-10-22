"use client";

import { getClassTypeName } from "@/models/classTypes";

type QuizAnswerData = {
  name: string;
  ruby?: string | null;
  originalName?: string | null;
  classId: number;
};

type QuizAnswerSectionProps = {
  quizData: QuizAnswerData;
  showAnswer: boolean;
  onToggleAnswer?: () => void;
  onNextQuestion: () => void;
  showToggleButton?: boolean;
  nextButtonLabel?: string;
  className?: string;
};

const baseContainerClass = "space-y-4 sm:space-y-5";

export default function QuizAnswerSection({
  quizData,
  showAnswer,
  onToggleAnswer,
  onNextQuestion,
  showToggleButton = Boolean(onToggleAnswer),
  nextButtonLabel = "次の問題へ",
  className = "",
}: QuizAnswerSectionProps) {
  const containerClassName = [baseContainerClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {showToggleButton && onToggleAnswer && (
        <div className="flex justify-center">
          <button
            onClick={onToggleAnswer}
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 sm:text-sm"
          >
            {showAnswer ? "答えを隠す" : "答えを見る"}
          </button>
        </div>
      )}

      {showAnswer && (
        <div className="space-y-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 text-center shadow-inner">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              正解
            </p>
            <p className="mt-1 text-xl sm:text-2xl font-bold text-amber-900">
              {quizData.name}
              {quizData.ruby && (
                <span className="ml-2 text-sm sm:text-base font-semibold text-amber-700">
                  ({quizData.ruby})
                </span>
              )}
            </p>
            {quizData.originalName && (
              <p className="text-xs sm:text-sm text-amber-700">
                {quizData.originalName}
              </p>
            )}
            <p className="text-sm sm:text-base text-amber-800">
              {getClassTypeName(quizData.classId)}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onNextQuestion}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:text-sm"
            >
              {nextButtonLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
