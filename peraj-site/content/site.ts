// All page copy lives here. Source: https://redesign-peraj.vercel.app/ (client content).
// Anything marked TODO(placeholder) was not supplied by the client and must be replaced.

export const site = {
  name: "Peraj Insurance",
  founded: 1951,
  founder: "Shri Mulji Peraj",
  phone: "+91 22 1234 5678", // TODO(placeholder): dummy number
  email: "info@perajinsurance.co.in", // TODO(placeholder): confirm with client
  license: "IRDAI Registered Direct Insurance Broker (Life & General), Broker License No. 182",
  hq: "Mumbai, with a national presence across India",
  copyright: "© 2026 Peraj Insurance Brokers",
  skip: "Skip to content",
};

export const cta = {
  primary: "Request a callback",
  secondary: "Explore our legacy",
};

export const nav = [
  { label: "Why Peraj", href: "#why" },
  { label: "Legacy", href: "#legacy" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "FAQs", href: "#faqs" },
];

export const hero = {
  eyebrow: "Commercial insurance & advisory · Since 1951",
  titleLead: "Built on trust.",
  // Static per brief MO-1 (subtle): "people." is the first word of the client's rotating list.
  titleTail: "Shaped around people.",
  sub: "For over 70 years Peraj has structured and defended insurance for businesses and the people behind them, as a fiduciary partner, not a salesperson.",
  badge: "IRDAI registered · Broker License No. 182",
  image: {
    src: "/media/hero.webp",
    alt: "A Peraj adviser talking a business client through their cover in a city office",
  },
  stats: [
    { value: "99.8%", label: "Claims satisfaction" },
    { value: "2 hrs", label: "Callback within" },
  ],
};

export const why = {
  eyebrow: "Why Peraj",
  title: "Seven decades of advice that puts you first.",
  stats: {
    years: { value: 70, suffix: "+", label: "Years of advisory trust", note: "Founded in 1951" },
    claims: { value: 99.8, suffix: "%", label: "Claims satisfaction rate", note: "An advocacy team handles contested settlements." },
    retention: { value: 99.5, suffix: "%", label: "Client & talent retention", note: "People stay because the relationship does." },
    countries: { value: 40, suffix: "+", label: "Countries in our broker network", note: "Cover that travels with your business." },
  },
  countryChips: ["Cross-border programs", "Master-Local (DIC/DIL)", "Partner brokers worldwide"],
};

export const pitfalls = {
  eyebrow: "Standard policy pitfalls",
  title: "Where policies quietly fail people.",
  problemLabel: "The problem",
  fixLabel: "The Peraj fix",
  items: [
    {
      title: "Hidden exclusions",
      problem: "Gaps in the clauses that only surface after a major loss.",
      fix: "Customized manuscript wordings written around your risks.",
    },
    {
      title: "Adversarial claims",
      problem: "Insurers contesting settlements while you stand alone.",
      fix: "A dedicated in-house claim cell that stands on your side.",
    },
    {
      title: "Arbitrary deductions",
      problem: "Under-insurance penalties that shrink legitimate payouts.",
      fix: "Pre-loss technical valuation audits that remove the dispute.",
    },
  ],
};

