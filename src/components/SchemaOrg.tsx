import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, HOMEPAGE_TITLE, SOCIAL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "CrewLab India startup collaboration community",
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon_io/android-chrome-512x512.png`,
      slogan: SITE_TAGLINE,
      description: SITE_DESCRIPTION,
      areaServed: "IN",
      sameAs: [SOCIAL.discord, SOCIAL.instagram, SOCIAL.x],
      knowsAbout: [
        "finding a cofounder",
        "technical cofounder",
        "finding developers for a startup",
        "startup team building",
        "project collaboration",
        "side projects",
        "builder community",
        "student projects",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: HOMEPAGE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      mainEntityOfPage: `${SITE_URL}/`,
      about: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
      },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
