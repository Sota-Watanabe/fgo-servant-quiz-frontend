import type { MetadataRoute } from "next";
import { headers } from "next/headers";

const getBaseUrl = async () => {
  const envUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  if (envUrl) return envUrl;

  const h = await headers();
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";

  return `${protocol}://${host}`;
};

const routes = [
  "",
  "/quiz",
  "/quiz/skill",
  "/quiz/skill/description",
  "/quiz/profile",
  "/quiz/profile/description",
  "/quiz/np",
  "/quiz/np/description",
  "/about",
  "/guide",
  "/glossary",
  "/faq",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/operator",
  "/contact",
  "/changelog",
  "/articles",
  "/articles/beginner-guide",
  "/articles/priority-servants",
  "/articles/class-advantage",
  "/articles/command-card",
  "/articles/user-stories",
  "/articles/quiz-tips",
  "/articles/skill-memorization",
  "/articles/profile-reading",
  "/articles/noble-phantasm-lore",
  "/articles/fgo-trivia",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const baseUrl = await getBaseUrl();

  return routes.map((path) => {
    const urlPath = path === "" ? "/" : path;
    return {
      url: `${baseUrl}${urlPath}`,
      lastModified,
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.8,
    };
  });
}
