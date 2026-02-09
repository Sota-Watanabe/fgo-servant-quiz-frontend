import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGOのクラス相性を完全解説 - 有利クラスで戦う重要性";
const pageDescription =
  "Fate/Grand Orderのクラス相性システムを詳しく解説。基本の三すくみから特殊クラスまで、クラス相性を理解して効率的にバトルを進めましょう。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/class-advantage",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function ClassAdvantageArticle() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            システム解説
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGOのクラス相性を完全解説 - 有利クラスで戦う重要性
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">執筆:</span>
              <Link href="/operator" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sota Watanabe
              </Link>
            </div>
            <span className="text-gray-400">|</span>
            <time dateTime="2026-01-21">公開: 2026年1月21日</time>
            <span className="text-gray-400">|</span>
            <span>約10分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-lg">SW</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Sota Watanabe</div>
              <div className="mt-1 text-xs text-gray-600 leading-relaxed">
                FGOプレイヤー歴9年。サーヴァントの知識を深めるためにこのサイトを開設。
                記事執筆とサイト運営を一人で行っています。
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <p className="text-lg text-gray-700">
              Fate/Grand Orderにおいて、クラス相性は戦闘の勝敗を大きく左右する最重要システムです。
              相性有利なクラスで戦えばダメージが2倍、不利なクラスでは半減という大きな差が生まれます。
              この記事では、クラス相性の仕組みを基礎から応用まで徹底的に解説します。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. 基本の三すくみ（三騎士クラス）
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                FGOのクラス相性は、「セイバー」「アーチャー」「ランサー」の三騎士クラスによる三すくみが基本となります。
              </p>
              <div className="rounded-2xl border border-red-100 bg-red-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-red-900">
                  セイバー（剣士）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> ランサー（槍兵）</li>
                  <li><strong className="text-red-700">不利:</strong> アーチャー（弓兵）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  近接戦闘に優れた騎士。高いHP・攻撃力を持ち、バランスの取れたクラスです。
                  対ランサー戦では2倍のダメージを与え、0.5倍のダメージしか受けません。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-base font-bold text-green-900">
                  アーチャー（弓兵）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> セイバー（剣士）</li>
                  <li><strong className="text-red-700">不利:</strong> ランサー（槍兵）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  遠距離攻撃を得意とするクラス。スター集中度が高く、クリティカルを狙いやすい特性を持ちます。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  ランサー（槍兵）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> アーチャー（弓兵）</li>
                  <li><strong className="text-red-700">不利:</strong> セイバー（剣士）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  スター生成に優れたクラス。クリティカルスターを稼ぎやすく、パーティの火力支援に貢献します。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. 四騎クラスの相性関係
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                「ライダー」「キャスター」「アサシン」「バーサーカー」の四騎クラスも、独自の相性関係を持ちます。
              </p>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-purple-900">
                  ライダー（騎兵）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> キャスター（魔術師）</li>
                  <li><strong className="text-red-700">不利:</strong> アサシン（暗殺者）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  NP効率が高く、宝具を連発しやすいクラス。周回編成で重宝されます。
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-5">
                <h3 className="text-base font-bold text-indigo-900">
                  キャスター（魔術師）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> アサシン（暗殺者）</li>
                  <li><strong className="text-red-700">不利:</strong> ライダー（騎兵）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  魔術に秀でたクラス。サポート能力に優れたサーヴァントが多く、高難易度での支援役として活躍します。
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
                <h3 className="text-base font-bold text-amber-900">
                  アサシン（暗殺者）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> ライダー（騎兵）</li>
                  <li><strong className="text-red-700">不利:</strong> キャスター（魔術師）</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  高いスター発生率を持ち、クリティカルパーティの核となるクラス。
                </p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50/30 p-5">
                <h3 className="text-base font-bold text-red-900">
                  バーサーカー（狂戦士）
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong className="text-green-700">有利:</strong> 全クラス（ルーラー・フォーリナーを除く）</li>
                  <li><strong className="text-red-700">不利:</strong> 全クラスから弱点を突かれる</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  すべてのクラスに対して1.5倍のダメージを与えますが、逆に全クラスから2倍のダメージを受けます。
                  攻撃的だが防御面に不安がある諸刃の剣のようなクラスです。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. エクストラクラスの特殊な相性
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                ルーラー、アヴェンジャー、ムーンキャンサー、アルターエゴ、フォーリナーなどのエクストラクラスは、
                通常のクラス相性とは異なる特殊な相性関係を持ちます。
              </p>

              <div className="space-y-4 mt-5">
                <div className="rounded-2xl border border-yellow-100 bg-yellow-50/30 p-5">
                  <h3 className="text-base font-bold text-yellow-900">
                    ルーラー（裁定者）
                  </h3>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong className="text-green-700">有利:</strong> ムーンキャンサー</li>
                    <li><strong className="text-red-700">不利:</strong> アヴェンジャー</li>
                    <li>基本7クラスからのダメージを0.5倍に軽減（バーサーカーを除く）</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    耐久力に優れたクラス。高難易度クエストでのタンク役として重宝されます。
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gray-100/30 p-5">
                  <h3 className="text-base font-bold text-gray-900">
                    アヴェンジャー（復讐者）
                  </h3>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong className="text-green-700">有利:</strong> ルーラー</li>
                    <li><strong className="text-red-700">不利:</strong> ムーンキャンサー</li>
                    <li>被ダメージが1.1倍になる代わりに、高いクリティカル威力を持つ</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-pink-100 bg-pink-50/30 p-5">
                  <h3 className="text-base font-bold text-pink-900">
                    ムーンキャンサー
                  </h3>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong className="text-green-700">有利:</strong> アヴェンジャー</li>
                    <li><strong className="text-red-700">不利:</strong> ルーラー</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-5">
                  <h3 className="text-base font-bold text-teal-900">
                    アルターエゴ
                  </h3>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong className="text-green-700">有利:</strong> 騎・術・殺・狂に1.5倍</li>
                    <li><strong className="text-red-700">不利:</strong> 剣・弓・槍から1.5倍のダメージ</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    複数のクラスに有利を取れる万能型。編成の柔軟性が高いクラスです。
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-5">
                  <h3 className="text-base font-bold text-purple-900">
                    フォーリナー（降臨者）
                  </h3>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong className="text-green-700">有利:</strong> バーサーカー（2倍）</li>
                    <li><strong className="text-red-700">不利:</strong> フォーリナー同士（2倍）</li>
                    <li>基本7クラスからのダメージを0.5倍に軽減</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    バーサーカーに強く、基本クラスからの被ダメージも軽減される耐久性の高いクラス。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. クラス相性を活かした戦略
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                クラス相性を理解することで、クエスト攻略がはるかに楽になります。
                以下のポイントを押さえましょう。
              </p>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-green-900">
                  周回編成での活用
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  フリークエストや素材集めの周回では、敵のクラスに有利なアタッカーを編成することで、
                  安定した火力を確保できます。3ウェーブすべてで有利クラスを揃えられれば理想的です。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  高難易度での重要性
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  高難易度クエストでは、不利クラスで挑むと被ダメージが激増し、すぐに壊滅してしまいます。
                  必ず有利クラスまたは等倍クラスで編成を組み、被ダメージを抑えることが攻略の鍵です。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                <h3 className="text-base font-bold text-purple-900">
                  バーサーカーの使いどころ
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  バーサーカーは全クラスに有利を取れるため、周回では非常に便利です。
                  ただし被ダメージも増えるため、高難易度では慎重に使う必要があります。
                  短期決戦や、サポーターで守りながら運用するのが基本です。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              クラス相性は、FGOの戦闘システムの根幹をなす重要な要素です。
              相性有利なクラスで戦うだけで、ダメージ効率が劇的に向上し、攻略難易度が大きく下がります。
            </p>
            <p className="mt-3">
              最初は覚えることが多く感じるかもしれませんが、実戦で使っていくうちに自然と身につきます。
              まずは基本の三すくみと、バーサーカーの特性を押さえておきましょう。
            </p>
            <p className="mt-3">
              クイズサイトでサーヴァントのクラスを覚えながら、実戦でクラス相性を意識することで、
              FGOの戦略性をより深く楽しめるようになります。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            クイズでクラスごとのサーヴァントを覚えよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            各クラスのサーヴァントをクイズで学ぶことで、実戦での編成がスムーズになります。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズ
            </Link>
            <Link
              href="/glossary"
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              用語集で復習
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="/articles"
              className="text-sm text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
