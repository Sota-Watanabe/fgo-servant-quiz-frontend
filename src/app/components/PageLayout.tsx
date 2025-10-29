"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

import AdBanner from "@/app/components/AdBanner";
import Footer from "@/app/components/Footer";
import GlobalNav from "@/app/components/GlobalNav";

interface PageLayoutProps {
  children: ReactNode;
  adKeyPrefix?: string;
}

type AdPosition = "left" | "right";

const AD_SLOT_ID = "2934488082";

const AD_COLUMN_CLASS: Record<AdPosition, string> = {
  left: "lg:w-64 flex-shrink-0 order-1 lg:order-1",
  right: "lg:w-64 flex-shrink-0 order-3 lg:order-3",
};

const getAdStyle = (isDev: boolean, height: string): CSSProperties => ({
  display: "block",
  width: "100%",
  height,
  borderRadius: "0.5rem",
  ...(isDev
    ? { border: "2px dashed #a5b4fc", background: "#eef2ff" }
    : undefined),
});

/**
 * クイズページ用の3カラムレイアウトコンポーネント
 * 左右に広告、中央にメインコンテンツを配置
 */
export default function PageLayout({
  children,
  adKeyPrefix = "quiz",
}: PageLayoutProps) {
  const isDev = process.env.NODE_ENV !== "production";
  const [adHeight, setAdHeight] = useState("400px");
  useEffect(() => {
    const updateHeight = () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setAdHeight("800px");
      } else {
        setAdHeight("400px");
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const adStyle = getAdStyle(isDev, adHeight);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        {/* ヘッダー（タイトル） */}
        <header className="text-center pt-6 sm:pt-10 mb-2 sm:mb-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Fate/Grand Quiz
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            記憶に刻まれし英霊たちの軌跡を辿れ
          </p>
        </header>
        {/* ナビゲーション */}
        <div className="mb-4 sm:mb-6">
          <GlobalNav />
        </div>
      </div>
      <main
        className="flex-1 py-4 sm:py-8 px-2 sm:px-4 h-[400px] sm:h-[800px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* 左側の広告（デスクトップ） / 上部広告（モバイル） */}
            <AdColumn
              position="left"
              isDev={isDev}
              adKeyPrefix={adKeyPrefix}
              adStyle={adStyle}
            />

            {/* メインコンテンツ */}
            <section
              className="flex-1 max-w-4xl order-2 lg:order-2"
              aria-label="Fate/Grand Order クイズ"
            >
              {children}
            </section>

            {/* 右側の広告（デスクトップ） / 下部広告（モバイル） */}
            <AdColumn
              position="right"
              isDev={isDev}
              adKeyPrefix={adKeyPrefix}
              adStyle={adStyle}
            />
          </div>
        </div>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}

interface AdColumnProps {
  position: AdPosition;
  adKeyPrefix: string;
  isDev: boolean;
  adStyle: CSSProperties;
}

function AdColumn({ position, adKeyPrefix, isDev, adStyle }: AdColumnProps) {
  return (
    <aside className={AD_COLUMN_CLASS[position]}>
      <div className="lg:sticky lg:top-4">
        {isDev ? (
          <DevAdPlaceholder style={adStyle} />
        ) : (
          <AdBanner
            adKey={`ad-${position}-${adKeyPrefix}`}
            adSlot={AD_SLOT_ID}
            style={adStyle}
          />
        )}
      </div>
    </aside>
  );
}

function DevAdPlaceholder({ style }: { style: CSSProperties }) {
  return (
    <div
      style={style}
      className="flex items-center justify-center text-indigo-400 text-xs"
    >
      広告枠（開発環境）
    </div>
  );
}
