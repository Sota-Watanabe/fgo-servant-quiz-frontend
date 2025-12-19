import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "プロフィール文から読み解くサーヴァントの深層";
const pageDescription =
  "FGOサーヴァントのプロフィール文に隠された設定やストーリーの伏線、キャラクター性の読み解き方を詳しく解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/profile-reading",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function ProfileReadingArticle() {
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
              考察
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            プロフィール文から読み解くサーヴァントの深層
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2025-12-19">2025年12月19日</time>
            <span>•</span>
            <span>約8分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <p className="text-lg text-gray-700">
              FGOのサーヴァントプロフィールには、表面的な情報だけでなく、深い物語性や設定の伏線が隠されています。この記事では、プロフィール文を深く読み解くための視点とテクニックを紹介します。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. 一人称と口調から見えるキャラクター性
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                サーヴァントの一人称（私、我、余、拙者、僕、俺など）は、その性格や時代背景、社会的地位を反映しています。一人称の選択には、ライターの意図的な設定が込められており、キャラクター理解の重要な手がかりとなります。
              </p>
              <p className="mt-3">
                例えば、「我」「余」といった古風で威厳ある一人称は、王や皇帝クラスの高貴な出自を示すことが多く、「拙者」は武士階級、「僕」は若々しさや謙虚さ、「俺」は粗野さや親しみやすさを表現します。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. 歴史的背景との照合
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                プロフィール文には、その英霊が生きた時代や歴史的出来事への言及が含まれています。これらのヒントを手がかりに、サーヴァントの真名を推理することができます。
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-blue-900">時代特定のヒント</h3>
                <p className="mt-2 text-sm text-gray-700">
                  「円卓の騎士」「トロイア戦争」「戦国時代」「フランス革命」といった歴史的事象への言及は、その英霊の出身時代を特定する重要な手がかりです。
                </p>
              </div>
              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-3">
                <h3 className="text-base font-bold text-green-900">地理的ヒント</h3>
                <p className="mt-2 text-sm text-gray-700">
                  出身地や活動地域の記述（「ブリテン」「ギリシャ」「日本」など）も、サーヴァントの特定に役立ちます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. マスターとの関係性の描写
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                プロフィール文には、マスターに対する態度や関係性の築き方が描かれています。これはサーヴァントの人間性や価値観を理解する上で非常に重要な要素です。
              </p>
              <p className="mt-3">
                忠誠心の高いサーヴァント、独立心の強いサーヴァント、友好的なサーヴァント、警戒心の強いサーヴァントなど、マスターとの距離感は多様です。これらの違いは、生前の経験や価値観に基づいています。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. 絆レベルで解放されるプロフィールの深読み
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                絆レベルが上がることで解放されるプロフィールには、より深い内面や秘められた想い、生前の重要なエピソードが描かれています。
              </p>
              <p className="mt-3">
                特に絆レベル5で解放される内容は、そのサーヴァントの核心に迫る重要な情報であることが多く、キャラクター理解の決定的なピースとなります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              5. Fateシリーズ全体との繋がり
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                FGOのプロフィールには、過去のFate作品（Stay night、Zero、Apocrypha等）との繋がりを示唆する記述が含まれることがあります。
              </p>
              <p className="mt-3">
                これらのクロスオーバー的要素を知ることで、Fateシリーズの世界観をより立体的に楽しむことができます。他作品のプレイ経験があると、プロフィール文の理解がさらに深まります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              プロフィール文は、単なる説明文ではなく、サーヴァントの人生や価値観、物語を凝縮した重要なテキストです。じっくり読み込むことで、そのキャラクターへの理解と愛着が深まります。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">プロフィールクイズで実践</h2>
          <p className="mt-3 text-sm text-gray-700">
            学んだ読解テクニックをプロフィールクイズで活用してみましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              プロフィールクイズを始める
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border-2 border-purple-600 px-5 py-2.5 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
