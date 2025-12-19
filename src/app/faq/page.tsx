import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "よくある質問（FAQ）";
const pageDescription =
  "Fate/Grand Quizの使い方や、クイズの仕組みについてよくある質問をまとめました。サイトの利用方法や問題の出題傾向、技術的な情報などを解説します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/faq",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

const faqCategories = [
  {
    category: "サイト全般について",
    questions: [
      {
        q: "Fate/Grand Quizはどんなサイトですか？",
        a: "Fate/Grand Orderのサーヴァントに関する知識を試せる非公式のファンメイドクイズサイトです。スキル、プロフィール、宝具の3種類のクイズモードを用意しており、気軽に遊びながらFGOの世界観を楽しめます。すべて無料で利用でき、会員登録も不要です。",
      },
      {
        q: "公式サイトですか？",
        a: "いいえ、Fate/Grand Quizは非公式のファンサイトです。TYPE-MOONやAniplexとは一切関係ありません。Atlas Academy APIを利用してサーヴァントデータを取得していますが、ゲーム本編とは独立したサービスです。",
      },
      {
        q: "利用料金はかかりますか？",
        a: "完全無料です。すべてのクイズモードを制限なく遊べます。会員登録やログインも不要で、アクセスするだけですぐにクイズを始められます。",
      },
      {
        q: "スマートフォンでも遊べますか？",
        a: "はい、スマートフォン・タブレット・PCなど、あらゆるデバイスで快適に遊べるようレスポンシブデザインを採用しています。外出先のスキマ時間にも気軽にクイズに挑戦できます。",
      },
    ],
  },
  {
    category: "クイズの遊び方",
    questions: [
      {
        q: "どのクイズモードから始めればいいですか？",
        a: "初めての方には「スキルクイズ」がおすすめです。スキル効果は周回で見慣れている方も多く、直感的に答えやすい傾向があります。設定やストーリーが好きな方は「プロフィールクイズ」、宝具演出の記憶を試したい方は「宝具クイズ」を選ぶと良いでしょう。どのモードも1問ずつ遊べるので、気になったものから試してみてください。",
      },
      {
        q: "問題は何問ありますか？",
        a: "各クイズモードとも、現時点で実装されているサーヴァント数に応じた膨大な問題数があります。同じサーヴァントが連続で出題されにくい仕組みを採用しているため、飽きずに長く遊べます。問題は「次の問題へ」ボタンを押すたびにランダムで出題されます。",
      },
      {
        q: "間違えたらどうなりますか？",
        a: "間違えても特にペナルティはありません。正解が表示され、そのサーヴァントの簡単な解説が読めます。間違えた問題を通じて新しいサーヴァントを知るきっかけにもなるので、気軽に挑戦してください。",
      },
      {
        q: "得点やランキング機能はありますか？",
        a: "現在のバージョンでは、得点やランキング機能は実装していません。本サイトは競争よりも「自分の知識を確かめる」「新しい発見を楽しむ」ことを重視しています。将来的に統計機能を追加する可能性はありますが、基本的には自分のペースで楽しむスタイルを大切にしています。",
      },
      {
        q: "問題をスキップできますか？",
        a: "現在のバージョンではスキップ機能はありません。ただし、回答後すぐに「次の問題へ」ボタンで次の問題に進めるため、遊びやすさを損なわない設計になっています。",
      },
    ],
  },
  {
    category: "問題内容について",
    questions: [
      {
        q: "どのサーヴァントが出題されますか？",
        a: "Fate/Grand Orderに登場するすべてのサーヴァント（期間限定、イベント配布、コラボサーヴァントを含む）が出題対象です。レアリティによる偏りもなく、★1から★5まで幅広く出題されます。",
      },
      {
        q: "データはいつ更新されますか？",
        a: "新サーヴァント実装や幕間の物語、強化クエストなどでスキルや宝具が追加・変更された際に、できるだけ速やかにデータを更新しています。Atlas Academy APIを利用しているため、公式の更新に準じたタイミングで反映されます。",
      },
      {
        q: "ネタバレはありますか？",
        a: "あります。クイズの性質上、未実装章やイベントのネタバレを含む可能性があります。特にプロフィールクイズではストーリーに深く関わる情報が出題されることがあるため、ネタバレを避けたい方はご注意ください。",
      },
      {
        q: "難易度は選べますか？",
        a: "現在のバージョンでは難易度選択機能はありません。すべての問題がランダムに出題されるため、簡単な問題から難問まで幅広く楽しめます。今後のアップデートで難易度フィルター機能を追加する可能性はあります。",
      },
    ],
  },
  {
    category: "技術的な質問",
    questions: [
      {
        q: "どのブラウザで動作しますか？",
        a: "Chrome、Safari、Firefox、Edgeなど、主要な最新ブラウザすべてで動作します。古いブラウザでは一部機能が正しく動作しない場合がありますので、最新版へのアップデートをおすすめします。",
      },
      {
        q: "データはどこから取得していますか？",
        a: "Atlas Academy APIという、FGOのゲームデータをまとめた非公式APIを利用しています。スキル効果、プロフィール、宝具情報などはすべてこのAPIから取得しており、信頼性の高いデータソースです。",
      },
      {
        q: "オフラインでも遊べますか？",
        a: "いいえ、インターネット接続が必要です。問題データはサーバーから取得するため、オフライン環境では利用できません。",
      },
      {
        q: "プライバシーは保護されていますか？",
        a: "はい。当サイトではログイン機能がないため、個人を特定できる情報は一切収集していません。Google Analyticsによるアクセス解析とGoogle AdSenseによる広告配信のためにCookieを使用していますが、これらは匿名化されたデータです。詳しくはプライバシーポリシーをご確認ください。",
      },
    ],
  },
  {
    category: "その他",
    questions: [
      {
        q: "問題や不具合を見つけたらどうすればいいですか？",
        a: "お問い合わせページから報告をお願いします。誤字脱字、データの誤り、表示の不具合など、どんな些細なことでも構いません。皆さまからのフィードバックがサイト改善の大きな力になります。",
      },
      {
        q: "サイトを友達に紹介してもいいですか？",
        a: "もちろんです！SNSでのシェアも大歓迎です。FGOが好きな友達と一緒にクイズを楽しんでいただければ嬉しいです。",
      },
      {
        q: "今後の予定や新機能はありますか？",
        a: "ユーザーの皆さまからのフィードバックを参考に、新しいクイズモードの追加や、統計機能、難易度フィルターなどの機能追加を検討しています。サイトを継続的に改善していく予定ですので、ぜひ定期的にアクセスしてみてください。",
      },
      {
        q: "サイトの運営者は誰ですか？",
        a: "個人のFGOファンが趣味で運営しています。Fate/Grand Orderをもっと楽しんでもらいたいという思いから、このクイズサイトを立ち上げました。公式とは無関係の非営利プロジェクトです。",
      },
    ],
  },
] as const;

export default function FAQPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            FAQ
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            よくある質問
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Fate/Grand Quizの使い方やクイズの仕組みについて、
            <br />
            よくいただく質問をまとめました。
          </p>
        </header>

        <section className="mt-10 max-w-4xl mx-auto space-y-10">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2">
                {category.category}
              </h2>
              <div className="mt-6 space-y-6">
                {category.questions.map((item, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/20 p-5 sm:p-6 shadow-sm"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-start gap-2">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                        Q
                      </span>
                      <span className="flex-1">{item.q}</span>
                    </h3>
                    <div className="mt-4 flex items-start gap-2">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold">
                        A
                      </span>
                      <p className="flex-1 text-sm sm:text-base leading-relaxed text-gray-700">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900">
            その他のご質問はお問い合わせから
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            この FAQ
            に載っていない質問や、不具合の報告などは、お問い合わせページからご連絡ください。
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              お問い合わせページへ
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/quiz"
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              クイズモード一覧
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
