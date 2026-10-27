import { Plate } from "./kit/react/draw";
import { CrewFlowArt } from "./crew-flow-art";
import { CrewFlowLive } from "./crew-flow-live";
import { crewFlowContent, RESTING_STEP } from "./crew-flow-model";

export function CrewFlowFigure({ locale = "en" }: { locale?: "en" | "hi" }) {
  const { steps } = crewFlowContent(locale);
  const resting = steps[RESTING_STEP]!;
  const isHindi = locale === "hi";
  return (
    <div className="crew-flow-wrap iso" aria-labelledby="crew-flow-title">
      <header className="crew-flow-heading">
        <p className="cl-mono">{isHindi ? "CREWLAB पर प्रोजेक्ट का सफ़र" : "THE CREWLAB PROJECT FLOW"}</p>
        <h2 id="crew-flow-title">{isHindi ? "एक प्रोजेक्ट सही लोगों को साथ लाता है।" : "One project brings the right people together."}</h2>
        <p>{isHindi ? "प्रोजेक्ट का विवरण केंद्र में रहता है, जबकि बिल्डर काम खोजते हैं, जुड़ने का अनुरोध भेजते हैं और टीम के साथ तालमेल बनाते हैं।" : "A project brief stays at the center as builders discover the work, request to join, and coordinate with the crew."}</p>
      </header>
      <Plate
        fig={isHindi ? "चित्र ०२" : "FIG 02"}
        title={isHindi ? "प्रोजेक्ट निर्माण मेज़" : "Project assembly bench"}
        hint={isHindi ? "चरण चुनें · तीर कुंजियाँ" : "Select a station · ← →"}
        readout={resting.readout}
        keys={isHindi
          ? [{ mark: "lit" as const, label: "आगे बढ़ता प्रोजेक्ट विवरण" }, { mark: "raised" as const, label: "काम का चरण" }]
          : [{ mark: "lit" as const, label: "Moving project brief" }, { mark: "raised" as const, label: "Workflow station" }]}
        caption={isHindi
          ? "प्रोजेक्ट विवरण CrewLab के चरणों से गुज़रता है। प्रोजेक्ट मालिक तय करते हैं कि कौन जुड़ेगा; GitHub संदर्भ वैकल्पिक और केवल पढ़ने योग्य है।"
          : "The brief travels through CrewLab's workflow. Project owners decide who joins; GitHub context is optional and read only."}
      >
        <CrewFlowLive art={<CrewFlowArt key="crew-flow-art" />} locale={locale} />
      </Plate>
    </div>
  );
}

