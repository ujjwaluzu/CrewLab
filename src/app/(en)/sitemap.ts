import type { MetadataRoute } from "next";
import { SITE_URL, LANDING_PAGES } from "@/lib/site";
import { RESOURCES } from "@/lib/resources";
import { HINDI_PATHS, hindiPath } from "@/lib/hindi-site";

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
  const hindiEntries: MetadataRoute.Sitemap = HINDI_PATHS
    .filter((path) => path !== "/" && path !== "/waitlist")
    .map((path) => ({ url: `${SITE_URL}${hindiPath(path)}` }));

  return [
    {
      url: `${SITE_URL}`,
    },
    ...landingEntries,
    ...supportEntries,
    ...resourceEntries,
    { url: `${SITE_URL}/hi` },
    ...hindiEntries,
  ];
}
