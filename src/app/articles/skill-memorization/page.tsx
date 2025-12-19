import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "サーヴァントのスキルを覚えるための実践的アプローチ";
const pageDescription =
  "FGOのサーヴァントスキルを効率的に記憶するための方法論と、実戦で役立つスキル知識の整理術を詳しく解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/skill-memorization",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function SkillMemorizationArticle() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link href="/articles" className="hover:text-indigo-600">
              記事一覧
            </Link>
            <span>›</span>
            <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">
              学習法
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            サーヴァントのスキルを覚えるための実践的アプローチ
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2025-12-19">2025年12月19日</time>
            <span>•</span>
            <span>約7分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <p className="text-lg text-gray-700">
              FGOには数百体ものサーヴァントが存在し、それぞれが固有のスキル構成を持っています。これらすべてを覚えるのは大変ですが、効率的な記憶法を実践することで、スキル知識を体系的に習得できます。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. スキルを「カテゴリー」で整理する
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                スキル効果は大きく分けて、攻撃強化系・防御強化系・弱体付与系・回復系・特殊効果系に分類できます。この分類を意識することで、スキル効果を体系的に理解できるようになります。
              </p>

              <div className="space-y-3 mt-5">
                <div className="rounded-2xl border border-red-100 bg-red-50/30 p-4">
                  <h3 className="text-base font-bold text-red-900">
                    攻撃強化系スキル
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    攻撃力アップ、宝具威力アップ、クリティカル威力アップ、特攻効果など。アタッカーサーヴァントの主力スキルです。
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-4">
                  <h3 className="text-base font-bold text-blue-900">
                    防御強化系スキル
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    防御力アップ、無敵付与、回避付与、ガッツ付与など。高難易度クエストで重宝するスキル群です。
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-4">
                  <h3 className="text-base font-bold text-purple-900">
                    弱体付与系スキル
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    防御力ダウン、攻撃力ダウン、スキル封印、宝具封印など。敵を弱体化させて戦闘を有利に進めます。
                  </p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-green-50/30 p-4">
                  <h3 className="text-base font-bold text-green-900">
                    回復・サポート系スキル
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    HP回復、弱体解除、NP付与、スター獲得など。味方全体をサポートする効果が中心です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. 「役割」からスキル構成を推測する
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                サーヴァントの役割（アタッカー、サポーター、タンク等）を理解することで、スキル構成をある程度推測できるようになります。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5">
                アタッカー型サーヴァント
              </h3>
              <p>
                攻撃力アップ、宝具威力アップ、クリティカル関連スキルを持つことが多いです。自身の火力を最大化するスキル構成が特徴です。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5">
                サポーター型サーヴァント
              </h3>
              <p>
                味方全体への強化バフ、NP 付与、スター生成などのスキルを持ちます。周回でも高難易度でも重宝される役割です。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-5">
                耐久・タンク型サーヴァント
              </h3>
              <p>
                ターゲット集中、無敵・回避付与、ガッツ付与などの防御系スキルが充実しています。パーティの生存率を高める重要な役割を担います。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. 実戦での使用頻度から優先順位をつける
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                すべてのサーヴァントのスキルを一度に覚えようとするのは非効率です。実戦でよく使うサーヴァントから優先的に記憶していくことで、実用的な知識が身につきます。
              </p>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-amber-900">
                  優先度1: 自分が所持しているサーヴァント
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  実際に使用しているサーヴァントのスキルは、自然と記憶に残りやすいものです。まずは自分の所持サーヴァントから確実に覚えましょう。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mt-3">
                <h3 className="text-base font-bold text-blue-900">
                  優先度2: 周回でよく使う高人気サーヴァント
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  キャストリア、光のコヤンスカヤ、オベロンなど、多くのマスターが使用する人気サポーターのスキルは覚えておくと便利です。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-3">
                <h3 className="text-base font-bold text-green-900">
                  優先度3: 特徴的なスキルを持つサーヴァント
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  独特なスキル効果や固有スキルを持つサーヴァントは、記憶に残りやすく、クイズでも正答しやすい傾向があります。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. スキル名とスキル効果を結びつける
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                スキル名には、そのスキルの効果を示唆するヒントが隠されていることが多くあります。スキル名の意味を理解することで、効果を推測しやすくなります。
              </p>

              <p className="mt-4">
                例えば、「カリスマ」系のスキルは味方全体の攻撃力アップ、「直感」系のスキルはスター獲得、「心眼」系のスキルは回避やクリティカル関連、といった傾向があります。
              </p>

              <p className="mt-4">
                また、サーヴァント固有のスキル名は、その英霊の伝承や性格を反映していることが多いため、設定背景と合わせて覚えることで、より記憶に定着しやすくなります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              5. 定期的な復習とクイズでの実践
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                記憶を定着させるには、定期的な復習が欠かせません。このサイトのスキルクイズを活用して、学んだ知識を定期的に確認しましょう。
              </p>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-indigo-900">
                  推奨学習サイクル
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span>1.</span>
                    <span>
                      毎日5〜10問のスキルクイズに挑戦して、記憶の鮮度を保つ
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>2.</span>
                    <span>
                      間違えた問題は、ゲーム内でそのサーヴァントのスキルを確認
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>3.</span>
                    <span>
                      週に一度、特定のクラスやレアリティに絞って集中的に復習
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>4.</span>
                    <span>
                      実戦で新しいサーヴァントを使う際は、スキル効果を意識的に確認
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              スキル記憶は一朝一夕で完成するものではありませんが、体系的なアプローチと継続的な実践により、着実に知識を積み重ねることができます。
            </p>
            <p className="mt-3">
              焦らず、楽しみながら、自分のペースで学習を進めていきましょう。このサイトがその手助けになれば幸いです。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            スキルクイズで実践してみよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            学んだ記憶法をスキルクイズで実際に試してみましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズを始める
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
