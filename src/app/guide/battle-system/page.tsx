import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGO戦闘システム完全ガイド - コマンドカード・宝具・スキルの使い方";
const pageDescription =
  "Fate/Grand Orderの戦闘システムを徹底解説。コマンドカードの仕組み、クリティカルスター、NPゲージ、バフ・デバフ、カードチェーン、Braveチェーンなど、戦闘で必要な知識を網羅的に説明します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/guide/battle-system",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function BattleSystemGuidePage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            BATTLE GUIDE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGO戦闘システム完全ガイド
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            コマンドカード、宝具、スキル、バフ・デバフなど、<br />
            FGOの戦闘で必要な知識を体系的に解説します。
          </p>
        </header>

        {/* 導入セクション */}
        <section className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              📖 このガイドについて
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                FGOの戦闘システムは、一見シンプルですが、実は非常に奥深い戦略性を持っています。
                コマンドカードの選択、スキルのタイミング、宝具の使い方など、様々な要素を理解し組み合わせることで、
                難関クエストも攻略できるようになります。
              </p>
              <p>
                このガイドでは、初心者が知っておくべき基本から、上級者向けの応用テクニックまで、
                戦闘システムの全体像を体系的に解説します。実戦ですぐに活用できる具体的な情報を中心に説明していきます。
              </p>
            </div>
          </div>
        </section>

        {/* 目次 */}
        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            目次
          </h2>
          <nav className="mt-4 space-y-2">
            <ol className="list-decimal list-inside text-sm sm:text-base text-gray-700 space-y-1">
              <li><a href="#command-cards" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">コマンドカードの基本</a></li>
              <li><a href="#card-types" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">3種類のカードタイプ（Buster・Arts・Quick）</a></li>
              <li><a href="#card-chain" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">カードチェーンとボーナス効果</a></li>
              <li><a href="#brave-chain" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">Braveチェーン（同一サーヴァント連続攻撃）</a></li>
              <li><a href="#critical" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">クリティカルスターとクリティカル攻撃</a></li>
              <li><a href="#noble-phantasm" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">宝具（ノーブルファンタズム）の使い方</a></li>
              <li><a href="#skills" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">スキルの種類と効果的な使用タイミング</a></li>
              <li><a href="#buff-debuff" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">バフとデバフの仕組み</a></li>
              <li><a href="#attack-order" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">攻撃順序と戦略</a></li>
              <li><a href="#advanced-tips" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">上級者向けテクニック</a></li>
            </ol>
          </nav>
        </section>

        {/* コマンドカードの基本 */}
        <section id="command-cards" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            1. コマンドカードの基本
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              FGOの戦闘は「コマンドカード」を選択することで進行します。
              毎ターン、参加している全サーヴァントのカード（各5枚）の中から5枚がランダムに配られ、
              そのうち3枚を選んで攻撃を行います。
            </p>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-900">
                コマンドカードの基本ルール
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>各サーヴァントは5枚のコマンドカード（Buster×2、Arts×2、Quick×1が基本構成）を持つ</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>毎ターン、場にいる全サーヴァントのカードからランダムに5枚が配られる</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>3枚のカードを選択して攻撃を実行（順番も重要）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>1番目に選んだカードの種類によって、全体にボーナス効果が発生</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* カードタイプ */}
        <section id="card-types" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            2. 3種類のカードタイプ
          </h2>
          <div className="mt-6 space-y-6">
            {/* Buster */}
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50/30 p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-red-700">
                🔴 Buster（バスター）- 攻撃カード
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>特徴：</strong>高いダメージを与えることに特化したカード。NPゲージの獲得量は少ないが、純粋な火力が最も高い。
                </p>
                <p>
                  <strong>1番目に選ぶと：</strong>全体の攻撃力が1.5倍になる（Busterチェーン）
                </p>
                <p>
                  <strong>向いている戦略：</strong>短期決戦、Wave攻略、高火力アタッカー運用
                </p>
                <p className="text-xs text-gray-600">
                  ※ 例：ギルガメッシュ、アルジュナオルタなどBuster宝具持ちのサーヴァントと相性が良い
                </p>
              </div>
            </div>

            {/* Arts */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-blue-700">
                🔵 Arts（アーツ）- NPゲージ獲得カード
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>特徴：</strong>NPゲージを効率的に獲得できるカード。ダメージは控えめだが、宝具を早く使えるようになる。
                </p>
                <p>
                  <strong>1番目に選ぶと：</strong>全体のNP獲得量が増加する（Artsチェーン）
                </p>
                <p>
                  <strong>向いている戦略：</strong>宝具回転率重視、長期戦、Arts システムパーティ
                </p>
                <p className="text-xs text-gray-600">
                  ※ 例：キャストリア、玉藻の前などArts支援系サーヴァントや、アルトリア・キャスターなどと相性が良い
                </p>
              </div>
            </div>

            {/* Quick */}
            <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-white to-green-50/30 p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-green-700">
                🟢 Quick（クイック）- スター獲得カード
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
                <p>
                  <strong>特徴：</strong>クリティカルスターを多く生成できるカード。ダメージもNP獲得量も控えめだが、スター供給に優れる。
                </p>
                <p>
                  <strong>1番目に選ぶと：</strong>全体のスター発生率が上昇する（Quickチェーン）
                </p>
                <p>
                  <strong>向いている戦略：</strong>クリティカル戦略、連続攻撃、Quick システムパーティ
                </p>
                <p className="text-xs text-gray-600">
                  ※ 例：スカサハ＝スカディ、沖田総司などQuick支援・Quick宝具持ちサーヴァントと相性が良い
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* カードチェーン */}
        <section id="card-chain" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            3. カードチェーンとボーナス効果
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              選択した3枚のカードが同じ種類で揃うと「カードチェーン」が発生し、特別なボーナス効果を得られます。
              これを意識的に狙うことで戦闘を有利に進められます。
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-red-100 bg-red-50/30 p-4">
                <h3 className="text-base font-bold text-red-700">
                  Busterチェーン（BBB）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  効果：与ダメージ大幅増加<br />
                  使い所：ボスの撃破、高HPエネミーへの一撃必殺
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-4">
                <h3 className="text-base font-bold text-blue-700">
                  Artsチェーン（AAA）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  効果：全員のNPが20%増加<br />
                  使い所：宝具の早期発動、連続宝具、長期戦での安定化
                </p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-4">
                <h3 className="text-base font-bold text-green-700">
                  Quickチェーン（QQQ）
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  効果：クリティカルスター大量獲得（+20個）<br />
                  使い所：次ターンでのクリティカル攻撃準備
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Braveチェーン */}
        <section id="brave-chain" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            4. Braveチェーン（ブレイブチェーン）
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              同じサーヴァントの カードを3枚選択すると「Braveチェーン」が発生します。
              3枚目の攻撃後に、そのサーヴァントが追加攻撃（Extra Attack）を行います。
            </p>
            <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-purple-700">
                Braveチェーンのメリット
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>4回攻撃できるため、総ダメージが大きい</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>NPゲージを大幅に回収できる</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>スターを多く生成できる</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>敵のブレイクゲージを効率的に削れる</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                ※ AAAやBBBのカードチェーンとBraveチェーンは同時に発動可能です。例えば、同じサーヴァントのArtsカード3枚を選べば、Artsチェーン＋Braveチェーンの両方のボーナスを得られます。
              </p>
            </div>
          </div>
        </section>

        {/* クリティカル */}
        <section id="critical" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            5. クリティカルスターとクリティカル攻撃
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              「クリティカルスター」は、Quickカードや特定のスキル効果で獲得できるアイテムです。
              保有しているスターの数に応じて、各コマンドカードに「クリティカル発生率」が割り振られます。
            </p>
            <div className="rounded-2xl border border-yellow-100 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-yellow-700">
                クリティカル攻撃の特徴
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-600">⭐</span>
                  <span><strong>ダメージ2倍：</strong>通常攻撃の2倍のダメージを与える</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-600">⭐</span>
                  <span><strong>NPゲージ増加：</strong>NP獲得量も通常より多い</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-600">⭐</span>
                  <span><strong>スター生成促進：</strong>クリティカルヒットでさらにスターを獲得</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-yellow-600">⭐</span>
                  <span><strong>スキルで強化可能：</strong>「クリティカル威力アップ」スキルでさらに火力増強</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                <strong>スター集中度：</strong>
                カードにスターが割り振られる優先度は、カード種別とサーヴァントのクラスによって異なります。
                Quickカード＞Artsカード＞Busterカードの順で集まりやすく、ライダーやアーチャーはスターが集まりやすいです。
              </p>
            </div>
          </div>
        </section>

        {/* 宝具 */}
        <section id="noble-phantasm" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            6. 宝具（ノーブルファンタズム）の使い方
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              宝具は、各サーヴァントの必殺技です。NPゲージが100%以上になると使用できます。
              宝具カードはコマンドカードとは別に扱われ、選択することでターンの最初に発動します。
            </p>
            <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-indigo-700">
                宝具の基本
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>NPゲージは最大300%まで溜められる（オーバーチャージ）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>オーバーチャージが高いほど、宝具の特定効果が強化される</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>複数の宝具を同時選択した場合、後ろで発動する宝具ほどオーバーチャージが増加</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-indigo-600">•</span>
                  <span>宝具にもBuster・Arts・Quickの属性があり、カードチェーンの対象になる</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                <strong>宝具チェーンのコツ：</strong>
                宝具を複数同時に使う際は、オーバーチャージで効果が大きく変わる宝具を後ろに配置すると効率的です。
                また、Buster宝具を最初に使うとダメージボーナス、Arts宝具を最初に使うとNP回収ボーナスが得られます。
              </p>
            </div>
          </div>
        </section>

        {/* スキル */}
        <section id="skills" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            7. スキルの種類と効果的な使用タイミング
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              各サーヴァントは3つのスキルを持ち、それぞれ固有のクールタイムがあります。
              スキルを適切なタイミングで使うことが、戦闘における最も重要な戦略要素の一つです。
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-pink-100 bg-pink-50/30 p-4">
                <h3 className="text-base font-bold text-pink-700">
                  攻撃力アップ系スキル
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  使い所：宝具発動直前、Busterチェーン時、ボス戦での決定打<br />
                  例：カリスマ、軍略、魔力放出など
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-4">
                <h3 className="text-base font-bold text-blue-700">
                  NPチャージ系スキル
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  使い所：宝具を早期発動したい時、連続宝具を狙う時<br />
                  例：魔力装填、NPチャージ、バッテリースキルなど
                </p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-4">
                <h3 className="text-base font-bold text-green-700">
                  回復・防御系スキル
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  使い所：敵の宝具発動前、長期戦での持久、HPが危険域の時<br />
                  例：回復スキル、防御力アップ、無敵・回避など
                </p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-4">
                <h3 className="text-base font-bold text-purple-700">
                  デバフ・妨害系スキル
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  使い所：敵の強化を解除、チャージゲージ減少、宝具封印<br />
                  例：強化解除、チャージ減、スキル封印など
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* バフ・デバフ */}
        <section id="buff-debuff" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            8. バフとデバフの仕組み
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              バフ（強化効果）とデバフ（弱体効果）は、戦闘の結果を大きく左右する重要な要素です。
              スキルや宝具によって付与され、通常3ターン持続します。
            </p>
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-orange-700">
                主要なバフ・デバフの種類
              </h3>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div>
                  <strong className="text-green-700">攻撃力アップ／ダウン：</strong>
                  <span className="ml-1">通常攻撃と宝具のダメージに影響</span>
                </div>
                <div>
                  <strong className="text-green-700">防御力アップ／ダウン：</strong>
                  <span className="ml-1">被ダメージを軽減または増加</span>
                </div>
                <div>
                  <strong className="text-green-700">クリティカル威力アップ：</strong>
                  <span className="ml-1">クリティカル時のダメージを増幅</span>
                </div>
                <div>
                  <strong className="text-green-700">宝具威力アップ：</strong>
                  <span className="ml-1">宝具ダメージのみを強化</span>
                </div>
                <div>
                  <strong className="text-green-700">NPゲージ増加／減少：</strong>
                  <span className="ml-1">即座にNPを増減させる</span>
                </div>
                <div>
                  <strong className="text-green-700">無敵・回避：</strong>
                  <span className="ml-1">1回または1ターンの間、被ダメージを0にする</span>
                </div>
                <div>
                  <strong className="text-red-700">スタン・魅了：</strong>
                  <span className="ml-1">行動不能にする</span>
                </div>
                <div>
                  <strong className="text-red-700">強化解除：</strong>
                  <span className="ml-1">敵のバフを全て消去</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600">
                ※ 同じ種類のバフは加算、異なる種類のバフは乗算で計算されます。例えば、「攻撃力アップ」と「Busterアップ」は別種類のため乗算され、ダメージが大幅に増加します。
              </p>
            </div>
          </div>
        </section>

        {/* 攻撃順序 */}
        <section id="attack-order" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            9. 攻撃順序と戦略
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              コマンドカードは選んだ順番に攻撃が実行されます。この順序を工夫することで、
              ダメージやNP獲得量を最適化できます。
            </p>
            <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-teal-700">
                基本的な攻撃順序の原則
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600 font-bold">1.</span>
                  <div>
                    <strong>1番目のカードでボーナス決定：</strong><br />
                    <span className="text-xs">Busterを1番目にすると全体の火力アップ、Artsを1番目にするとNP獲得増加</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600 font-bold">2.</span>
                  <div>
                    <strong>後ろに行くほど効果増加：</strong><br />
                    <span className="text-xs">2番目、3番目のカードほどダメージやNP獲得が高くなる</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-600 font-bold">3.</span>
                  <div>
                    <strong>最もNPを稼ぎたいカードは3番目に：</strong><br />
                    <span className="text-xs">ArtsカードやQuickカードを3番目にすることでNP効率最大化</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-white/70 border border-teal-100">
                <p className="text-sm font-semibold text-teal-700">実践例：</p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>最大火力を狙う場合：</strong> Buster → Buster → Buster（Busterチェーン）<br />
                  <strong>NPを効率的に稼ぐ場合：</strong> Arts → Buster → Arts（1番目Artsボーナス + 3番目Arts効果最大化）<br />
                  <strong>クリティカル準備：</strong> Quick → Quick → Quick（Quickチェーン）
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 上級テクニック */}
        <section id="advanced-tips" className="mt-10 max-w-3xl mx-auto scroll-mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            10. 上級者向けテクニック
          </h2>
          <div className="mt-6 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-violet-700">
                スキル使用の最適化
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                スキルは「使えるときにすぐ使う」のではなく、宝具タイミングや敵の行動パターンに合わせて温存することが重要です。
                特に高難易度クエストでは、スキルのクールダウン管理が勝敗を分けます。
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-violet-700">
                敵のチャージゲージ管理
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                敵が宝具を使う前に、「チャージ減少」スキルや「スタン」「魅了」などで行動を妨害できます。
                敵のチャージゲージが溜まる前に倒すか、妨害スキルで遅延させるのが高難易度攻略の基本です。
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-violet-700">
                オーバーキル（Overkill）ボーナス
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                敵のHPを0にした後の攻撃ヒットは「Overkill」となり、NP獲得量とスター発生量が増加します。
                Wave最後の敵を倒す際には、Artsカードを3番目に配置することで次のWaveへのNP持ち越しを最大化できます。
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-5 sm:p-6">
              <h3 className="text-base font-bold text-violet-700">
                礼装との組み合わせ
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                概念礼装の効果は戦略に大きく影響します。「カレイドスコープ」で開幕宝具、「黒の聖杯」で宝具火力増強、
                「2030年の欠片」で毎ターンスター供給など、サーヴァントの特性に合った礼装選びが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              📝 まとめ
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                FGOの戦闘システムは、コマンドカードの選択、スキルの使用タイミング、バフ・デバフの管理など、
                複数の要素が絡み合う奥深い戦略ゲームです。
              </p>
              <p>
                まずは基本的なカードの特性を理解し、徐々にカードチェーン、Braveチェーン、クリティカル戦略などを
                実戦で試してみてください。経験を積むことで、最適な戦術が自然と身についていきます。
              </p>
              <p className="font-semibold text-indigo-700">
                このガイドで学んだ知識を、当サイトの知識定着ツールで実践的に確認してみましょう。
                スキルや宝具の効果を覚えることで、より戦略的な戦闘が可能になります。
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quiz/skill"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                スキルクイズで学習する
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center rounded-full border-2 border-indigo-600 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                他の攻略記事を読む
              </Link>
            </div>
          </div>
        </section>

        {/* 関連記事 */}
        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            関連記事
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/articles/class-advantage"
              className="block rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-xs font-semibold text-blue-600">システム解説</div>
              <h3 className="mt-2 text-base font-bold text-gray-900">
                クラス相性を完全解説
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                三すくみから特殊クラスまで徹底解説
              </p>
            </Link>
            <Link
              href="/articles/command-card"
              className="block rounded-2xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/30 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-xs font-semibold text-teal-600">システム解説</div>
              <h3 className="mt-2 text-base font-bold text-gray-900">
                コマンドカードの基礎知識
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                効果的なカード選択のコツを解説
              </p>
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
