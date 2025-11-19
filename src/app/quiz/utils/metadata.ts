import { buildPageSeo, type PageSeo } from "@/utils/seo";
import { getApiBaseUrl } from "@/utils/apiClient";
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

const buildDynamicOgpUrl = (
  quizType: QuizShareType,
  servantId: string
): string => {
  const apiBaseUrl = getApiBaseUrl();

  try {
    const ogpUrl = new URL("/ogp", apiBaseUrl);
    ogpUrl.searchParams.set("type", quizType);
    ogpUrl.searchParams.set("servantId", servantId);
    return ogpUrl.toString();
  } catch {
    return `/ogp?type=${quizType}&servantId=${servantId}`;
  }
};

export const buildQuizSeoWithDynamicOgp = ({
  title,
  description,
  path,
  defaultOgImagePath,
  quizType,
  searchParams,
}: BuildQuizMetadataArgs): PageSeo => {
  const servantId = extractServantId(searchParams);
  const ogImagePath = servantId
    ? buildDynamicOgpUrl(quizType, servantId)
    : defaultOgImagePath;

  return buildPageSeo({
    title,
    description,
    path,
    ogImagePath,
  });
};
