import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGOクイズで高正答率を目指すコツ - 攻略ガイド";
const pageDescription =
  "各クイズモードで正答率を上げるための具体的なテクニックと、記憶を定着させる効果的な学習方法を詳しく解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/quiz-tips",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function QuizTipsArticle() {
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
              攻略
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGOクイズで高正答率を目指すコツ
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2025-12-19">2025年12月19日</time>
            <span>•</span>
            <span>約5分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              1. スキルクイズ攻略のコツ
            </h2>
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                効果テキストの特徴的な部分に注目する
              </h3>
              <p>
                スキルクイズでは、効果テキストの中でも特徴的なキーワードに注目しましょう。例えば「無敵貫通」「特攻」「弱体解除」「スター集中」といった独特な効果は、そのサーヴァントを特定する重要なヒントになります。
              </p>
              <p>
                また、複数のスキルを組み合わせて判断することも重要です。単体では判別が難しいスキルでも、3つのスキル効果を総合的に見ることで、そのサーヴァントの役割（アタッカー、サポーター、耐久型など）が見えてきます。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">
                周回で使うサーヴァントから覚える
              </h3>
              <p>
                普段の周回で頻繁に使用するサーヴァントのスキルは、自然と記憶に残りやすいものです。まずは自分の編成に入っているサーヴァントのスキル構成を確実に覚えることから始めましょう。
              </p>
              <p>
                特に「宝具威力アップ」「NPチャージ」「防御力ダウン」といった周回で重要なスキルは、多くのマスターにとって馴染み深いはずです。これらのスキルを持つサーヴァントを優先的に記憶していくと、正答率が大きく向上します。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              2. プロフィールクイズ攻略のコツ
            </h2>
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                一人称と口調に注目する
              </h3>
              <p>
                プロフィール文の中でも、特にキャラクターの「一人称」と「口調」は重要な識別ポイントです。「我」「余」「拙者」「僕」「俺」といった一人称は、そのサーヴァントの性格や時代背景を反映しています。
              </p>
              <p>
                また、口調の特徴（丁寧語、荒っぽい言葉遣い、古風な話し方など）も強力なヒントになります。特に個性的な口調を持つサーヴァントは、テキストを読むだけで特定できることも多いでしょう。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">
                ステータスの特徴を理解する
              </h3>
              <p>
                HP・ATK の数値バランスや、クラススキルの組み合わせも判断材料になります。例えば、HP が極端に高いサーヴァントや、ATK
                が突出して高いアタッカー型のサーヴァントは、ステータスだけで候補を絞り込めることがあります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              3. 宝具クイズ攻略のコツ
            </h2>
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                宝具名の言語的特徴を活用する
              </h3>
              <p>
                宝具名の言語（ラテン語、ギリシャ語、英語、日本語など）は、そのサーヴァントの出身地域や時代を示す重要なヒントです。例えば、ラテン語の宝具名なら古代ローマやヨーロッパ系、日本語なら日本の英霊である可能性が高まります。
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6">
                カード種別と宝具効果の関連性
              </h3>
              <p>
                Buster 宝具は高威力の攻撃、Arts 宝具は味方支援や NP 回収、Quick
                宝具はスター生成や連続攻撃、といった一般的な傾向があります。カード種別と宝具効果の組み合わせから、サーヴァントの戦闘スタイルを推測できます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              4. 継続的な学習のための実践方法
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                クイズの正答率を上げるには、継続的な学習が欠かせません。以下の方法を日常に取り入れることで、自然と知識が定着していきます。
              </p>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
                <h3 className="text-base font-bold text-blue-900">
                  毎日1問ずつ挑戦する習慣づけ
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  スキマ時間に1問だけでも解く習慣をつけることで、無理なく継続できます。少しずつでも毎日触れることで、記憶の定着率が大きく向上します。
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5">
                <h3 className="text-base font-bold text-green-900">
                  不正解だったサーヴァントを重点的に復習
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  間違えた問題は、マテリアルやゲーム内プロフィールで改めて確認しましょう。「なぜ間違えたのか」を分析することで、次回の正答率が上がります。
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
                <h3 className="text-base font-bold text-purple-900">
                  実戦でのスキル使用を意識する
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  実際のクエストでサーヴァントを使用する際、スキル名や効果テキストを意識的に読む習慣をつけましょう。実戦と結びつけることで、記憶がより強固になります。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ
            </h2>
            <p className="mt-4">
              高正答率を目指すには、各クイズモードの特徴を理解し、自分に合った学習方法を見つけることが大切です。焦らず楽しみながら、少しずつ知識を積み重ねていきましょう。
            </p>
            <p className="mt-3">
              このサイトでは、正解・不正解にこだわりすぎず、「新しい発見」や「記憶の確認」を楽しむことを大切にしています。ぜひ気軽にクイズに挑戦して、FGOの世界をより深く楽しんでください。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            学んだことを実践しよう
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            記事で紹介したテクニックを実際のクイズで試してみましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズを始める
            </Link>
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              プロフィールクイズを始める
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              宝具クイズを始める
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
