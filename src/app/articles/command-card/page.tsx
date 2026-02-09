import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGOコマンドカードの基礎知識 - 効果的なカード選択のコツ";
const pageDescription =
  "Fate/Grand OrderのBuster、Arts、Quickカードの特性と使い分けを解説。カードチェーンやブレイブチェインを理解して、戦闘を有利に進めましょう。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/command-card",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function CommandCardArticle() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            システム解説
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGOコマンドカードの基礎知識 - 効果的なカード選択のコツ
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
            <span>約8分で読めます</span>
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
              Fate/Grand Orderの戦闘では、毎ターン5枚のコマンドカードから3枚を選んで攻撃します。
              Buster、Arts、Quickの3種類のカードは、それぞれ異なる特性を持ち、
              選択の組み合わせによって戦況が大きく変わります。
              この記事では、コマンドカードの基礎知識と効果的な使い方を解説します。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. コマンドカードの3つの種類
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                各サーヴァントは、Buster・Arts・Quickカードを合計5枚持っています。
                カードの配分はサーヴァントごとに異なり、戦闘スタイルに大きく影響します。
              </p>

              <div className="rounded-2xl border border-red-100 bg-red-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-red-900">
                  Buster（バスターカード）- 赤色
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong>特性:</strong> 攻撃力が最も高い</li>
                  <li><strong>補正:</strong> 与ダメージ1.5倍</li>
                  <li><strong>用途:</strong> 高火力アタッカー、短期決戦向け</li>
                  <li><strong>NP獲得:</strong> 低い</li>
                  <li><strong>スター生成:</strong> 低い</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  とにかく大ダメージを叩き出すことに特化したカードです。
                  敵のHPを一気に削りたいときや、宝具後のダメージを上げたいときに有効です。
                  周回での全体宝具アタッカーは、Busterカードが3枚のサーヴァントが多く採用されます。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  Arts（アーツカード）- 青色
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong>特性:</strong> NP（Noble Phantasm）獲得量が高い</li>
                  <li><strong>補正:</strong> 与ダメージは通常（1.0倍）</li>
                  <li><strong>用途:</strong> 宝具連発、長期戦向け</li>
                  <li><strong>NP獲得:</strong> 高い</li>
                  <li><strong>スター生成:</strong> 中程度</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  NPを効率よく貯めることができるカードです。
                  宝具を何度も撃ちたいサーヴァントや、Arts宝具を持つサーヴァントと相性が良いです。
                  高難易度クエストでは、Artsチェーンを組んでNPを回して戦うのが定石です。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-base font-bold text-green-900">
                  Quick（クイックカード）- 緑色
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong>特性:</strong> クリティカルスター生成が高い</li>
                  <li><strong>補正:</strong> 与ダメージ0.8倍</li>
                  <li><strong>用途:</strong> クリティカル編成、スター供給役</li>
                  <li><strong>NP獲得:</strong> 中程度</li>
                  <li><strong>スター生成:</strong> 高い</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  クリティカルスターを大量に生み出すことができるカードです。
                  スターを集めてクリティカル攻撃を狙うアタッカーや、
                  スターを供給するサポーターに向いています。
                  スカディシステムなどのQuick周回編成でも重要な役割を果たします。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. カードチェーンとボーナス効果
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                同じ種類のカードを3枚選ぶと「カードチェーン」が発生し、
                特殊なボーナス効果を得られます。
              </p>

              <div className="rounded-2xl border border-red-100 bg-red-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-red-900">
                  Busterチェーン
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>効果:</strong> 全体のダメージがさらに20%アップ
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Busterカード3枚で構成するチェーン。総ダメージが大幅に増加するため、
                  敵を一気に倒したいときに有効です。
                  Buster宝具を含めたBusterチェーンは、最大火力を引き出す基本戦術です。
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  Artsチェーン
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>効果:</strong> 全員のNPが20%増加
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Artsカード3枚で構成するチェーン。パーティ全員のNPが増えるため、
                  次のターンで複数の宝具を撃ちやすくなります。
                  Arts主体のパーティでは、意識的にArtsチェーンを狙うことで宝具回転率が飛躍的に向上します。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-base font-bold text-green-900">
                  Quickチェーン
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>効果:</strong> クリティカルスターが10個追加生成
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Quickカード3枚で構成するチェーン。大量のスターを生成できるため、
                  次ターンのクリティカル攻撃につなげやすくなります。
                  スター生成が得意なサーヴァントと組み合わせると、毎ターン安定してクリティカルを狙えます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. ブレイブチェーン（同一サーヴァント3枚）
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                同じサーヴァントのカードを3枚選ぶと「ブレイブチェーン」が発生し、
                4枚目の攻撃「エクストラアタック」が追加されます。
              </p>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-purple-900">
                  エクストラアタックの特徴
                </h3>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li>通常攻撃よりも高いダメージ倍率（3.5倍）</li>
                  <li>NP獲得量とスター生成量が優秀</li>
                  <li>3枚目に選んだカードの種類の影響を受ける</li>
                  <li>宝具を含めても発動する</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  ブレイブチェーンは総ダメージが増えるだけでなく、
                  エクストラアタックによるNP・スター獲得も期待できます。
                  高難易度では、ブレイブチェーン+クリティカルの組み合わせで大ダメージを狙うことが重要です。
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-5">
                <h3 className="text-base font-bold text-indigo-900">
                  ブレイブチェーンの戦略的活用
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  宝具を含めたブレイブチェーンは非常に強力です。
                  「宝具 → Buster → Buster → エクストラアタック」の順で選べば、
                  宝具の火力を最大限に活かしながらエクストラアタックまで繋げられます。
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  また、Arts宝具を持つサーヴァントなら「宝具 → Arts → Arts → エクストラアタック」で
                  大量のNPを稼ぎ、次のターンで再び宝具を撃つことも可能です。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. カード選択の基本戦略
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                戦況に応じて、適切なカード選択をすることが勝利への近道です。
              </p>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-amber-900">
                  1枚目のカード選択が重要
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  1枚目に選んだカードの種類によって、2枚目以降のカード性能が変化します。
                </p>
                <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                  <li><strong>Buster1st:</strong> 全カードの攻撃力が50%アップ</li>
                  <li><strong>Arts1st:</strong> 全カードのNP獲得量が大幅アップ</li>
                  <li><strong>Quick1st:</strong> 全カードのスター生成量が大幅アップ</li>
                </ul>
                <p className="mt-3 text-sm text-gray-700">
                  ダメージを稼ぎたいならBuster1st、NPを貯めたいならArts1st、
                  スターを稼ぎたいならQuick1stが基本です。
                </p>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-5">
                <h3 className="text-base font-bold text-teal-900">
                  周回での効率的なカード選択
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  フリークエスト周回では、各ウェーブで宝具を撃つことを最優先します。
                  NP50%チャージ礼装を使い、ArtsカードやNPチャージスキルで調整して、
                  毎ウェーブ宝具を撃つのが基本戦術です。
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50/30 p-5">
                <h3 className="text-base font-bold text-rose-900">
                  高難易度での柔軟な判断
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  高難易度では、「今ターンに倒し切るか」「次ターンに宝具を撃ちたいか」
                  「スターを貯めてクリティカルを狙うか」など、状況に応じた判断が求められます。
                  カードの引き運に左右されるため、柔軟に戦術を切り替える力が重要です。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              コマンドカードシステムは、FGOの戦闘を奥深くする要素です。
              Buster・Arts・Quickの特性を理解し、カードチェーンやブレイブチェーンを使いこなすことで、
              戦闘を有利に進められます。
            </p>
            <p className="mt-3">
              最初は「Busterで攻撃、Artsで宝具を貯める」という基本を押さえれば十分です。
              慣れてきたら、1枚目のカード選択やブレイブチェーンを意識して、
              より戦略的な戦い方を楽しんでみてください。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            クイズでサーヴァントのカード構成を覚えよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            各サーヴァントのカード構成（BBBAAAQなど）をクイズで学ぶことで、
            実戦での編成判断がスムーズになります。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              プロフィールクイズ
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              クイズの使い方
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
