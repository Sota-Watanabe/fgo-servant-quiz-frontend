import {
  buildQuizSeoWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import SkillQuizClient from "./SkillQuizClient";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_ROBOTS,
  DEFAULT_SOCIAL_IMAGE_PATH,
} from "@/utils/seo";
import SeoHead from "@/app/components/SeoHead";

const pageTitle = "スキルクイズ";
const pageDescription =
  "スキル効果テキストだけをヒントにサーヴァントの真名を推理するチャレンジモード。最大3つのスキルを読み解いて記憶力を試そう。";

export const dynamic = "force-dynamic";

type SkillQuizPageProps = {
  searchParams?: QuizMetadataSearchParams | Promise<QuizMetadataSearchParams>;
};

export default async function SkillQuizPage({
  searchParams,
}: SkillQuizPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const seo = buildQuizSeoWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/skill",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "skill",
    searchParams: resolvedSearchParams,
  });

  return (
    <>
      <SeoHead
        {...seo}
        keywords={DEFAULT_KEYWORDS}
        robots={DEFAULT_ROBOTS}
      />
      <SkillQuizClient />
    </>
  );
}
