import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adSenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
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
