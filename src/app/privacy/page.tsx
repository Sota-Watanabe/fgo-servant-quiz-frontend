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
              個人情報の適切な保護と取り扱いに努めています。本プライバシーポリシーは、当サイトにおける個人情報およびこれに準ずる情報の取り扱いについて定めています。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              1. 収集する情報
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、以下の情報を自動的に収集することがあります：
            </p>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>アクセス情報（IPアドレス、ブラウザの種類、OSの種類、参照元URL）</li>
              <li>閲覧したページのURL、閲覧日時</li>
              <li>Cookie およびこれに類する技術を用いて生成された識別子</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              これらの情報は、サービスの改善、統計データの作成、セキュリティの確保、広告配信の最適化のために使用されます。
              なお、当サイトでは会員登録機能がないため、氏名、住所、メールアドレスなどの個人を直接特定できる情報を収集することはありません。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              2. 広告配信について（Google AdSense）
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、第三者配信の広告サービスである Google AdSense（グーグルアドセンス）を利用しています。
              Google AdSense は、ユーザーの興味や関心に基づいた広告を表示するために Cookie を使用します。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Google および Google のパートナーは、当サイトへのアクセス情報や他のサイト（Googleのコンテンツネットワークに加盟するウェブサイト）の情報に基づいて、適切な広告を配信します。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Google がユーザーの Cookie を使用してパーソナライズド広告を配信することについて、ユーザーは
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Googleの広告設定ページ
              </a>
              でオプトアウト（無効化）することができます。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              詳細については、
              <a 
                href="https://policies.google.com/technologies/ads?hl=ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Google の広告ポリシー
              </a>
              および
              <a 
                href="https://policies.google.com/privacy?hl=ja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Google プライバシーポリシー
              </a>
              をご覧ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              3. アクセス解析ツールについて（Google Analytics）
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、サイトの利用状況を把握し、サービス向上のために Google アナリティクスを利用しています。
              Google アナリティクスは、Cookie を使用してユーザーのアクセス情報（訪問回数、滞在時間、閲覧ページなど）を収集します。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              これらのデータは匿名で収集され、個人を特定する情報は含まれません。
              収集されたデータは、Google のプライバシーポリシーに基づいて管理されます。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Google アナリティクスの詳細については、
              <a 
                href="https://marketingplatform.google.com/about/analytics/terms/jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Google アナリティクス利用規約
              </a>
              をご覧ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              4. Cookie について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              Cookie とは、ウェブサイトがユーザーのコンピューターやスマートフォンに保存する小さなテキストファイルです。
              Cookie を使用することで、サイトはユーザーの設定や閲覧履歴を記憶し、より快適なサービスを提供できます。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、以下の目的で Cookie を使用します：
            </p>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>サイトの利用状況の分析</li>
              <li>広告の配信と効果測定</li>
              <li>ユーザー体験の向上</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              ユーザーはブラウザの設定により、Cookie の受け入れを拒否したり、Cookie が保存されたときに通知を受け取るよう設定できます。
              ただし、Cookie を無効にすると、当サイトの一部機能が正しく動作しない場合や、広告が適切に表示されない場合があります。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              5. 個人情報の取り扱い
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、クイズの利用にあたって氏名、住所、電話番号、メールアドレスなどの個人情報を取得することはありません。
              会員登録機能もないため、ユーザーが自ら個人情報を入力する場面はほとんどありません。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              お問い合わせフォームなどで任意にご提供いただいた情報については、以下の目的でのみ使用します：
            </p>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>お問い合わせへの回答</li>
              <li>サービス改善のための参考資料</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              これらの情報を、ユーザーの同意なく第三者に提供することはありません（法令に基づく開示要求がある場合を除く）。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              6. 第三者サービスへの情報提供
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトでは、以下の第三者サービスを利用しており、これらのサービスプロバイダーが独自にユーザー情報を収集する場合があります：
            </p>
            <ul className="mt-3 ml-5 list-disc text-sm leading-relaxed text-gray-700 sm:text-base space-y-1">
              <li>Google LLC（Google AdSense、Google Analytics）</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              これらの第三者サービスによる情報収集と利用については、各サービスのプライバシーポリシーをご確認ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              7. 外部リンクについて
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトには、外部サイトへのリンクが含まれる場合があります。
              リンク先のサイトにおける個人情報の取り扱いについては、当サイトは責任を負いません。
              各サイトのプライバシーポリシーをご確認ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              8. 著作権・商標について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトは、「Fate/Grand Order」の非公式ファンサイトです。
              「Fate」および「Fate/Grand Order」に関する著作権・商標権は、TYPE-MOON、Aniplex Inc. に帰属します。
              当サイトで使用される画像やテキストデータは、Atlas Academy API などの公開されたデータソースを利用しており、権利者の許諾を得て使用しているものではありません。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              権利者様から削除要請があった場合は、速やかに対応いたします。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              9. 免責事項
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトのコンテンツ・情報については、できる限り正確な情報を提供するよう努めていますが、
              その正確性、完全性、有用性、安全性について保証するものではありません。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              当サイトの利用によって生じたいかなる損害（直接的、間接的、結果的な損害を含む）についても、
              当サイトおよび運営者は一切の責任を負いかねます。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              また、当サイトに掲載されているリンク先の外部サイトで発生したトラブルについても、当サイトは責任を負いません。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              10. プライバシーポリシーの変更
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本ポリシーの内容は、法令の改正、サービス内容の変更、その他必要に応じて、予告なく変更する場合があります。
              重要な変更がある場合は、当サイト上で告知いたします。
              変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              ユーザーの皆さまには、定期的に本ページをご確認いただくことをお勧めします。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              11. お問い合わせ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本プライバシーポリシーに関するお問い合わせは、
              <a 
                href="/contact"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                お問い合わせページ
              </a>
              からご連絡ください。
            </p>

            <p className="mt-8 text-xs text-gray-500">
              制定日: 2025年1月1日
              <br />
              最終更新日: 2026年1月21日
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

