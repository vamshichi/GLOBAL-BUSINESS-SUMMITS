import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/conferences-summits", "/trainings", "/managed-events", "/events", "/media", "/careers", "/contact"];
  return routes.map((r) => ({ url: `https://example.com${r}`, lastModified: new Date() }));
}
