import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adSenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "";
const siteUrl = "https://fate-grand-quiz.com";
const siteName = "Fate/Grand Quiz";
const siteDescription =
  "「Fate/Grand Order」ファン必見！サーヴァントのプロフィールや宝具からキャラ名を当てるFGOクイズ。あなたの知識と愛で、真のマスター度を試そう！";
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebSite", "Game"],
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "ja-JP",
  genre: ["クイズ", "トリビア", "ゲーム"],
  isFamilyFriendly: true,
  publisher: {
    "@type": "Organization",
    name: siteName,
  },
  potentialAction: [
    {
      "@type": "PlayAction",
      name: "FGOスキルクイズに挑戦",
      target: `${siteUrl}/quiz/skill`,
    },
    {
      "@type": "PlayAction",
      name: "FGOプロフィールクイズに挑戦",
      target: `${siteUrl}/quiz/profile`,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | FGOサーヴァント当てクイズ`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "FGO クイズ",
    "FGO サーヴァント クイズ",
    "Fate/Grand Order クイズ",
    "FGO キャラ 当てクイズ",
    "FGO 知識 クイズ",
    "FGO 初心者",
    "FGO 上級者",
    "FGO ランダム出題",
    "FGO マスター向け クイズ",
    "FGQ クイズ",
    "Fate/Grand Quiz",
  ],
  alternates: {
    canonical: siteUrl,
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | FGOサーヴァント当てクイズ`,
    description: siteDescription,
    locale: "ja_JP",
    images: [
      {
        url: `${siteUrl}/icon.png`,
        width: 512,
        height: 512,
        alt: `${siteName} ロゴ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | FGOサーヴァント当てクイズ`,
    description: siteDescription,
    images: [`${siteUrl}/icon.png`],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.png?v=1" />
        <link rel="shortcut icon" href="/icon.png?v=1" />
        <link rel="apple-touch-icon" href="/icon.png?v=1" />
        <GoogleAnalytics measurementId="G-R5XW321DL4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {adSenseClientId ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
