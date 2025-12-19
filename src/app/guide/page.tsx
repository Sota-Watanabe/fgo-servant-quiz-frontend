import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "利用ガイド - クイズの遊び方";
const pageDescription =
  "Fate/Grand Quizの使い方を詳しく解説。各クイズモードの特徴や攻略のコツ、サイトの便利な使い方をステップバイステップで紹介します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/guide",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function GuidePage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            GUIDE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            利用ガイド
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Fate/Grand Quizの遊び方を詳しく解説します。
            <br />
            初めての方も、このガイドを読めばすぐにクイズを楽しめます。
          </p>
        </header>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            1. サイトの基本的な使い方
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                ステップ1: クイズモードを選ぶ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                トップページまたは<Link href="/quiz" className="text-indigo-600 hover:text-indigo-700 underline">クイズモード一覧</Link>から、遊びたいクイズを選びます。
                スキル、プロフィール、宝具の3種類があり、それぞれ異なる角度からサーヴァントの知識を試せます。
              </p>
              <ul className="mt-3 list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                <li>
                  <strong>スキルクイズ</strong>:
                  スキル効果テキストから推理。戦闘が好きな方におすすめ。
                </li>
                <li>
                  <strong>プロフィールクイズ</strong>:
                  設定や人物像から推理。ストーリー重視の方におすすめ。
                </li>
                <li>
                  <strong>宝具クイズ</strong>:
                  宝具名や解説から推理。演出の記憶が試されます。
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                ステップ2: 問題を読む
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                各クイズモードの問題画面では、サーヴァントに関する情報が表示されます。スキル名、プロフィール本文、宝具の説明文など、モードによって異なるヒントが与えられます。じっくり読んで、どのサーヴァントか考えてみましょう。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                ステップ3: 回答を選ぶ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                画面下部の「回答を選択」エリアで、サーヴァント名を選択します。検索ボックスにひらがな・カタカナ・漢字で入力すると、候補が絞り込まれます。正解だと思うサーヴァントを選んで「回答する」ボタンを押してください。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                ステップ4: 結果を確認
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                正解か不正解かが表示され、正しい答えとサーヴァントの簡単な解説が読めます。間違えても大丈夫。新しいサーヴァントを知るきっかけになります。確認したら「次の問題へ」ボタンで次の問題に進めます。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                ステップ5: 繰り返し遊ぶ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                問題は無限に続きます。好きなだけ遊んで、サーヴァントの知識を深めましょう。別のクイズモードに切り替えたいときは、画面上部のナビゲーションメニューから移動できます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            2. 各クイズモードの特徴と攻略のコツ
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                スキルクイズ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>特徴:</strong>{" "}
                スキル名とその効果テキストだけが表示されます。アイコンや演出は見えないため、テキストの記憶が頼りです。
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>攻略のコツ:</strong>
              </p>
              <ul className="mt-2 list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                <li>スキル名の響きやモチーフに注目。歴史や神話のエピソードが反映されていることが多い。</li>
                <li>効果の組み合わせでクラスや役割を推測。攻撃特化なのか、サポート型なのか。</li>
                <li>「〇〇特攻」や「△△無効」など、特定の対象に関係する効果は大きなヒント。</li>
                <li>周回で使っているサーヴァントは効果文を覚えているので有利。</li>
              </ul>
              <p className="mt-3 text-sm sm:text-base">
                詳しくは
                <Link
                  href="/quiz/skill/description"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  スキルクイズの世界観解説
                </Link>
                をご覧ください。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                プロフィールクイズ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>特徴:</strong>{" "}
                プロフィール本文、ステータス、関連情報が段階的に表示されます。文章が長いため、じっくり読む楽しさがあります。
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>攻略のコツ:</strong>
              </p>
              <ul className="mt-2 list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                <li>プロフィール文の口調や語り口に注目。一人称や性格が表れています。</li>
                <li>時代や地域、特定の出来事への言及がヒントになることが多い。</li>
                <li>身長・体重などのステータスも判断材料。意外と記憶に残っている。</li>
                <li>好きなもの・苦手なものは、そのサーヴァントの人となりを表します。</li>
              </ul>
              <p className="mt-3 text-sm sm:text-base">
                詳しくは
                <Link
                  href="/quiz/profile/description"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  プロフィールクイズの世界観解説
                </Link>
                をご覧ください。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                宝具クイズ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>特徴:</strong>{" "}
                宝具名、ルビ、ランク、種別、カード属性、解説文が表示されます。宝具演出の記憶を頼りに推理します。
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>攻略のコツ:</strong>
              </p>
              <ul className="mt-2 list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                <li>宝具名の響きや意味から、出典となる物語を思い出す。</li>
                <li>ランクが高いほど伝説級の力。EXランクは特に特別な存在。</li>
                <li>種別（対人・対軍・対城など）は宝具の規模を示すヒント。</li>
                <li>カード種別（Quick/Arts/Buster）で戦い方の傾向がわかる。</li>
                <li>解説文には宝具の由来や逸話が書かれているので重要。</li>
              </ul>
              <p className="mt-3 text-sm sm:text-base">
                詳しくは
                <Link
                  href="/quiz/np/description"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  宝具クイズの世界観解説
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            3. サイトをもっと楽しむためのヒント
          </h2>

          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                わからない用語は用語集でチェック
              </h3>
              <p className="mt-2">
                FGO独特の用語がわからない場合は、
                <Link
                  href="/glossary"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  FGO用語集
                </Link>
                で確認できます。初心者の方はクイズの前に目を通しておくと、より楽しめます。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                複数のクイズモードを組み合わせる
              </h3>
              <p className="mt-2">
                1つのモードだけでなく、スキル・プロフィール・宝具の3つを順番に遊ぶと、サーヴァントを多角的に理解できます。あるモードで苦手だったサーヴァントも、別のモードでは得意分野かもしれません。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">間違えた問題をメモ</h3>
              <p className="mt-2">
                間違えた問題は、そのサーヴァントをもっと知るチャンスです。気になったサーヴァントはメモしておいて、後でFGO本編やwikiで調べてみると、新しい発見があるかもしれません。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">スキマ時間に1問だけ</h3>
              <p className="mt-2">
                問題は1問ずつ独立しているので、通勤・通学の合間や休憩時間に気軽に挑戦できます。毎日1問ずつ続けるだけで、自然とサーヴァントの知識が増えていきます。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="font-bold text-gray-900">
                友達と問題を出し合う
              </h3>
              <p className="mt-2">
                FGO仲間と一緒にクイズを楽しむのもおすすめ。「このスキルは誰のもの？」と問題を出し合えば、コミュニケーションのきっかけにもなります。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900">
            準備ができたらクイズに挑戦
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            ガイドを読んで基本がわかったら、さっそくクイズを始めましょう。
            <br />
            どのモードから遊んでも大丈夫。楽しんでください！
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズ
            </Link>
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              プロフィールクイズ
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              宝具クイズ
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/faq"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              よくある質問
            </Link>
            <Link
              href="/glossary"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              FGO用語集
            </Link>
            <Link
              href="/"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              トップページ
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
