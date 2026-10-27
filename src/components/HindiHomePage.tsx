import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { FeatureDroid } from "@/components/visuals/FeatureDroid";
import HomeLightsaber from "@/components/visuals/HomeLightsaber";
import { APP_URL, LANDING_PAGES, SITE_NAME, SITE_URL } from "@/lib/site";
import { HINDI_LINK_LABELS, HINDI_PAGES } from "@/lib/hindi-site";

const steps = [
  ["01", "विचार साझा करें या खोजें", "अपना प्रोजेक्ट और ज़रूरी कौशल बताएँ, या जुड़ने के लिए कोई प्रोजेक्ट खोजें।"],
  ["02", "अपनी टीम खोजें", "डेवलपर, डिज़ाइनर और दूसरे बिल्डर खोजें जो आपके प्रोजेक्ट में योगदान देना चाहते हैं।"],
  ["03", "मिलकर बनाएँ", "काम बाँटें, बातचीत करें और अपने प्रोजेक्ट को आगे बढ़ाएँ।"],
  ["04", "प्रगति पर नज़र रखें", "प्रोजेक्ट, अनुरोध और टीम की गतिविधियाँ एक ही जगह देखें।"],
];

const homeFaqs = [
  { question: "मैं अपने स्टार्टअप के लिए तकनीकी सह-संस्थापक कहाँ खोजूँ?", answer: "अपने विचार, ज़रूरी तकनीकी कौशल और अपने योगदान के बारे में साफ़ जानकारी दें। बिल्डर प्रोजेक्ट देखकर जुड़ने का अनुरोध भेज सकते हैं।" },
  { question: "मैं अपने स्टार्टअप विचार पर काम करने वाले लोग कैसे खोजूँ?", answer: "CrewLab पर प्रोजेक्ट का विवरण और ज़रूरी कौशल साझा करें। इच्छुक बिल्डर अनुरोध भेजेंगे और आप तय करेंगे कि टीम में कौन शामिल हो।" },
  { question: "मेरे पास कौशल हैं, पर प्रोजेक्ट का विचार नहीं। क्या मैं जुड़ सकता हूँ?", answer: "हाँ। प्रोजेक्ट देखें, ज़रूरी कौशल समझें और मालिक को बताएँ कि आप कैसे योगदान कर सकते हैं।" },
  { question: "CrewLab सह-संस्थापक खोजने में कैसे मदद करता है?", answer: "CrewLab प्रोजेक्ट और उसमें ज़रूरी कौशल सामने रखता है। बिल्डर अनुरोध भेजते हैं और प्रोजेक्ट मालिक अपनी टीम चुनता है।" },
  { question: "क्या विद्यार्थी CrewLab पर टीम और प्रोजेक्ट खोज सकते हैं?", answer: "हाँ। विद्यार्थी स्टार्टअप और साइड प्रोजेक्ट खोज सकते हैं, अपने कौशल बता सकते हैं और जुड़ने का अनुरोध भेज सकते हैं।" },
  { question: "क्या CrewLab इस्तेमाल करने के लिए शुल्क है?", answer: "CrewLab ऐप पर साइन अप करके अकाउंट बनाएँ। अगर किसी प्लान या शुल्क की जानकारी लागू होगी, तो वह ऐप में दिखाई जाएगी।" },
];

function SectionHead({ id, title, intro, count }: { id: string; title: string; intro: string; count?: string }) {
  return <div className="cl-row cl-section-head" id={id}>
    <div className="cl-cell cl-head-title"><h2>{title}</h2></div>
    <div className="cl-cell cl-head-copy"><p>{intro}</p></div>
    <div className="cl-cell cl-head-count">{count && <><span className="cl-mono">चरण</span><strong>{count}</strong></>}</div>
  </div>;
}

