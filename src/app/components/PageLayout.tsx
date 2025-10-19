"use client";

import AdBanner from "./AdBanner";
import SkillQuizTabs from "./SkillQuizTabs";

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
export default function PageLayout({ children, adKeyPrefix = "quiz", minHeight, showSkillTabs = false }: PageLayoutProps) {
  return (
    <div 
      className="bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-8 px-2 sm:px-4 pb-20"
      style={{ minHeight: minHeight ? `${minHeight}px` : '100%' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            スキルクイズ
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            FGOサーヴァントを当てるクイズです
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* 左側の広告（デスクトップ） / 上部広告（モバイル） */}
          <div className="lg:w-64 flex-shrink-0 order-1 lg:order-1">
            <div className="lg:sticky lg:top-4">
              <AdBanner
                adKey={`ad-left-${adKeyPrefix}`}
                adSlot="2934488082"
                style={{ 
                  display: "block", 
                  minHeight: "100px",
                  width: "100%" 
                }}
              />
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="flex-1 max-w-4xl order-2 lg:order-2">
            {/* スキルクイズのタブ */}
            {showSkillTabs && <SkillQuizTabs />}
            
            {children}
          </div>

          {/* 右側の広告（デスクトップ） / 下部広告（モバイル） */}
          <div className="lg:w-64 flex-shrink-0 order-3 lg:order-3">
            <div className="lg:sticky lg:top-4">
              <AdBanner
                adKey={`ad-right-${adKeyPrefix}`}
                adSlot="2934488082"
                style={{ 
                  display: "block", 
                  minHeight: "100px",
                  width: "100%" 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
