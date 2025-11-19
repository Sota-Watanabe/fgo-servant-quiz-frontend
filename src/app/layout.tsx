import type { Metadata } from "next";
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
    canonical: SITE_URL,
  },
  viewport: "width=device-width, initial-scale=1",
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
