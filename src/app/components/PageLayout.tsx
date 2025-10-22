"use client";

import AdBanner from "./AdBanner";
import GlobalNav from "./GlobalNav";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  adKeyPrefix?: string;
  minHeight?: number;
  showSkillTabs?: boolean;
}

/**
 * クイズページ用の3カラムレイアウトコンポーネント
 * 左右に広告、中央にメインコンテンツを配置
 */
export default function PageLayout({
  children,
  adKeyPrefix = "quiz",
  minHeight,
}: PageLayoutProps) {
  const isDev = process.env.NODE_ENV !== "production";
  const adStyle = {
    display: "block",
    minHeight: "800px",
    width: "100%",
    border: isDev ? "2px dashed #a5b4fc" : undefined,
    background: isDev ? "#eef2ff" : undefined,
    borderRadius: "0.5rem",
  };
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
      <div
        className="flex-1 py-4 sm:py-8 px-2 sm:px-4"
        style={{ minHeight: minHeight ? `${minHeight}px` : "auto" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* 左側の広告（デスクトップ） / 上部広告（モバイル） */}
            <div className="lg:w-64 flex-shrink-0 order-1 lg:order-1">
              <div className="lg:sticky lg:top-4">
                {isDev ? (
                  <div
                    style={adStyle}
                    className="flex items-center justify-center text-indigo-400 text-xs h-[200px]"
                  >
                    広告枠（開発環境）
                  </div>
                ) : (
                  <AdBanner
                    adKey={`ad-left-${adKeyPrefix}`}
                    adSlot="2934488082"
                    style={adStyle}
                  />
                )}
              </div>
            </div>

            {/* メインコンテンツ */}
            <div className="flex-1 max-w-4xl order-2 lg:order-2">
              {children}
            </div>

            {/* 右側の広告（デスクトップ） / 下部広告（モバイル） */}
            <div className="lg:w-64 flex-shrink-0 order-3 lg:order-3">
              <div className="lg:sticky lg:top-4">
                {isDev ? (
                  <div
                    style={adStyle}
                    className="flex items-center justify-center text-indigo-400 text-xs h-[200px]"
                  >
                    広告枠（開発環境）
                  </div>
                ) : (
                  <AdBanner
                    adKey={`ad-right-${adKeyPrefix}`}
                    adSlot="2934488082"
                    style={adStyle}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* フッター */}
      <Footer />
    </div>
  );
}
