import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

const baseUrl = `https://${site.domain}`;

const routes = [
  "",
  "/about",
  "/services",
  "/services/governance-consulting",
  "/services/cybersecurity",
  "/services/professional-services",
  "/services/ai-automation",
  "/engagement",
  "/why-us",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const enRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ar: `${baseUrl}/ar${route}`,
      },
    },
  }));
  const arRoutes = routes.map((route) => ({
    url: `${baseUrl}/ar${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ar: `${baseUrl}/ar${route}`,
      },
    },
  }));
  return [...enRoutes, ...arRoutes];
}
