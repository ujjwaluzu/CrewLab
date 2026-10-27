import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
import { getLegalPageCopy } from "@/lib/legal-content";

const page = getLegalPageCopy("en", "community");

export const metadata = pageMetadata({ title: page.title, description: page.description, canonical: "/community-guidelines" });

export default function CommunityGuidelinesPage() {
  return <LegalPage locale="en" page="community" />;
}
