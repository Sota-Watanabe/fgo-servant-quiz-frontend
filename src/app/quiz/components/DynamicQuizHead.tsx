import type { Metadata } from "next";
import { buildQuizMetadataWithDynamicOgp } from "@/app/quiz/utils/metadata";
import type { QuizShareType } from "@/app/quiz/utils/share";
import { getQuizMetadataSearchParamsFromHeaders } from "@/app/quiz/utils/serverSearchParams";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/utils/seo";

type DynamicQuizHeadProps = {
  title: string;
  description: string;
  path: string;
  quizType: QuizShareType;
  defaultOgImagePath?: string;
};

type OgImageDescriptor = {
  url: string | URL;
  width?: number | string;
  height?: number | string;
  alt?: string;
};

type OgImageValue = string | URL | OgImageDescriptor;
type OgImagesInput = OgImageValue | OgImageValue[] | undefined;

type TwitterImageDescriptor = {
  url: string | URL;
  alt?: string;
  secureUrl?: string | URL;
  type?: string;
  width?: string | number;
  height?: string | number;
};

type TwitterImageValue = string | URL | TwitterImageDescriptor;
type TwitterImagesInput = TwitterImageValue | TwitterImageValue[] | undefined;

const pickFirstOpenGraphImage = (
  images: OgImagesInput
): OgImageValue | undefined => {
  if (!images) return undefined;
  return Array.isArray(images) ? images[0] : images;
};

const hasHref = (value: object): value is { href: unknown } => "href" in value;

const isUrlObject = (value: unknown): value is URL =>
  typeof value === "object" && value !== null && hasHref(value);

const toUrlString = (value: string | URL) =>
  isUrlObject(value) ? value.toString() : value;

const isOgImageDescriptor = (value: unknown): value is OgImageDescriptor =>
  typeof value === "object" &&
  value !== null &&
  "url" in (value as Record<string, unknown>);

const isTwitterImageDescriptor = (
  value: unknown
): value is TwitterImageDescriptor =>
  typeof value === "object" &&
  value !== null &&
  "url" in (value as Record<string, unknown>);

const normalizeOpenGraphImage = (
  image: OgImageValue | undefined
):
  | {
      url: string;
      width?: number | string;
      height?: number | string;
      alt?: string;
    }
  | undefined => {
  if (!image) return undefined;

  if (typeof image === "string" || isUrlObject(image)) {
    return { url: toUrlString(image) };
  }

  if (isOgImageDescriptor(image)) {
    return {
      url: toUrlString(image.url),
      width: image.width,
      height: image.height,
      alt: image.alt,
    };
  }

  return undefined;
};

const pickFirstTwitterImage = (
  images: TwitterImagesInput
): TwitterImageValue | undefined => {
  if (!images) return undefined;
  return Array.isArray(images) ? images[0] : images;
};

const resolveTwitterImage = (
  images: TwitterImagesInput
): string | undefined => {
  const image = pickFirstTwitterImage(images);
  if (!image) return undefined;

  if (typeof image === "string" || isUrlObject(image)) {
    return toUrlString(image);
  }

  if (isTwitterImageDescriptor(image)) {
    return toUrlString(image.url);
  }

  return undefined;
};

const hasUrlProperty = (
  value: unknown
): value is { url?: string | URL | null | undefined } =>
  typeof value === "object" && value !== null && "url" in value;

const hasTwitterCard = (
  value: unknown
): value is { card?: unknown } =>
  typeof value === "object" && value !== null && "card" in value;

const toCanonicalUrlString = (canonical: unknown): string | undefined => {
  if (!canonical) return undefined;

  if (Array.isArray(canonical)) {
    for (const entry of canonical) {
      const resolved = toCanonicalUrlString(entry);
      if (resolved) {
        return resolved;
      }
    }
    return undefined;
  }

  if (typeof canonical === "string") {
    return canonical;
  }

  if (isUrlObject(canonical)) {
    return toUrlString(canonical);
  }

  if (hasUrlProperty(canonical) && canonical.url) {
    return typeof canonical.url === "string"
      ? canonical.url
      : isUrlObject(canonical.url)
        ? toUrlString(canonical.url)
        : undefined;
  }

  return undefined;
};

type MetadataTitle = Metadata["title"];

const isMetadataTitleObject = (
  value: MetadataTitle
): value is Exclude<MetadataTitle, string> =>
  typeof value === "object" && value !== null;

