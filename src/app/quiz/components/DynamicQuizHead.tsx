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
type TwitterImagesInput =
  | TwitterImageValue
  | TwitterImageValue[]
  | undefined;

const pickFirstOpenGraphImage = (
  images: OgImagesInput
): OgImageValue | undefined => {
  if (!images) return undefined;
  return Array.isArray(images) ? images[0] : images;
};

const hasHref = (value: object): value is { href: unknown } =>
  "href" in value;

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

  return (
    <>
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
      {twitterImage ? (
        <meta name="twitter:image" content={twitterImage} />
      ) : null}
    </>
  );
}
