import type { Metadata } from "next";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

const pageTitle = "プロフィールクイズの楽しみ方と世界観解説";
const pageDescription =
  "Fate/Grand Quiz のプロフィールクイズについて、制作の目的や読み物としての魅力、FGO におけるプロフィールの役割を丁寧に解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/quiz/profile/description",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function ProfileQuizDescriptionPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            PROFILE QUIZ GUIDE
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            プロフィールクイズの楽しみ方と、FGO におけるプロフィールの魅力
          </h1>
        </header>

        <section className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            1. Fate/Grand Quiz とプロフィールクイズの目的
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            Fate/Grand Quiz は、「Fate/Grand Order」の物語やキャラクターが好きなマスターに向けて、
            読書感覚で楽しめるクイズ体験を届けたいという思いから生まれたサイトです。
            日々のストーリー更新やイベントで触れてきた膨大なテキストの中には、
            サーヴァント一人ひとりの生き方や価値観が丁寧に描き込まれています。
            それらを改めて振り返り、「あの一文は誰のものだっただろう」と思い出していく過程そのものを、
            楽しんでもらうことを目指しています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            プロフィールクイズは、マテリアルに相当するプロフィール本文や基本ステータス、
            関連情報などを手がかりにサーヴァントの真名を推理していくモードです。
            バトルの強さだけでは語りきれない、そのキャラクターの信念・人間関係・歴史的背景といった情報が、
            文章の形でまとめられているのが大きな魅力です。クイズとしてはもちろん、
            単純にテキストを読み進めるだけでも、世界観の奥行きに触れられるような構成を意識しています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            他のモードであるスキルクイズや宝具クイズが「戦い方の特徴」や「必殺技の印象」に焦点を当てているのに対して、
            プロフィールクイズはより人物描写に寄り添った出題が中心です。
            性格や口調の特徴、どのような過去を歩んできたか、どの時代や地域と縁が深いか――
            そうした情報を手がかりに真名を探ることで、
            一人のサーヴァントを立体的に捉え直すきっかけになればと考えています。
            ゲームをまだ触っていない方であっても、「こういう英雄や人物が物語に登場するのか」と
            世界観の輪郭を感じられる読み物として楽しめるはずです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            このクイズは、正解・不正解だけで評価されるテストではありません。
            「この一文はあのシナリオのあの場面だったかもしれない」と思い出したり、
            「こんな背景を持つサーヴァントがいたのか」と新しく興味を持ったりすること自体が、
            すでに物語との再会になっています。
            本サイトでは、そうした再会のきっかけを少しでも増やせるよう、
            できるだけ読みごたえのある出題と解説を心がけています。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            2. プロフィールとは？ ― 物語と人物像を映す鏡
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            FGO におけるプロフィールは、サーヴァントの戦闘能力だけでは表現しきれない情報を、
            文章として補完するための重要な要素です。身長や体重といった基本的なデータから、
            好きなもの・苦手なもの、口調の特徴、他のサーヴァントとの関係性まで、
            さまざまな情報がコンパクトにまとめられています。
            それらを読み解くことで、バトルの演出だけでは分からなかった一面が見えてくるのが魅力です。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            プロフィール本文には、出典となる物語での活躍や、
            歴史・伝承における立ち位置が、解説的な文章として整理されています。
            たとえば、あるサーヴァントのプロフィールには、
            人々を導く役割を担っていたことがにじむ記述が並んでいるかもしれませんし、
            別のサーヴァントのプロフィールには、
            過酷な運命を背負いながらも前向きに歩もうとする姿勢が表れているかもしれません。
            それぞれの文章を丁寧に読むことで、「この人はどんな願いを抱いて召喚に応じたのか」といった想像が膨らみます。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            また、プロフィールのステータスや関連情報は、
            バトルでの印象との「ギャップ」を楽しむ材料にもなります。
            戦闘では冷静沈着に見えるサーヴァントが、実は意外な趣味を持っていたり、
            ひそかに尊敬している人物が記されていたりすると、
            そのキャラクターに対する親近感がぐっと増していきます。
            プロフィールクイズでは、そうした文章のニュアンスやさりげない一言を頼りに真名を推理していくため、
            キャラクターの「内面」に目を向けるきっかけを提供できればと考えています。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            プロフィールを読むことは、サーヴァントと静かに向き合う時間を持つことでもあります。
            たとえまだ自分のカルデアに来ていないサーヴァントであっても、
            そのプロフィールに触れることで、いつか召喚できたときの喜びはきっと大きくなるでしょう。
            クイズを通じて、そうした「少し先の出会い」への期待も高めてもらえれば嬉しく思います。
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            3. クイズはこちらから ― 読み解いた人物像で真名を当てよう
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800">
            ここまでプロフィールの役割や魅力に目を通していただき、
            少しでも「文章からサーヴァント像を思い浮かべるのが楽しそうだ」と感じていただけたなら、
            ぜひプロフィールクイズ本編に挑戦してみてください。
            正解を重ねることで、物語や設定に対する理解が自然と深まり、
            物語を読み返すときの視点も変わってくるはずです。
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-indigo-700 font-semibold">
            あなたが読み解いた人物像が、どのサーヴァントへとつながっていくのか。
            ささやかな推理と再発見の時間を、プロフィールクイズで一緒に楽しんでいきましょう。
          </p>
        </section>
      </article>
    </PageLayout>
  );
}

