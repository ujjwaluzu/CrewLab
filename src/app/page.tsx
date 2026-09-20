import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProjectsRail from "@/components/ProjectsRail";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Tickers from "@/components/Tickers";
import WaysIn from "@/components/WaysIn";
import Workspace from "@/components/Workspace";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Tickers />
        <WaysIn />
        <HowItWorks />
        <Workspace />
        <ProjectsRail />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}