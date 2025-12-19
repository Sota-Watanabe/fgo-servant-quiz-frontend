import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "クイズモードを選ぶ";
const pageDescription =
  "スキル・プロフィール・宝具の3種類のクイズから、好きなモードを選んで遊べます。";

const quizModes = [
  {
    href: "/quiz/skill",
    descriptionHref: "/quiz/skill/description",
    label: "Skill Quiz",
    title: "スキルクイズ",
    summary:
      "スキルの効果テキストだけを手がかりに、サーヴァントの真名を当てるモードです。周回で見慣れたスキルから、あまり使わないマニアックなスキルまで出題されます。",
    highlights: [
      "効果テキストとルビ表記のみを表示",
      "連続プレイでも同じサーヴァントが続きにくい",
      "回答後にクラス・レアリティ・真名を確認できる",
    ],
    cta: "スキルクイズを始める",
    descriptionCta: "スキルクイズのルールを見る",
  },
  {
    href: "/quiz/profile",
    descriptionHref: "/quiz/profile/description",
    label: "Profile Quiz",
    title: "プロフィールクイズ",
    summary:
      "プロフィール本文やステータス、関連情報を読みながら、どのサーヴァントかを当てるモードです。設定やキャラクター性が好きなマスター向けのクイズになっています。",
    highlights: [
      "プロフィール・ステータス・関連情報を順番に開示",
      "初めての人向けに遊び方の説明を表示",
      "回答候補は検索できるサーヴァント一覧から選択",
    ],
    cta: "プロフィールクイズを始める",
    descriptionCta: "プロフィールクイズのルールを見る",
  },
  {
    href: "/quiz/np",
    descriptionHref: "/quiz/np/description",
    label: "Noble Phantasm Quiz",
    title: "宝具クイズ",
    summary:
      "宝具名やルビ、ランク・種別・カード属性・解説文を見て、持ち主のサーヴァントを当てるモードです。偽名宝具や複合宝具も出題されるため、ストーリーやイベントの記憶が試されます。",
    highlights: [
      "カード種別 ID を日本語ラベルに変換して表示",
      "解説テキスト付きで宝具の背景も振り返れる",
      "真名判定後にそのまま次の問題へ進める",
    ],
    cta: "宝具クイズを始める",
    descriptionCta: "宝具クイズのルールを見る",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function QuizIndexPage() {
  return (
    <PageLayout>
      <main className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-indigo-500">
            QUIZ SELECTION
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            FGO クイズモード一覧
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            どのモードも、1問ごとに真名判定と簡単な解説を表示します。気になる出題タイプを選んで、気軽に1問から挑戦してみてください。
          </p>
        </header>

        <section className="mt-10 space-y-10">
          {quizModes.map((mode) => (
            <article
              key={mode.href}
              className="rounded-[28px] border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-6 sm:p-8 shadow-md"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-indigo-500">
                {mode.label}
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {mode.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {mode.summary}
                </p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-gray-700 sm:text-base">
                {mode.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={mode.href}
                  className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  {mode.cta}
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.22 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L8.94 8 5.22 4.53a.75.75 0 0 1 0-1.06z" />
                  </svg>
                </Link>
                <div className="mt-3 text-xs sm:text-sm">
                  <Link
                    href={mode.descriptionHref}
                    className="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                  >
                    {mode.descriptionCta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-[28px] border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            各クイズモードの特徴と学習効果
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <h3 className="text-base font-bold text-blue-900 sm:text-lg">
                スキルクイズ：実戦的な記憶力を鍛える
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                周回やクエストで何度も目にしてきたスキル効果テキストを手がかりに、サーヴァントを推理します。効果の組み合わせやスキル名のニュアンスから、編成でよく使うサーヴァントを思い出す楽しさがあります。実戦で重要なスキル構成を自然と記憶する学習効果も期待できます。
              </p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-white p-5">
              <h3 className="text-base font-bold text-purple-900 sm:text-lg">
                プロフィールクイズ：物語性と設定理解を深める
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                サーヴァントのバックストーリーや性格、ステータス情報から真名を推理。Fate
                シリーズの物語や歴史的背景への理解が深まり、キャラクターへの愛着がより一層強くなります。マテリアルやプロフィール文をじっくり読み込む習慣が身につきます。
              </p>
            </div>
            <div className="rounded-2xl border border-pink-100 bg-white p-5">
              <h3 className="text-base font-bold text-pink-900 sm:text-lg">
                宝具クイズ：象徴的な記憶と演出を振り返る
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                宝具名、ランク、種別、カード属性といったヒントから持ち主を当てます。印象的な宝具演出や名前が記憶に残りやすく、バトル中のハイライトシーンを思い出しながら楽しめます。宝具の背景設定を知ることで、サーヴァントの本質をより深く理解できます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[28px] border border-green-100 bg-gradient-to-br from-green-50/30 to-teal-50/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            効果的なクイズの活用方法
          </h2>
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
            <div className="flex gap-3">
              <span className="text-lg">📌</span>
              <div>
                <span className="font-semibold text-gray-900">
                  スキマ時間に1問だけ挑戦：
                </span>
                通勤・通学時や休憩時間に、気軽に1問だけ解いて知識の確認ができます。
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-lg">🎯</span>
              <div>
                <span className="font-semibold text-gray-900">
                  苦手なモードを重点的に練習：
                </span>
                不正解が多いモードを繰り返し遊ぶことで、その分野の理解を深められます。
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-lg">🤝</span>
              <div>
                <span className="font-semibold text-gray-900">
                  友人と競って楽しむ：
                </span>
                FGO仲間と一緒にクイズに挑戦して、誰が一番詳しいか競い合えます。
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-lg">📚</span>
              <div>
                <span className="font-semibold text-gray-900">
                  推しサーヴァントの知識確認：
                </span>
                お気に入りのサーヴァントが出題されたら、全ての情報を正確に答えられるか試してみましょう。
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50/30 to-orange-50/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            よくある質問
          </h2>
          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Q. どのモードから始めるのがおすすめですか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                A.
                初めての方には「スキルクイズ」がおすすめです。周回で見慣れたスキル効果が多く出題されるため、直感的に答えやすい傾向があります。
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Q. 問題は何問くらいありますか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                A.
                実装済みの全サーヴァントが出題対象となるため、膨大な問題数があります。ランダム出題なので、飽きずに長く遊べます。
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Q. 料金はかかりますか？
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                A.
                完全無料です。すべてのクイズモードを制限なく遊べます。会員登録も不要です。
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              その他のよくある質問を見る →
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
