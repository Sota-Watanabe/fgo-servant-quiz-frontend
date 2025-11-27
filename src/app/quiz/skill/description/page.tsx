import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

const pageTitle = "スキルクイズの遊び方と世界観解説";
const pageDescription =
  "Fate/Grand Quiz のスキルクイズについて、制作の目的や楽しみ方、FGO におけるスキルの役割を丁寧に解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/skill/description",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function SkillQuizDescriptionPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            SKILL QUIZ GUIDE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            スキルクイズの楽しみ方と、FGO におけるスキルの魅力
          </h1>
        </header>

        <section className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            1. Fate/Grand Quiz とスキルクイズの目的
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            Fate/Grand Quiz は、「Fate/Grand Order」をもっと深く楽しみたいマスター向けに作られた
            ファンメイドのクイズサイトです。日々の周回やストーリー、イベントで自然と身についていく知識を、
            ちょっとしたゲーム感覚で確かめてもらうことを目的にしています。プレイヤー同士で点数を競うことよりも、
            「自分はこのサーヴァントをここまで覚えていたんだ」「このテキスト、どこかで見たことがある」
            という小さな発見を積み重ねていくことを大切にしています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            なかでもスキルクイズは、FGO の中核システムである「スキル効果テキスト」だけを手がかりに、
            サーヴァントの真名を推理していくモードです。スキルのアイコンや演出は一切表示されず、
            画面に並ぶのは説明文とルビ表記のみ。そのため、周回編成で何度も目にしてきた効果文や、
            インパクトの強いスキル構成がそのまま記憶のフックとして機能します。
            ちょっとしたスキマ時間に 1 問だけ解くこともできますし、
            連続して遊んで「自分の得意なクラスやカードタイプはどこか」を探ることもできます。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            他のモードであるプロフィールクイズや宝具クイズは、物語性や背景設定に重きを置いた出題が中心ですが、
            スキルクイズはより「実戦的な記憶力」を問う内容になっています。
            実際のバトル運用を通して身についた感覚を頼りに答えを導き出すため、
            攻略好きのマスターや、高難易度クエストに挑戦するのが好きな方ほど熱中しやすいモードといえるでしょう。
            一方で、ゲームをまだプレイしていない方にとっても、
            スキル説明文のバリエーションを眺めるだけで「この作品にはこんな戦い方があるのか」と
            雰囲気を感じていただける読み物として楽しめることを意識しています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            本サイトでは、難解な専門用語や細かな数値を覚えているかどうかよりも、
            「スキルからサーヴァント像を想像する楽しさ」を味わってもらうことを大切にしています。
            正解できなかったとしても、解説を読みながら「あのシーンでこのスキルを使っていたな」と
            物語を思い出していただければ、それだけでこのクイズの役割は果たせていると考えています。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            2. スキルとは？ ― サーヴァントの個性を映す戦術の顔
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            FGO におけるスキルは、サーヴァントが持つ「固有の戦術」や「逸話に基づく特性」を、
            バトル画面で分かりやすく表現するための要素です。攻撃力や防御力を上げるだけでなく、
            味方の支援、スター操作、NP 獲得、状態異常の付与や解除など、
            役割は多岐にわたります。クラスやレアリティが似ていても、
            スキル構成が違えば得意とする局面も大きく変わり、同じ編成でもまったく別の戦い方が生まれます。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            また、スキルの名前や効果文には、そのサーヴァントの出典作品での活躍や、
            史実・伝承におけるエピソードがさりげなく織り込まれていることが少なくありません。
            たとえば、敵の妨害を得意とするスキル構成は、策略家として知られる人物像を想起させますし、
            味方全体を守り支えるようなスキルが並んでいれば、
            仲間思いの性格や、人々を守護する立場にあった英雄像が見えてきます。
            テキストだけを追っていくと、バトルでの使い勝手を超えて、
            一人ひとりのサーヴァントがどのような「生き方」をしてきたのかを想像できるのが面白いところです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            スキルクイズでは、こうしたスキルの側面にじっくり向き合えるよう、
            効果テキストをそのまま提示する形式を採用しています。
            あるスキルでは単独で完結した役割が与えられていたり、
            別のスキルでは宝具や他スキルとの連携が前提になっていたりと、
            構成の差異からサーヴァントの戦い方が浮かび上がってきます。
            何度も目にしてきた効果文も、改めて読み直すと
            「なぜこのスキル名なのか」「どの逸話が反映されているのか」といった新たな発見につながるはずです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            スキルを見ることは、そのサーヴァントの「戦術の履歴書」を読むことに近いのかもしれません。
            攻撃寄りのスキルが多いサーヴァントは前線で戦うことを好み、
            サポート寄りのスキルが並ぶサーヴァントは、味方を支えながら戦場を整える役目を担っています。
            そうした個性を意識しながらクイズに挑戦すると、
            たとえ正解できなかったとしても、「このスキル構成なら、こういう立ち位置のキャラクターかも」と
            自分なりの解釈が広がり、FGO の世界が一段と身近に感じられるでしょう。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            3. クイズはこちらから ― 記憶と想像力でスキルを読み解こう
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            ここまで読んで、「スキルのテキストを改めて味わってみたい」と感じていただけたなら、
            ぜひ実際のスキルクイズに挑戦してみてください。難問に正解する爽快感はもちろん、
            間違えた問題の解説を通じて、新たなお気に入りサーヴァントと出会えるかもしれません。
            一問ごとに区切りよく遊べるので、ストーリーの合間や周回の休憩時間にもぴったりです。
            あなたの記憶と想像力で、スキルから真名を導き出す小さな推理劇を楽しんでいただければ幸いです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-indigo-700 font-semibold">
            準備ができたら、スキルクイズ本編へ進んでください。あなたのマスターとしての経験が、
            どれだけスキルに刻み込まれているか、一緒に確かめていきましょう。
          </p>
        </section>
      </article>
    </PageLayout>
  );
}