const resolveMetadataTitle = (
  title: MetadataTitle | undefined
): string | undefined => {
  if (!title) return undefined;
  if (typeof title === "string") return title;
  if (isMetadataTitleObject(title)) {
    if ("absolute" in title && title.absolute) {
      return title.absolute;
    }
    if ("default" in title && title.default) {
      return title.default;
    }
  }
  return undefined;
};

export default async function DynamicQuizHead({
  title,
  description,
  path,
  quizType,
  defaultOgImagePath = DEFAULT_SOCIAL_IMAGE_PATH,
}: DynamicQuizHeadProps) {
  const searchParams = await getQuizMetadataSearchParamsFromHeaders();
  const metadata = buildQuizMetadataWithDynamicOgp({
    title,
    description,
    path,
    quizType,
    defaultOgImagePath,
    searchParams,
  });

  const ogImage = normalizeOpenGraphImage(
    pickFirstOpenGraphImage(metadata.openGraph?.images)
  );
  const twitterImage = resolveTwitterImage(metadata.twitter?.images);
  const pageTitle = resolveMetadataTitle(metadata.title);
  const descriptionContent =
    typeof metadata.description === "string" ? metadata.description : undefined;
  const canonicalUrl = toCanonicalUrlString(metadata.alternates?.canonical);
  const openGraphTitle =
    typeof metadata.openGraph?.title === "string"
      ? metadata.openGraph.title
      : undefined;
  const openGraphDescription =
    typeof metadata.openGraph?.description === "string"
      ? metadata.openGraph.description
      : undefined;
  const openGraphUrlValue = metadata.openGraph?.url;
  const openGraphUrl =
    typeof openGraphUrlValue === "string"
      ? openGraphUrlValue
      : openGraphUrlValue && isUrlObject(openGraphUrlValue)
      ? toUrlString(openGraphUrlValue)
      : undefined;
  const openGraphWithType =
    metadata.openGraph && typeof metadata.openGraph === "object"
      ? (metadata.openGraph as { type?: unknown })
      : undefined;
  const openGraphType =
    typeof openGraphWithType?.type === "string"
      ? (openGraphWithType.type as string)
      : undefined;
  const openGraphSiteName =
    typeof metadata.openGraph?.siteName === "string"
      ? metadata.openGraph.siteName
      : undefined;
  const openGraphLocale =
    typeof metadata.openGraph?.locale === "string"
      ? metadata.openGraph.locale
      : undefined;
  const twitterMetadataWithCard = hasTwitterCard(metadata.twitter)
    ? metadata.twitter
    : undefined;
  const twitterCard =
    typeof twitterMetadataWithCard?.card === "string"
      ? (twitterMetadataWithCard.card as string)
      : undefined;
  const twitterTitle =
    typeof metadata.twitter?.title === "string"
      ? metadata.twitter.title
      : undefined;
  const twitterDescription =
    typeof metadata.twitter?.description === "string"
      ? metadata.twitter.description
      : undefined;

  return (
    <>
      {pageTitle ? <title>{pageTitle}</title> : null}
      {descriptionContent ? (
        <meta name="description" content={descriptionContent} />
      ) : null}
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {openGraphTitle ? (
        <meta property="og:title" content={openGraphTitle} />
      ) : null}
      {openGraphDescription ? (
        <meta property="og:description" content={openGraphDescription} />
      ) : null}
      {openGraphType ? (
        <meta property="og:type" content={openGraphType} />
      ) : null}
      {openGraphUrl ? <meta property="og:url" content={openGraphUrl} /> : null}
      {openGraphSiteName ? (
        <meta property="og:site_name" content={openGraphSiteName} />
      ) : null}
      {openGraphLocale ? (
        <meta property="og:locale" content={openGraphLocale} />
      ) : null}
      {ogImage?.url ? (
        <>
          <meta property="og:image" content={ogImage.url} />
          {ogImage.width ? (
            <meta property="og:image:width" content={String(ogImage.width)} />
          ) : null}
          {ogImage.height ? (
            <meta property="og:image:height" content={String(ogImage.height)} />
          ) : null}
          {ogImage.alt ? (
            <meta property="og:image:alt" content={ogImage.alt} />
          ) : null}
        </>
      ) : null}
      {twitterCard ? <meta name="twitter:card" content={twitterCard} /> : null}
      {twitterTitle ? (
        <meta name="twitter:title" content={twitterTitle} />
      ) : null}
      {twitterDescription ? (
        <meta name="twitter:description" content={twitterDescription} />
      ) : null}
      {twitterImage ? (
        <meta name="twitter:image" content={twitterImage} />
      ) : null}
    </>
  );
}
