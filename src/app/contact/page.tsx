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
              メールでのお問い合わせ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              以下のメールアドレス宛にご連絡ください。
            </p>
            <p className="mt-3 text-base leading-relaxed text-indigo-700 sm:text-lg font-medium">
              📧 fgoquiz.contact@gmail.com
            </p>
            <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
              ※ 通常、2〜3営業日以内に返信いたします。ただし、内容によっては返信にお時間をいただく場合や、
              返信を差し控えさせていただく場合がございます。あらかじめご了承ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              X（旧Twitter）
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
                className="underline underline-offset-4 hover:text-indigo-800"
              >
                @fgqproject
              </a>
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              お問い合わせ内容の例
            </h2>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>サイトの不具合や表示崩れの報告</li>
              <li>誤字・誤情報の修正依頼</li>
              <li>新機能のご要望</li>
              <li>サイト運営に関するご質問</li>
              <li>広告掲載や提携に関するお問い合わせ</li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              注意事項
            </h2>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>個別のゲーム攻略相談には対応できません</li>
              <li>Fate/Grand Order 本編のサポートは公式へお問い合わせください</li>
              <li>いただいたご連絡には可能な限り対応しますが、すべてに個別の返信ができない場合があります</li>
              <li>営業目的の連絡はご遠慮ください</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

