"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import QuizLoading from "@/app/quiz/components/QuizLoading";
import { useFetchQuizNp } from "@/hooks/useFetchQuizNp";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import type { NoblePhantasmQuizResponse } from "@/hooks/useFetchQuizNp";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import { getCardTypeName } from "@/models/cardTypes";

type ServantOption = ServantsOptionsResponse["options"][number];


type NoblePhantasmQuizPageBodyProps = {
  quizData: NoblePhantasmQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

function NoblePhantasmQuizPageBody({
  quizData,
  options,
  onNextQuestion,
}: NoblePhantasmQuizPageBodyProps) {
  const noblePhantasm = quizData.noblePhantasm;
  const cardLabel = noblePhantasm
    ? getCardTypeName(Number(noblePhantasm.card))
    : "";

  return (
    <PageLayout>
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 px-2 text-center">
            この宝具を持つサーヴァントは？
          </h2>

          {noblePhantasm ? (
            <section className="space-y-5 sm:space-y-6 mb-4 sm:mb-6 rounded-2xl border border-sky-100 bg-white p-5 sm:p-7 shadow-sm">
              <header className="space-y-3 text-center sm:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-sky-100 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-sky-700">
                  Noble Phantasm
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
                  {noblePhantasm.name}
                </h3>
                {noblePhantasm.ruby && (
                  <p className="text-sm sm:text-base font-semibold text-sky-600">
                    {noblePhantasm.ruby}
                  </p>
                )}
              </header>

              <div className="sm:flex sm:items-stretch">
                <div className="mb-3 last:mb-0 sm:mb-0 sm:mr-4 last:sm:mr-0 sm:flex-1 sm:min-w-[160px] rounded-xl border border-sky-100 bg-sky-50 p-3 sm:p-4 text-sky-800 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-sky-500">
                    ランク
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-bold">
                    {noblePhantasm.rank}
                  </p>
                </div>
                <div className="mb-3 last:mb-0 sm:mb-0 sm:mr-4 last:sm:mr-0 sm:flex-[1.5] sm:min-w-[220px] rounded-xl border border-sky-100 bg-sky-50 p-3 sm:p-4 text-sky-800 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-sky-500">
                    種別
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-bold sm:whitespace-nowrap">
                    {noblePhantasm.type}
                  </p>
                </div>
                <div className="mb-3 last:mb-0 sm:mb-0 sm:flex-1 sm:min-w-[160px] rounded-xl border border-sky-100 bg-sky-50 p-3 sm:p-4 text-sky-800 shadow-sm">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-sky-500">
                    カード
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-bold">
                    {cardLabel}
                  </p>
                </div>
              </div>

              {noblePhantasm.detail && (
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 rounded-xl border border-sky-100 bg-sky-50 p-4">
                  {noblePhantasm.detail}
                </p>
              )}
            </section>
          ) : (
            <section className="mb-4 sm:mb-6 rounded-xl border border-sky-100 bg-white p-5 sm:p-7 text-center text-sm sm:text-base text-gray-600">
              宝具情報を取得できませんでした。
            </section>
          )}

          <QuizAnswerSection
            quizData={quizData}
            options={options}
            onNextQuestion={onNextQuestion}
            shareType="np"
          />
        </div>
      </main>
    </PageLayout>
  );
}

export default function NoblePhantasmQuizClient() {
  const searchParams = useSearchParams();
  const [questionCount, setQuestionCount] = useState(0);
  const [initialServantId] = useState<string | undefined>(() => {
    return searchParams.get("servantId") ?? undefined;
  });
  const servantId = questionCount === 0 ? initialServantId : undefined;

  const { data: quizData, isLoading: isQuizLoading } = useFetchQuizNp(questionCount, servantId);
  const { data: optionData, isLoading: isOptionLoading } = useFetchServantsOption();

  if (isQuizLoading || isOptionLoading) {
    return (
      <QuizLoading title="問題準備中..." message="宝具情報を読み込んでいます" />
    );
  }

  if (!quizData || !optionData?.options) return;

  return (
    <NoblePhantasmQuizPageBody
      quizData={quizData}
      options={optionData.options}
      onNextQuestion={() => {
        setQuestionCount((prev) => prev + 1);
      }}
    />
  );
}
