import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "プライバシーポリシー";
const pageDescription =
  "Fate/Grand Quiz におけるユーザー情報の取り扱いについてのプライバシーポリシーです。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
          <section className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              プライバシーポリシー
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              Fate/Grand Quiz（以下「当サイト」）では、ユーザーの皆さまのプライバシーを尊重し、
              個人情報の適切な保護と取り扱いに努めています。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              1. 広告について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、第三者配信の広告サービスである
              Google AdSense（グーグルアドセンス）を利用する予定もしくは利用しています。
              Google を含む広告配信事業者は、ユーザーの興味に応じた広告を表示するために、
              Cookie を使用することがあります。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              2. アクセス解析ツールについて
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、アクセス状況を把握するために Google アナリティクスを利用しています。
              Google アナリティクスは、トラフィックデータ収集のために Cookie を使用します。
              これらのデータは匿名で収集されており、個人を特定するものではありません。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              3. Cookie の無効化について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              ユーザーはブラウザの設定により Cookie を無効にすることができます。
              ただし、その場合、当サイトの一部機能が正しく動作しない可能性があります。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              4. 個人情報の取り扱い
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、クイズの利用にあたって氏名や住所などの個人情報を取得することはありません。
              お問い合わせ等で任意にご提供いただいた情報については、回答・連絡以外の目的では利用しません。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              5. 免責事項
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトのコンテンツ・情報については、できる限り正確な情報を提供するよう努めていますが、
              その正確性や安全性を保証するものではありません。
              当サイトの利用によって生じたいかなる損害についても、当サイトは一切の責任を負いかねます。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              6. プライバシーポリシーの変更
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本ポリシーの内容は、法令の改正やサービス内容の変更に応じて、予告なく変更する場合があります。
              重要な変更がある場合は、当サイト上で告知します。
            </p>

            <p className="mt-8 text-xs text-gray-500">
              制定日: 2024年
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

