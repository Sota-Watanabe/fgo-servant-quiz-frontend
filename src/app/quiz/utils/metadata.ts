import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/seo";
import type { QuizShareType } from "./share";

export type QuizMetadataSearchParams = {
  servantId?: string | string[];
};

const extractServantId = (
  searchParams?: QuizMetadataSearchParams
): string | undefined => {
  const servantIdParam = searchParams?.servantId;
  const servantId = Array.isArray(servantIdParam)
    ? servantIdParam[0]
    : servantIdParam;

  if (!servantId || !/^\d+$/.test(servantId)) {
    return undefined;
  }

  return servantId;
};

type BuildQuizMetadataArgs = {
  title: string;
  description: string;
  path: string;
  defaultOgImagePath: string;
  quizType: QuizShareType;
  searchParams?: QuizMetadataSearchParams;
};

export const buildQuizMetadataWithDynamicOgp = ({
  title,
  description,
  path,
  defaultOgImagePath,
  quizType,
  searchParams,
}: BuildQuizMetadataArgs): Metadata => {
  const servantId = extractServantId(searchParams);
  const ogImagePath = servantId
    ? `/ogp?type=${quizType}&servantId=${encodeURIComponent(servantId)}`
    : defaultOgImagePath;

  return buildPageMetadata({
    title,
    description,
    path,
    ogImagePath,
  });
};
