import {
  buildQuizSeoWithDynamicOgp,
  type QuizMetadataSearchParams,
} from "@/app/quiz/utils/metadata";
import ProfileQuizClient from "./ProfileQuizClient";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_ROBOTS,
  DEFAULT_SOCIAL_IMAGE_PATH,
} from "@/utils/seo";
import SeoHead from "@/app/components/SeoHead";

const pageTitle = "プロフィールクイズ";
const pageDescription =
  "プロフィール本文やステータス、関連情報からサーヴァントを推理する設定重視のモード。マテリアル好きのマスター向けチャレンジです。";

export const dynamic = "force-dynamic";

type ProfileQuizPageProps = {
  searchParams?: QuizMetadataSearchParams | Promise<QuizMetadataSearchParams>;
};

export default async function ProfileQuizPage({
  searchParams,
}: ProfileQuizPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const seo = buildQuizSeoWithDynamicOgp({
    title: pageTitle,
    description: pageDescription,
    path: "/quiz/profile",
    defaultOgImagePath: DEFAULT_SOCIAL_IMAGE_PATH,
    quizType: "profile",
    searchParams: resolvedSearchParams,
  });

  return (
    <>
      <SeoHead
        {...seo}
        keywords={DEFAULT_KEYWORDS}
        robots={DEFAULT_ROBOTS}
      />
      <ProfileQuizClient />
    </>
  );
}
