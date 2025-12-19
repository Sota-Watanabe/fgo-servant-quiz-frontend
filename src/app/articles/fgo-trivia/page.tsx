import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "知っておくと楽しい！FGOの豆知識20選";
const pageDescription =
  "FGOをプレイする上で知っておくとゲームがもっと楽しくなる豆知識や裏設定、小ネタを紹介します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles/fgo-trivia",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

export default function FGOTriviaArticle() {
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
              豆知識
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
            知っておくと楽しい！FGOの豆知識20選
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2025-12-19">2025年12月19日</time>
            <span>•</span>
            <span>約6分で読めます</span>
          </div>
        </header>

        <div className="mt-8 max-w-3xl mx-auto space-y-6 text-sm sm:text-base">
          {[
            {
              number: 1,
              title: "サーヴァントの真名隠し",
              content:
                "聖杯戦争では、真名が判明すると弱点や伝承から対策を立てられてしまうため、多くのサーヴァントは真名を隠します。これはFateシリーズの重要な戦術要素です。",
            },
            {
              number: 2,
              title: "クラススキルの意味",
              content:
                "セイバーの「対魔力」、アーチャーの「単独行動」など、クラスごとに固有のスキルがあります。これはそのクラスの特性を表しています。",
            },
            {
              number: 3,
              title: "レアリティと強さの関係",
              content:
                "FGOでは低レアリティサーヴァントでも活躍できる設計になっています。レアリティは「知名度」や「伝説の重み」を反映したもので、必ずしも実力とは一致しません。",
            },
            {
              number: 4,
              title: "宝具のカード種別",
              content:
                "Buster宝具は高火力、Arts宝具はNP回収、Quick宝具はスター生成に優れるという傾向がありますが、これはそのサーヴァントの戦闘スタイルを反映しています。",
            },
            {
              number: 5,
              title: "マテリアルの重要性",
              content:
                "各サーヴァントのマテリアル（資料）には、ゲーム内では語られない詳細な設定が記載されています。深く知りたい方は必読です。",
            },
            {
              number: 6,
              title: "霊基再臨とイラスト変化",
              content:
                "霊基再臨ごとにイラストが変化するのは、サーヴァントの成長や物語の進展を視覚的に表現するためです。",
            },
            {
              number: 7,
              title: "絆レベルと絆礼装",
              content:
                "絆レベル10で獲得できる絆礼装には、そのサーヴァントの核心に迫るストーリーが描かれています。",
            },
            {
              number: 8,
              title: "幕間の物語",
              content:
                "幕間の物語では、各サーヴァントの個人的なエピソードや内面の葛藤が描かれます。スキル強化や宝具強化の機会でもあります。",
            },
            {
              number: 9,
              title: "限定サーヴァントの復刻",
              content:
                "期間限定サーヴァントは定期的に復刻されますが、タイミングを逃すと次の機会まで待つ必要があります。",
            },
            {
              number: 10,
              title: "概念礼装の重要性",
              content:
                "概念礼装はサーヴァントの性能を大きく左右します。適切な礼装選びが攻略の鍵となります。",
            },
            {
              number: 11,
              title: "クラス相性",
              content:
                "三騎士（セイバー・アーチャー・ランサー）と四騎（ライダー・キャスター・アサシン・バーサーカー）の間には明確な相性関係があります。",
            },
            {
              number: 12,
              title: "隠れ特性",
              content:
                "サーヴァントには「竜」「人類の脅威」「神性」などの隠れ特性があり、特定の宝具やスキルで大ダメージを受けることがあります。",
            },
            {
              number: 13,
              title: "ボイス収録の規模",
              content:
                "FGOのサーヴァントは膨大な量のボイスが収録されており、イベントやシナリオごとに新録されることもあります。",
            },
            {
              number: 14,
              title: "期間限定イベント",
              content:
                "イベントストーリーは本編と同等以上のクオリティを持ち、FGOの世界観を大きく広げています。",
            },
            {
              number: 15,
              title: "コラボイベント",
              content:
                "他作品とのコラボイベントでは、そのユニバースのキャラクターがサーヴァントとして実装されることがあります。",
            },
            {
              number: 16,
              title: "ゲーム外メディア展開",
              content:
                "FGOはアニメ、漫画、舞台など多様なメディア展開をしており、ゲーム本編を補完するストーリーが楽しめます。",
            },
            {
              number: 17,
              title: "周回効率の重要性",
              content:
                "素材集めやQP稼ぎには効率的な周回編成が重要です。システム編成の構築が上級者への第一歩です。",
            },
            {
              number: 18,
              title: "高難易度クエスト",
              content:
                "イベントの高難易度クエストは、編成や戦略を練る必要があり、やりごたえのある挑戦が楽しめます。",
            },
            {
              number: 19,
              title: "コミュニティの活発さ",
              content:
                "FGOコミュニティは非常に活発で、攻略情報やファンアート、二次創作が盛んです。",
            },
            {
              number: 20,
              title: "長期運営の奥深さ",
              content:
                "2015年のサービス開始から長期運営されており、膨大なストーリーとキャラクターが蓄積されています。新規プレイヤーも追いつきやすい設計です。",
            },
          ].map((trivia) => (
            <div
              key={trivia.number}
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                  {trivia.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    {trivia.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {trivia.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900">
            豆知識を活かしてクイズに挑戦
          </h2>
          <p className="mt-3 text-sm text-gray-700">
            これらの豆知識を知っていると、クイズでの推理がより楽しくなります。さっそくクイズに挑戦してみましょう！
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
        </section>
      </article>
    </PageLayout>
  );
}
