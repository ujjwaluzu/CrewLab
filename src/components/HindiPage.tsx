import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageFaqSection from "@/components/PageFaqSection";
import { CrewGridAnimation } from "@/components/visuals/CrewGridAnimation";
import { ProductScene } from "@/components/visuals/ProductScene";
import HeroCube, { type HeroCubeFace } from "@/components/visuals/HeroCube";
import AboutKeyboard from "@/components/visuals/AboutKeyboard";
import { CrewFlowFigure } from "@/components/anatomy/CrewFlowFigure";
import HindiHomePage from "@/components/HindiHomePage";
import type { HindiPageContent } from "@/lib/hindi-site";
import { HINDI_LINK_LABELS, hindiPath } from "@/lib/hindi-site";
import { APP_URL, SITE_URL, SITE_NAME, isCrewFocusedPage } from "@/lib/site";
import { productLayerForPath } from "@/lib/product-scene";

const HINDI_HERO_FACES: Record<string, readonly HeroCubeFace[]> = {
  "/explore": [
    { label: "ब्राउज़ करें", eyebrow: "०१ / प्रोजेक्ट उदाहरण", title: "विचारों को टीम चाहिए", body: "नमूना प्रोजेक्ट देखें और जानें कि बिल्डर किस तरह के काम से जुड़ सकते हैं।", points: ["प्रोडक्ट और समुदाय के विचार", "शुरुआती चरण के प्रोजेक्ट", "टीम में खुली जगहें"] },
    { label: "चरण", eyebrow: "०२ / प्रोजेक्ट चरण", title: "मौजूदा स्थिति जानें", body: "प्रोजेक्ट का चरण बताएगा कि विचार कितना आगे बढ़ा है और अगला कदम क्या हो सकता है।", points: ["पहले विचार से प्रोटोटाइप तक", "मौजूदा प्रगति समझें", "अगले उपयोगी काम को पहचानें"] },
    { label: "कौशल", eyebrow: "०३ / ज़रूरी कौशल", title: "अपनी जगह खोजें", body: "हर सूची में वे कौशल दिए हैं जो प्रोजेक्ट को आगे बढ़ाने में मदद कर सकते हैं।", points: ["फ़्रंटएंड और बैकएंड", "प्रोडक्ट डिज़ाइन और मोबाइल", "डेटा, AI और समुदाय"] },
    { label: "विवरण", eyebrow: "०४ / प्रोजेक्ट जानकारी", title: "पूरी जानकारी पाएँ", body: "किसी विचार पर समय देने से पहले विवरण और मालिक की जानकारी पढ़ें।", points: ["समस्या समझें", "ज़रूरी कौशल देखें", "प्रोजेक्ट मालिक का संदर्भ जानें"] },
    { label: "अनुरोध", eyebrow: "०५ / जुड़ने का अनुरोध", title: "अपना योगदान बताएँ", body: "बिल्डर मालिक को प्रोजेक्ट से जुड़ने का साफ़ अनुरोध भेज सकते हैं।", points: ["बताएँ कि रुचि क्यों है", "अपना योगदान बताएँ", "उपलब्धता साझा करें"] },
    { label: "बनाएँ", eyebrow: "०६ / मिलकर बनाएँ", title: "रुचि को काम में बदलें", body: "मालिक अनुरोधों की समीक्षा करते हैं और स्वीकृत सदस्यों को चर्चा की जगह मिलती है।", points: ["मालिक टीम चुनते हैं", "प्रोजेक्ट पर तालमेल बनाएँ", "वैकल्पिक, केवल-पढ़ने योग्य GitHub संदर्भ"] },
  ],
  "/features": [
    { label: "प्रोफ़ाइल", eyebrow: "०१ / बिल्डर प्रोफ़ाइल", title: "अपने कौशल दिखाएँ", body: "प्रोजेक्ट मालिकों और बिल्डरों को बताएँ कि आप टीम में क्या योगदान ला सकते हैं।", points: ["परिचय और रुचियाँ", "कौशल और खूबियाँ", "आप किस काम में रुचि रखते हैं"] },
    { label: "प्रोजेक्ट", eyebrow: "०२ / प्रोजेक्ट पेज", title: "विचार को जगह दें", body: "प्रोजेक्ट पेज पर विवरण, चरण और टीम की ज़रूरतें एक साथ रखें।", points: ["विचार बताएँ", "चरण अपडेट करें", "ज़रूरी योगदान बताएँ"] },
    { label: "खोज", eyebrow: "०३ / प्रोजेक्ट खोज", title: "अपना अगला प्रोजेक्ट खोजें", body: "आवेदन करने से पहले प्रोजेक्ट देखें और कौशल के आधार पर खोजें।", points: ["प्रोजेक्ट उदाहरण देखें", "कौशल से फ़िल्टर करें", "प्रोजेक्ट मालिक को जानें"] },
    { label: "अनुरोध", eyebrow: "०४ / जुड़ने का अनुरोध", title: "अपनी उपयुक्तता बताएँ", body: "अपनी रुचि और उपलब्धता प्रोजेक्ट मालिक के साथ साझा करें।", points: ["अपना योगदान बताएँ", "उपलब्धता साझा करें", "मालिक टीम चुनते हैं"] },
    { label: "बातचीत", eyebrow: "०५ / टीम चर्चा", title: "टीम से जुड़े रहें", body: "स्वीकृत सदस्य प्रोजेक्ट से जुड़ी बातचीत में तालमेल बना सकते हैं।", points: ["प्रोजेक्ट पर बातचीत", "साझा संदर्भ", "मालिक टीम संभालते हैं"] },
    { label: "GitHub", eyebrow: "०६ / वैकल्पिक संदर्भ", title: "काम की प्रगति देखें", body: "प्रोजेक्ट मालिक टीम को रिपॉज़िटरी की केवल पढ़ने योग्य जानकारी दे सकते हैं।", points: ["कमिट और ब्रांच", "इश्यू और पुल रिक्वेस्ट", "मालिक के क्रेडेंशियल साझा नहीं होते"] },
  ],
  "/how-it-works": [
    { label: "प्रोफ़ाइल", eyebrow: "०१ / आपकी शुरुआत", title: "बताएँ कि आप क्या लाते हैं", body: "दूसरे बिल्डरों को बताएँ कि आप किस तरह का काम करना चाहते हैं।", points: ["कौशल और रुचियाँ", "संक्षिप्त परिचय", "आप क्या बनाना चाहते हैं"] },
    { label: "प्रोजेक्ट", eyebrow: "०२ / विचार", title: "विचार को सामने रखें", body: "प्रोजेक्ट, उसका मौजूदा चरण और जहाँ मदद चाहिए, वह साझा करें।", points: ["साफ़ प्रोजेक्ट विवरण", "चरण और दिशा", "ज़रूरी कौशल"] },
    { label: "खोजें", eyebrow: "०३ / सही मेल खोजें", title: "काम देखें", body: "ऐसे प्रोजेक्ट खोजें जो आपकी रुचि और कौशल से मेल खाते हों।", points: ["प्रोजेक्ट खोजें", "कौशल से फ़िल्टर करें", "मालिक और विवरण देखें"] },
    { label: "अनुरोध", eyebrow: "०४ / योगदान बताएँ", title: "जुड़ने के लिए पूछें", body: "मालिक को बताएँ कि आप क्यों जुड़ना चाहते हैं और क्या योगदान दे सकते हैं।", points: ["अपनी रुचि बताएँ", "योगदान साझा करें", "उपलब्धता बताएँ"] },
    { label: "चुनें", eyebrow: "०५ / मालिक का निर्णय", title: "टीम बनाएँ", body: "प्रोजेक्ट मालिक अनुरोधों की समीक्षा कर टीम चुनते हैं।", points: ["अनुरोध देखें", "उपयुक्तता समझें", "नए सदस्य जोड़ें"] },
    { label: "बनाएँ", eyebrow: "०६ / साथ काम करें", title: "प्रोजेक्ट आगे बढ़ाएँ", body: "साझा प्रोजेक्ट संदर्भ के साथ टीम बनकर काम करें।", points: ["काम पर चर्चा", "योजना साझा करें", "ज़रूरत पर GitHub जोड़ें"] },
  ],
};

