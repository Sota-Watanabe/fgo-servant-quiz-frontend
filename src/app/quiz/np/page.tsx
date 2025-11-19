import {
  buildQuizSeoWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import NoblePhantasmQuizClient from "./NoblePhantasmQuizClient";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_ROBOTS,
  DEFAULT_SOCIAL_IMAGE_PATH,
} from "@/utils/seo";
import SeoHead from "@/app/components/SeoHead";

const pageTitle = "宝具クイズ";
const pageDescription =
  "宝具名・ランク・種別・カード属性・解説文を手掛かりに持ち主を当てる王道モード。偽名宝具も含めて理解度をチェックしよう。";

export const dynamic = "force-dynamic";

type NoblePhantasmQuizPageProps = {
  searchParams?: QuizMetadataSearchParams | Promise<QuizMetadataSearchParams>;
};

export default async function NoblePhantasmQuizPage({
  searchParams,
}: NoblePhantasmQuizPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const seo = buildQuizSeoWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/np",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "np",
    searchParams: resolvedSearchParams,
  });

  return (
    <>
      <SeoHead
        {...seo}
        keywords={DEFAULT_KEYWORDS}
        robots={DEFAULT_ROBOTS}
      />
      <NoblePhantasmQuizClient />
    </>
  );
}
