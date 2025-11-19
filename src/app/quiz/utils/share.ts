export type QuizShareType = "skill" | "profile" | "np";

type ShareOptions = {
  servantName: string;
  servantId: number;
  shareType: QuizShareType;
};

const DEFAULT_OGP_URL = "http://localhost:8888/ogp";

const buildOgpUrl = (origin: string, shareType: QuizShareType, id: number) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_OGP_BASE_URL && process.env.NEXT_PUBLIC_OGP_BASE_URL.length > 0
      ? process.env.NEXT_PUBLIC_OGP_BASE_URL
      : DEFAULT_OGP_URL;

  const resolvedUrl = (() => {
    try {
      if (baseUrl.startsWith("http")) {
        return new URL(baseUrl);
      }
      return new URL(baseUrl, origin);
    } catch {
      return new URL(DEFAULT_OGP_URL);
    }
  })();

  resolvedUrl.searchParams.set("type", shareType);
  resolvedUrl.searchParams.set("servantId", String(id));
  return resolvedUrl;
};

export const shareQuizResultOnTwitter = ({
  servantName,
  servantId,
  shareType,
}: ShareOptions) => {
  if (typeof window === "undefined") return;

  const tweetText = `FGOサーヴァントクイズで「${servantName}」に正解しました！`;
  const ogpUrl = buildOgpUrl(window.location.origin, shareType, servantId);

  const shareUrl = new URL("https://twitter.com/intent/tweet");
  shareUrl.searchParams.set("text", tweetText);
  shareUrl.searchParams.set("url", ogpUrl.toString());
  shareUrl.searchParams.set("hashtags", "FGO,FateGrandQuiz");

  window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
};
