import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SOCIAL, GEO } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
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
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.position.split(", ")[0],
        longitude: GEO.position.split(", ")[1],
      },
      sameAs: [SOCIAL.discord, SOCIAL.instagram, SOCIAL.x, SOCIAL.blog],
      contactPoint: [],
    },
    {
      "@type": "Webpage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME}. ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
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