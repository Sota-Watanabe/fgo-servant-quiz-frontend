import type { Metadata } from "next";

export const SITE_URL = "https://fate-grand-quiz.com";
export const SITE_NAME = "Fate/Grand Quiz";
export const SITE_DESCRIPTION =
  "「Fate/Grand Order」ファン必見！サーヴァントのプロフィールや宝具からキャラ名を当てるFGOクイズ。あなたの知識と愛で、真のマスター度を試そう！";

export const DEFAULT_SOCIAL_IMAGE_PATH = "/title-logo.png";
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;

export const OG_IMAGE_PATHS = {
  home: DEFAULT_SOCIAL_IMAGE_PATH,
  quizIndex: DEFAULT_SOCIAL_IMAGE_PATH,
  quizSkill: DEFAULT_SOCIAL_IMAGE_PATH,
  quizProfile: DEFAULT_SOCIAL_IMAGE_PATH,
  quizNp: DEFAULT_SOCIAL_IMAGE_PATH,
} as const;

const ensureLeadingSlash = (value: string) =>
  value.startsWith("/") ? value : `/${value}`;

export const absoluteUrl = (path: string): string => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath =
    path === "/" ? "" : ensureLeadingSlash(path.replace(/\/\/+/g, "/"));
  return `${SITE_URL}${normalizedPath}`;
};

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
};

export const buildPageMetadata = ({
  title,
  description,
  path,
  ogImagePath = DEFAULT_SOCIAL_IMAGE_PATH,
}: BuildMetadataArgs): Metadata => {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImagePath);
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      locale: "ja_JP",
      images: [
        {
          url: imageUrl,
          width: SOCIAL_IMAGE_WIDTH,
          height: SOCIAL_IMAGE_HEIGHT,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
};
