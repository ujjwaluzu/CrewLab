import type { MetadataRoute } from "next";
import { SITE_URL, LANDING_PAGES } from "@/lib/site";
import { RESOURCES } from "@/lib/resources";

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

  return [
    {
      url: `${SITE_URL}`,
    },
    ...landingEntries,
    ...supportEntries,
    ...resourceEntries,
  ];
}
