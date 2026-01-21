import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "利用規約";
const pageDescription =
  "Fate/Grand Quizの利用規約です。サービスをご利用いただく際の注意事項や禁止行為について説明しています。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/terms",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function TermsPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            TERMS OF SERVICE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            利用規約
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Fate/Grand Quizをご利用いただく際の規約です。
          </p>
        </header>

        <div className="mt-10 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第1条（本規約の適用）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                本利用規約（以下「本規約」）は、Fate/Grand Quiz（以下「当サイト」）が提供するすべてのサービス（以下「本サービス」）の利用条件を定めるものです。
              </p>
              <p>
                ユーザーの皆さまには、本規約に従って本サービスをご利用いただきます。
              </p>
              <p>
                当サイトを利用することにより、ユーザーは本規約のすべての内容に同意したものとみなされます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第2条（サービスの内容）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、「Fate/Grand Order」に関するクイズサービスおよび関連情報を提供します。
              </p>
              <p>
                本サービスは無料で提供されますが、インターネット接続にかかる通信費用等はユーザーの負担となります。
              </p>
              <p>
                当サイトは、事前の通知なくサービス内容の変更、追加、削除を行うことがあります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第3条（禁止事項）
            </h2>
            <div className="mt-4">
              <p className="mb-3">
                ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセス、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当サイトが許諾しない方法での営利目的での利用</li>
                <li>スクレイピングやボット等を使用した自動的なアクセス</li>
                <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第4条（知的財産権）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトのオリジナルコンテンツ（サイトデザイン、プログラムコード、オリジナル文章等）の著作権は、運営者に帰属します。
              </p>
              <p>
                「Fate/Grand Order」に関連する画像、テキスト、キャラクター名、スキル名、宝具名等の著作権・商標権は、TYPE-MOON / FGO PROJECT に帰属します。
              </p>
              <p>
                ユーザーは、当サイトのコンテンツを、当サイトの利用以外の目的で複製、転載、配布、販売等することはできません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第5条（サービスの停止・中断）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-700 mt-3">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
              </ul>
              <p className="mt-3">
                当サイトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第6条（免責事項）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、本サービスに関して、その完全性、正確性、有用性、安全性等について、いかなる保証も行いません。
              </p>
              <p>
                当サイトは、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
                ただし、本サービスに関する当サイトとユーザーとの間の契約が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
              </p>
              <p>
                当サイトは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第7条（サービス内容の変更等）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第8条（利用規約の変更）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              </p>
              <p>
                変更後の本規約は、当サイトに掲載したときから効力を生じるものとします。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第9条（個人情報の取扱い）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                当サイトは、本サービスの利用によって取得する個人情報については、当サイトの
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
                >
                  プライバシーポリシー
                </Link>
                に従い適切に取り扱うものとします。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              第10条（準拠法・裁判管轄）
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。
              </p>
              <p>
                本サービスに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </div>
          </section>

          <section className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              制定日: 2025年1月1日
              <br />
              最終更新日: 2026年1月21日
            </p>
          </section>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            ご不明な点がございましたら、
            <Link
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
            >
              お問い合わせ
            </Link>
            からご連絡ください。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/operator"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              運営者情報
            </Link>
            <Link
              href="/"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              トップページ
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
