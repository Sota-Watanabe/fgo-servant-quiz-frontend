export type QuizShareType = "skill" | "profile" | "np";

type ShareOptions = {
  servantId: number;
  shareType: QuizShareType;
};

const DEFAULT_SHARE_BASE_URL = "http://localhost:8888";

const SHARE_PATHS: Record<QuizShareType, string> = {
  skill: "/quiz/skill",
  profile: "/quiz/profile",
  np: "/quiz/np",
};

const buildShareUrl = (
  origin: string,
  shareType: QuizShareType,
  id: number
) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_OGP_BASE_URL &&
    process.env.NEXT_PUBLIC_OGP_BASE_URL.length > 0
      ? process.env.NEXT_PUBLIC_OGP_BASE_URL
      : DEFAULT_SHARE_BASE_URL;

  const resolvedBase = (() => {
    try {
      if (baseUrl.startsWith("http")) {
        return new URL(baseUrl);
      }
      return new URL(baseUrl, origin);
    } catch {
      return new URL(DEFAULT_SHARE_BASE_URL);
    }
  })();

  const shareUrl = new URL(SHARE_PATHS[shareType], resolvedBase);
  shareUrl.searchParams.set("servantId", String(id));
  return shareUrl;
};

export const shareQuizResultOnTwitter = ({
  servantId,
  shareType,
}: ShareOptions) => {
  if (typeof window === "undefined") return;
  const quizUrl = buildShareUrl(window.location.origin, shareType, servantId);

  const tweetText = `「真名看破」、成功！
  FGOサーヴァントクイズに挑戦して正解しました！
  
  ${quizUrl.toString()}
  `;

  const shareUrl = new URL("https://twitter.com/intent/tweet");
  shareUrl.searchParams.set("text", tweetText);
  shareUrl.searchParams.set("hashtags", "FGO,FateGrandQuiz");

  window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
};
