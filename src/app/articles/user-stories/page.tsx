import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "クイズで発見した推しサーヴァントの新たな魅力 - 体験談";
const pageDescription =
  "Fate/Grand Quizを実際に遊んでみた体験談。クイズを通じて発見したサーヴァントの知られざる魅力や、記憶に残ったエピソードを紹介します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/user-stories",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function UserStoriesArticle() {
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
              体験談
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            クイズで発見した推しサーヴァントの新たな魅力
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-01-21">2026年1月21日</time>
            <span>•</span>
            <span>約8分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-8 text-sm sm:text-base leading-relaxed text-gray-800">
          <section>
            <p className="text-lg text-gray-700">
              FGOを何年もプレイしていても、意外と見落としている情報や、忘れてしまっている設定があります。
              このクイズサイトで遊んでみて、推しサーヴァントの新たな一面を発見したり、忘れていた思い出がよみがえったりした体験をまとめました。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              スキル効果から見えた戦略的設計
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                普段周回で使っているサーヴァントのスキル効果は覚えているつもりでしたが、改めてスキルクイズに挑戦してみると、
                細かい効果量や追加効果を正確には覚えていないことに気づきました。
                特に、「3ターン持続」なのか「1ターン」なのかといった持続ターン数は、実戦では重要なのに意外と記憶が曖昧でした。
              </p>
              <p>
                クイズで間違えた問題を振り返ると、そのサーヴァントがどういう役割を想定されて設計されているのかが見えてきます。
                例えば、攻撃力アップと防御力ダウンを両方持つサーヴァントは、自己完結型のアタッカーとして設計されていることが多く、
                逆に味方全体への強化効果が多いサーヴァントは、サポーター役として優秀だとわかります。
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-blue-900">
                  実際の体験：キャストリアのスキル構成に感動
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  毎日のように使っているキャストリアですが、スキルクイズで改めて効果を確認すると、
                  「NP付与」「Arts強化」「無敵付与」「攻撃力アップ」という、
                  周回にも高難易度にも対応できる完璧な構成になっていることに改めて気づきました。
                  このスキルセットの完成度の高さが、彼女が現在のトップサポーターである理由なんだと実感しました。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              プロフィールに隠された物語
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                プロフィールクイズでは、普段はあまり読み返さないプロフィール文と向き合うことになります。
                戦闘で活躍するサーヴァントであっても、プロフィールをじっくり読むと、
                生前の苦悩や人間関係、歴史的背景など、バトル以外の魅力がたくさん詰まっていることに気づきます。
              </p>
              <p>
                特に印象的だったのは、一人称の使い分けです。「我」「余」と呼ぶサーヴァントは王族や皇帝、
                「拙者」は武士、「僕」は若々しさや謙虚さを表現していると気づくと、
                キャラクター理解が一気に深まります。
              </p>
              <div className="rounded-2xl border border-green-100 bg-green-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-green-900">
                  実際の体験：アーラシュのプロフィールに涙
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  周回の味方として大活躍するアーラシュですが、プロフィールクイズで彼のプロフィールを読み返したとき、
                  「民を守るために自らの命を犠牲にした英雄」という背景を再確認しました。
                  宝具「ステラ」の演出が自爆なのは、まさにこの伝承を表現しているんだと理解が深まり、
                  普段の周回でも彼への感謝の気持ちが強くなりました。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              宝具名に込められた意味
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                宝具クイズでは、宝具名とその読み方（ルビ）が重要なヒントになります。
                宝具名の多くは、その英霊の伝説や使用していた武器の名前をそのまま使っているため、
                クイズを通じて歴史や神話の知識も自然と増えていきます。
              </p>
              <p>
                また、宝具のランク（A、A+、EXなど）や種別（対人、対軍、対城など）も、
                その英雄がどれだけの規模で活躍したかを示しています。
                対人宝具は一対一の戦闘に特化した逸話から、対軍宝具は大規模な戦闘での活躍から来ていることが多く、
                宝具の分類を見るだけでも、その英雄の生き様が想像できます。
              </p>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-purple-900">
                  実際の体験：ギルガメッシュの「王の財宝」の深さ
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  宝具クイズで「王の財宝（ゲート・オブ・バビロン）」について改めて考えたとき、
                  これが単なる武器庫ではなく、「すべての宝の原典」という概念的な宝具であることに気づきました。
                  ギルガメッシュが「最古の英雄王」として描かれる理由が、この宝具の設定に凝縮されているんだと理解できました。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              マイナーサーヴァントの再発見
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                クイズでは、普段使わないサーヴァントの問題も出題されます。
                正直、低レアリティのサーヴァントや、ガチャで引いたけど育てていないサーヴァントについては、
                ほとんど知識がありませんでした。
              </p>
              <p>
                しかし、クイズで間違えて解説を読むと、「こんな面白い設定があったのか」「このスキル、意外と有用では？」と、
                新たな発見があります。特に低レアサーヴァントは、コスト効率が良いスキル構成を持っていることが多く、
                クイズで知った後に実際に育ててみると、予想以上に活躍してくれることもあります。
              </p>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/30 p-5 mt-5">
                <h3 className="text-base font-bold text-amber-900">
                  実際の体験：スパルタクスの魅力に開眼
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  ★1のスパルタクスはずっと倉庫番でしたが、スキルクイズで「ガッツ付与」と「HPが減るほど攻撃力アップ」という
                  ユニークなスキル構成を知り、興味が湧いて育ててみました。
                  実際に使ってみると、低コストながら粘り強く戦える優秀なサーヴァントで、
                  今では種火周回の常連メンバーです。クイズがきっかけで新しい推しができました。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              記憶の整理とストーリーの再確認
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                FGOは長期運営のゲームで、過去のイベントやストーリーは膨大な量になっています。
                数年前に実装されたサーヴァントは、細かい設定を忘れてしまっていることも多いです。
              </p>
              <p>
                クイズを通じて改めて情報に触れることで、
                「あのストーリーでこんなセリフがあったな」「このサーヴァントはあのイベントで活躍していたな」と、
                忘れていた記憶がよみがえってきます。これは、単にデータを確認するだけでは得られない、
                クイズならではの体験だと思います。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              友達と盛り上がるきっかけに
            </h2>
            <div className="mt-4 space-y-4">
              <p>
                このクイズサイトを友人に紹介したところ、「誰が一番正解できるか」という話題で盛り上がりました。
                お互いに間違えた問題について「これ知らなかったの？」「逆にこれわかるの！？」と言い合うのが楽しく、
                FGOの話題がさらに広がりました。
              </p>
              <p>
                特に、推しサーヴァントの問題を正解できたときの達成感は格別です。
                「やっぱり推しのことは完璧に覚えてる！」という自信にもなりますし、
                逆に間違えたときは「もっと知らなきゃ」と思えます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 pb-2">
              まとめ：クイズは「学び直し」のツール
            </h2>
            <p className="mt-4">
              Fate/Grand Quizを遊んでみて感じたのは、これは単なるクイズサイトではなく、
              FGOの世界を「学び直す」ためのツールだということです。
            </p>
            <p className="mt-3">
              普段のプレイでは見落としがちな設定やストーリーの深さを再確認でき、
              マイナーなサーヴァントの魅力に気づくきっかけにもなります。
              何より、推しサーヴァントへの愛がより深まるのが嬉しいポイントです。
            </p>
            <p className="mt-3">
              FGOをプレイしているすべてのマスターに、ぜひ一度遊んでみてほしいと思います。
              きっと、新しい発見があるはずです。
            </p>
          </section>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            あなたも新しい発見をしてみませんか？
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            記事で紹介したような体験を、ぜひあなた自身でも味わってみてください。
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
              プロフィールクイズ
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              宝具クイズ
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