export const legacy = {
  eyebrow: "Advisory legacy",
  title: "Founded on a simple idea: advise first.",
  prev: "Previous milestone",
  next: "Next milestone",
  placeholderBadge: "Content to come",
  // Era photos (1952 onward) are stock atmosphere, not Peraj's own archive.
  milestones: [
    {
      year: "1951",
      title: "The foundation of fiduciary advisory",
      text: "Shri Mulji Peraj founded the firm and quickly obtained an agency license from the Controller of Insurance, setting an early standard for integrity before nationalization.",
      image: "/media/legacy.webp",
      alt: "Mumbai's Gothic heritage civic buildings, the city where Peraj was founded in 1951",
    },
    // TODO(placeholder): dummy text until Peraj supplies these milestones.
    {
      year: "1952",
      title: "Milestone title to be supplied",
      text: "Placeholder: Peraj to supply what happened in 1952.",
      image: "/media/legacy-1952.webp",
      alt: "A vintage typewriter on a writer's desk",
      placeholder: true,
    },
    {
      year: "1970",
      title: "Milestone title to be supplied",
      text: "Placeholder: Peraj to supply what happened in 1970.",
      image: "/media/legacy-1970.webp",
      alt: "An old colonial street in Mumbai",
      placeholder: true,
    },
    {
      year: "1978",
      title: "Milestone title to be supplied",
      text: "Placeholder: Peraj to supply what happened in 1978.",
      image: "/media/legacy-1978.webp",
      alt: "Wooden archive drawers of index cards",
      placeholder: true,
    },
    {
      year: "2002",
      title: "Milestone title to be supplied",
      text: "Placeholder: Peraj to supply what happened in 2002.",
      image: "/media/legacy-2002.webp",
      alt: "A modern glass office tower",
      placeholder: true,
    },
  ],
};

export const solutions = {
  eyebrow: "Risk solutions",
  title: "Cover designed around how you work.",
  items: [
    { icon: "building", title: "Property & Physical Assets", text: "Industrial All Risks cover that includes business interruption." },
    { icon: "hardhat", title: "Capital Projects & EPC Risk", text: "Erection and Contractor All Risk cover with delay-in-startup protection." },
    { icon: "scale", title: "Casualty & Third-Party Liability", text: "Commercial general liability, product recall and pollution liability." },
    { icon: "briefcase", title: "Management Liability (D&O)", text: "Dedicated Side-A protection against shareholder and regulatory actions." },
    { icon: "shield", title: "Cyber, Data & Extortion", text: "Ransomware defense, data breach liability and DPDP compliance support." },
    { icon: "heart", title: "Human Capital & Employee Health", text: "Cashless group medical cover and executive term life insurance." },
  ],
};

export const process = {
  eyebrow: "Our process",
  title: "Three steps from first call to full protection.",
  lead: "No forms to fill and no jargon. Just a senior adviser and a clear plan.",
  steps: [
    { n: "01", title: "Discovery", text: "A 15-minute call with a senior adviser. A scoping brief reaches you within 2 business hours.", time: "15 min call" },
    { n: "02", title: "Forensic audit", text: "An independent audit of your policies and exposures, ending in a clear gap analysis.", time: "2–4 business days" },
    { n: "03", title: "Placement & advocacy", text: "We take your program to market, then stay beside you with ongoing claims support.", time: "Ongoing" },
  ],
};

export const industries = {
  eyebrow: "Industries we serve",
  title: "Deep knowledge of the sectors that move the economy.",
  items: [
    { icon: "factory", title: "Industrials, Manufacturing & Advanced Engineering", image: "/media/industry-industrials.webp", alt: "Engineer operating machinery on a factory floor" },
    { icon: "construction", title: "Infrastructure, Construction & Capital Projects", image: "/media/industry-infrastructure.webp", alt: "Tower crane over a construction site in an Indian city" },
    { icon: "zap", title: "Energy, Power, Utilities & Natural Resources", image: "/media/industry-energy.webp", alt: "Engineer with a tablet at a solar power plant" },
    { icon: "truck", title: "Transportation, Mobility & Global Logistics", image: "/media/industry-logistics.webp", alt: "Gantry cranes and shipping containers at a port" },
    { icon: "landmark", title: "Financial Institutions & Capital Markets", image: "/media/industry-financial.webp", alt: "Office towers of Mumbai's Lower Parel business district" },
    { icon: "cpu", title: "Technology, Telecom & Digital Infrastructure", image: "/media/industry-technology.webp", alt: "Technician checking server racks in a data centre" },
  ],
};

