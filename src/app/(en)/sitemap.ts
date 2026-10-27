import type { MetadataRoute } from "next";
import { SITE_URL, LANDING_PAGES } from "@/lib/site";
import { RESOURCES } from "@/lib/resources";
import { HINDI_PATHS, hindiPath } from "@/lib/hindi-site";
import { LEGAL_PAGE_KEYS, LEGAL_PAGE_PATHS } from "@/lib/legal-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const landingEntries: MetadataRoute.Sitemap = LANDING_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
  }));

  const supportPaths = ["/explore", "/how-it-works", "/features", "/about", "/resources"];
  const supportEntries: MetadataRoute.Sitemap = supportPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
  const resourceEntries: MetadataRoute.Sitemap = RESOURCES.map(({ slug }) => ({
    url: `${SITE_URL}/resources/${slug}`,
  }));
  const legalEntries: MetadataRoute.Sitemap = LEGAL_PAGE_KEYS.map((key) => ({
    url: `${SITE_URL}${LEGAL_PAGE_PATHS[key]}`,
  }));
  const hindiEntries: MetadataRoute.Sitemap = HINDI_PATHS
    .filter((path) => path !== "/")
    .map((path) => ({ url: `${SITE_URL}${hindiPath(path)}` }));

  return [
    {
      url: `${SITE_URL}`,
    },
    ...landingEntries,
    ...supportEntries,
    ...resourceEntries,
    ...legalEntries,
    { url: `${SITE_URL}/hi` },
    ...hindiEntries,
  ];
}
