import { SITE_URL, SITE_NAME, SOCIAL } from "@/lib/site";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "CrewLab India",
      description: "भारत में स्टार्टअप संस्थापकों और बिल्डरों के लिए प्रोजेक्ट सहयोग समुदाय।",
      inLanguage: "hi-IN",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "संस्थापकों और बिल्डरों को स्टार्टअप प्रोजेक्ट के आसपास जोड़ने वाला समुदाय।",
      sameAs: [SOCIAL.discord, SOCIAL.instagram, SOCIAL.x],
    },
  ],
};

export default function HindiSchemaOrg() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
