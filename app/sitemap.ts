import type { MetadataRoute } from "next";

const baseUrl = "https://www.atelierkimjansen.nl";

const routes = [
  "",
  "/producten",
  "/portfolio",
  "/werkwijze",
  "/over",
  "/contact",
  "/privacy",
  "/algemene-voorwaarden",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
