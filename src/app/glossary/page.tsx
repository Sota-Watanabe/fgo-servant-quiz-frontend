import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

export const dynamic = "force-static";

const pageTitle = "FGO用語集 - クイズで使われる基本用語を解説";
const pageDescription =
  "Fate/Grand Order のクイズに挑戦する前に知っておきたい基本用語を解説。サーヴァント、スキル、宝具、クラスなど、初心者にもわかりやすく説明します。";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/glossary",
  ogImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
});

const glossaryTerms = [
  {
    term: "サーヴァント",
    reading: "Servant",
    description:
      "英霊として召喚された歴史上・神話上の英雄たち。FGOの主要なキャラクターで、それぞれが固有のスキルや宝具を持ちます。各サーヴァントには真名（本名）があり、クイズではこの真名を当てることが目的です。",
  },
  {
    term: "真名",
    reading: "しんめい / True Name",
    description:
      "サーヴァントの本当の名前。歴史や神話における実際の名前を指します。例えば「アルトリア・ペンドラゴン」や「ギルガメッシュ」など。クイズでは、与えられた情報からこの真名を推理します。",
  },
  {
    term: "スキル",
    reading: "Skill",
    description:
      "サーヴァントが使える特殊能力。攻撃力アップ、防御力アップ、回復、NPチャージなど様々な効果があります。各サーヴァントは通常3つのスキルを持ち、それぞれに固有の名前と効果が設定されています。",
  },
  {
    term: "宝具",
    reading: "ほうぐ / Noble Phantasm",
    description:
      "サーヴァントの象徴的な必殺技。歴史や伝説の中でその英雄が使った武器や能力が具現化したものです。「エクスカリバー」や「エヌマ・エリシュ」など、印象的な名前とともに強力な効果を発揮します。宝具にはランク（A++、EXなど）と種別（対人、対軍など）が設定されています。",
  },
  {
    term: "クラス",
    reading: "Class",
    description:
      "サーヴァントの職業・役割を示す分類。セイバー、アーチャー、ランサー、ライダー、キャスター、アサシン、バーサーカーの基本7クラスに加え、ルーラー、アヴェンジャー、ムーンキャンサー、アルターエゴ、フォーリナーなどのエクストラクラスが存在します。",
  },
  {
    term: "レアリティ",
    reading: "Rarity",
    description:
      "サーヴァントの希少度を★の数で表したもの。★1から★5まであり、一般的に★の数が多いほど強力ですが、低レアリティでも活躍できるサーヴァントは多数います。",
  },
  {
    term: "カード種別",
    reading: "Card Type",
    description:
      "攻撃やスキルの種類を示す分類。Quick（緑）、Arts（青）、Buster（赤）の3種類があり、それぞれ異なる特性を持ちます。宝具にもこれらのカード属性が設定されており、戦術に大きく影響します。",
  },
  {
    term: "NP（ノーブルファンタズム）",
    reading: "Noble Phantasm Gauge",
    description:
      "宝具を発動するために必要なゲージ。攻撃やArtsカードの使用、特定のスキルなどでチャージされます。100%に達すると宝具を使用でき、最大300%まで溜めることが可能です。",
  },
  {
    term: "プロフィール",
    reading: "Profile",
    description:
      "サーヴァントの身長、体重、出典、好きなもの、苦手なものなどの基本情報や、その英雄の生涯や性格についての説明文。マテリアルとも呼ばれます。物語への理解を深める重要な要素です。",
  },
  {
    term: "ステータス",
    reading: "Status",
    description:
      "HP（体力）、ATK（攻撃力）、筋力、耐久、敏捷、魔力、幸運、宝具ランクなど、サーヴァントの基礎能力を数値やランクで示したもの。これらの情報もサーヴァントを特定する手がかりになります。",
  },
  {
    term: "スター",
    reading: "Critical Star",
    description:
      "クリティカル攻撃を発生させやすくするアイテム。Quickカードやスキル効果で獲得でき、集まったカードはクリティカル率が上昇します。スキル効果の中にはスター発生率やスター集中度を操作するものもあります。",
  },
  {
    term: "バフ / デバフ",
    reading: "Buff / Debuff",
    description:
      "バフは味方を強化する効果、デバフは敵を弱体化させる効果の総称。攻撃力アップ、防御力ダウン、クリティカル威力アップなど、様々な種類が存在し、スキルや宝具で付与されます。",
  },
  {
    term: "対人 / 対軍 / 対城 / 対界",
    reading: "たいじん / たいぐん / たいじょう / たいかい",
    description:
      "宝具の種別を示す分類。対人は個人を対象とした宝具、対軍は軍団を対象とした宝具、対城は城塞を破壊できる規模の宝具、対界は世界そのものに影響を与える宝具を指します。規模が大きいほど強力な傾向があります。",
  },
  {
    term: "霊基再臨",
    reading: "れいきさいりん / Ascension",
    description:
      "サーヴァントを段階的に強化すること。再臨を重ねることでレベル上限が上がり、新しいスキルが解放されたり、イラストが変化したりします。最終再臨まで育てるとそのサーヴァントの真の力を引き出せます。",
  },
  {
    term: "マスター",
    reading: "Master",
    description:
      "FGOの主人公であり、サーヴァントを召喚・指揮する存在。プレイヤー自身を指すこともあります。本サイトでは、クイズに挑戦するプレイヤーの皆さんをマスターとお呼びしています。",
  },
  {
    term: "カルデア",
    reading: "Chaldea",
    description:
      "人理継続保障機関フィニス・カルデアの略称。FGOの物語の舞台となる組織で、人類の未来を守るためにマスターとサーヴァントたちが活動する拠点です。",
  },
  {
    term: "特攻",
    reading: "とっこう / Super Effective",
    description:
      "特定の属性や状態の敵に対してダメージが増加する効果。「神性特攻」「悪特攻」「混沌特攻」など、サーヴァントの逸話や性格に関連した特攻が設定されていることが多く、クイズでも重要なヒントになります。",
  },
  {
    term: "チャージ減 / 強化解除",
    reading: "Charge Reduction / Buff Removal",
    description:
      "敵のNPゲージを減少させる効果（チャージ減）や、敵にかかった強化効果を打ち消す効果（強化解除）。高難易度クエストで重要な役割を果たすスキルで、これらを持つサーヴァントは重宝されます。",
  },
] as const;

export default function GlossaryPage() {
  return (
    <PageLayout>
      <article className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 sm:p-10">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500">
            GLOSSARY
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
            FGO用語集
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Fate/Grand Order のクイズに登場する用語を解説します。
            <br />
            初めてFGOに触れる方や、久しぶりに遊ぶ方の参考にしてください。
          </p>
        </header>

        <section className="mt-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {glossaryTerms.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-baseline gap-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {item.term}
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {item.reading}
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900">
            用語を理解したらクイズに挑戦
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            これらの用語を頭に入れておくと、クイズがより楽しめます。
            <br />
            準備ができたら、好きなクイズモードを選んで遊んでみてください。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz/skill"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              スキルクイズ
            </Link>
            <Link
              href="/quiz/profile"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              プロフィールクイズ
            </Link>
            <Link
              href="/quiz/np"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              宝具クイズ
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="/quiz"
              className="text-sm text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
            >
              クイズモード一覧に戻る
            </Link>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
