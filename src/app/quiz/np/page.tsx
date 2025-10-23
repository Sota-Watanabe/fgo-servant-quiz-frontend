"use client";

import { useMemo, useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import { useFetchQuizNp } from "@/hooks/useFetchQuizNp";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import type { NoblePhantasmQuizResponse } from "@/hooks/useFetchQuizNp";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import { getCardTypeName } from "@/models/cardTypes";

type ServantOption = ServantsOptionsResponse["options"][number];

type NoblePhantasmQuizProps = {
  quizData: NoblePhantasmQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

const NoblePhantasmQuiz = ({
  quizData,
  options,
  onNextQuestion,
}: NoblePhantasmQuizProps) => {
  const noblePhantasm = quizData.noblePhantasm;

  const cardLabel = useMemo(() => {
    if (!noblePhantasm?.card) return null;
    const parsedCard = Number(noblePhantasm.card);
    if (Number.isNaN(parsedCard)) {
      return noblePhantasm.card;
    }
    return getCardTypeName(parsedCard) || noblePhantasm.card;
  }, [noblePhantasm]);

  return (
    <>
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 px-2 text-center">
        この宝具を持つサーヴァントは？
      </h2>

      {noblePhantasm ? (
        <section className="space-y-4 sm:space-y-5 mb-4 sm:mb-6 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-xl p-5 sm:p-7 border border-violet-100 shadow-sm">
          <header>
            <p className="text-xs sm:text-sm text-violet-500 font-semibold uppercase tracking-wide">
              Noble Phantasm
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-violet-900 mt-1">
              {noblePhantasm.name}
              {noblePhantasm.ruby && (
                <span className="ml-2 text-xs sm:text-sm font-normal text-violet-600">
                  ({noblePhantasm.ruby})
                </span>
              )}
            </h3>
            {noblePhantasm.originalName && (
              <p className="text-xs sm:text-sm text-violet-700 mt-1">
                {noblePhantasm.originalName}
              </p>
            )}
          </header>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {noblePhantasm.rank && (
              <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-xs sm:text-sm font-medium text-violet-700">
                ランク: {noblePhantasm.rank}
              </span>
            )}
            {noblePhantasm.type && (
              <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-xs sm:text-sm font-medium text-violet-700">
                種別: {noblePhantasm.type}
              </span>
            )}
            {cardLabel && (
              <span className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-xs sm:text-sm font-medium text-violet-700">
                カード: {cardLabel}
              </span>
            )}
          </div>

          {noblePhantasm.detail && (
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 bg-white rounded-lg border border-violet-100 p-4">
              {noblePhantasm.detail}
            </p>
          )}

          {noblePhantasm.effectFlags?.length ? (
            <div>
              <h4 className="text-sm font-semibold text-violet-900 mb-2">
                追加効果
              </h4>
              <ul className="flex flex-wrap gap-2">
                {noblePhantasm.effectFlags.map((flag, index) => (
                  <li
                    key={`${flag}-${index}`}
                    className="inline-flex items-center rounded-md bg-white px-3 py-1 text-xs sm:text-sm font-medium text-violet-700 border border-violet-200 shadow-sm"
                  >
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : (
        <section className="mb-4 sm:mb-6 rounded-xl border border-violet-100 bg-white p-5 sm:p-7 text-center text-sm sm:text-base text-gray-600">
          宝具情報を取得できませんでした。
        </section>
      )}

      <QuizAnswerSection
        quizData={quizData}
        options={options}
        onNextQuestion={onNextQuestion}
      />
    </>
  );
};

export default function NoblePhantasmQuizPage() {
  const [questionCount, setQuestionCount] = useState(0);

  const pageKey = `np-quiz-${questionCount}`;
  const { data: quizData, isFetching: quizFetching } = useFetchQuizNp(pageKey);
  const { data: optionData, isFetching: optionFetching } =
    useFetchServantsOption();

  const isFetching = quizFetching || optionFetching;

  return (
    <PageLayout adKeyPrefix={questionCount.toString()} minHeight={1200}>
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          {isFetching ? (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                問題準備中...
              </h2>
              <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6">
                <p className="text-gray-500 text-base sm:text-lg">
                  宝具情報を読み込んでいます
                </p>
              </div>
            </>
          ) : quizData && optionData ? (
            <NoblePhantasmQuiz
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
