import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "宝具の背景設定と神話・歴史との関係性";
const pageDescription =
  "各サーヴァントの宝具が持つ歴史的・神話的背景と、それがFGOでどのように表現されているかを詳しく解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/noble-phantasm-lore",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function NoblePhantasmLoreArticle() {
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
              設定解説
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            宝具の背景設定と神話・歴史との関係性
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2025-12-19">2025年12月19日</time>
            <span>•</span>
            <span>約10分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <p className="text-lg text-gray-700">
              FGOの宝具は、単なる強力な攻撃技ではありません。それぞれの宝具には、神話や伝説、歴史上の逸話に基づいた深い背景設定があります。この記事では、宝具が持つ意味と、それがゲーム内でどのように表現されているかを探ります。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. 宝具とは何か
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                宝具（Noble
                Phantasm）は、サーヴァントが生前に使用していた武器や能力、あるいはその英雄譚そのものが具現化したものです。単なる武器ではなく、その英霊の「象徴」であり、「伝説の結晶」と言えます。
              </p>
              <p className="mt-3">
                例えば、アーサー王の聖剣エクスカリバーは、王権の正統性の証明であり、騎士道の理想を体現した存在です。このように、宝具はその英霊の本質や信念を具現化したものとなっています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. 宝具の種別と意味
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                宝具には「対人」「対軍」「対城」「対界」などの種別が設定されています。これは単に攻撃範囲を示すだけでなく、その宝具の規模や性質、使用された場面を反映しています。
              </p>

              <div className="space-y-3 mt-5">
                <div className="rounded-2xl border border-red-100 bg-red-50/30 p-4">
                  <h3 className="text-base font-bold text-red-900">対人宝具</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    一対一の戦闘で威力を発揮する宝具。剣術の奥義や暗殺技など、個人戦闘に特化した伝説が多い。
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/30 p-4">
                  <h3 className="text-base font-bold text-orange-900">
                    対軍宝具
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    軍団規模の敵を相手にした伝説から生まれた宝具。大規模な戦闘での活躍が元になっていることが多い。
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-4">
                  <h3 className="text-base font-bold text-purple-900">
                    対城宝具
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    城や要塞を破壊した伝説に基づく宝具。攻城戦での偉業が宝具化したもの。
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-4">
                  <h3 className="text-base font-bold text-indigo-900">
                    対界宝具
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    世界そのものに影響を与えるレベルの超越的な宝具。神話級の力を持つ英霊が使用する。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. 宝具ランクの意味
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                宝具にはE~EXまでのランクが設定されており、これは単純な威力だけでなく、その宝具の「神秘性」や「伝説としての重み」を表します。
              </p>
              <p className="mt-3">
                A+やA++といった「+」の表記は、特定の条件下でランクが上昇することを示しています。例えば、対竜特攻を持つ宝具なら、相手が竜の場合にランクが上がる、といった具合です。
              </p>
              <p className="mt-3">
                EXランクは「測定不能」を意味し、通常のランク付けでは評価できない特殊な性質を持つ宝具に与えられます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. 宝具名の言語的特徴
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                宝具名は、そのサーヴァントの出身地域や時代を反映した言語で名付けられています。これは世界観の深みを与えると同時に、プレイヤーに文化的背景を伝える役割を果たしています。
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-blue-900">
                  ラテン語・ギリシャ語系
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  古代ローマやギリシャの英雄は、しばしばラテン語やギリシャ語の宝具名を持ちます。例：「Enuma
                  Elish」「Excalibur」など。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-3">
                <h3 className="text-base font-bold text-green-900">
                  日本語系
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  日本の英霊は、日本語の宝具名を持つことが多く、漢字やひらがなで表記されます。例：「無限の剣製」「燕返し」など。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5 mt-3">
                <h3 className="text-base font-bold text-purple-900">
                  英語・フランス語系
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  中世ヨーロッパや近代の英雄は、英語やフランス語の宝具名を持つことがあります。例：「La
                  Pucelle」など。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              5. 偽名宝具と真名解放
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                一部のサーヴァントは、真名を隠すために偽名宝具を使用します。これは、真名が判明することでの弱点露呈を防ぐための戦術です。
              </p>
              <p className="mt-3">
                真名解放は、サーヴァントが自らの正体を明かし、全力を出すことを意味します。ストーリー上の重要な局面で行われることが多く、物語のクライマックスを演出します。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              6. 複合宝具とその意味
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                複数の宝具を持つサーヴァントや、宝具が複数の効果を持つケースもあります。これは、その英雄が複数の伝説的武器や能力を持っていたことを反映しています。
              </p>
              <p className="mt-3">
                例えば、ギルガメッシュの「王の財宝（ゲート・オブ・バビロン）」は無数の宝具を格納する宝具であり、それ自体が概念的な宝具となっています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              宝具は、単なるゲーム内の攻撃技ではなく、その英霊の「生きた証」であり、「伝説の具現」です。宝具の背景を知ることで、サーヴァントへの理解がより深まり、FGOの世界観をより豊かに楽しめるようになります。
            </p>
            <p className="mt-3">
              宝具クイズに挑戦する際は、ぜひこの記事で学んだ知識を活かして、宝具名や種別、ランクから持ち主を推理してみてください。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            宝具クイズで知識を試そう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            学んだ宝具の知識を、実際のクイズで活かしてみましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              宝具クイズを始める
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border-2 border-pink-600 px-5 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
