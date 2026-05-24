export type NavItem = {
  href: string;
  label: string;
};

export type ResourceCategory =
  | "All"
  | "Videos"
  | "Articles"
  | "Studies"
  | "Downloads"
  | "FAQs";

export type Resource = {
  category: Exclude<ResourceCategory, "All">;
  icon: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

export type SimpleCard = {
  title: string;
  text: string;
};

export type EyebrowCard = SimpleCard & {
  eyebrow: string;
};

export type FoundationStep = SimpleCard & {
  number: string;
  featured?: boolean;
};

export const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#foundations", label: "The Foundations" },
  { href: "/#technology", label: "The Technology" },
  { href: "/#resources", label: "Resources" },
];

export const trustItems: SimpleCard[] = [
  { title: "Compliant Copy", text: "Educational, not medical." },
  { title: "Mobile First", text: "Responsive on all screens." },
  { title: "Resource Ready", text: "Videos, studies, PDFs." },
  { title: "CTA Focused", text: "Built for presentations." },
];

export const heroSteps: Array<SimpleCard & { number: string }> = [
  {
    number: "01",
    title: "Educate",
    text: "Explain the problem simply.",
  },
  {
    number: "02",
    title: "Demonstrate",
    text: "Show the technology clearly.",
  },
  {
    number: "03",
    title: "Invite",
    text: "Lead to presentation attendance.",
  },
];

export const problemCards: Array<SimpleCard & { icon: string }> = [
  {
    icon: "Sleep",
    title: "Fatigue",
    text: "A common reason people begin searching for better hydration and wellness habits.",
  },
  {
    icon: "Heat",
    title: "Inflammation Awareness",
    text: "Explained as a wellness topic, not as a disease-treatment claim.",
  },
  {
    icon: "Cells",
    title: "Cellular Stress",
    text: "Introduces free radicals and oxidative load in simple everyday language.",
  },
  {
    icon: "Time",
    title: "Aging Concerns",
    text: "Connects lifestyle, hydration, rest, and education to healthier routines.",
  },
];

export const solutionCards: Array<SimpleCard & { featured?: boolean }> = [
  {
    title: "Hydration",
    text: "Designed to support a healthier daily water routine.",
  },
  {
    title: "Education",
    text: "Helps explain oxidative stress and free radicals.",
  },
  {
    title: "Simplicity",
    text: "Easy for families to understand and discuss.",
  },
  {
    title: "Presentation",
    text: "Clear CTA to attend a Water Awareness Presentation.",
    featured: true,
  },
];

export const foundationSteps: FoundationStep[] = [
  {
    number: "1",
    title: "Free Radicals",
    text: "Like tiny sparks inside the body, free radicals are normal in small amounts but may contribute to oxidative stress when unbalanced.",
  },
  {
    number: "2",
    title: "Oxidative Stress",
    text: "This happens when oxidative pressure becomes greater than the body's natural balancing systems.",
  },
  {
    number: "3",
    title: "Inflammation & Lifestyle",
    text: "Stress, food choices, sleep, movement, and environment may influence how people feel day to day.",
  },
  {
    number: "4",
    title: "Why This Matters",
    text: "Education helps people make better wellness decisions without fear, exaggeration, or disease-treatment claims.",
    featured: true,
  },
];

export const technologySteps: EyebrowCard[] = [
  {
    eyebrow: "Input",
    title: "Drinking Water",
    text: "The system starts with your drinking water and prepares it for hydrogen enrichment.",
  },
  {
    eyebrow: "Process",
    title: "Molecular Hydrogen",
    text: "The machine generates dissolved H2 gas, which becomes the key focus of hydrogen-rich water.",
  },
  {
    eyebrow: "Output",
    title: "Hydrogen-Rich Water",
    text: "Fresh hydrogen-rich water is dispensed for a healthier daily hydration routine.",
  },
];

export const comparisonItems: SimpleCard[] = [
  {
    title: "Regular Water",
    text: "Supports hydration but does not intentionally add dissolved molecular hydrogen.",
  },
  {
    title: "Alkaline Water",
    text: "Focuses primarily on pH level.",
  },
  {
    title: "Hydrogen-Rich Water",
    text: "Focuses on dissolved molecular hydrogen concentration.",
  },
];

export const resourceCategories: ResourceCategory[] = [
  "All",
  "Videos",
  "Articles",
  "Studies",
  "Downloads",
  "FAQs",
];

export const resources: Resource[] = [
  {
    category: "Videos",
    icon: "Play",
    title: "Water Awareness Presentation",
    description:
      "A guided introduction to hydrogen water, oxidative stress, and why daily hydration quality matters.",
  },
  {
    category: "Videos",
    icon: "Clip",
    title: "Customer Story Clips",
    description:
      "Real wellness experiences shared in a responsible, education-first format with results-vary context.",
  },
  {
    category: "Articles",
    icon: "Read",
    title: "Oxidative Stress Made Simple",
    description:
      "Educational article explaining free radicals, cellular stress, and daily wellness habits.",
  },
  {
    category: "Studies",
    icon: "Lab",
    title: "Research Reference Links",
    description:
      "Curated molecular hydrogen research links and supporting educational materials.",
  },
  {
    category: "Downloads",
    icon: "PDF",
    title: "Product Overview PDF",
    description:
      "Downloadable product sheet, presentation handout, machine guide, or wellness checklist.",
  },
  {
    category: "FAQs",
    icon: "FAQ",
    title: "Presenter FAQ Guide",
    description:
      "Common questions for prospects, family members, and presentation attendees.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What is molecular hydrogen water?",
    answer:
      "It is water that contains dissolved molecular hydrogen gas, often discussed as part of a wellness-focused hydration routine.",
  },
  {
    question: "Is hydrogen water the same as alkaline water?",
    answer:
      "No. Alkaline water focuses mainly on pH, while hydrogen-rich water focuses on dissolved H2 concentration.",
  },
  {
    question: "Does this website make health treatment claims?",
    answer:
      "No. The language is educational only and does not claim to diagnose, treat, cure, or prevent disease.",
  },
  {
    question: "Can I add my own resources?",
    answer:
      "Yes. The resource library can organize presentation videos, educational articles, research links, product documents, FAQs, and customer education materials in one place.",
  },
];

export const testimonials: Testimonial[] = [
  {
    initials: "ML",
    name: "Maria L.",
    role: "Presentation Attendee",
    quote:
      "The presentation made the science simple. I finally understood oxidative stress without feeling overwhelmed.",
  },
  {
    initials: "JR",
    name: "James R.",
    role: "Hydration User",
    quote:
      "I liked that the message focused on daily wellness habits and responsible education, not exaggerated promises.",
  },
  {
    initials: "AS",
    name: "Ana S.",
    role: "Community Guest",
    quote:
      "It gave me a clear way to talk with my family about water, wellness, and healthy routines.",
  },
];
