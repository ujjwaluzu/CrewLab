import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IdeaBuilderSection from "@/components/IdeaBuilderSection";
import HowCrewLabWorks from "@/components/HowCrewLabWorks";
import WorkspacePreview from "@/components/WorkspacePreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IdeaBuilderSection />
        <HowCrewLabWorks />
        <WorkspacePreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}