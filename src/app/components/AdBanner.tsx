"use client";

import AdSense from "./AdSense";

interface AdBannerProps {
  /** 広告の識別用キー（ページごとにユニークにする） */
  adKey: string;
  /** 広告スロットID */
  adSlot?: string;
  /** 広告のスタイル */
  style?: React.CSSProperties;
  /** 追加のクラス名 */
  className?: string;
}

/**
 * 本番・開発環境に応じて広告を表示するコンポーネント
 * 本番環境では広告枠を非表示にするが、広告の高さは確保
 * 開発環境では広告枠付きで表示
 */
export default function AdBanner({ 
  adKey, 
  adSlot = "2934488082", 
  style = { display: "block", minHeight: "100px", width: "100%" },
  className = ""
}: AdBannerProps) {
  // 本番環境では広告枠を非表示にする
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    // 本番環境では最小高さを確保した上で広告を表示
    return (
      <div className={`min-h-[100px] w-full ${className}`}>
        <AdSense
          key={adKey}
          adSlot={adSlot}
          style={style}
        />
      </div>
    );
  }

  // 開発環境では広告枠付きで表示
  return (
    <div className={`bg-gray-50 rounded-lg p-2 sm:p-4 border-2 border-dashed border-gray-300 min-h-[100px] w-full ${className}`}>
      <p className="text-xs text-gray-500 mb-2">広告</p>
      <AdSense
        key={adKey}
        adSlot={adSlot}
        style={style}
      />
    </div>
  );
}
