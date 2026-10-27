import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
import { getLegalPageCopy } from "@/lib/legal-content";

const page = getLegalPageCopy("en", "privacy");

export const metadata = pageMetadata({ title: page.title, description: page.description, canonical: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return <LegalPage locale="en" page="privacy" />;
}
