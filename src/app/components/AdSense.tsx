"use client";

import { useEffect, useRef, useState } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  key?: string | number; // リロード用のkey
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAd = () => {
      try {
        if (typeof window !== "undefined" && adRef.current && !isLoaded) {
          console.log("AdSense: 初期化を試行中...", { adSlot });
          
          // 既に data-adsbygoogle-status が設定されている場合は削除
          if (adRef.current.hasAttribute('data-adsbygoogle-status')) {
            adRef.current.removeAttribute('data-adsbygoogle-status');
          }
          
          // window.adsbygoogle が存在しない場合は初期化
          if (!window.adsbygoogle) {
            window.adsbygoogle = [];
          }
          
          // 広告をプッシュ
          window.adsbygoogle.push({});
          setIsLoaded(true);
          console.log("AdSense: 広告をプッシュしました");
        }
      } catch (error) {
        console.error("AdSense error:", error);
        setIsLoaded(false);
      }
    };

    // 少し遅延させて確実に要素がDOMに追加されてから実行
    const timer = setTimeout(() => {
      loadAd();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [adSlot, isLoaded]);

  // コンポーネントがアンマウントされる際のクリーンアップ
  useEffect(() => {
    return () => {
      setIsLoaded(false);
    };
  }, []);

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
