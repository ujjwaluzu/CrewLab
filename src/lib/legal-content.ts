export type LegalPageKey = "privacy" | "terms" | "community" | "grievance";
export type LegalLocale = "en" | "hi";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageCopy = {
  title: string;
  description: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const updatedEn = "27 October 2026";
const updatedHi = "27 अक्टूबर 2026";

export const LEGAL_PAGE_KEYS: LegalPageKey[] = ["privacy", "terms", "community", "grievance"];

export const LEGAL_PAGE_PATHS: Record<LegalPageKey, string> = {
  privacy: "/privacy-policy",
  terms: "/terms-of-use",
  community: "/community-guidelines",
  grievance: "/grievance-redressal",
};

export const LEGAL_PAGE_LABELS: Record<LegalPageKey, Record<LegalLocale, string>> = {
  privacy: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
  terms: { en: "Terms of Use", hi: "उपयोग की शर्तें" },
  community: { en: "Community Guidelines", hi: "समुदाय दिशानिर्देश" },
  grievance: { en: "Grievance Redressal", hi: "शिकायत निवारण" },
};

const en: Record<LegalPageKey, LegalPageCopy> = {
  privacy: {
    title: "Privacy Policy",
    description: "How CrewLab handles account, profile, project, discussion, and optional GitHub information.",
    intro: "This policy explains what CrewLab collects, how it is used, when it is visible to other members, and how to contact us about your information.",
    updated: updatedEn,
    sections: [
      { heading: "Who is responsible", paragraphs: ["CrewLab is operated by Ujjwal baunthiyal, at Amarshahid Anand Colony, Ajabpur Kalan, Dehradun, Uttarakhand 248001. For privacy questions or requests, contact baunthiyalujjwal52@gmail.com."] },
      { heading: "Information we handle", paragraphs: ["When you create an account, CrewLab and its authentication provider process your email address and account credentials. CrewLab does not receive or store your plain-text password.", "When you build a profile or use the app, we handle the information you provide and the records needed to run the service, which can include:",], bullets: ["Profile details such as display name, username, short bio, interests, and skills.", "Projects you create, project descriptions and status, join applications and availability details, membership records, and project discussion messages.", "Events you create, notification status, and technical records needed to operate and protect the service.", "If you connect GitHub: connection and installation identifiers, the repository selected for a project, and repository information retrieved to show its project crew."] },
      { heading: "What other members can see", paragraphs: ["CrewLab profiles and project listings are available to signed-in members. Information in an application is shared with the project owner for review. Project discussion is available to that project's accepted crew. Events are associated with their owner.", "If a project owner links a private GitHub repository, the repository's metadata and selected read-only information can be shown to that project's crew. Crew members do not receive the owner's GitHub credentials or tokens. Do not put private or sensitive information in a profile, project listing, application, or discussion unless you intend to share it with the people who can access it."] },
      { heading: "Why we use information", paragraphs: ["We use information to provide authentication, profiles, project discovery, applications, crew management, discussions, events, notifications, and optional GitHub features; to respond to requests; and to secure, maintain, and improve the service. We do not sell personal information."] },
      { heading: "Service providers and sharing", paragraphs: ["Supabase provides authentication, database, and related infrastructure for the app. If you connect GitHub, the service communicates with GitHub to authorize the connection and retrieve the repository information you choose to share. We may also use hosting, security, or operational providers to run the website and app. These providers process information on our behalf under their applicable terms and safeguards.", "We may disclose information when required by law, to respond to valid legal process, to protect users or the service, or in connection with a business transfer. We do not give one CrewLab member another member's GitHub authorization credentials."] },
      { heading: "Cookies and similar technologies", paragraphs: ["The app uses essential session and security technologies so sign-in and protected features work. We do not use non-essential cookies for advertising or cross-site tracking. Your browser may also store standard technical data needed to load and navigate the service."] },
      { heading: "Retention and your choices", paragraphs: ["We keep information while it is needed to provide the service, support your account, protect the community, resolve disputes, and meet legal obligations. We do not publish a fixed deletion timeline. The app does not currently offer self-service account deletion; to request access, correction, or deletion, contact baunthiyalujjwal52@gmail.com. We may retain limited records where a legal obligation, security need, or dispute requires it.", "You can edit profile details in the app and disconnect GitHub from its settings. Disconnecting removes CrewLab's local GitHub connection record and stops future repository access through that connection; it does not delete content already shared by other members in project discussions."] },
      { heading: "Security and international processing", paragraphs: ["We use access controls and technical safeguards intended to protect information. GitHub user tokens used by the app are encrypted at rest and are restricted to server-side use. No online service can promise absolute security. Information may be processed in countries where our service providers operate, subject to applicable law."] },
      { heading: "Children", paragraphs: ["CrewLab accounts are for people aged 18 or older. The service is not intended for children under 18, and we do not knowingly invite them to create accounts. If you believe a person under 18 has provided account information, contact baunthiyalujjwal52@gmail.com."] },
      { heading: "Changes and contact", paragraphs: ["We may update this policy as the service or applicable requirements change. We will post the current version here with its updated date. For privacy questions, requests, or concerns, contact baunthiyalujjwal52@gmail.com. You may also use the grievance contact listed on our Grievance Redressal page."] },
    ],
  },
  terms: {
    title: "Terms of Use",
    description: "The terms for using CrewLab's project collaboration and builder community service.",
    intro: "These terms apply when you visit CrewLab or use its app. By creating an account or using the service, you agree to them.",
    updated: updatedEn,
    sections: [
      { heading: "Who may use CrewLab", paragraphs: ["You must be at least 18 years old, have authority to accept these terms, and provide accurate account information. If you do not agree, do not create an account or use the service."] },
      { heading: "What the service does", paragraphs: ["CrewLab helps people present project ideas, discover projects, request to join, form crews, and coordinate project work. The app may include profiles, project listings, applications, project discussions, events, notifications, and optional read-only GitHub context. Features may change or be unavailable from time to time."] },
      { heading: "Your account and conduct", paragraphs: ["Keep your credentials secure, use only your own account, and promptly tell us if you suspect unauthorized access. You are responsible for activity under your account and for complying with the Community Guidelines and applicable law."] },
      { heading: "Your content", paragraphs: ["You retain rights you hold in content you submit. You give CrewLab permission to host, store, reproduce, display, and transmit that content as needed to operate, secure, and provide the service to you and the members you choose to share it with. You confirm that you have the rights and permissions needed to submit it.", "Do not post content that is unlawful, infringing, deceptive, abusive, or that you are not permitted to share. Public profile and project information may be visible to signed-in members. Applications are shared with the relevant project owner; project discussions are shared with the accepted crew. You are responsible for deciding what to share."] },
      { heading: "Working with other members", paragraphs: ["Project owners decide whom to accept into their crews. CrewLab does not employ members, verify identities or qualifications, or guarantee any member, project, collaboration, job, funding, payment, or business result. Members and project owners are responsible for agreeing directly on roles, time, compensation, equity, intellectual property, confidentiality, and other working terms before work begins.", "CrewLab is not a party to agreements between members and does not provide legal, financial, investment, employment, or professional advice. Seek qualified advice for decisions that need it."] },
      { heading: "GitHub connections", paragraphs: ["GitHub is optional. When a project owner authorizes CrewLab and selects a repository, read-only repository information may be made visible to that project's crew, including for a private repository. The owner is responsible for choosing an appropriate repository and managing the GitHub connection. Crew members receive no GitHub credentials from CrewLab. GitHub is a separate service governed by its own terms."] },
      { heading: "Acceptable use and enforcement", paragraphs: ["Follow the Community Guidelines. We may investigate reports, remove or restrict content, suspend features, or suspend or close accounts when reasonably needed to protect people, comply with law, or enforce these terms. Where appropriate, we may give notice and an opportunity to respond. You can report a concern through the Grievance Redressal page."] },
      { heading: "Availability and disclaimers", paragraphs: ["CrewLab is provided on an as-available basis. We work to keep it useful and secure, but do not promise uninterrupted access, error-free operation, project success, or that information supplied by members is accurate. You decide whether to engage with a person or project and should assess relevant risks yourself."] },
      { heading: "Suspension, closure, and changes", paragraphs: ["You can stop using the service at any time. For account deletion requests, contact baunthiyalujjwal52@gmail.com; self-service account deletion is not currently available in the app. We may suspend or discontinue the service or update these terms. Material updates will be posted here with a revised date. Continued use after an update takes effect means you accept the revised terms, to the extent permitted by law."] },
      { heading: "General", paragraphs: ["These terms are governed by the laws of India, subject to any mandatory rights or rules that apply to you. If a provision is unenforceable, the remaining provisions continue to apply. These terms and the policies linked here describe the agreement between you and Ujjwal baunthiyal about CrewLab. Contact baunthiyalujjwal52@gmail.com with questions."] },
    ],
  },
  community: {
    title: "Community Guidelines",
    description: "Practical rules for safe, respectful project collaboration on CrewLab.",
    intro: "CrewLab brings people together around shared work. These guidelines apply to profiles, projects, applications, discussions, and other content on the service.",
    updated: updatedEn,
    sections: [
      { heading: "Treat people with respect", paragraphs: ["Communicate in good faith. Do not harass, threaten, stalk, bully, discriminate against, or repeatedly target another person. Do not encourage violence or exploitation."] },
      { heading: "Be honest about projects and opportunities", paragraphs: ["Describe the project, stage, requested skills, time expectations, and any known compensation or equity arrangement accurately. Do not impersonate another person, fabricate credentials, misrepresent a project, or use CrewLab to run a scam or pyramid scheme.", "Discuss roles, ownership, payment, confidentiality, and intellectual property directly before work begins. A CrewLab listing or application is not an employment offer or an agreement about those terms."] },
      { heading: "Protect privacy and intellectual property", paragraphs: ["Do not publish another person's private contact details, credentials, confidential material, or personal information without permission. Do not upload or share content that infringes another person's rights. Be thoughtful before posting information because other members may be able to copy or retain it."] },
      { heading: "Keep the service useful and safe", bullets: ["No spam, phishing, malware, deceptive links, or unsolicited bulk messages.", "No illegal content, threats, hateful abuse, sexual exploitation, or content that endangers a person.", "No attempts to bypass access controls, misuse GitHub connections, scrape member information, or disrupt the service.", "No false claims that CrewLab has vetted, endorsed, or guaranteed a member, project, job, or investment."] },
      { heading: "Reporting and enforcement", paragraphs: ["Report harmful, illegal, infringing, or misleading content through the Grievance Redressal page. Include the relevant profile, project, message, or link and enough information for us to review it. We may remove content, restrict access, or suspend accounts when needed to protect members or comply with law. Reports are handled as confidentially as practical, but we may share details when necessary to investigate or meet a legal requirement."] },
    ],
  },
  grievance: {
    title: "Grievance Redressal",
    description: "How to contact CrewLab about privacy, user content, account, or service grievances.",
    intro: "Use this page to contact CrewLab about content, privacy, account, or other concerns relating to the service.",
    updated: updatedEn,
    sections: [
      { heading: "Grievance officer", paragraphs: ["Name: Ujjwal baunthiyal.", "Email: baunthiyalujjwal52@gmail.com.", "Postal address: Amarshahid Anand Colony, Ajabpur Kalan, Dehradun, Uttarakhand 248001.", "The grievance officer is the contact for complaints relating to CrewLab and its computer resources. Use the contact details above to submit a complaint."] },
      { heading: "How to submit a complaint", paragraphs: ["Email the grievance address above with the subject “CrewLab grievance”. Include your name and reply address, a description of the issue, and links or other details that help us locate the relevant profile, project, message, or account. For a privacy request, identify the right you wish to exercise and the account concerned. Do not email passwords, authentication codes, or GitHub tokens."] },
      { heading: "Acknowledgement and resolution", paragraphs: ["We will acknowledge complaints within 24 hours and resolve them within 7 days of receipt. Requests about specific content that are subject to a shorter legal deadline will be handled within the applicable deadline, including within 36 hours where required by law. If you are dissatisfied with the response, reply to the same email and explain what remains unresolved."] },
      { heading: "What we may need", paragraphs: ["We may ask for additional details needed to verify the issue, protect an account, or distinguish the reported content from similar material. We will use complaint information to review and respond to the complaint, maintain required records, and meet legal obligations."] },
      { heading: "Other policy contacts", paragraphs: ["For information about personal data, read the Privacy Policy. For rules about member behavior and content, read the Community Guidelines. For account or service terms, read the Terms of Use."] },
    ],
  },
};

const hi: Record<LegalPageKey, LegalPageCopy> = {
  privacy: {
    title: "गोपनीयता नीति",
    description: "CrewLab खाते, प्रोफ़ाइल, प्रोजेक्ट, चर्चा और वैकल्पिक GitHub जानकारी को कैसे संभालता है।",
    intro: "इस नीति में बताया गया है कि CrewLab कौन-सी जानकारी लेता है, उसका उपयोग कैसे करता है, अन्य सदस्यों को क्या दिखाई देता है और अपनी जानकारी के बारे में हमसे कैसे संपर्क करें।",
    updated: updatedHi,
    sections: [
      { heading: "जिम्मेदार संचालक", paragraphs: ["CrewLab का संचालन Ujjwal baunthiyal, Amarshahid Anand Colony, Ajabpur Kalan, Dehradun, Uttarakhand 248001 से होता है। गोपनीयता संबंधी प्रश्नों या अनुरोधों के लिए baunthiyalujjwal52@gmail.com पर संपर्क करें।"] },
      { heading: "हम कौन-सी जानकारी संभालते हैं", paragraphs: ["खाता बनाते समय CrewLab और उसका प्रमाणीकरण सेवा प्रदाता आपका ईमेल पता और खाता प्रमाणीकरण जानकारी संभालते हैं। CrewLab आपका सादा पासवर्ड प्राप्त या संग्रहित नहीं करता।", "प्रोफ़ाइल बनाने या ऐप इस्तेमाल करने पर, आपके द्वारा दी गई जानकारी और सेवा चलाने के लिए ज़रूरी रिकॉर्ड संभाले जाते हैं, जिनमें शामिल हो सकते हैं:"], bullets: ["प्रोफ़ाइल विवरण जैसे नाम, यूज़रनेम, छोटा परिचय, रुचियाँ और कौशल।", "आपके बनाए प्रोजेक्ट, उनका विवरण और स्थिति, जुड़ने के आवेदन और उपलब्धता, सदस्यता रिकॉर्ड तथा प्रोजेक्ट चर्चाएँ।", "आपके बनाए इवेंट, सूचना पढ़े जाने की स्थिति और सेवा चलाने व सुरक्षित रखने के तकनीकी रिकॉर्ड।", "यदि आप GitHub जोड़ते हैं, तो कनेक्शन और इंस्टॉलेशन पहचान, प्रोजेक्ट के लिए चुनी गई रिपॉज़िटरी और उस प्रोजेक्ट की टीम को दिखाने के लिए प्राप्त रिपॉज़िटरी जानकारी।"] },
      { heading: "दूसरे सदस्यों को क्या दिखता है", paragraphs: ["CrewLab प्रोफ़ाइल और प्रोजेक्ट सूची साइन-इन किए हुए सदस्यों को दिखाई जाती हैं। आवेदन संबंधित प्रोजेक्ट मालिक को समीक्षा के लिए दिखता है। प्रोजेक्ट चर्चा उस प्रोजेक्ट की स्वीकार की गई टीम के लिए उपलब्ध होती है। इवेंट उसके मालिक से जुड़े रहते हैं।", "यदि कोई प्रोजेक्ट मालिक निजी GitHub रिपॉज़िटरी जोड़ता है, तो उसका विवरण और चुनी गई केवल-पढ़ने योग्य जानकारी उस प्रोजेक्ट की टीम को दिखाई जा सकती है। टीम के सदस्यों को मालिक के GitHub क्रेडेंशियल या टोकन नहीं दिए जाते। प्रोफ़ाइल, प्रोजेक्ट, आवेदन या चर्चा में निजी जानकारी तभी डालें जब आप उसे संबंधित लोगों के साथ साझा करना चाहते हों।"] },
      { heading: "जानकारी का उपयोग", paragraphs: ["हम जानकारी का उपयोग प्रमाणीकरण, प्रोफ़ाइल, प्रोजेक्ट खोज, आवेदन, टीम प्रबंधन, चर्चा, इवेंट, सूचनाएँ और वैकल्पिक GitHub सुविधाएँ देने; अनुरोधों का उत्तर देने; तथा सेवा को सुरक्षित रखने, चलाने और बेहतर बनाने के लिए करते हैं। हम व्यक्तिगत जानकारी बेचते नहीं हैं।"] },
      { heading: "सेवा प्रदाता और जानकारी साझा करना", paragraphs: ["ऐप के प्रमाणीकरण, डेटाबेस और संबंधित ढाँचे के लिए Supabase का उपयोग होता है। यदि आप GitHub जोड़ते हैं, तो CrewLab अनुमति और आपके चुने हुए रिपॉज़िटरी की जानकारी के लिए GitHub से संवाद करता है। वेबसाइट और ऐप चलाने के लिए होस्टिंग, सुरक्षा या परिचालन सेवा प्रदाता भी जानकारी संसाधित कर सकते हैं।", "कानून या वैध कानूनी प्रक्रिया के अनुसार, लोगों या सेवा की सुरक्षा के लिए, या किसी व्यावसायिक हस्तांतरण के संबंध में जानकारी साझा की जा सकती है। CrewLab किसी सदस्य के GitHub प्राधिकरण क्रेडेंशियल दूसरे सदस्य को नहीं देता।"] },
      { heading: "कुकी और समान तकनीकें", paragraphs: ["साइन-इन और सुरक्षित सुविधाएँ चलाने के लिए ऐप आवश्यक सत्र और सुरक्षा तकनीकों का उपयोग करता है। हम विज्ञापन या दूसरी वेबसाइटों पर नज़र रखने के लिए गैर-ज़रूरी कुकी का उपयोग नहीं करते। ब्राउज़र सेवा लोड करने और नेविगेट करने के लिए सामान्य तकनीकी डेटा भी रख सकता है।"] },
      { heading: "जानकारी रखना और आपके विकल्प", paragraphs: ["हम जानकारी उतने समय तक रखते हैं जितना सेवा देने, खाते का समर्थन करने, समुदाय की सुरक्षा, विवाद सुलझाने और कानूनी दायित्व पूरा करने के लिए आवश्यक हो। हम हटाने की कोई निश्चित समय-सीमा प्रकाशित नहीं करते। ऐप में फिलहाल स्वयं खाता हटाने की सुविधा नहीं है; अपनी जानकारी देखने, ठीक कराने या हटाने के अनुरोध के लिए baunthiyalujjwal52@gmail.com पर संपर्क करें। कानूनी दायित्व, सुरक्षा या विवाद के कारण कुछ सीमित रिकॉर्ड रखे जा सकते हैं।", "आप ऐप में प्रोफ़ाइल बदल सकते हैं और सेटिंग से GitHub कनेक्शन हटा सकते हैं। कनेक्शन हटाने पर CrewLab का स्थानीय GitHub रिकॉर्ड हटता है और उस कनेक्शन से भविष्य में रिपॉज़िटरी तक पहुँच रुकती है; इससे प्रोजेक्ट चर्चा में पहले से साझा सामग्री नहीं मिटती।"] },
      { heading: "सुरक्षा और अंतरराष्ट्रीय संसाधन", paragraphs: ["जानकारी की सुरक्षा के लिए पहुँच नियंत्रण और तकनीकी उपाय अपनाए जाते हैं। ऐप द्वारा इस्तेमाल किए जाने वाले GitHub यूज़र टोकन एन्क्रिप्ट करके रखे जाते हैं और केवल सर्वर पर उपयोग किए जाते हैं। कोई भी ऑनलाइन सेवा पूर्ण सुरक्षा की गारंटी नहीं दे सकती। सेवा प्रदाता जिन देशों में काम करते हैं वहाँ जानकारी संसाधित हो सकती है, लागू कानून के अधीन।"] },
      { heading: "बच्चे", paragraphs: ["CrewLab खाते 18 वर्ष या उससे अधिक आयु के लोगों के लिए हैं। सेवा 18 वर्ष से कम आयु के बच्चों के लिए नहीं है और हम जानबूझकर उनसे खाता बनाने को नहीं कहते। यदि आपको लगे कि 18 वर्ष से कम आयु के व्यक्ति ने खाता जानकारी दी है, तो baunthiyalujjwal52@gmail.com पर संपर्क करें।"] },
      { heading: "बदलाव और संपर्क", paragraphs: ["सेवा या लागू आवश्यकताओं में बदलाव होने पर हम इस नीति को अपडेट कर सकते हैं। वर्तमान संस्करण और उसकी तारीख यहीं प्रकाशित होगी। गोपनीयता प्रश्नों या अनुरोधों के लिए baunthiyalujjwal52@gmail.com पर संपर्क करें। आप शिकायत निवारण पृष्ठ पर दिए संपर्क का भी उपयोग कर सकते हैं।"] },
    ],
  },
  terms: {
    title: "उपयोग की शर्तें",
    description: "CrewLab की प्रोजेक्ट सहयोग सेवा और बिल्डर समुदाय के उपयोग की शर्तें।",
    intro: "ये शर्तें CrewLab वेबसाइट देखने और ऐप इस्तेमाल करने पर लागू होती हैं। खाता बनाकर या सेवा इस्तेमाल करके आप इनसे सहमत होते हैं।",
    updated: updatedHi,
    sections: [
      { heading: "कौन CrewLab इस्तेमाल कर सकता है", paragraphs: ["आपकी आयु कम से कम 18 वर्ष होनी चाहिए, इन शर्तों को स्वीकार करने का अधिकार होना चाहिए और खाते में सही जानकारी देनी चाहिए। यदि आप सहमत नहीं हैं, तो खाता न बनाएँ और सेवा का उपयोग न करें।"] },
      { heading: "सेवा क्या करती है", paragraphs: ["CrewLab लोगों को प्रोजेक्ट विचार प्रस्तुत करने, प्रोजेक्ट खोजने, टीम में शामिल होने का अनुरोध भेजने, टीम बनाने और काम का समन्वय करने में मदद करता है। ऐप में प्रोफ़ाइल, प्रोजेक्ट सूची, आवेदन, चर्चा, इवेंट, सूचनाएँ और वैकल्पिक केवल-पढ़ने योग्य GitHub जानकारी हो सकती है। सुविधाएँ समय-समय पर बदल सकती हैं या उपलब्ध नहीं हो सकतीं।"] },
      { heading: "खाता और आचरण", paragraphs: ["अपने खाते की जानकारी सुरक्षित रखें, केवल अपना खाता इस्तेमाल करें और अनधिकृत पहुँच का संदेह होने पर हमें बताएँ। आपके खाते से की गई गतिविधि और समुदाय दिशानिर्देशों तथा लागू कानून का पालन करने की जिम्मेदारी आपकी है।"] },
      { heading: "आपकी सामग्री", paragraphs: ["आप अपनी जमा की गई सामग्री के उन अधिकारों के मालिक बने रहते हैं जो आपके पास हैं। सेवा चलाने, सुरक्षित रखने और आपको तथा उन सदस्यों को सामग्री दिखाने के लिए जिनके साथ आप साझा करना चुनते हैं, आप CrewLab को उसे होस्ट, संग्रहित, पुनरुत्पादित, प्रदर्शित और भेजने की अनुमति देते हैं। आप पुष्टि करते हैं कि आपके पास सामग्री जमा करने के आवश्यक अधिकार हैं।", "गैर-कानूनी, अधिकारों का उल्लंघन करने वाली, भ्रामक या अपमानजनक सामग्री पोस्ट न करें। साइन-इन किए सदस्य प्रोफ़ाइल और प्रोजेक्ट जानकारी देख सकते हैं। आवेदन संबंधित प्रोजेक्ट मालिक को और चर्चा स्वीकार की गई टीम को दिखाई जाती है। क्या साझा करना है, यह तय करना आपकी जिम्मेदारी है।"] },
      { heading: "अन्य सदस्यों के साथ काम", paragraphs: ["प्रोजेक्ट मालिक तय करते हैं कि किसे अपनी टीम में शामिल करना है। CrewLab सदस्यों को नियुक्त नहीं करता, उनकी पहचान या योग्यता सत्यापित नहीं करता और किसी सदस्य, प्रोजेक्ट, सहयोग, नौकरी, वित्तपोषण, भुगतान या व्यावसायिक परिणाम की गारंटी नहीं देता। काम शुरू करने से पहले सदस्य और प्रोजेक्ट मालिक भूमिका, समय, भुगतान, इक्विटी, बौद्धिक संपदा, गोपनीयता और अन्य शर्तें सीधे तय करने के लिए जिम्मेदार हैं।", "CrewLab सदस्यों के बीच समझौतों का पक्षकार नहीं है और कानूनी, वित्तीय, निवेश, रोजगार या पेशेवर सलाह नहीं देता। ज़रूरत पड़ने पर योग्य सलाह लें।"] },
      { heading: "GitHub कनेक्शन", paragraphs: ["GitHub वैकल्पिक है। जब प्रोजेक्ट मालिक CrewLab को अधिकृत करके रिपॉज़िटरी चुनता है, तो उसकी केवल-पढ़ने योग्य जानकारी उस प्रोजेक्ट की टीम को दिखाई जा सकती है, निजी रिपॉज़िटरी सहित। उचित रिपॉज़िटरी चुनने और GitHub कनेक्शन संभालने की जिम्मेदारी मालिक की है। CrewLab टीम के सदस्यों को GitHub क्रेडेंशियल नहीं देता। GitHub की अपनी अलग शर्तें लागू होती हैं।"] },
      { heading: "उचित उपयोग और कार्रवाई", paragraphs: ["समुदाय दिशानिर्देशों का पालन करें। लोगों की सुरक्षा, कानून का पालन या इन शर्तों को लागू करने के लिए हम रिपोर्ट की जाँच, सामग्री हटाने या सीमित करने, सुविधाएँ रोकने या खाते निलंबित अथवा बंद करने की कार्रवाई कर सकते हैं। जहाँ उचित हो, हम सूचना और जवाब देने का अवसर देंगे। शिकायत निवारण पृष्ठ से चिंता दर्ज करें।"] },
      { heading: "उपलब्धता और अस्वीकरण", paragraphs: ["CrewLab सेवा जैसी उपलब्ध है उसी आधार पर दी जाती है। हम इसे उपयोगी और सुरक्षित रखने का प्रयास करते हैं, पर बिना रुकावट पहुँच, त्रुटि-मुक्त संचालन, प्रोजेक्ट सफलता या सदस्यों द्वारा दी गई जानकारी की सटीकता की गारंटी नहीं देते। किसी व्यक्ति या प्रोजेक्ट से जुड़ना है या नहीं, यह आप तय करें और संबंधित जोखिम स्वयं जाँचें।"] },
      { heading: "सेवा रोकना और बदलाव", paragraphs: ["आप कभी भी सेवा इस्तेमाल करना बंद कर सकते हैं। खाता हटाने के अनुरोध के लिए baunthiyalujjwal52@gmail.com पर संपर्क करें; ऐप में फिलहाल स्वयं खाता हटाने की सुविधा नहीं है। हम सेवा रोक या बदल सकते हैं और इन शर्तों को अपडेट कर सकते हैं। महत्वपूर्ण बदलाव यहाँ नई तारीख के साथ प्रकाशित होंगे। कानून की अनुमति तक, लागू होने के बाद सेवा का उपयोग जारी रखना संशोधित शर्तों की स्वीकृति है।"] },
      { heading: "सामान्य", paragraphs: ["आप पर लागू अनिवार्य अधिकारों और नियमों के अधीन, इन शर्तों पर भारत के कानून लागू होंगे। कोई प्रावधान लागू न हो सके तो बाकी प्रावधान लागू रहेंगे। ये शर्तें और यहाँ जुड़ी नीतियाँ आपके और Ujjwal baunthiyal के बीच CrewLab के उपयोग का समझौता हैं। प्रश्नों के लिए baunthiyalujjwal52@gmail.com पर संपर्क करें।"] },
    ],
  },
  community: {
    title: "समुदाय दिशानिर्देश",
    description: "CrewLab पर सुरक्षित और सम्मानजनक प्रोजेक्ट सहयोग के लिए व्यावहारिक नियम।",
    intro: "CrewLab साझा काम के लिए लोगों को जोड़ता है। ये दिशानिर्देश प्रोफ़ाइल, प्रोजेक्ट, आवेदन, चर्चा और सेवा की अन्य सामग्री पर लागू होते हैं।",
    updated: updatedHi,
    sections: [
      { heading: "लोगों का सम्मान करें", paragraphs: ["ईमानदारी और सद्भाव से बातचीत करें। किसी को परेशान, धमकाएँ, पीछा न करें, अपमानित न करें, भेदभाव न करें और बार-बार निशाना न बनाएँ। हिंसा या शोषण को बढ़ावा न दें।"] },
      { heading: "प्रोजेक्ट और अवसरों के बारे में सही जानकारी दें", paragraphs: ["प्रोजेक्ट, उसकी स्थिति, ज़रूरी कौशल, समय की अपेक्षा और ज्ञात भुगतान या इक्विटी व्यवस्था का सही विवरण दें। किसी और का रूप न धरें, योग्यता या प्रोजेक्ट के बारे में झूठ न बोलें और धोखाधड़ी या पिरामिड योजना न चलाएँ।", "काम शुरू करने से पहले भूमिका, स्वामित्व, भुगतान, गोपनीयता और बौद्धिक संपदा पर सीधे सहमति बनाएँ। CrewLab सूची या आवेदन नौकरी का प्रस्ताव या उन शर्तों का समझौता नहीं है।"] },
      { heading: "गोपनीयता और बौद्धिक संपदा बचाएँ", paragraphs: ["किसी की निजी संपर्क जानकारी, क्रेडेंशियल, गोपनीय सामग्री या व्यक्तिगत जानकारी बिना अनुमति प्रकाशित न करें। ऐसे अधिकार-संरक्षित काम को अपलोड या साझा न करें जिसे साझा करने की अनुमति आपके पास नहीं है। पोस्ट करने से पहले सोचें, क्योंकि दूसरे सदस्य सामग्री की प्रतिलिपि रख सकते हैं।"] },
      { heading: "सेवा को उपयोगी और सुरक्षित रखें", bullets: ["स्पैम, फ़िशिंग, मैलवेयर, भ्रामक लिंक या अनचाहे सामूहिक संदेश न भेजें।", "गैर-कानूनी सामग्री, धमकी, नफ़रत फैलाने वाला उत्पीड़न, यौन शोषण या किसी को खतरे में डालने वाली सामग्री पोस्ट न करें।", "पहुँच नियंत्रण से बचने, GitHub कनेक्शन का दुरुपयोग करने, सदस्य जानकारी निकालने या सेवा बाधित करने का प्रयास न करें।", "यह झूठा दावा न करें कि CrewLab ने किसी सदस्य, प्रोजेक्ट, नौकरी या निवेश को सत्यापित, समर्थन या गारंटी दी है।"] },
      { heading: "रिपोर्ट और कार्रवाई", paragraphs: ["हानिकारक, गैर-कानूनी, अधिकारों का उल्लंघन करने वाली या भ्रामक सामग्री की शिकायत निवारण पृष्ठ से रिपोर्ट करें। संबंधित प्रोफ़ाइल, प्रोजेक्ट, संदेश या लिंक दें और जाँच के लिए पर्याप्त जानकारी शामिल करें। सदस्यों की सुरक्षा या कानून के पालन के लिए हम सामग्री हटा या सीमित कर सकते हैं अथवा खाते निलंबित कर सकते हैं। जाँच या कानूनी आवश्यकता के लिए जितना जरूरी हो, शिकायत का विवरण साझा किया जा सकता है।"] },
    ],
  },
  grievance: {
    title: "शिकायत निवारण",
    description: "CrewLab से गोपनीयता, उपयोगकर्ता सामग्री, खाते या सेवा संबंधी शिकायत कैसे करें।",
    intro: "सेवा से जुड़ी सामग्री, गोपनीयता, खाता या अन्य चिंता के लिए इस पृष्ठ पर CrewLab से संपर्क करें।",
    updated: updatedHi,
    sections: [
      { heading: "शिकायत अधिकारी", paragraphs: ["नाम: Ujjwal baunthiyal।", "ईमेल: baunthiyalujjwal52@gmail.com।", "डाक पता: Amarshahid Anand Colony, Ajabpur Kalan, Dehradun, Uttarakhand 248001।", "शिकायत अधिकारी CrewLab और उसके कंप्यूटर संसाधनों से संबंधित शिकायतों का संपर्क बिंदु है। शिकायत भेजने के लिए ऊपर दिए गए संपर्क विवरण का उपयोग करें।"] },
      { heading: "शिकायत कैसे भेजें", paragraphs: ["ऊपर दिए शिकायत ईमेल पर “CrewLab grievance” विषय के साथ ईमेल भेजें। अपना नाम और जवाब पाने का पता, समस्या का विवरण, तथा संबंधित प्रोफ़ाइल, प्रोजेक्ट, संदेश या खाते तक पहुँचने के लिए लिंक या अन्य जानकारी दें। गोपनीयता अनुरोध के लिए बताएं कि कौन-सा अधिकार इस्तेमाल करना चाहते हैं और किस खाते से जुड़ा है। पासवर्ड, प्रमाणीकरण कोड या GitHub टोकन ईमेल न करें।"] },
      { heading: "प्राप्ति और समाधान", paragraphs: ["हम शिकायत मिलने के 24 घंटे के भीतर उसकी प्राप्ति की पुष्टि करेंगे और 7 दिनों के भीतर उसका समाधान करेंगे। किसी सामग्री के बारे में ऐसे अनुरोध पर, जिस पर कानून की कम समय-सीमा लागू हो, उसी समय-सीमा में कार्रवाई होगी; जहाँ कानून आवश्यक करे वहाँ 36 घंटे के भीतर भी। उत्तर से संतुष्ट न हों तो उसी ईमेल पर जवाब देकर बताएं कि क्या बाकी है।"] },
      { heading: "हमें किन जानकारियों की ज़रूरत हो सकती है", paragraphs: ["समस्या की पुष्टि, खाते की सुरक्षा या मिलती-जुलती सामग्री में से रिपोर्ट की गई सामग्री पहचानने के लिए हम अतिरिक्त जानकारी माँग सकते हैं। शिकायत की जानकारी का उपयोग जाँच और जवाब देने, आवश्यक रिकॉर्ड रखने और कानूनी दायित्व पूरा करने के लिए किया जाएगा।"] },
      { heading: "अन्य नीतियाँ", paragraphs: ["व्यक्तिगत जानकारी के बारे में गोपनीयता नीति पढ़ें। सदस्य व्यवहार और सामग्री के नियमों के लिए समुदाय दिशानिर्देश पढ़ें। खाते और सेवा की शर्तों के लिए उपयोग की शर्तें पढ़ें।"] },
    ],
  },
};

export function getLegalPageCopy(locale: LegalLocale, key: LegalPageKey): LegalPageCopy {
  return (locale === "hi" ? hi : en)[key];
}
