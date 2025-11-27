import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "お問い合わせ";
const pageDescription =
  "Fate/Grand Quiz に関するご意見・ご要望・不具合報告などのお問い合わせ窓口です。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
          <section className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              お問い合わせ
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトに関するご意見・ご要望・ご質問・不具合のご報告などがありましたら、
              下記の方法でご連絡ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              1. GitHub Issues
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              技術的な不具合や改善提案については、GitHub リポジトリの Issues からご連絡いただけるとスムーズです。
            </p>
            <p className="mt-2 text-sm leading-relaxed text-indigo-700 sm:text-base">
              GitHub:{" "}
              <a
                href="https://github.com/Sota-Watanabe/fgo-servant-quiz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                github.com/Sota-Watanabe/fgo-servant-quiz
              </a>
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              2. X（旧Twitter）
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              ライトなご意見や感想などは、X（旧Twitter）経由でのメッセージも歓迎しています。
            </p>
            <p className="mt-2 text-sm leading-relaxed text-indigo-700 sm:text-base">
              X:{" "}
              <a
                href="https://x.com/fgqproject"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                運営者アカウント
              </a>
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              注意事項
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              いただいたご連絡には可能な限り対応しますが、すべてに個別の返信ができない場合があります。
              あらかじめご了承ください。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

