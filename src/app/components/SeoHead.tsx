"use client";

import Head from "next/head";
import type { PageSeo } from "@/utils/seo";

type SeoHeadProps = PageSeo & {
  keywords?: string[];
  robots?: string;
};

const joinKeywords = (keywords?: string[]) =>
  keywords && keywords.length > 0 ? keywords.join(", ") : undefined;

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  og,
  twitter,
  keywords,
  robots,
}: SeoHeadProps) {
  const keywordContent = joinKeywords(keywords);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordContent ? (
        <meta name="keywords" content={keywordContent} />
      ) : null}
      {robots ? <meta name="robots" content={robots} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:site_name" content={og.siteName} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:locale" content={og.locale} />
      <meta property="og:image" content={og.imageUrl} />
      <meta property="og:image:width" content={String(og.imageWidth)} />
      <meta property="og:image:height" content={String(og.imageHeight)} />
      <meta property="og:image:alt" content={og.title} />

      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.imageUrl} />
    </Head>
  );
}
