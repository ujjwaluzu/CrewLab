import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HomeLinks from "@/components/HomeLinks";
import HowItWorks from "@/components/HowItWorks";
import ProjectsRail from "@/components/ProjectsRail";
import Cta from "@/components/Cta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Tickers from "@/components/Tickers";

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <main id="top">
        <Hero />
        <Tickers />
        <Cta />
        <HowItWorks />
        <ProjectsRail />
        <HomeLinks />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
