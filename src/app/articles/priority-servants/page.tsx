import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGO初心者が優先すべき育成サーヴァント - 低レアから始める攻略法";
const pageDescription =
  "Fate/Grand Order初心者向けに、優先的に育成すべきサーヴァントを紹介。星1〜3の低レアサーヴァントでも十分に戦力になる理由と、効率的な育成手順を解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/priority-servants",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function PriorityServantsArticle() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            初心者向け
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGO初心者が優先すべき育成サーヴァント - 低レアから始める攻略法
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
              Fate/Grand Orderを始めたばかりの頃は、どのサーヴァントを育てればいいか迷うものです。
              実は、星5の高レアサーヴァントよりも、星1〜3の低レアサーヴァントの方が、
              序盤の攻略では重要な戦力になることも多いのです。
              この記事では、初心者が優先的に育成すべきサーヴァントと、その理由を詳しく解説します。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              なぜ低レアサーヴァントが重要なのか
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                「星5サーヴァントの方が強いんじゃないの?」と思うかもしれません。
                確かに最終的なステータスは高レアの方が高いですが、
                低レアサーヴァントには以下のような大きなメリットがあります。
              </p>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-green-900">
                  1. 育成コストが圧倒的に低い
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li>必要な素材の数が少ない</li>
                  <li>必要なQP（お金）が少ない</li>
                  <li>レベル上限も低いため、最大まで育てやすい</li>
                  <li>霊基再臨に必要な素材も集めやすい</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  星5サーヴァントを1体育てる素材で、星1〜3のサーヴァントを5体以上育成できることもあります。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  2. 宝具レベルを上げやすい
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  低レアサーヴァントは入手機会が多く、宝具レベルを5まで上げやすいです。
                  宝具レベル5の星3サーヴァントは、宝具レベル1の星5サーヴァントに匹敵する火力を持つこともあります。
                  特に周回では、宝具レベルが高い低レアの方が安定して活躍します。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                <h3 className="text-base font-bold text-purple-900">
                  3. 優秀なスキルを持つサーヴァントが多い
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  レアリティとスキルの優秀さは必ずしも比例しません。
                  低レアでもNPチャージスキル、攻撃力バフ、無敵・回避など、
                  強力なスキルを持つサーヴァントが数多く存在します。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              優先的に育成すべき星1〜3サーヴァント
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                ここでは、特に初心者におすすめの低レアサーヴァントを紹介します。
                これらのサーヴァントは、序盤から終盤まで長く活躍できる性能を持っています。
              </p>

              <div className="space-y-6 mt-5">
                <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
                  <h3 className="text-base font-bold text-amber-900">
                    アーラシュ（星1・アーチャー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★★】周回の必須級サーヴァント
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> 宝具で自身が戦闘不能になる代わりに超高火力</li>
                    <li>周回1Wave目を宝具で一掃し、次のサーヴァントに交代できる</li>
                    <li>育成コストが最も低く、すぐに戦力になる</li>
                    <li>NP30%チャージスキル持ちで宝具が撃ちやすい</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 最優先。周回効率が劇的に向上します。
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50/30 p-5">
                  <h3 className="text-base font-bold text-red-900">
                    スパルタクス（星1・バーサーカー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★★】万能周回アタッカー
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> NP30%チャージ + HP回復で宝具を撃ちやすい</li>
                    <li>バーサーカーなので全クラスに有利が取れる</li>
                    <li>全体Buster宝具で周回に最適</li>
                    <li>育成コストが最低ランクで即戦力</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 最優先。周回の第2Wave要員として活躍します。
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-5">
                  <h3 className="text-base font-bold text-indigo-900">
                    アンデルセン（星2・キャスター）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★★】最強クラスのサポーター
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> スター生成・クリティカル威力アップ・HP回復</li>
                    <li>星2とは思えない高性能サポートスキル</li>
                    <li>高難易度クエストで星5サポーターに匹敵する活躍</li>
                    <li>育成コストが低く、長く使える</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 最優先。高難易度での生存力が大幅に上がります。
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                  <h3 className="text-base font-bold text-purple-900">
                    ゲオルギウス（星2・ライダー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★☆】鉄壁の壁役
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> 3ターン敵の攻撃を自分に集める「守護騎士」スキル</li>
                    <li>ガッツ（復活）スキルで長時間場に残れる</li>
                    <li>高難易度で味方を守る壁役として優秀</li>
                    <li>低コストで育成でき、すぐに使える</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 高難易度に挑む段階で育成推奨。
                  </p>
                </div>

                <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-5">
                  <h3 className="text-base font-bold text-teal-900">
                    エウリュアレ（星3・アーチャー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★☆】対男性特攻の切り札
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> 男性特攻宝具で対男性ボスに超火力</li>
                    <li>魅了スキルで敵の行動を封じる</li>
                    <li>特定の高難易度クエストで星5を超える活躍</li>
                    <li>Arts宝具でNP効率も良い</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 対男性ボス戦で必須級。ストーリー6章で特に活躍。
                  </p>
                </div>

                <div className="rounded-2xl border border-pink-100 bg-pink-50/30 p-5">
                  <h3 className="text-base font-bold text-pink-900">
                    ダビデ（星3・アーチャー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★☆】パーティ全体を守る支援役
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> パーティ全体に1ターン回避付与</li>
                    <li>敵の攻撃力・防御力を下げるスキル</li>
                    <li>宝具で敵にスキル封印・デバフ付与</li>
                    <li>高難易度で敵の強力な攻撃を回避で無効化できる</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> ストーリー後半・高難易度で重宝します。
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-rose-50/30 p-5">
                  <h3 className="text-base font-bold text-rose-900">
                    クー・フーリン（星3・ランサー）
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    【おすすめ度: ★★★★☆】不死身の生存力
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                    <li><strong>強み:</strong> 回避・ガッツ・HP回復と生存スキル満載</li>
                    <li>「最後まで残って逆転する」ことができる</li>
                    <li>単体宝具で高火力、対アーチャーボス戦に有効</li>
                    <li>育成しやすく、長期戦で真価を発揮</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    <strong>育成の優先度:</strong> 高難易度・ストーリー難所で頼りになる。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              効率的な育成の進め方
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                限られた素材とQPを最大限活用するために、計画的に育成を進めましょう。
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-blue-900">
                  ステップ1: レベル上げを優先
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  まずはレベルを最大（星1は60、星2は65、星3は70）まで上げましょう。
                  種火を集めて、曜日クエストの「極級」を周回するのが効率的です。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-base font-bold text-green-900">
                  ステップ2: スキルレベル4まで上げる
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  スキルレベルは最初4まで上げれば十分です。
                  レベル4までは必要素材が少なく、効果もそれなりに上がります。
                  レベル6以降は素材消費が激しいため、後回しにしましょう。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                <h3 className="text-base font-bold text-purple-900">
                  ステップ3: 霊基再臨を進める
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  霊基再臨でレベル上限が解放され、最終的にスキルも3つ使えるようになります。
                  優先度の高いサーヴァントから、第3再臨まで進めましょう。
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5">
                <h3 className="text-base font-bold text-amber-900">
                  ステップ4: 宝具レベルを上げる
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  同じサーヴァントを入手したら、宝具レベルを上げましょう。
                  周回で使うサーヴァント（アーラシュ、スパルタクスなど）は、
                  宝具レベル5まで上げると敵を確実に倒せるようになります。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              育成の優先順位まとめ
            </h2>
            <div className="mt-4">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-5">
                <h3 className="text-base font-bold text-indigo-900">
                  最優先（すぐに育成すべき）
                </h3>
                <ol className="mt-2 ml-4 list-decimal text-sm text-gray-700 space-y-1">
                  <li>アーラシュ（周回用）</li>
                  <li>スパルタクス（周回用）</li>
                  <li>アンデルセン（サポート役）</li>
                </ol>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-5 mt-4">
                <h3 className="text-base font-bold text-teal-900">
                  高優先（ストーリー進行に合わせて育成）
                </h3>
                <ol className="mt-2 ml-4 list-decimal text-sm text-gray-700 space-y-1">
                  <li>エウリュアレ（対男性ボス用）</li>
                  <li>ゲオルギウス（壁役）</li>
                  <li>クー・フーリン（生存力）</li>
                  <li>ダビデ（支援・回避付与）</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              FGOでは、高レアだから強い、低レアだから弱いということはありません。
              低レアサーヴァントは育成コストが低く、宝具レベルも上げやすいため、
              初心者にとって非常に心強い戦力となります。
            </p>
            <p className="mt-3">
              特にアーラシュ、スパルタクス、アンデルセンの3体は、
              序盤から終盤まで使い続けられる最優秀サーヴァントです。
              まずはこの3体を育成し、その後ストーリー攻略に合わせて
              エウリュアレやクー・フーリンを育てていくのがおすすめです。
            </p>
            <p className="mt-3">
              育成に迷ったら、まずは低レアから始めてみましょう。
              育成コストが低いので失敗してもやり直しがききますし、
              実際に使ってみることで、そのサーヴァントの強さを実感できます。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            クイズでサーヴァントの特性を覚えよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            各サーヴァントのスキルやステータスをクイズで学ぶことで、
            編成や育成の判断がより的確になります。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズ
            </Link>
            <Link
              href="/articles/beginner-guide"
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              初心者ガイド
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
