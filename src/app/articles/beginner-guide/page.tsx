import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGO初心者が知っておきたい基礎知識とクイズの活用法";
const pageDescription =
  "Fate/Grand Orderを始めたばかりの初心者マスター向けに、ゲームの基本システムとクイズサイトの活用方法を詳しく解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/beginner-guide",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function BeginnerGuideArticle() {
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
              初心者ガイド
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGO初心者が知っておきたい基礎知識とクイズの活用法
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
            <span>約12分で読めます</span>
          </div>
        </header>

        {/* 著者情報ボックス */}
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
              Fate/Grand Order（FGO）を始めたばかりの初心者マスターの皆さん、ようこそ！
              このガイドでは、FGOの基本的な仕組みと、当クイズサイトを使った効率的な学習方法を紹介します。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. FGOってどんなゲーム？
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                Fate/Grand Orderは、TYPE-MOONの人気作品「Fate」シリーズの世界観をベースにしたスマートフォン向けRPGです。
                プレイヤーは「マスター」として、歴史上・神話上の英雄たちを「サーヴァント」として召喚し、
                人類の未来を守るために戦います。
              </p>
              <p>
                ゲームの魅力は、壮大なストーリー、魅力的なキャラクター、そして戦略性のあるバトルシステムにあります。
                2015年のサービス開始から長期運営されており、膨大なコンテンツが蓄積されています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. 初心者が最初に知っておくべき用語
            </h2>
            <div className="mt-4 space-y-6">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-lg font-bold text-blue-900">
                  サーヴァント（Servant）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  歴史上・神話上の英雄を召喚した存在。各サーヴァントは固有のスキルと宝具を持ち、
                  7つのクラス（セイバー、アーチャー、ランサーなど）に分類されます。
                  レアリティは★1から★5まであり、★の数が多いほど希少です。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-lg font-bold text-green-900">
                  スキル（Skill）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  サーヴァントが使える特殊能力。攻撃力アップ、防御力アップ、回復など様々な効果があります。
                  各サーヴァントは通常3つのスキルを持ち、使用するとクールタイム（再使用までの待機ターン）が発生します。
                  スキルレベルを上げることで効果が強化されます。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                <h3 className="text-lg font-bold text-purple-900">
                  宝具（Noble Phantasm / NP）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  サーヴァントの必殺技。NPゲージを100%まで溜めることで発動でき、
                  強力なダメージや特殊効果を発揮します。宝具には「Quick」「Arts」「Buster」の
                  3種類のカード属性があり、それぞれ特性が異なります。
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
                <h3 className="text-lg font-bold text-amber-900">
                  クラス相性
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  サーヴァントのクラス間には有利不利の関係があります。
                  例えば、セイバーはランサーに有利、ランサーはアーチャーに有利、アーチャーはセイバーに有利という三すくみの関係です。
                  有利なクラスで攻撃すると2倍のダメージ、不利だと半減されます。
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              より詳しい用語解説は
              <Link
                href="/glossary"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                FGO用語集
              </Link>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. 初心者がまず育てるべきサーヴァント
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                FGOを始めたばかりの時期は、どのサーヴァントを育てるべきか迷うかもしれません。
                以下は、初心者におすすめの汎用性の高いサーヴァントです。
              </p>

              <div className="space-y-4 mt-5">
                <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30 p-5">
                  <h3 className="text-base font-bold text-indigo-900">
                    ★1-2のおすすめサーヴァント
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    低レアリティでも優秀なサーヴァントは多数います。
                    特に<strong>アーラシュ</strong>（周回の味方）、<strong>スパルタクス</strong>（低コスト高火力）、
                    <strong>アンデルセン</strong>（優秀なサポーター）などは、後々まで活躍します。
                    育成コストも低いため、初心者のうちから育てておくと便利です。
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5">
                  <h3 className="text-base font-bold text-blue-900">
                    ★3-4のおすすめサーヴァント
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    <strong>★3</strong>: 呪腕のハサン（高難易度で役立つ単体宝具）、エウリュアレ（男性特攻持ち）など<br />
                    <strong>★4</strong>: ヘラクレス（高耐久のアタッカー）、エミヤ（全体宝具の優秀なアーチャー）など
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50/30 p-5">
                  <h3 className="text-base font-bold text-purple-900">
                    フレンドサポートの活用
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    初期は自分のサーヴァントが育っていなくても、
                    強力なフレンドサポートを借りることでストーリーを進められます。
                    特に★5のトップサポーター（キャストリア、光のコヤンスカヤなど）を借りると、
                    攻略が格段に楽になります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. 効率的な素材集めと周回のコツ
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                サーヴァントを育成するには、大量の素材とQP（ゲーム内通貨）が必要です。
                効率的に素材を集めるために、以下のポイントを押さえましょう。
              </p>

              <ul className="ml-5 list-disc space-y-2 text-gray-700">
                <li>
                  <strong>イベントを優先する</strong>: 
                  定期的に開催されるイベントでは、通常のクエストよりも効率よく素材が手に入ります。
                  初心者でも参加できるイベントが多いので、積極的に挑戦しましょう。
                </li>
                <li>
                  <strong>フリークエストの周回</strong>: 
                  ストーリーをある程度進めると、素材が落ちるフリークエストが解放されます。
                  必要な素材が落ちるクエストを繰り返しプレイ（周回）することで、育成素材を集めます。
                </li>
                <li>
                  <strong>種火の確保</strong>: 
                  サーヴァントのレベル上げには「種火（経験値アイテム）」が必要です。
                  種火集めクエストや、イベントの報酬で入手できます。
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              5. 初心者がクイズサイトを活用する方法
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                このクイズサイトは、FGOを始めたばかりの初心者にとっても役立つツールです。
                以下のような活用方法があります。
              </p>

              <div className="space-y-4 mt-5">
                <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                  <h3 className="text-base font-bold text-green-900">
                    サーヴァントの特徴を覚える
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    スキルクイズや宝具クイズに挑戦することで、各サーヴァントの特徴を自然と覚えられます。
                    「このスキル効果は誰のもの？」と考えることで、サーヴァントの役割や強みが理解できるようになります。
                    最初は間違えても大丈夫。解説を読むことで、効率的に知識が身につきます。
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
                  <h3 className="text-base font-bold text-amber-900">
                    育成の優先順位を決める
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    クイズで知ったサーヴァントの中で、「このスキル構成、強そうだな」「この宝具、使いやすそう」と思ったものを
                    優先的に育てるのも一つの方法です。クイズを通じて、自分に合ったサーヴァントを見つけましょう。
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                  <h3 className="text-base font-bold text-blue-900">
                    ストーリーの予習・復習に
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    プロフィールクイズでは、サーヴァントの背景設定や性格が理解できます。
                    ストーリーを読む前にクイズでキャラクターを知っておくと、より深く物語を楽しめます。
                    また、読み終わったストーリーの復習にも役立ちます。
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                  <h3 className="text-base font-bold text-purple-900">
                    1日1問の習慣づけ
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    FGOの知識を増やすには、継続が大切です。
                    通勤・通学の合間や、ゲームのAP（行動力）回復待ちの時間に、1日1問だけでもクイズに挑戦してみましょう。
                    少しずつでも続けることで、自然とサーヴァントの知識が身につきます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              6. 初心者によくある質問
            </h2>
            <div className="mt-4 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50/30 p-5">
                <h3 className="text-base font-bold text-gray-900">
                  Q: ガチャは引くべき？
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  A: 初心者のうちは、欲しいサーヴァントが出るピックアップガチャまで聖晶石を貯めるのがおすすめです。
                  低レアリティのサーヴァントでも十分クリアできる設計なので、焦らずに進めましょう。
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50/30 p-5">
                <h3 className="text-base font-bold text-gray-900">
                  Q: ストーリーは全部読むべき？
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  A: FGOの魅力の一つはストーリーです。スキップもできますが、
                  できれば最初から読むことをおすすめします。特に第1部第6章以降は評価が高く、
                  多くのプレイヤーが「ここから面白くなる」と感じています。
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50/30 p-5">
                <h3 className="text-base font-bold text-gray-900">
                  Q: 高難易度クエストに勝てない
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  A: まずはサーヴァントのレベル上げとスキルレベル上げを優先しましょう。
                  また、クラス相性を意識した編成を組むことが重要です。
                  攻略情報を調べたり、強力なフレンドサポートを借りることも有効です。
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              その他の質問は
              <Link
                href="/faq"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 mx-1"
              >
                よくある質問ページ
              </Link>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              FGOは長く楽しめるゲームですが、最初は覚えることが多くて大変かもしれません。
              焦らず、自分のペースで進めていくことが大切です。
            </p>
            <p className="mt-3">
              このクイズサイトは、FGOの世界をより深く理解するための補助ツールとして活用してください。
              楽しみながら知識を増やし、FGOマスターとしての第一歩を踏み出しましょう！
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            さっそくクイズに挑戦してみよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            初心者でも楽しめるクイズモードを用意しています。間違えても大丈夫、解説を読んで学びましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズ
            </Link>
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              プロフィールクイズ
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              宝具クイズ
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/guide"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              利用ガイド
            </Link>
            <Link
              href="/glossary"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              用語集
            </Link>
            <Link
              href="/articles"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              記事一覧
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
