import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IdeaBuilderSection from "@/components/IdeaBuilderSection";
import HowCrewLabWorks from "@/components/HowCrewLabWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IdeaBuilderSection />
        <HowCrewLabWorks />
      </main>
    </>
  );
}