"use client";

import { useEffect, useRef, useState } from "react";
import PageLayout from "@/app/components/PageLayout";
import QuizAnswerSection from "@/app/quiz/components/QuizAnswerSection";
import QuizLoading from "@/app/quiz/components/QuizLoading";
import { useFetchServantsOption } from "@/hooks/useFetchServantsOption";
import type { ServantsOptionsResponse } from "@/hooks/useFetchServantsOption";
import {
  NoblePhantasmVoiceQuizResponse,
  useFetchQuizNpVoice,
} from "@/hooks/useFetchQuizNpVoice";

type ServantOption = ServantsOptionsResponse["options"][number];

type NoblePhantasmVoiceQuizPageBodyProps = {
  quizData: NoblePhantasmVoiceQuizResponse;
  options: ServantOption[];
  onNextQuestion: () => void;
};

function NoblePhantasmVoiceQuizPageBody({
  quizData,
  options,
  onNextQuestion,
}: NoblePhantasmVoiceQuizPageBodyProps) {
  const noblePhantasm = quizData.noblePhantasm;
  const voiceLines = noblePhantasm?.voiceLines || [];
  const [playingVoiceIndex, setPlayingVoiceIndex] = useState<number | null>(
    null
  );
  const [volume, setVolume] = useState<number>(0.7);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const currentTimeoutRef = useRef<number | null>(null);
  const isStoppingRef = useRef<boolean>(false);

  const cleanupPlayback = () => {
    const a = currentAudioRef.current;
    if (a) {
      try {
        a.pause();
      } catch {}
      try {
        a.currentTime = 0;
      } catch {}
      a.onended = null;
      a.onerror = null;
    }
    currentAudioRef.current = null;
    if (currentTimeoutRef.current !== null) {
      clearTimeout(currentTimeoutRef.current);
      currentTimeoutRef.current = null;
    }
  };

  const playVoiceLine = (voiceIndex: number) => {
    // 既存の再生を停止してから開始
    stopVoiceLine();

    const voiceLine = voiceLines[voiceIndex];
    if (!voiceLine || !voiceLine.audioAssets || voiceLine.audioAssets.length === 0) {
      return;
    }

    isStoppingRef.current = false;
    setPlayingVoiceIndex(voiceIndex);

    let idx = 0;

    const scheduleNext = () => {
      if (isStoppingRef.current) return;

      const src = voiceLine.audioAssets[idx];
      const audio = new Audio(src);
      audio.volume = volume;
      currentAudioRef.current = audio;

      audio.onended = () => {
        if (isStoppingRef.current) return;
        idx += 1;
        if (idx < voiceLine.audioAssets.length) {
          const d = voiceLine.delay[idx] || 0;
          currentTimeoutRef.current = window.setTimeout(scheduleNext, d);
        } else {
          cleanupPlayback();
          setPlayingVoiceIndex(null);
        }
      };

      audio.onerror = () => {
        if (isStoppingRef.current) return;
        idx += 1;
        if (idx < voiceLine.audioAssets.length) {
          const d = voiceLine.delay[idx] || 0;
          currentTimeoutRef.current = window.setTimeout(scheduleNext, d);
        } else {
          cleanupPlayback();
          setPlayingVoiceIndex(null);
        }
      };

      audio.play().catch(() => {
        if (isStoppingRef.current) return;
        idx += 1;
        if (idx < voiceLine.audioAssets.length) {
          const d = voiceLine.delay[idx] || 0;
          currentTimeoutRef.current = window.setTimeout(scheduleNext, d);
        } else {
          cleanupPlayback();
          setPlayingVoiceIndex(null);
        }
      });
    };

    const firstDelay = (voiceLine.delay && voiceLine.delay[0]) || 0;
    currentTimeoutRef.current = window.setTimeout(scheduleNext, firstDelay);
  };

  const stopVoiceLine = () => {
    isStoppingRef.current = true;
    cleanupPlayback();
    setPlayingVoiceIndex(null);
  };

  useEffect(() => {
    return () => {
      isStoppingRef.current = true;
      cleanupPlayback();
    };
  }, []);

  return (
    <PageLayout>
      <main className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 px-2 text-center">
            この宝具ボイスのサーヴァントは？
          </h2>

          {noblePhantasm && voiceLines.length > 0 ? (
            <section className="space-y-5 sm:space-y-6 mb-4 sm:mb-6 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-indigo-50 p-5 sm:p-7 shadow-sm">
              <header className="space-y-3 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-purple-700">
                    Noble Phantasm Voice
                  </span>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume * 100}
                      onChange={(e) => setVolume(Number(e.target.value) / 100)}
                      className="w-24 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      aria-label="音量調整"
                    />
                    <span className="text-xs text-purple-700 font-semibold min-w-[2.5rem] text-right">
                      {Math.round(volume * 100)}%
                    </span>
                  </div>
                </div>
              </header>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700 text-left">
                  🎵 宝具ボイス一覧
                </p>
                {voiceLines.map((voiceLine, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-purple-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 text-left">
                        <p className="text-sm sm:text-base font-semibold text-gray-800">
                          {voiceLine.name}{index + 1}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (playingVoiceIndex === index) {
                            stopVoiceLine();
                          } else {
                            playVoiceLine(index);
                          }
                        }}
                        className={`ml-4 rounded-full p-3 transition-all ${
                          playingVoiceIndex === index
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-purple-500 hover:bg-purple-600 text-white"
                        }`}
                        aria-label={
                          playingVoiceIndex === index ? "停止" : "再生"
                        }
                      >
                        {playingVoiceIndex === index ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="mb-4 sm:mb-6 rounded-xl border border-sky-100 bg-white p-5 sm:p-7 text-center text-sm sm:text-base text-gray-600">
              宝具ボイス情報を取得できませんでした。
            </section>
          )}

          <QuizAnswerSection
            quizData={quizData}
            options={options}
            onNextQuestion={onNextQuestion}
            shareType="np-voice"
          />
        </div>
      </main>
    </PageLayout>
  );
}

type NoblePhantasmVoiceQuizClientProps = {
  initialServantId?: string;
};

export default function NoblePhantasmVoiceQuizClient({
  initialServantId,
}: NoblePhantasmVoiceQuizClientProps) {
  const [questionCount, setQuestionCount] = useState(0);
  const servantId = questionCount === 0 ? initialServantId : undefined;

  const { data: quizData, isLoading: isQuizLoading } = useFetchQuizNpVoice(
    questionCount,
    servantId
  );
  const { data: optionData, isLoading: isOptionLoading } =
    useFetchServantsOption();

  if (isQuizLoading || isOptionLoading) {
    return (
      <QuizLoading title="問題準備中..." message="宝具情報を読み込んでいます" />
    );
  }

  if (!quizData || !optionData?.options) return null;

  return (
    <NoblePhantasmVoiceQuizPageBody
      quizData={quizData}
      options={optionData.options}
      onNextQuestion={() => {
        setQuestionCount((prev) => prev + 1);
      }}
    />
  );
}
