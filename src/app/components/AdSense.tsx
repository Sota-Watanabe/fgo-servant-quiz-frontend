"use client";

import { useEffect, useRef } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current) {
        console.log("AdSense: 初期化を試行中...", { adSlot });
        
        // 広告が既に初期化されているかチェック
        if (!adRef.current.hasAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log("AdSense: 広告をプッシュしました");
        } else {
          console.log("AdSense: 既に初期化済み");
        }
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [adSlot]);

  return (
    <div style={{ textAlign: 'center', margin: '10px 0' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6714287536670840"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}
