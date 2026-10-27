import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
import { getLegalPageCopy } from "@/lib/legal-content";

const page = getLegalPageCopy("en", "terms");

export const metadata = pageMetadata({ title: page.title, description: page.description, canonical: "/terms-of-use" });

export default function TermsOfUsePage() {
  return <LegalPage locale="en" page="terms" />;
}
