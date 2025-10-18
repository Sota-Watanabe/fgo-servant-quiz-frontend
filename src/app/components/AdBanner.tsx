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
 * 本番環境では広告のみ、開発環境では広告枠付きで表示
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
    // 本番環境では広告枠なしで広告のみ表示
    return (
      <AdSense
        key={adKey}
        adSlot={adSlot}
        style={style}
      />
    );
  }

  // 開発環境では広告枠付きで表示
  return (
    <div className={`bg-gray-50 rounded-lg p-2 sm:p-4 border-2 border-dashed border-gray-300 ${className}`}>
      <p className="text-xs text-gray-500 mb-2">広告</p>
      <AdSense
        key={adKey}
        adSlot={adSlot}
        style={style}
      />
    </div>
  );
}