export default function HindiHomePage() {
  const crewItems = LANDING_PAGES.map((page) => ({
    href: page.path,
    title: HINDI_LINK_LABELS[page.path] ?? page.label,
    description: HINDI_PAGES[page.path]?.lede ?? page.description,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: HINDI_PAGES["/"].title,
    description: HINDI_PAGES["/"].description,
    url: `${SITE_URL}/hi`,
    inLanguage: "hi-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return <div className="crewlab-page crewlab-hi" lang="hi-IN"><div className="cl-wrap">
    <SiteHeader home />
    <main id="top" lang="hi-IN">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="cl-row cl-hero" aria-labelledby="hero-title">
        <div className="cl-cell cl-hero-copy">
          <p className="cl-mono cl-kicker"><i /> भारत का बिल्डर समुदाय · सह-संस्थापक · साइड प्रोजेक्ट</p>
          <h1 id="hero-title">क्रूलैब:<br />विचारों को बनाएँ<br /><span>लोगों के साथ।</span></h1>
          <div className="cl-actions">
            <a className="cl-button" href={APP_URL}>साइन अप करें <span aria-hidden="true">→</span></a>
            <a className="cl-button cl-ghost" href="#crew">प्रोजेक्ट साथी खोजें</a>
          </div>
        </div>
        <div className="cl-cell cl-droid-cell aiptx-droid-stage"><FeatureDroid className="cl-droid-art" locale="hi" /></div>
      </section>

      <section className="cl-row cl-intro" aria-label="CrewLab के बारे में">
        <div className="cl-cell cl-intro-main"><p>CrewLab पर संस्थापक, डेवलपर, डिज़ाइनर, विद्यार्थी और दूसरे बिल्डर स्टार्टअप व साइड प्रोजेक्ट पर साथ काम करने के लिए जुड़ते हैं। विचार है पर टीम नहीं? सह-संस्थापक खोजें। कौशल हैं पर विचार नहीं? योगदान देने के लिए प्रोजेक्ट खोजें।</p></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">०१ / विचार से शुरुआत</span><strong>संस्थापक</strong></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">०२ / कौशल साथ लाएँ</span><strong>बिल्डर</strong></div>
        <div className="cl-cell cl-audience"><span className="cl-mono">०३ / विचार को साकार करें</span><strong>निर्माता</strong></div>
      </section>

      <section className="cl-section">
        <SectionHead id="how" title="यह कैसे काम करता है" intro="अकेले विचार से सही सह-संस्थापकों और साथियों के साथ प्रोजेक्ट बनाने तक का सीधा रास्ता।" count="०४" />
        <div className="cl-row cl-steps">{steps.map(([number, title, description]) => <article className="cl-cell cl-step" key={number}><span className="cl-mono cl-step-num">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="cl-section cl-how-flow" aria-label="CrewLab पर टीम बनाने की प्रक्रिया">
        <HomeLightsaber locale="hi" />
      </section>

      <section className="cl-section">
        <SectionHead id="crew" title="अपनी टीम खोजें" intro="स्टार्टअप, साइड प्रोजेक्ट और विद्यार्थी प्रोजेक्ट। आप जो भी बना रहे हैं, उसके लिए साथी खोजें।" />
        <div className="cl-crew-list">{crewItems.map((item) => <Link className="cl-row cl-crew-item" href={`/hi${item.href}`} key={item.href}><span className="cl-cell cl-crew-title">{item.title}</span><span className="cl-cell cl-crew-description">{item.description}</span><span className="cl-cell cl-plus" aria-hidden="true">+</span></Link>)}</div>
      </section>

      <section className="cl-section">
        <SectionHead id="faq" title="अक्सर पूछे जाने वाले सवाल" intro="सह-संस्थापक खोजने, प्रोजेक्ट से जुड़ने और CrewLab पर साथ काम करने के बारे में जवाब।" />
        <div className="cl-faq-list">{homeFaqs.map((faq, index) => <details className="cl-row cl-faq-item" key={faq.question}><summary className="cl-faq-summary"><span className="cl-cell cl-faq-num cl-mono">{String(index + 1).padStart(2, "0")}</span><span className="cl-cell cl-faq-question">{faq.question}</span><span className="cl-cell cl-plus" aria-hidden="true">+</span></summary><div className="cl-faq-answer"><p>{faq.answer}</p></div></details>)}</div>
      </section>

      <section className="cl-row cl-join" id="join"><div className="cl-cell cl-join-title"><h2>टीम से <span>जुड़ें।</span></h2></div><div className="cl-cell cl-join-form"><span className="cl-mono">अपना अकाउंट बनाएँ</span><a className="cl-button" href={APP_URL}>साइन अप करें <span aria-hidden="true">→</span></a></div></section>
    </main>
    <SiteFooter />
  </div></div>;
}
