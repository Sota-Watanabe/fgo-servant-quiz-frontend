export const SITE_URL = "https://fate-grand-quiz.com";
export const SITE_NAME = "Fate/Grand Quiz";
export const SITE_DESCRIPTION =
  "「Fate/Grand Order」ファン必見！サーヴァントのプロフィールや宝具からキャラ名を当てるFGOクイズ。あなたの知識と愛で、真のマスター度を試そう！";

export const DEFAULT_SOCIAL_IMAGE_PATH = "/title-logo.png";
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const TWITTER_CARD_TYPE = "summary_large_image";
export const DEFAULT_ROBOTS = "index, follow";
export const DEFAULT_KEYWORDS = [
  "FGO クイズ",
  "FGO サーヴァント クイズ",
  "Fate/Grand Order クイズ",
  "FGO キャラ 当てクイズ",
  "FGO 知識 クイズ",
  "FGO 初心者",
  "FGO 上級者",
  "FGO ランダム出題",
  "FGO マスター向け クイズ",
  "FGQ クイズ",
  "Fate/Grand Quiz",
];

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

export type PageSeo = {
  title: string;
  description: string;
  canonicalUrl: string;
  og: {
    type: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    locale: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    imageUrl: string;
  };
};

export const buildPageSeo = ({
  title,
  description,
  path,
  ogImagePath = DEFAULT_SOCIAL_IMAGE_PATH,
}: BuildMetadataArgs): PageSeo => {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImagePath);
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title: socialTitle,
    description,
    canonicalUrl,
    og: {
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      locale: "ja_JP",
      imageUrl,
      imageWidth: SOCIAL_IMAGE_WIDTH,
      imageHeight: SOCIAL_IMAGE_HEIGHT,
    },
    twitter: {
      card: TWITTER_CARD_TYPE,
      title: socialTitle,
      description,
      imageUrl,
    },
  };
};
