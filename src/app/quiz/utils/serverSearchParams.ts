import { headers } from "next/headers";
import type { QuizMetadataSearchParams } from "./metadata";
import { SITE_URL } from "@/utils/seo";

type HeaderList = Awaited<ReturnType<typeof headers>>;

const buildBaseUrl = (headerList: HeaderList) => {
  const fallback = new URL(SITE_URL);
  const protocol =
    headerList.get("x-forwarded-proto") ??
    fallback.protocol.replace(":", "") ??
    "https";
  const host =
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    fallback.host;

  return `${protocol}://${host}`;
};

const getUrlCandidates = (headerList: HeaderList) => {
  const candidates: string[] = [];
  const nextUrl = headerList.get("next-url");

  if (nextUrl) {
    candidates.push(nextUrl);
  }

  const invokePath = headerList.get("x-invoke-path");
  if (invokePath) {
    const invokeQuery = headerList.get("x-invoke-query");
    candidates.push(
      invokeQuery ? `${invokePath}?${invokeQuery}` : invokePath
    );
  }

  return candidates;
};

export const getQuizMetadataSearchParamsFromHeaders = async ():
  Promise<QuizMetadataSearchParams | undefined> => {
  const headerList = await headers();
  const baseUrl = buildBaseUrl(headerList);
  const candidates = getUrlCandidates(headerList);

  for (const candidate of candidates) {
    if (!candidate) continue;

    try {
      const targetUrl = candidate.startsWith("http")
        ? new URL(candidate)
        : new URL(candidate, baseUrl);
      const servantId = targetUrl.searchParams.get("servantId");

      if (servantId) {
        return { servantId };
      }
    } catch {
      continue;
    }
  }

  return undefined;
};
