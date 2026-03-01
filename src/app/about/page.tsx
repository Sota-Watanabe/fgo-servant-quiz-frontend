import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "サイトについて - Fate/Grand Quizのコンセプト";
const pageDescription =
  "Fate/Grand Quizは、FGOをもっと楽しむために作られた非公式ファンサイトです。サイトの目的、作られた背景、大切にしている価値観を紹介します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/about",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function AboutPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            ABOUT
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            Fate/Grand Quiz について
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            このサイトが生まれた背景と、大切にしている想いをご紹介します。
          </p>
        </header>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            サイトの目的と提供価値
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              Fate/Grand Quiz は、「Fate/Grand Order」の攻略情報とサーヴァント知識を体系的に整理・提供する総合学習プラットフォームです。
              単なる情報サイトではなく、「記事で学ぶ → 知識テストで確認する → さらに深く理解する」という能動的な学習サイクルを提供している点が最大の特徴です。
            </p>
            <p>
              <strong>攻略記事</strong>では、ゲームシステムの基礎、戦略的編成、効率的な育成方法など、実際のゲームプレイに役立つ具体的な情報を提供しています。
              初心者マスターがゲームを始める際に知っておくべき基本知識から、上級者向けの高難易度攻略テクニックまで、幅広いレベルに対応した内容を掲載しています。
            </p>
            <p>
              <strong>知識定着ツール</strong>（インタラクティブ学習機能）では、スキル効果、プロフィール情報、宝具特性という3つの異なる視点から、
              サーヴァントの特徴を実践的に学べます。記事で得た理論的な知識を、実際に問題を解くことで記憶に定着させ、
              ゲームプレイに活かせる実践的なスキルへと昇華させることができます。
            </p>
            <p>
              FGOには350体以上のサーヴァントが実装されており、それぞれが固有のスキル、宝具、プロフィールを持っています。
              本サイトは、この膨大な情報を整理し、マスターの皆様が効率的に学習できる形で提供することで、
              より戦略的で充実したゲーム体験をサポートします。
            </p>
            <div className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6">
              <h3 className="text-base font-bold text-indigo-900">
                📚 学習プラットフォームとしての3つの柱
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-indigo-600">1.</span>
                  <span><strong>体系的な攻略記事</strong>：ゲームシステム解説、戦術ガイド、育成攻略など、実戦で役立つ情報を段階的に提供</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-indigo-600">2.</span>
                  <span><strong>インタラクティブ学習</strong>：記事で学んだ知識を実際に試し、記憶に定着させる知識テスト機能</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-indigo-600">3.</span>
                  <span><strong>継続的な学習支援</strong>：スキマ時間に1問から取り組め、自分のペースで知識を深められる設計</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            サイトが生まれた背景
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              運営者は長年FGOをプレイしているファンの一人です。周回やストーリー攻略を繰り返すうちに、「スキルの効果文だけでサーヴァントを当てられるかな？」「プロフィールのこの一文は誰のものだっけ？」と、ふとした瞬間に自分の記憶を試したくなることがありました。
            </p>
            <p>
              しかし、そうした遊び方ができるサービスがなかったため、自分で作ってみることにしました。技術的な挑戦でもあり、同じようにFGOを楽しんでいる他のマスターにも遊んでもらえたら嬉しいという思いから、このサイトは誕生しました。
            </p>
            <p>
              個人の趣味プロジェクトとして始まったため、大規模な機能はありませんが、シンプルでわかりやすく、誰でも気軽に遊べるサイトを目指して運営しています。
            </p>
          </div>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            大切にしている価値観
          </h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                1. 誰でも気軽に遊べること
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                会員登録不要、完全無料で、すべてのクイズモードを楽しめます。スマートフォンでもPCでも快適に遊べるよう、シンプルで使いやすいデザインを心がけています。FGOを知らない方でも、用語集やガイドを読めば楽しめる設計を目指しています。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                2. 競争よりも発見を
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                ランキングやタイムアタックではなく、自分のペースで知識を確かめることを重視しています。間違えても問題ありません。むしろ、間違えた問題を通じて新しいサーヴァントを知ることが、このクイズの醍醐味です。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                3. 正確で最新のデータ
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                <a
                  href="https://api.atlasacademy.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                >
                  Atlas Academy API
                </a>
                という信頼性の高いデータソースを利用し、スキル、宝具、プロフィールなどの情報を正確に反映しています。新サーヴァント実装や強化クエスト後も、できるだけ速やかにデータを更新します。
              </p>
              <p className="mt-2 text-xs text-gray-600">
                ※ Atlas Academy APIは、TYPE-MOON公式のデータベースではなく、コミュニティが運営するオープンソースプロジェクトです。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                4. ファン同士の交流のきっかけに
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                FGO仲間と問題を出し合ったり、SNSでクイズ結果をシェアしたりして、コミュニティの輪が広がることを願っています。推しサーヴァントについて語り合うきっかけになれば、それもこのサイトの役割だと考えています。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-indigo-600">
                5. 継続的な改善
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                ユーザーの皆さまからのフィードバックを大切にし、より良いサイトにしていくことを約束します。新しいクイズモードの追加や機能改善など、少しずつアップデートを続けていきます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            公式との関係について
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              本サイトは、TYPE-MOON、Aniplex、DELiGHTWORKS、ソニー・ミュージックエンタテインメントなど、Fate/Grand
              Order
              に関わるすべての公式企業・団体とは一切関係のない、個人によるファンメイドプロジェクトです。
            </p>
            <p>
              サーヴァントのデータ（スキル、宝具、プロフィールなど）は、コミュニティが運営するAtlas
              Academy
              APIを利用して取得していますが、画像やイラストは使用しておらず、テキスト情報のみを扱っています。
            </p>
            <p>
              本サイトはファン活動の一環として運営されており、商業目的ではありません。公式の権利を侵害する意図は一切なく、FGOという作品への敬意と愛情をもって運営しています。
            </p>
          </div>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            技術的な情報
          </h2>
          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              本サイトは、<a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Next.js
              </a>
              （React）、<a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                TypeScript
              </a>
              、<a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Tailwind CSS
              </a>
              などのモダンなWeb技術を使って構築されています。フロントエンドとバックエンドを分離した設計により、高速で快適なユーザー体験を提供しています。
            </p>
            <p>
              データソースとしては、<a
                href="https://api.atlasacademy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                Atlas Academy API
              </a>
              を利用しており、FGOの膨大なゲームデータを正確かつ最新の状態で取得しています。このAPIはコミュニティによって運営されており、非常に高品質で信頼性のあるデータソースです。
            </p>
            <p className="text-xs text-gray-600">
              ※ 本サイトは個人が運営する非公式ファンサイトです。「Fate/Grand Order」および関連するすべての権利は、
              <a
                href="https://www.fate-go.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
              >
                TYPE-MOON / FGO PROJECT
              </a>
              に帰属します。サイト内で使用している画像やテキストの著作権は各権利者に帰属します。
            </p>
          </div>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
            関連リンク
          </h2>
          <div className="mt-6 space-y-3 text-sm sm:text-base">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Fate/Grand Order 公式サイト</h3>
              <a
                href="https://www.fate-go.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-indigo-600 hover:text-indigo-700 underline underline-offset-4 text-sm"
              >
                https://www.fate-go.jp/
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Atlas Academy (データソース)</h3>
              <a
                href="https://api.atlasacademy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-indigo-600 hover:text-indigo-700 underline underline-offset-4 text-sm"
              >
                https://api.atlasacademy.io/
              </a>
              <p className="mt-2 text-xs text-gray-600">
                FGOのゲームデータを提供するコミュニティ運営のAPIプロジェクト
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">サイト運営者 GitHub</h3>
              <a
                href="https://github.com/Sota-Watanabe"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-indigo-600 hover:text-indigo-700 underline underline-offset-4 text-sm"
              >
                https://github.com/Sota-Watanabe
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900">
            一緒にFGOを楽しみましょう
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            Fate/Grand Quiz
            は、FGOを愛するすべてのマスターのための場所です。
            <br />
            クイズを通じて、新しい発見や推しサーヴァントへの愛を深めてください。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              クイズを始める
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              利用ガイドを見る
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
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              お問い合わせ
            </Link>
            <Link
              href="/privacy"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              プライバシーポリシー
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
