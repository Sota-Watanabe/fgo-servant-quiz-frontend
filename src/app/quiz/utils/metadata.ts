import type { Metadata } from "next";
import { buildPageMetadata, DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";
import { getOgpBaseUrl } from "@/utils/apiClient";
import type { QuizShareType } from "./share";

export type QuizMetadataSearchParams = {
  servantId?: string | string[];
};

type RouteSearchParams =
  | Record<string, string | string[] | undefined>
  | URLSearchParams;

type BuildQuizMetadataArgs = {
  title: string;
  description: string;
  path: string;
  quizType: QuizShareType;
  searchParams?: QuizMetadataSearchParams;
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

const buildDynamicOgpUrl = (
  quizType: QuizShareType,
  servantId: string
): string => {
  const ogpBaseUrl = getOgpBaseUrl();
  // URLSearchParamsを使わず手動で構築してHTMLエスケープを回避
  return `${ogpBaseUrl}/ogp?type=${quizType}&servantId=${servantId}`;
};

export const buildQuizMetadataWithDynamicOgp = ({
  title,
  description,
  path,
  quizType,
  searchParams,
}: BuildQuizMetadataArgs): Metadata => {
  const servantId = extractServantId(searchParams);
  const ogImagePath = servantId
    ? buildDynamicOgpUrl(quizType, servantId)
    : DEFAULT_SOCIAL_IMAGE_PATH;

  return buildPageMetadata({
    title,
    description,
    path,
    ogImagePath,
  });
};

type QuizMetadataConfig = {
  title: string;
  description: string;
  path: string;
  quizType: QuizShareType;
};

export function createQuizGenerateMetadata(config: QuizMetadataConfig) {
  return async function generateMetadata({
    searchParams,
  }: {
    searchParams?: Promise<RouteSearchParams>;
  }): Promise<Metadata> {
    const resolvedSearchParams = searchParams ? await searchParams : undefined;

    let servantId: string | string[] | undefined;
    if (!resolvedSearchParams) {
      servantId = undefined;
    } else if (
      typeof (resolvedSearchParams as URLSearchParams).get === "function"
    ) {
      servantId =
        (resolvedSearchParams as URLSearchParams).get("servantId") ?? undefined;
    } else {
      servantId = (resolvedSearchParams as Record<
        string,
        string | string[] | undefined
      >).servantId;
    }

    const quizSearchParams: QuizMetadataSearchParams | undefined = servantId
      ? { servantId }
      : undefined;

    return buildQuizMetadataWithDynamicOgp({
      ...config,
      searchParams: quizSearchParams,
    });
  };
}