export const proof = {
  eyebrow: "Enterprise proof",
  title: "Trusted when it matters most: at claim time.",
  rating: "Fiduciary rating 5.0", // TODO(verify): source not stated in client material
  prev: "Previous testimonial",
  next: "Next testimonial",
  // TODO(verify): wording paraphrased from the client site, confirm exact quotes and permission.
  // Photos show the client's sector, not the person quoted; each slide carries a visible sector label.
  items: [
    { quote: "After a machinery breakdown our claim was settled fast, with no arbitrary deductions.", who: "CFO", org: "Global engineering conglomerate", sector: "Engineering", image: "/media/proof-industrials.webp", alt: "Engineering sector: an engineer at work on a factory floor" },
    { quote: "Their risk reviews have saved us money year after year and rebuilt our clinical trial and product liability programs.", who: "COO", org: "Multinational pharmaceutical company", sector: "Pharmaceuticals", image: "/media/proof-pharma.webp", alt: "Pharmaceutical sector: a scientist working in a laboratory" },
    { quote: "Strong on technology E&O, cyber and board governance. They understand how we actually work.", who: "Managing Director", org: "Cloud & cyber platform", sector: "Cloud & cyber", image: "/media/proof-technology.webp", alt: "Technology sector: technicians checking server racks in a data centre" },
  ],
};

export const faq = {
  eyebrow: "FAQs",
  title: "Questions we hear most.",
  more: "Still unsure?",
  moreCta: "Talk to an adviser",
  items: [
    { q: "Can Peraj review my existing coverage?", a: "Yes. A no-obligation Policy Health Audit reviews your current program, and you do not have to switch brokers." },
    { q: "What do the audits cost?", a: "The discovery call and forensic audit are free. We are paid through insurer commissions on placement, with no upfront fees." },
    { q: "How does Peraj handle denied or delayed claims?", a: "Our in-house Claims Advocacy & Capital Recovery division, staffed by lawyers and former surveyors, takes over and argues your claim before insurers." },
    { q: "Is my data kept confidential?", a: "Yes. We work under NDAs and data security protocols aligned with Indian DPDP guidelines." },
    { q: "Does Peraj handle overseas risks?", a: "Yes, through partner brokers in 40+ countries, including cross-border Master-Local (DIC/DIL) policies." },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Your protection starts with a conversation.",
  lead: "Request a callback and receive a complimentary Policy Health Review. No pressure, no obligation.",
  promise: "Callback within 2 business hours",
  formTitle: "Request a callback",
  dialogDescription: "Tell us a little. A senior adviser calls you back within 2 business hours.",
};

export const form = {
  name: "Full name",
  namePh: "Your name",
  company: "Company (optional)",
  companyPh: "Company name",
  email: "Email",
  emailPh: "you@example.com",
  phone: "Phone",
  phonePh: "+91",
  cover: "What do you need cover for?",
  message: "Anything we should know? (optional)",
  messagePh: "Tell us about your business or current cover",
  submit: "Request a callback",
  sending: "Sending…",
  privacy: "Free consultation. Your details stay confidential under our data notice.",
  errors: { required: "Please fill this in.", email: "Enter a valid email address.", phone: "Enter a valid phone number." },
  failed: "Something went wrong. Please try again or call us directly.",
  successTitle: "Thank you. We have your request.",
  successText: "A senior adviser will call you within 2 business hours.",
  again: "Send another request",
  covers: [
    "Business property & assets",
    "Capital projects & EPC",
    "Liability",
    "Directors & officers",
    "Cyber & data",
    "Employee health & life",
    "Personal insurance",
    "Not sure yet",
  ],
};

export const footer = {
  // Not rendered: the footer CTA band was dropped (Contact is the closing CTA). Kept as client copy by user choice.
  cta: "What are you protecting?",
  ctaSub: "Tell us, and we will build the cover around it.",
  explore: "Explore",
  reach: "Reach us",
  hqLabel: "Headquarters",
  social: [
    { label: "LinkedIn", href: "#" }, // TODO(placeholder)
    { label: "Instagram", href: "#" }, // TODO(placeholder)
  ],
  legal: [
    { label: "Terms of Engagement", href: "#" }, // TODO(placeholder)
    { label: "Privacy & Data Notice", href: "#" }, // TODO(placeholder)
    { label: "IRDAI Disclosures", href: "#" }, // TODO(placeholder)
  ],
  top: "Back to top",
};
