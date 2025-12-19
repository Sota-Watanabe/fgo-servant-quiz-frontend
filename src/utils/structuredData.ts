/**
 * 構造化データ（JSON-LD）を生成するユーティリティ関数
 */

interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface WebPageSchema {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
}

interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": "Organization";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
  };
}

interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * WebSiteスキーマを生成
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fate/Grand Quiz",
    url: "https://fgoquiz.com",
    description:
      "Fate/Grand Orderのサーヴァント知識を試せる非公式クイズサイト。スキル・プロフィール・宝具の問題に挑戦して、推しサーヴァントへの理解を深めよう。",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://fgoquiz.com/quiz?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * WebPageスキーマを生成
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `https://fgoquiz.com${url}`,
  };
}

/**
 * Articleスキーマを生成
 */
export function generateArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Fate/Grand Quiz",
    },
    publisher: {
      "@type": "Organization",
      name: "Fate/Grand Quiz",
    },
  };
}

/**
 * Breadcrumbスキーマを生成
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://fgoquiz.com${item.url}`,
    })),
  };
}

/**
 * 構造化データをHTMLに埋め込むためのscriptタグを生成
 */
export function generateStructuredDataScript(
  data: WebSiteSchema | WebPageSchema | ArticleSchema | BreadcrumbSchema
): string {
  return JSON.stringify(data);
}
