export const CREW_FLOW_STEPS = [
  {
    title: "Make a builder profile",
    short: "Builder profile",
    readout: "PROFILE READY · SKILLS + INTERESTS",
    description: "Share your skills, interests, and availability so project owners and other builders can see what you bring.",
  },
  {
    title: "Discover a project",
    short: "Project discovery",
    readout: "PROJECT FOUND · REVIEW THE BRIEF",
    description: "Browse project briefs, compare requested skills, and review the project's stage and owner before deciding whether to apply.",
  },
  {
    title: "Request to join",
    short: "Owner review",
    readout: "REQUEST SENT · OWNER DECIDES",
    description: "Explain your interest, contribution, and availability. The project owner reviews each request and chooses who joins.",
  },
  {
    title: "Build with your crew",
    short: "Crew workspace",
    readout: "ACCEPTED · CREW COORDINATES",
    description: "Accepted members coordinate through realtime discussion and shared context connected to their project.",
  },
  {
    title: "Optional GitHub context",
    short: "Read-only repository",
    readout: "OPTIONAL · READ ONLY",
    description: "A project owner can connect repository details. Project members can view that context, while access remains optional and read only.",
  },
] as const;

export const RESTING_STEP = 0;
export const FLOW_ART_LABEL = "An isometric CrewLab project assembly bench. A shared project brief rides a guided carriage through five mechanisms: builder profiles, project discovery, owner review of join requests, a crew worktable, and an optional read-only repository reader. Select a step to move the brief carriage to that station.";

const HINDI_STEPS = [
  { title: "बिल्डर प्रोफ़ाइल बनाएँ", short: "बिल्डर प्रोफ़ाइल", readout: "प्रोफ़ाइल तैयार · कौशल और रुचियाँ", description: "अपने कौशल, रुचियाँ और उपलब्धता साझा करें, ताकि प्रोजेक्ट मालिक और दूसरे बिल्डर जान सकें कि आप क्या योगदान ला सकते हैं।" },
  { title: "प्रोजेक्ट खोजें", short: "प्रोजेक्ट खोज", readout: "प्रोजेक्ट मिला · विवरण देखें", description: "प्रोजेक्ट विवरण और ज़रूरी कौशल देखें। आवेदन करने से पहले प्रोजेक्ट की स्थिति और मालिक को समझें।" },
  { title: "जुड़ने का अनुरोध भेजें", short: "अनुरोध की समीक्षा", readout: "अनुरोध भेजा · मालिक का निर्णय", description: "अपनी रुचि, योगदान और उपलब्धता बताएँ। प्रोजेक्ट मालिक अनुरोध देखकर तय करता है कि कौन टीम में शामिल होगा।" },
  { title: "अपनी टीम के साथ बनाएँ", short: "टीम का कार्यक्षेत्र", readout: "स्वीकृत · टीम साथ काम करती है", description: "स्वीकृत सदस्य बातचीत और प्रोजेक्ट से जुड़े साझा संदर्भ के ज़रिए तालमेल बनाते हैं।" },
  { title: "वैकल्पिक GitHub संदर्भ", short: "केवल देखने योग्य रिपॉज़िटरी", readout: "वैकल्पिक · केवल पढ़ने योग्य", description: "प्रोजेक्ट मालिक रिपॉज़िटरी की जानकारी जोड़ सकता है। सदस्यों को वैकल्पिक रूप से केवल देखने की अनुमति मिलती है।" },
] as const;

const HINDI_ART_LABEL = "CrewLab की प्रोजेक्ट निर्माण मेज़ का आइसोमेट्रिक चित्र। साझा प्रोजेक्ट विवरण पाँच चरणों से गुज़रता है: बिल्डर प्रोफ़ाइल, प्रोजेक्ट खोज, अनुरोध की समीक्षा, टीम कार्यक्षेत्र और वैकल्पिक रिपॉज़िटरी संदर्भ। किसी चरण को चुनकर विवरण को वहाँ ले जाएँ।";

export function crewFlowContent(locale: "en" | "hi" = "en") {
  return locale === "hi"
    ? { steps: HINDI_STEPS, artLabel: HINDI_ART_LABEL }
    : { steps: CREW_FLOW_STEPS, artLabel: FLOW_ART_LABEL };
}
