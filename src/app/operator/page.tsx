import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "運営者情報";
const pageDescription =
  "Fate/Grand Quizの運営者情報とサイトの運営方針について。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/operator",
});

export default function OperatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
          <section className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              運営者情報
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイト「Fate/Grand Quiz」の運営者情報および連絡先をご案内します。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              サイト名
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              Fate/Grand Quiz（フェイト・グランド・クイズ）
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              運営者
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              Sota Watanabe（個人運営）
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトは個人が趣味で運営する非営利の二次創作ファンサイトです。
              法人や企業の運営ではありません。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              連絡先
            </h2>
            <div className="mt-2 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <div>
                <strong className="font-semibold">X（旧Twitter）:</strong>
                <br />
                <a
                  href="https://x.com/fgqproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  @fgqproject
                </a>
                <br />
                <span className="text-sm text-gray-600">
                  ※ ご意見・感想・不具合報告等はDMまたはメンションでお寄せください
                </span>
              </div>
            </div>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              サイトの運営目的
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              「Fate/Grand Order」の世界をより深く楽しむための非公式ファンサイトとして運営しています。
              サーヴァントに関する知識をクイズ形式で確認できる場を提供し、
              FGOファン同士の交流やコミュニティの活性化に貢献することを目的としています。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              免責事項
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトは非公式のファンサイトであり、TYPE-MOON、Aniplex、DELiGHTWORKS、
              およびその他の関連企業とは一切関係ありません。
              <br />
              <br />
              「Fate/Grand Order」および関連する商標・著作権は、TYPE-MOONおよびFGO PROJECTに帰属します。
              本サイトに掲載されているゲーム画像、テキスト等の著作権は、各権利者に帰属します。
              <br />
              <br />
              本サイトのコンテンツは、著作権法に基づく引用の範囲内で利用しています。
              問題がある場合は、上記連絡先までご連絡ください。速やかに対応いたします。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              データソース
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトのサーヴァントデータは、
              <a
                href="https://atlasacademy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                Atlas Academy
              </a>
              が提供するAPIを利用しています。
              Atlas Academyは、Fate/Grand Orderのゲームデータを整理・公開している非公式プロジェクトです。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              広告について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトでは、サーバー運営費用を賄うために Google AdSense
              による広告を掲載しています。
              広告収益は、サイトの維持・改善のために使用されます。
              <br />
              <br />
              広告に関する詳細は、
              <a
                href="/privacy"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              著作権・知的財産権について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトのオリジナルコンテンツ（サイトデザイン、プログラムコード、オリジナル文章等）の著作権は運営者に帰属します。
              <br />
              <br />
              ゲーム「Fate/Grand Order」に関連する画像、テキスト、キャラクター名、スキル名、宝具名等の著作権・商標権は、
              TYPE-MOON / FGO PROJECT に帰属します。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              個人情報の取り扱い
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              本サイトでは、ユーザー登録機能がなく、個人を特定できる情報を収集していません。
              Google Analytics および Google AdSense を利用したアクセス解析と広告配信を行っていますが、
              これらは匿名で処理されます。
              <br />
              <br />
              詳しくは
              <a
                href="/privacy"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                プライバシーポリシー
              </a>
              をご覧ください。
            </p>

            <h2 className="mt-8 text-lg font-semibold text-gray-900">
              お問い合わせ対応について
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
              個人運営のため、すべてのお問い合わせに個別の返信ができない場合があります。
              また、回答までにお時間をいただく場合があります。あらかじめご了承ください。
            </p>

            <p className="mt-8 text-xs text-gray-500">
              最終更新日: 2026年1月13日
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
