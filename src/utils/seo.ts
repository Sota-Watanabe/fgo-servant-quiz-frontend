import type { Metadata } from "next";

export const SITE_URL = "https://fate-grand-quiz.com";
export const SITE_NAME = "Fate/Grand Quiz";
export const SITE_DESCRIPTION =
  "Fate/Grand Orderファン向けの非公式クイズサイト。サーヴァントのスキル・プロフィール・宝具から真名を当てるクイズに挑戦。無料・登録不要で今すぐプレイ可能。FGOの知識を試して、推しサーヴァントへの愛を深めよう！";

export const DEFAULT_SOCIAL_IMAGE_PATH = "/title-logo.png";
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const TWITTER_CARD_TYPE = "summary_large_image";

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
      card: TWITTER_CARD_TYPE,
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    other: {
      "og:site_name": SITE_NAME,
      "twitter:card": TWITTER_CARD_TYPE,
    },
  };
};
