import type { MetadataRoute } from "next";

const BASE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "") ||
  "http://localhost:3000";

const routes = [
  "",
  "/quiz",
  "/quiz/skill",
  "/quiz/skill/description",
  "/quiz/profile",
  "/quiz/profile/description",
  "/quiz/np",
  "/quiz/np/description",
  "/privacy",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => {
    const urlPath = path === "" ? "/" : path;
    return {
      url: `${BASE_URL}${urlPath}`,
      lastModified,
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.8,
    };
  });
}
