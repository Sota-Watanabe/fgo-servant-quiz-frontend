import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";
import {
  DEFAULT_SOCIAL_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adSenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "";
const defaultSocialImage = absoluteUrl(DEFAULT_SOCIAL_IMAGE_PATH);
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebSite", "Game"],
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "ja-JP",
  genre: ["クイズ", "トリビア", "ゲーム"],
  isFamilyFriendly: true,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  potentialAction: [
    {
      "@type": "PlayAction",
      name: "FGOスキルクイズに挑戦",
      target: `${SITE_URL}/quiz/skill`,
    },
    {
      "@type": "PlayAction",
      name: "FGOプロフィールクイズに挑戦",
      target: `${SITE_URL}/quiz/profile`,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | FGOサーヴァント当てクイズ`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "FGO 攻略",
    "FGO 戦略ガイド",
    "FGO 初心者",
    "FGO サーヴァント 育成",
    "FGO クラス相性",
    "FGO 戦闘システム",
    "FGO スキル解説",
    "FGO 宝具解説",
    "Fate/Grand Order 攻略",
    "Fate/Grand Order 初心者ガイド",
    "FGO コマンドカード",
    "FGO 編成",
    "FGO 学習",
    "FGO クイズ",
    "FGO サーヴァント クイズ",
    "Fate/Grand Order クイズ",
    "FGO 知識確認",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | FGOサーヴァント当てクイズ`,
    description: SITE_DESCRIPTION,
    locale: "ja_JP",
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} ロゴ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | FGOサーヴァント当てクイズ`,
    description: SITE_DESCRIPTION,
    images: [defaultSocialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics measurementId="G-R5XW321DL4" />
        <Script
          id="website-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(websiteJsonLd)}
        </Script>
        {/* AdSense */}
        {adSenseClientId ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
