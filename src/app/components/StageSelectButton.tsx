"use client";
import React from "react";

interface StageSelectButtonProps {
  /** メインテキスト */
  children: React.ReactNode;
  /** サブテキスト（英字など） */
  subText?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * FGOターミナル「ステージ選択」風のナビゲーションボタン
 */
const StageSelectButton: React.FC<StageSelectButtonProps> = ({
  children,
  subText,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative flex flex-col items-center justify-center
        min-w-[260px] sm:min-w-[340px] max-w-full
        px-6 sm:px-10 py-2.5 sm:py-3
        bg-gradient-to-br from-green-400 via-green-600 to-emerald-900
        rounded-[1.8rem] border-[3.5px] border-white
        shadow-[0_4px_16px_0_rgba(30,40,90,0.18)]
        transition-all duration-150
        before:absolute before:inset-0 before:rounded-[1.8rem] before:border-[2.5px] before:border-yellow-400 before:pointer-events-none
        after:absolute after:inset-0 after:rounded-[1.8rem] after:border-[1.5px] after:border-emerald-300 after:pointer-events-none
        hover:brightness-110 hover:shadow-[0_6px_24px_0_rgba(30,40,90,0.28)]
        active:scale-95
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
      aria-disabled={disabled}
      style={{
        WebkitTextStroke: '0.8px #fff',
        textShadow: '0 2px 8px #1a3a1a, 0 0px 2px #fff',
        overflow: 'hidden',
      }}
    >
      {/* メインテキスト */}
      <span
        className="z-30 px-2 text-[1.25rem] sm:text-[1.45rem] font-extrabold tracking-wider text-white text-center drop-shadow-[0_2px_2px_rgba(30,40,90,0.18)]"
        style={{
          letterSpacing: '0.08em',
        }}
      >
        {children}
      </span>
      {/* サブテキスト（英字） */}
      {subText && (
        <span
          className="z-30 mt-0.5 text-xs sm:text-sm font-semibold text-emerald-100 tracking-widest opacity-80"
          style={{
            letterSpacing: '0.12em',
            textShadow: '0 1px 4px #1a3a1a',
          }}
        >
          {subText}
        </span>
      )}
      {/* 光沢エフェクト */}
      <span className="pointer-events-none absolute left-0 top-0 w-full h-1/2 rounded-t-[1.8rem] bg-white/30 blur-[2px] opacity-60" />
    </button>
  );
};

export default StageSelectButton;
