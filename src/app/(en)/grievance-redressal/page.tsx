import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
import { getLegalPageCopy } from "@/lib/legal-content";

const page = getLegalPageCopy("en", "grievance");

export const metadata = pageMetadata({ title: page.title, description: page.description, canonical: "/grievance-redressal" });

export default function GrievanceRedressalPage() {
  return <LegalPage locale="en" page="grievance" />;
}