export default function HindiPage({ page }: { page: HindiPageContent }) {
  if (page.path === "/") return <HindiHomePage />;

  const isAboutPage = page.path === "/about";
  const explainsFlow = page.path === "/how-it-works";
  const heroFaces = HINDI_HERO_FACES[page.path];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${hindiPath(page.path)}`,
    inLanguage: "hi-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <div className="crewlab-page crewlab-hi" lang="hi-IN">
      <div className="cl-wrap">
        <SiteHeader home={page.path === "/"} />
        <main id="top" lang="hi-IN">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <section className={`cl-row cl-hero cl-page-hero${isAboutPage ? " cl-about-page-hero" : ""}`} aria-labelledby="page-title">
            <div className="cl-cell cl-hero-copy">
              <p className="cl-mono cl-kicker"><i />{page.kicker}</p>
              <h1 id="page-title">{page.headline.map((line, index) => <span key={line} className={index === page.headline.length - 1 ? "cl-page-highlight" : undefined}>{line}</span>)}</h1>
              <p className="cl-page-lede">{page.lede}</p>
              <div className="cl-actions">
                {page.primaryHref.startsWith("https://")
                  ? <a className="cl-button" href={page.primaryHref}>{page.primaryLabel}<span aria-hidden="true">&#8594;</span></a>
                  : <Link className="cl-button" href={hindiPath(page.primaryHref)}>{page.primaryLabel}<span aria-hidden="true">&#8594;</span></Link>}
                {page.secondaryHref.startsWith("https://")
                  ? <a className="cl-button cl-ghost" href={page.secondaryHref}>{page.secondaryLabel}</a>
                  : <Link className="cl-button cl-ghost" href={hindiPath(page.secondaryHref)}>{page.secondaryLabel}</Link>}
              </div>
            </div>
            <div className={`cl-cell cl-droid-cell${isAboutPage ? " cl-about-keyboard-cell" : ""}`}>
              {isAboutPage
                ? <AboutKeyboard />
                : heroFaces
                ? <HeroCube faces={heroFaces} label={`${page.title} का इंटरैक्टिव परिचय`} locale="hi" />
                : isCrewFocusedPage(page.path)
                ? <CrewGridAnimation locale="hi" />
                : <ProductScene initial={productLayerForPath(page.path) ?? "discovery"} locale="hi" />}
            </div>
          </section>

          {explainsFlow && <section className="cl-section cl-how-flow"><CrewFlowFigure locale="hi" /></section>}

          {page.sections.map((section, index) => (
            <section className="cl-section" key={section.heading}>
              <div className="cl-row cl-section-head">
                <div className="cl-cell cl-head-title"><span className="cl-mono cl-page-label">{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2></div>
                <div className="cl-cell cl-head-copy">{section.intro && <p>{section.intro}</p>}</div>
                <div className="cl-cell cl-head-count"><span className="cl-mono">CREWLAB</span><strong>{String(index + 1).padStart(2, "0")}</strong></div>
              </div>
              {section.cards && <div className="cl-row cl-page-card-grid">{section.cards.map((card) => card.href
                ? <Link className="cl-cell cl-page-card" href={hindiPath(card.href)} key={card.title}><h3>{card.title}</h3><p>{card.text}</p><strong>और पढ़ें <span aria-hidden="true">&#8594;</span></strong></Link>
                : <article className="cl-cell cl-page-card" key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>}
            </section>
          ))}

          <PageFaqSection id="hindi-faq" title="अक्सर पूछे जाने वाले सवाल" intro="CrewLab, प्रोजेक्ट और टीम बनाने से जुड़े आम सवालों के जवाब।" label="सवाल और जवाब" countLabel="सवाल" items={page.faqs} />

          {page.related && <section className="cl-section cl-page-related">
            <div className="cl-row cl-section-head"><div className="cl-cell cl-head-title"><span className="cl-mono cl-page-label">आगे जानें</span><h2>अपना अगला कदम चुनें</h2></div><div className="cl-cell cl-head-copy"><p>CrewLab पर प्रोजेक्ट और साथियों के बारे में और जानें।</p></div><div className="cl-cell cl-head-count"><span className="cl-mono">LINKS</span><strong>{String(page.related.length).padStart(2, "0")}</strong></div></div>
            <div className="cl-row cl-page-related-grid">{page.related.map((route) => <Link className="cl-cell cl-page-related-card" href={hindiPath(route)} key={route}><span className="cl-mono">{HINDI_LINK_LABELS[route]}</span><p>इस विषय पर CrewLab की हिन्दी जानकारी पढ़ें।</p><strong>आगे बढ़ें <span aria-hidden="true">&#8594;</span></strong></Link>)}</div>
          </section>}

          <section className="cl-row cl-join cl-page-join" id="join">
            <div className="cl-cell cl-join-title"><p className="cl-mono">CrewLab के साथ बनाएँ</p><h2>अपना अगला कदम <span>आज चुनें।</span></h2></div>
            <div className="cl-cell cl-join-form">
              <p>अपना CrewLab अकाउंट बनाएँ और अपने अगले प्रोजेक्ट पर काम शुरू करें।</p><a className="cl-button" href={APP_URL}>साइन अप करें <span aria-hidden="true">&#8594;</span></a>
              <span className="cl-mono">CrewLab | भारत</span>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
