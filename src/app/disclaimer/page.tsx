import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "免責事項・著作権について";
const pageDescription =
  "Fate/Grand Quiz の免責事項、著作権、二次創作ガイドラインについて。公式との関係性や権利帰属を明記しています。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            免責事項・著作権について
          </h1>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            本サイトの著作権、免責事項、公式との関係性について明記します。
          </p>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8">
          <section className="rounded-2xl border border-red-100 bg-red-50/30 p-6">
            <h2 className="text-lg font-bold text-red-900 sm:text-xl">
              ⚠️ 重要: 非公式ファンサイトです
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                <strong>本サイト「Fate/Grand Quiz」は、個人が運営する非公式のファンサイトです。</strong>
              </p>
              <p>
                TYPE-MOON、Aniplex、DELiGHTWORKS、および株式会社ソニー・ミュージックエンタテインメント、
                その他のFate/Grand Order関連企業・団体とは一切関係がありません。
              </p>
              <p>
                本サイトは、Fate/Grand Orderのファンである個人が、
                作品への愛好と知識の共有を目的として運営する二次創作的なファンサイトです。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl border-b-2 border-indigo-100 pb-2">
              著作権について
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Fate/Grand Order の著作権
                </h3>
                <p className="mt-2">
                  「Fate/Grand Order」およびゲーム内のキャラクター、スキル、宝具、プロフィール、
                  イラスト、音楽、その他すべてのコンテンツの著作権は、
                  <strong>TYPE-MOON / FGO PROJECT</strong> に帰属します。
                </p>
                <p className="mt-2 text-xs text-gray-600">
                  © TYPE-MOON / FGO PROJECT
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  サイト内コンテンツの権利帰属
                </h3>
                <ul className="mt-2 ml-5 list-disc space-y-2">
                  <li>
                    <strong>ゲームデータ（スキル効果、宝具情報、プロフィールテキスト等）:</strong>
                    <br />
                    すべて TYPE-MOON / FGO PROJECT の著作物です。
                    本サイトは、<a
                      href="https://api.atlasacademy.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                    >
                      Atlas Academy API
                    </a> を通じてデータを取得し、
                    情報提供・教育目的で利用しています。
                  </li>
                  <li>
                    <strong>サイト独自のコンテンツ（記事、解説文、UI/UXデザイン等）:</strong>
                    <br />
                    本サイト運営者（Sota Watanabe）に著作権があります。
                  </li>
                  <li>
                    <strong>キャラクターイラスト:</strong>
                    <br />
                    本サイトではキャラクターイラストを直接掲載していません。
                    サーヴァント名とテキスト情報のみを扱っています。
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  データの利用目的と範囲
                </h3>
                <p className="mt-2">
                  本サイトは、Fate/Grand Orderの公開情報を以下の目的で利用しています：
                </p>
                <ul className="mt-2 ml-5 list-disc space-y-1">
                  <li>ファン向けの知識テスト・学習コンテンツの提供</li>
                  <li>サーヴァント情報の整理・検索サポート</li>
                  <li>ゲーム攻略に役立つ情報の提供</li>
                  <li>FGOコミュニティの交流促進</li>
                </ul>
                <p className="mt-3 text-xs text-gray-600">
                  これらの利用は、日本国著作権法第32条に定める「引用」の範囲内、
                  および TYPE-MOON の二次創作ガイドラインを遵守する形で行っています。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl border-b-2 border-indigo-100 pb-2">
              二次創作ガイドラインの遵守
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                本サイトは、TYPE-MOON の公式ガイドラインおよび
                Fate/Grand Order の利用規約を遵守して運営しています。
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="font-semibold text-gray-900">遵守事項</h3>
                <ul className="mt-2 ml-5 list-disc space-y-2">
                  <li>公式との混同を避けるため、非公式であることを明記</li>
                  <li>ゲームデータの不正な改変・捏造は行いません</li>
                  <li>公式の画像素材は直接使用せず、テキスト情報のみを扱います</li>
                  <li>営利目的での運営は行いません（広告収益は運営費に充当）</li>
                  <li>公式の利益を損なう行為は行いません</li>
                  <li>公式からの要請があれば速やかに対応します</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl border-b-2 border-indigo-100 pb-2">
              免責事項
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  情報の正確性について
                </h3>
                <p className="mt-2">
                  本サイトでは、可能な限り正確な情報を提供するよう努めていますが、
                  情報の完全性・正確性・有用性について保証するものではありません。
                  ゲームアップデートやデータ更新のタイミングによって、
                  情報が最新でない場合があります。
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  利用に関する免責
                </h3>
                <p className="mt-2">
                  本サイトの利用により生じたいかなる損害についても、
                  運営者は一切の責任を負いかねます。
                  ゲーム攻略の判断は、ユーザー自身の責任で行ってください。
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  公式サポートについて
                </h3>
                <p className="mt-2">
                  本サイトは非公式サイトのため、Fate/Grand Order 本編に関するサポートは行えません。
                  ゲームプレイに関する質問・問い合わせは、
                  <a
                    href="https://www.fate-go.jp/inquiry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                  >
                    公式サポート
                  </a>
                  へお問い合わせください。
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  リンク先について
                </h3>
                <p className="mt-2">
                  本サイトからリンクされている外部サイトの内容について、
                  運営者は一切の責任を負いません。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl border-b-2 border-indigo-100 pb-2">
              著作権に関するお問い合わせ
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                本サイトのコンテンツが著作権を侵害していると思われる場合、
                または権利者の方からの削除要請がある場合は、
                <Link
                  href="/contact"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  お問い合わせページ
                </Link>
                よりご連絡ください。
                速やかに対応させていただきます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl border-b-2 border-indigo-100 pb-2">
              関連ページ
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                利用規約
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                お問い合わせ
              </Link>
            </div>
          </section>

          <div className="mt-8 rounded-2xl border border-gray-300 bg-gray-100 p-6">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>最終更新日: 2026年2月9日</strong>
              <br />
              本免責事項は、予告なく変更される場合があります。
              定期的にご確認いただくことをお勧めします。
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
