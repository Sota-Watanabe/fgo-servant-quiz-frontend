import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

const pageTitle = "宝具クイズの楽しみ方と世界観解説";
const pageDescription =
  "Fate/Grand Quiz の宝具クイズについて、制作の目的や見どころ、FGO における宝具の役割を丁寧に解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/np/description",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function NoblePhantasmQuizDescriptionPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            NOBLE PHANTASM QUIZ GUIDE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            宝具クイズの楽しみ方と、FGO における宝具の魅力
          </h1>
        </header>

        <section className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            1. Fate/Grand Quiz と宝具クイズの目的
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            Fate/Grand Quiz は、「Fate/Grand Order」のバトルやストーリーで印象に残ったシーンを、
            クイズという形で振り返ることをコンセプトにしたファンサイトです。
            周回や高難易度クエスト、イベントのボス戦など、
            マスターの記憶にはさまざまな宝具演出が刻まれているはずです。
            宝具クイズは、その記憶を呼び起こしながら、
            宝具名やランク、種別、カード属性、解説文といった情報から
            サーヴァントの真名を推理していくモードとして設計されています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            宝具は、サーヴァントの象徴ともいえる存在です。
            一振りの剣や一つの宝物であったり、あるいは概念そのものを具現化した力であったりと、
            その姿は多種多様です。宝具クイズでは、派手な映像や演出ではなく、
            「名前」と「説明文」という言葉の情報を中心に扱います。
            だからこそ、日頃から宝具演出を見ながら感じていた印象や、
            ストーリー中で語られた宝具の性質に関する記憶が、静かに呼び起こされるはずです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            ほかのモードであるスキルクイズやプロフィールクイズが、
            日常的なバトル運用や人物像の掘り下げに焦点を当てているのに対して、
            宝具クイズは「クライマックスの一撃」を味わい直すようなモードと言えます。
            宝具名の語感やルビ、ランクや種別の違いを手がかりにしながら、
            「この一撃はどの英雄のものか」を探っていく過程は、
            作品全体のクライマックスシーンを振り返る旅にもつながります。
            ゲームをまだ遊んだことがない方にとっても、宝具説明文を読むことで、
            この世界にどのような力や逸話が存在するのかをイメージしやすくなるはずです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            本サイトの宝具クイズは、難問を解けたときの達成感はもちろん、
            正解後に改めて宝具の設定を読み返すことで、
            かつて心を動かされたシーンにもう一度出会えることを目指しています。
            「この宝具はこういう背景があったのか」と気づいたり、
            「別のサーヴァントの宝具と似たテーマを持っている」と感じたりしたとき、
            作品世界の広がりを改めて感じていただけるでしょう。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            2. 宝具とは？ ― 英雄の物語が結晶した一撃
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            FGO における宝具は、サーヴァントが持つ象徴的な力や逸話を、
            一つの技・現象として表現した存在です。
            それは伝説の武器であったり、特定の戦術や軍勢を象徴する概念であったり、
            あるいは精神性や理想そのものが具現化した力であることもあります。
            宝具の名前やルビには、その英雄が歩んできた物語や、
            どのような在り方を貫いたのかというテーマが込められていることが多く、
            説明文を読み解くことで、その背景にある歴史や物語への理解が深まります。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            ゲーム上では、宝具は強力な必殺技として扱われますが、
            その効果は単なるダメージ量の多さだけでは語りつくせません。
            敵単体に集中する一撃は、英雄が人生をかけて討つべき相手を象徴しているかもしれませんし、
            味方全体を強化する宝具は、人々を鼓舞し導いた人物像をよく表しているかもしれません。
            また、一見するとシンプルな攻撃宝具でも、
            説明文をよく読むと、特定の状況下で真価を発揮するよう設計されていることもあり、
            英雄の戦い方や信念がそこに反映されていると感じられます。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            宝具クイズでは、こうした宝具の性質にじっくり向き合ってもらえるよう、
            ランクや種別、カード属性といったゲーム的な情報と、
            説明文に込められた物語的な情報の両方を提示しています。
            ある宝具のランクの高さからは、その英雄がどれほど特別な存在として語り継がれてきたかがうかがえますし、
            種別やカード属性からは、どのような戦場で真価を発揮する力なのかを想像できます。
            さらに、説明文の一文一文を追っていくと、
            その宝具がどのような覚悟や願いから生まれたのかが見えてくることもあります。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            宝具を見ることは、英雄の物語の「結晶」を見つめることでもあります。
            同じ攻撃宝具であっても、その裏側にはまったく異なる歴史や心情が横たわっています。
            クイズを通じて宝具の説明文やステータスに触れることで、
            まだ出会っていない物語へと興味が広がったり、
            すでに知っているエピソードを新たな角度から眺め直したりするきっかけになればと考えています。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            3. クイズはこちらから ― 宝具の名と物語を手がかりに真名を当てよう
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            ここまで宝具の役割や魅力に触れて、「あの演出や台詞をもう一度思い出したい」と感じていただけたなら、
            ぜひ宝具クイズ本編に挑戦してみてください。
            宝具名の響きやルビ、ランク・種別・カード属性、そして解説文を丁寧に読み解いていくなかで、
            かつて心に残った戦いの場面がよみがえってくるかもしれません。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-indigo-700 font-semibold">
            宝具に込められた物語を手がかりに、どのサーヴァントの一撃なのかを推理する時間は、
            作品世界をもう一度旅するようなひとときでもあります。
            あなたの記憶と想像力で、宝具クイズの世界を存分に味わってください。
          </p>
        </section>
      </article>
    </PageLayout>
  );
}

