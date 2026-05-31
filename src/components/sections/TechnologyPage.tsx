import {
  BadgeCheck,
  Beaker,
  CalendarCheck,
  Droplets,
  ExternalLink,
  FlaskConical,
  Gift,
  HeartPulse,
  Mail,
  Maximize2,
  Microscope,
  Phone,
  RefreshCcw,
  Scale,
  Send,
  ShieldCheck,
  ShoppingCart,
  Target,
  Timer,
  Waves,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { PageLayout } from "../layout/PageLayout";
import contactImage from "../../assets/images/contact_us.jpg";
import experiment1Image from "../../../dist/assets/experiments/experiment1.jpg";
import experiment2Image from "../../../dist/assets/experiments/experiment2.jpg";
import experiment3Image from "../../../dist/assets/experiments/experiment3.jpg";
import experiment4Image from "../../../dist/assets/experiments/experiment4.jpg";
import featuresImage from "../../../dist/assets/features.jpg";
import fiveComponentsImage from "../../../dist/assets/fivecomponents.jpg";
import howPaysItselfImage from "../../../dist/assets/howpaysitself.jpg";
import howItWorksImage from "../../../dist/assets/howitworks.jpg";
import isItWorthItImage from "../../../dist/assets/isitworthit.jpg";
import machineBackImage from "../../../dist/assets/thehero/themachine_back.jpg";
import machineImage from "../../../dist/assets/thehero/themachine.jpg";
import alkalineMachinesImage from "../../../dist/assets/otherh2sources/alkaline_machines.jpg";
import hydrogenBottlesImage from "../../../dist/assets/otherh2sources/hydrogen_bottlespng.jpg";
import hydrogenTabletsImage from "../../../dist/assets/otherh2sources/hydrogen_tablets.jpg";
import otherH2OptionsImage from "../../../dist/assets/otherh2options.jpg";
import otherMethodsImage from "../../../dist/assets/otherh2sources/other2sources.jpg";
import onlyH2MachinesImage from "../../../dist/assets/otherh2sources/onlyh2machines.jpg";
import ownershipPrivilegesImage from "../../../dist/assets/ownership_privileges.jpg";
import taiwaneseTechImage from "../../../dist/assets/taiwanesetech.jpg";
import whatElseToThinkImage from "../../../dist/assets/whatelsetothink.jpg";

type MachineFeature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type ComparisonRow = {
  feature: string;
  hydrogen: string;
  icon: LucideIcon;
  ionizer: string;
};

type MachineFeatureVisual = {
  alt: string;
  description: string;
  details: string[];
  eyebrow: string;
  gradientClass: string;
  image: string;
  title: string;
};

type ScientificExperiment = {
  alt: string;
  demonstrates: string[];
  eyebrow: string;
  image: string;
  process: string[];
  purpose: string;
  summary: string;
  title: string;
  videoUrl: string;
};

type OtherH2Option = {
  alt: string;
  details: string[];
  icon: LucideIcon;
  image: string;
  title: string;
  summary: string;
};

type ProgramProtocolItem = {
  category: "PROGRAMS" | "PROTOCOLS";
  icon: LucideIcon;
  text: string;
  title: string;
  withRegisterButton?: boolean;
};

const machineFeatures: MachineFeature[] = [
  {
    description:
      "Advanced filtration helps reduce chlorine, lead, and unwanted impurities so the water starts cleaner, fresher, and easier to trust.",
    icon: Droplets,
    title: "Supports Energy",
  },
  {
    description:
      "Designed to infuse water with 1500+ PPB of molecular hydrogen, delivering hydrogen-rich hydration for daily wellness support.",
    icon: FlaskConical,
    title: "Powerful Hydrogen Infusion",
  },
  {
    description:
      "Premium solid titanium electrodes and a durable internal design help support consistent performance you can rely on every day.",
    icon: ShieldCheck,
    title: "Built For Daily Life",
  },
  {
    description:
      "An automatic cleaning cycle helps keep the machine fresh and performing at its best with less maintenance effort.",
    icon: RefreshCcw,
    title: "Self-Cleaning & Easy",
  },
  {
    description:
      "Molecular hydrogen is extremely small, allowing it to move through water and reach areas ordinary antioxidants may not access as easily.",
    icon: Target,
    title: "Deep Cellular Support",
  },
  {
    description:
      "The system is designed to produce clean hydrogen-rich water without ozone or harsh byproducts, keeping the focus on refreshing hydration.",
    icon: Waves,
    title: "Pure & Safe Water",
  },
  {
    description:
      "Engineered around quality standards such as CE, ISO, and JWMA, helping build confidence in the technology and construction.",
    icon: BadgeCheck,
    title: "Tested & Certified",
  },
  {
    description:
      "Simple, fast, and effortless to use, making hydrogen-rich water practical for personal routines and family wellness habits.",
    icon: Timer,
    title: "Made For Everyday Wellness",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Main Function",
    hydrogen: "Dissolves molecular hydrogen (H2) into drinking water.",
    icon: Droplets,
    ionizer: "Raises the pH of water to make it alkaline.",
  },
  {
    feature: "How It Works",
    hydrogen: "Uses electrolysis to infuse hydrogen gas into water.",
    icon: Waves,
    ionizer:
      "Uses electrolysis to separate water into acidic and alkaline streams.",
  },
  {
    feature: "Claimed Antioxidant Source",
    hydrogen: "Focuses on dissolved molecular hydrogen.",
    icon: ShieldCheck,
    ionizer: "Usually points to negative ORP as the antioxidant marker.",
  },
  {
    feature: "Actual Antioxidant Molecule",
    hydrogen: "H2 is the molecule being discussed as a selective antioxidant.",
    icon: Target,
    ionizer: "No specific antioxidant molecule is clearly identified.",
  },
  {
    feature: "Scientific Evidence",
    hydrogen:
      "Supported by a growing body of molecular hydrogen lab and clinical research.",
    icon: Microscope,
    ionizer: "Evidence for a direct antioxidant effect is more limited.",
  },
  {
    feature: "Main Benefit Claim",
    hydrogen:
      "Centers on hydrogen's role in oxidative-stress and cellular-health education.",
    icon: HeartPulse,
    ionizer: "Centers on alkalinity and the idea of balancing body acidity.",
  },
];

const machineFeatureVisuals: MachineFeatureVisual[] = [
  {
    alt: "Hydrogen water machine feature overview",
    description:
      "Enjoy premium hydration every day for only pennies per glass. Designed for convenience, practicality and value for the entire family.",
    details: [
      "Daily hydration becomes easier when the water is fresh, clean-tasting, and available at home without extra preparation.",
      "The machine is built to make hydrogen-rich water part of a repeatable routine, so families can focus on consistency rather than complexity.",
      "Its core value is practical wellness: better water habits, straightforward operation, and a clear molecular hydrogen story people can understand.",
    ],
    eyebrow: "Feature Overview",
    gradientClass: "from-marine via-lagoon to-marine",
    image: featuresImage,
    title: "Built for Everyone in your Home",
  },
  {
    alt: "Taiwanese technology and engineering foundation",
    description:
      "Taiwanese engineering supports the machine's quality foundation through careful design, durable components, and production standards built for long-term confidence.",
    details: [
      "The technology story begins with the internal build: filtration, electrolysis, electrodes, controls, and safety-minded water delivery working as one system.",
      "Strong engineering matters because hydrogen-rich water depends on consistent generation, clean pathways, and reliable performance over time.",
      "For families, that means more confidence in the machine, the water it produces, and the daily routine it is meant to support.",
    ],
    eyebrow: "Technology Foundation",
    gradientClass: "from-slateblue via-marine to-lagoon",
    image: taiwaneseTechImage,
    title: "Backed by Taiwanese Engineering",
  },
];

const programProtocolItems: ProgramProtocolItem[] = [
  {
    category: "PROGRAMS",
    icon: Gift,
    title: "Referral Incentive",
    text: "If you are loving the product and enjoying the benefits of better hydration, doesn’t it make sense to share it with the people you care about most? By simply sharing your experience with friends, family, clients, and associates, you may qualify to earn referral bonuses, rewards, and exclusive incentives. Helping others discover better hydration can become rewarding in more ways than one.",
  },
  {
    category: "PROGRAMS",
    icon: BadgeCheck,
    title: "Free Machine Challenge",
    text: "In addition to earning hydrogen-related products and rewards, you may also qualify to earn an additional hydrogen machine through our Free Machine Challenge. The program is designed to be simple, achievable, and results-driven, with ongoing team support throughout the process. Our success rate with those who actively participate is very strong. Be sure to schedule a Hydration Conversation with one of our team members to explore the details and see if the program makes sense for you.",
    withRegisterButton: true,
  },
  {
    category: "PROGRAMS",
    icon: Target,
    title: "Business Advantages",
    text: "More people than ever are looking for flexible and enjoyable ways to create additional income streams while making a positive impact. For those accepted as a Wellness Advocate or Hydration Specialist with Happy Hydration Systems, the opportunity opens the door to exciting personal growth, meaningful connections, and performance-based rewards. As an independent contractor, you may also benefit from potential business-related tax advantages. Most importantly, you become part of a supportive, purpose-driven community committed to education, wellness, and helping people live healthier lives. If this sparks your curiosity, be sure to register and learn more.",
    withRegisterButton: true,
  },
  {
    category: "PROTOCOLS",
    icon: Microscope,
    title: "Education",
    text: "If you are already interested in molecular hydrogen and advanced hydration, doesn’t it make sense to continue learning from the latest conversations surrounding wellness, healthy cooking, nutrition, lifestyle habits, and cellular health? As part of our community, you gain access to ongoing educational resources designed to support long-term lifestyle improvement and greater wellness awareness. It is just one of the many added benefits of being part of our Happy Owners Club.",
  },
  {
    category: "PROTOCOLS",
    icon: HeartPulse,
    title: "Community",
    text: "True wellness is even more powerful when shared with like-minded people. As part of our community, you may receive access to our private members Facebook group, educational YouTube channel, exclusive virtual trainings, and special local events. Our goal is to create a positive environment focused on education, encouragement, connection, and healthy living. Reach out to your Sales Consultant to learn more about how you can become more connected and involved.",
  },
];

function getVimeoEmbedUrl(videoUrl: string) {
  const videoId = videoUrl.replace("https://vimeo.com/", "").split(/[/?#]/)[0];

  return `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
}

const otherH2Options: OtherH2Option[] = [
  {
    alt: "Hydrogen tablets as another source of H2 water",
    details: [
      "Hydrogen tablets are usually dropped into water shortly before drinking. The appeal is convenience: they are portable, simple, and do not require a countertop machine.",
      "The limitation is consistency. Hydrogen concentration can vary by tablet quality, water amount, timing, temperature, and how long the water sits before it is consumed.",
      "They can be useful for travel or occasional use, but they do not create the same daily home-hydration experience as a dedicated hydrogen water machine.",
    ],
    icon: FlaskConical,
    image: hydrogenTabletsImage,
    summary:
      "Portable tablets can introduce H2 into water, but freshness, timing, and consistency become important parts of the conversation.",
    title: "Hydrogen Tablets",
  },
  {
    alt: "Portable hydrogen bottles as another source of H2 water",
    details: [
      "Hydrogen bottles are small devices that generate hydrogen-rich water in a single serving. They are popular because they are compact and easy to carry.",
      "Because they are smaller, output and capacity can be limited. The user may need to wait for each cycle, recharge the unit, clean it regularly, and drink soon after generation.",
      "This option can support an on-the-go routine, but families often prefer a home system when they want larger volume, easier sharing, and a more consistent presentation story.",
    ],
    icon: Droplets,
    image: hydrogenBottlesImage,
    summary:
      "Portable bottles make H2 water accessible away from home, but capacity and generation strength can vary by device.",
    title: "Hydrogen Bottles",
  },
  {
    alt: "Alkaline machines compared with molecular hydrogen water machines",
    details: [
      "Alkaline machines are often discussed in the same conversation as hydrogen water because many people first hear about water technology through pH-focused systems.",
      "The important distinction is that alkalinity and dissolved molecular hydrogen are not the same thing. A machine can raise pH without making H2 the main active story.",
      "For this presentation, the comparison should stay clear: alkaline machines focus mainly on pH, while a molecular hydrogen water machine focuses on dissolved H2 concentration.",
    ],
    icon: Scale,
    image: alkalineMachinesImage,
    summary:
      "Alkaline machines focus mainly on pH, so they should be explained separately from true dissolved molecular hydrogen concentration.",
    title: "Alkaline Machines",
  },
  {
    alt: "Other molecular hydrogen methods and products",
    details: [
      "Other H2 methods may include specialty products, spa-style uses, topical formats, or devices designed for narrow use cases.",
      "Some of these options can be interesting, but visitors should understand the difference between occasional wellness products and a daily drinking-water routine.",
      "The strongest public education message is still simple: fresh hydrogen-rich water connects molecular hydrogen to something families already do every day.",
    ],
    icon: HeartPulse,
    image: otherMethodsImage,
    summary:
      "Other H2 methods may exist, but they should be compared by purpose, consistency, convenience, and daily practicality.",
    title: "Others",
  },
];

const scientificExperiments: ScientificExperiment[] = [
  {
    alt: "Iodine test showing selective antioxidants at work",
    demonstrates: [
      "Hydrogen-rich water may reduce the visible oxidative effect of iodine more effectively than ordinary water.",
      "The demonstration supports the idea of molecular hydrogen as a selective antioxidant conversation.",
      "A color-change test makes oxidative stress easier to explain because visitors can see the comparison directly.",
    ],
    eyebrow: "Experiment 01",
    image: experiment1Image,
    process: [
      "Prepare one glass of pure water and one glass of freshly generated H2-rich water.",
      "Add the same number of iodine drops to each glass.",
      "Observe the color response in ordinary water compared with hydrogen-rich water.",
      "Compare the final color after the iodine reacts with each water sample.",
    ],
    purpose:
      "To show whether hydrogen-rich water can visibly reduce the oxidative color effect of iodine when compared with ordinary pure water.",
    summary:
      "The iodine test gives visitors a simple visual way to understand antioxidant response. If the hydrogen-rich water clears or reduces the iodine color more strongly, the presentation can explain how dissolved H2 is being discussed as a selective antioxidant support molecule.",
    title: "Selective Antioxidants At Work",
    videoUrl: "https://vimeo.com/1196558374",
  },
  {
    alt: "Hydrogen concentration comparison between pure water and hydrogen water",
    demonstrates: [
      "Regular purified water should show little to no dissolved H2.",
      "Fresh hydrogen-rich water should show a measurable hydrogen concentration reading.",
      "The defining feature of hydrogen water is dissolved H2 concentration, not bottle style, taste, or pH alone.",
    ],
    eyebrow: "Experiment 02",
    image: experiment2Image,
    process: [
      "Test a glass of purified or RO bottled water with a hydrogen water tester.",
      "Generate a fresh glass of hydrogen-rich water from the machine.",
      "Test the hydrogen-rich water with the same meter.",
      "Compare the PPB readings between the two water samples.",
    ],
    purpose:
      "To validate that the machine is adding measurable dissolved molecular hydrogen to water, while ordinary purified water contains little or none.",
    summary:
      "This experiment moves the conversation from opinion to measurement. By comparing PPB readings, visitors can see that hydrogen-rich water is different because it contains measurable dissolved molecular hydrogen.",
    title: "Hydrogen Concentration Comparison",
    videoUrl: "https://vimeo.com/1196558849",
  },
  {
    alt: "ORP comparison measuring antioxidant environment in hydrogen water",
    demonstrates: [
      "Ordinary filtered, bottled, or tap water may show a positive or less reducing ORP reading.",
      "Hydrogen-rich water commonly shows a lower negative ORP reading.",
      "A negative ORP reading helps explain the reducing environment associated with freshly generated H2 water.",
    ],
    eyebrow: "Experiment 03",
    image: experiment3Image,
    process: [
      "Measure the ORP of filtered, bottled, or tap water.",
      "Generate a fresh glass of hydrogen-rich water.",
      "Measure the ORP of the hydrogen-rich water using the same tester.",
      "Compare whether the H2 water shows a stronger negative ORP reading.",
    ],
    purpose:
      "To compare the oxidation-reduction potential of ordinary water with hydrogen-rich water and show how H2 water can create a more reducing environment.",
    summary:
      "The ORP test is a supporting demonstration. It does not replace the hydrogen concentration story, but it helps visitors see that freshly generated H2 water can carry a stronger reducing profile than ordinary water.",
    title: "Oxidation Reduction Test",
    videoUrl: "https://vimeo.com/1197101298",
  },
  {
    alt: "Diffusion comparison of hydrogen water and filtered water using tea",
    demonstrates: [
      "Hydrogen-rich water may interact with tea leaves faster than ordinary filtered water under the same conditions.",
      "The visual difference helps explain diffusion and the discussion around smaller water clusters.",
      "The demonstration makes the absorption conversation easier to understand without making medical claims.",
    ],
    eyebrow: "Experiment 04",
    image: experiment4Image,
    process: [
      "Prepare one glass of filtered water and one glass of freshly generated hydrogen-rich water.",
      "Add the same amount of loose-leaf tea to both glasses.",
      "Let both samples steep for the same amount of time.",
      "Compare the color diffusion and extraction after the timer ends.",
    ],
    purpose:
      "To visually compare how filtered water and hydrogen-rich water interact with tea over the same time period.",
    summary:
      "The tea diffusion test is a simple way to discuss how hydrogen-rich water may behave differently from ordinary filtered water. The goal is to make diffusion, interaction, and hydration quality easier to see and remember.",
    title: "Microcluster / Absorbancy Test",
    videoUrl: "https://vimeo.com/1197101472",
  },
];

const investmentValuePoints = [
  "Fresh hydrogen-rich water is available at home without relying on single-use bottles, tablets, or occasional specialty products.",
  "The machine supports a daily routine for the whole household, making the cost easier to understand over months and years of use.",
  "The value is not only the water. It is the convenience, consistency, education, support, and owner programs that come with the system.",
];

export function TechnologyPage() {
  const [activeFeatureVisual, setActiveFeatureVisual] =
    useState<MachineFeatureVisual | null>(null);
  const [activeExperiment, setActiveExperiment] =
    useState<ScientificExperiment | null>(null);
  const [activeExperimentVideo, setActiveExperimentVideo] =
    useState<ScientificExperiment | null>(null);
  const [activeOtherH2Option, setActiveOtherH2Option] =
    useState<OtherH2Option | null>(null);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  return (
    <PageLayout>
      <section
        className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
        id="hydrogen-water-machine"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[10%] top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua backdrop-blur">
              Clean, Powerful, Ready In Seconds
            </p>
            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Introducing The{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-aqua to-blue-300 bg-clip-text text-transparent">
                Molecular Hydrogen Water Machine
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-cyan-50/85">
              More than water. It is a daily hydration upgrade designed to
              deliver clean, hydrogen-rich water with a simple wellness story
              people can understand.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-5">
              {machineFeatures.slice(0, 4).map((feature) => (
                <MachineFeatureCard feature={feature} key={feature.title} />
              ))}
            </div>

            <div className="relative order-first lg:order-none">
              <div className="absolute inset-8 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="relative">
                <figure className="mx-auto overflow-hidden rounded-[1.75rem] border border-cyan-200/25 shadow-[0_35px_120px_rgba(34,211,238,0.25)]">
                  <img
                    alt="Molecular hydrogen water machine"
                    className="h-auto w-full object-contain object-center"
                    src={machineImage}
                  />
                </figure>

                <figure className="mt-5 overflow-hidden rounded-[1.75rem] border border-cyan-200/25 shadow-[0_26px_80px_rgba(34,211,238,0.18)]">
                  <img
                    alt="Back view of the molecular hydrogen water machine"
                    className="h-auto w-full object-contain object-center"
                    src={machineBackImage}
                  />
                </figure>
              </div>
            </div>

            <div className="grid gap-5">
              {machineFeatures.slice(4).map((feature) => (
                <MachineFeatureCard feature={feature} key={feature.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-20 text-slate-800 sm:py-24"
        id="how-it-works"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-aqua/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua backdrop-blur">
              How It Works
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
              From Clean Water To Hydrogen-Rich Hydration
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The machine follows a simple path: water enters the system,
              molecular hydrogen is generated and dissolved, and fresh
              hydrogen-rich water is dispensed for daily hydration.
            </p>
          </div>

          <figure className="mt-12 overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
            <img
              alt="How the molecular hydrogen water machine works"
              className="h-auto w-full object-contain object-center"
              src={howItWorksImage}
            />
          </figure>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
            <div className="bg-gradient-to-r from-marine via-lagoon to-marine px-6 py-6 text-center text-white">
              <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                System Breakdown
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                The Five Core Components Working Together
              </h3>
              <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-cyan-50/85">
                Each part has a purpose, from water preparation and hydrogen
                generation to safe delivery, cleaning, and everyday operation.
              </p>
            </div>
            <figure className="bg-white">
              <img
                alt="Five core components of the molecular hydrogen water machine"
                className="h-auto w-full object-contain object-center"
                src={fiveComponentsImage}
              />
            </figure>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.22)]">
            The simpler the technology story feels, the easier it becomes for
            families to understand why molecular hydrogen water is different.
          </div>
        </div>
      </section>


      <section
        className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-20 text-slate-800 sm:py-24"
        id="machine-features"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute bottom-12 right-0 h-96 w-96 rounded-full bg-aqua/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-lagoon/20 bg-white/85 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-lagoon shadow-sm backdrop-blur">
              Machine Features
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
              Built Around Performance, Quality, and Everyday Use
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The below cards summarize why "The Machine" delivers exceptional quality, performance and reliability at an affordable price.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {machineFeatureVisuals.map((visual) => (
              <MachineFeatureVisualCard
                key={visual.title}
                onOpen={() => setActiveFeatureVisual(visual)}
                visual={visual}
              />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.22)]">
            The machine is not just a dispenser. It is the delivery system for
            the hydrogen-rich water story.
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
        id="programs-protocols"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[6%] top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua backdrop-blur">
              Programs & Protocols
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Added Value For{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-aqua to-blue-300 bg-clip-text text-transparent">
                Machine Owners
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-cyan-50/82">
              As an owner of The Machine, you gain access to additional
              opportunities, rewards, and lifestyle-enhancing programs designed
              to help you get even more value from your experience. Here are
              just a few…
            </p>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.08] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                    PROGRAMS
                  </p>
                  <h3 className="mt-2 text-3xl font-black">
                    Rewards, Referrals, And Business Pathways
                  </h3>
                </div>
                <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/15 text-aqua sm:grid">
                  <Gift className="h-7 w-7" />
                </div>
              </div>

              <div className="grid gap-5">
                {programProtocolItems
                  .filter((item) => item.category === "PROGRAMS")
                  .map((item) => (
                    <ProgramProtocolCard item={item} key={item.title} />
                ))}
              </div>
            </div>

            <div className="grid gap-8">
              <div className="rounded-[2rem] border border-cyan-200/80 bg-gradient-to-b from-white to-ice p-5 text-marine shadow-clean sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
                      PROTOCOLS
                    </p>
                    <h3 className="mt-2 text-3xl font-black">
                      Education And Community Support
                    </h3>
                  </div>
                  <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-marine text-aqua shadow-clean sm:grid">
                    <HeartPulse className="h-7 w-7" />
                  </div>
                </div>

                <div className="grid gap-5">
                  {programProtocolItems
                    .filter((item) => item.category === "PROTOCOLS")
                    .map((item) => (
                      <ProgramProtocolCard item={item} key={item.title} light />
                    ))}
                </div>
              </div>

              <figure className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
                <img
                  alt="What else to think about for machine owners"
                  className="h-full w-full object-cover"
                  src={whatElseToThinkImage}
                />
              </figure>
            </div>
          </div>

          <figure className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-white/[0.08] shadow-[0_28px_90px_rgba(34,211,238,0.18)] backdrop-blur">
            <img
              alt="Ownership privileges for H2Systems machine owners"
              className="h-auto w-full object-contain object-center"
              src={ownershipPrivilegesImage}
            />
          </figure>

          <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.22)]">
            Programs create added value. Protocols help keep the wellness
            conversation active, connected, and supported over time.
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_8%,rgba(6,214,160,0.18),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#ffffff_0%,#effcff_58%,#ffffff_100%)] py-20 text-slate-800 sm:py-24"
        id="investment"
      >
        <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        <div className="pointer-events-none absolute -left-28 bottom-20 h-96 w-96 rounded-full border border-cyan-200 bg-cyan-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border border-blue-200 bg-blue-100/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-lagoon/20 bg-white/80 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-lagoon shadow-sm">
              The Investment
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
              A Practical Decision For{" "}
              <span className="bg-gradient-to-r from-lagoon via-marine to-slateblue bg-clip-text text-transparent">
                Daily Hydrogen Water
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              This section helps visitors understand what they are investing in:
              a premium home machine, a simpler daily water routine, and a
              long-term wellness tool built around fresh molecular hydrogen.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <section className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
              <figure className="relative bg-slate-950 p-px">
                <img
                  alt="Molecular hydrogen water machine investment discussion"
                  className="h-auto w-full object-contain object-center"
                  src={machineImage}
                />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
                  <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/95 px-3 py-2.5 text-left text-slate-950 shadow-[0_18px_42px_rgba(15,23,42,0.24)] backdrop-blur sm:px-5 sm:py-3">
                    <p className="text-[0.62rem] font-black uppercase tracking-[.18em] text-amber-700 sm:text-xs">
                      Regular Price
                    </p>
                    <p className="mt-1 text-xl font-black leading-none text-marine line-through decoration-amber-500 decoration-2 sm:text-2xl">
                      $5,495
                    </p>
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-300 px-3 py-2.5 text-right text-slate-950 shadow-[0_18px_46px_rgba(251,191,36,0.25)] sm:px-5 sm:py-3">
                    <p className="text-[0.62rem] font-black uppercase tracking-[.18em] sm:text-xs">
                      Sale Price
                    </p>
                    <p className="mt-1 text-2xl font-black leading-none sm:text-3xl">
                      $4,895
                    </p>
                  </div>
                </div>
              </figure>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[.24em] text-lagoon">
                  What The Machine Represents
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-marine">
                  More Than A Countertop Appliance
                </h3>
                <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">
                  The investment is centered on fresh, measurable hydrogen-rich
                  water at home. The machine becomes the daily delivery system
                  for cleaner hydration, stronger consistency, and an easier way
                  to share the H2 story with family and guests.
                </p>
              </div>
            </section>

            <div className="grid gap-5">
              <section className="rounded-[2rem] border border-cyan-200/80 bg-gradient-to-br from-marine via-slateblue to-lagoon p-6 text-white shadow-[0_28px_90px_rgba(15,76,117,0.24)] sm:p-8">
                <p className="text-sm font-black uppercase tracking-[.24em] text-aqua">
                  Why It Is Worth It
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  The Value Builds Every Day You Use It
                </h3>
                <p className="mt-4 text-lg leading-8 text-cyan-50/85">
                  Exact pricing can be confirmed during the Hydration
                  Conversation, but the value story is simple: the machine turns
                  molecular hydrogen into something practical, fresh, and easy
                  to use every day.
                </p>

                <div className="mt-7 grid gap-4">
                  {investmentValuePoints.map((point, index) => (
                    <article
                      className="rounded-2xl border border-cyan-300/20 bg-white/[0.09] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.16)] backdrop-blur"
                      key={point}
                    >
                      <p className="text-xs font-black uppercase tracking-[.22em] text-aqua">
                        Value {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-base font-semibold leading-7 text-cyan-50/88">
                        {point}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-300 px-5 py-4 text-center text-lg font-black leading-7 text-slate-950 shadow-[0_18px_46px_rgba(251,191,36,0.25)]">
                  A better water routine is easiest to value when you compare it
                  against the cost, waste, and inconsistency of buying hydrogen
                  products one serving at a time.
                </div>
              </section>

              <button
                className="inline-flex h-16 w-full cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-lagoon bg-lagoon px-7 text-center text-sm font-black uppercase tracking-[.18em] text-white shadow-[0_18px_46px_rgba(17,138,178,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-marine"
                onClick={() => setPurchaseModalOpen(true)}
                type="button"
              >
                <ShoppingCart className="h-5 w-5" />
                How To Purchase
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white py-20 text-slate-800 sm:py-24"
        id="is-it-worth-it"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-aqua/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-lagoon/20 bg-cyan-50 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-lagoon shadow-sm">
              Is It Worth It
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
              Is It Worth It?
            </h2>
          </div>

          <div className="mt-12 grid gap-8">
            <figure className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
              <img
                alt="Is it worth it investment comparison"
                className="h-auto w-full object-contain object-center"
                src={isItWorthItImage}
              />
            </figure>

            <figure className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
              <img
                alt="How the hydrogen water machine pays for itself"
                className="h-auto w-full object-contain object-center"
                src={howPaysItselfImage}
              />
            </figure>
          </div>
        </div>
      </section>



      {activeFeatureVisual ? (
        <MachineFeatureVisualModal
          onClose={() => setActiveFeatureVisual(null)}
          visual={activeFeatureVisual}
        />
      ) : null}

      {activeExperiment ? (
        <ScientificExperimentModal
          experiment={activeExperiment}
          onClose={() => setActiveExperiment(null)}
          onVideoOpen={() => setActiveExperimentVideo(activeExperiment)}
        />
      ) : null}

      {activeExperimentVideo ? (
        <ExperimentVideoModal
          experiment={activeExperimentVideo}
          onClose={() => setActiveExperimentVideo(null)}
        />
      ) : null}

      {purchaseModalOpen ? (
        <PurchaseModal onClose={() => setPurchaseModalOpen(false)} />
      ) : null}

      {activeOtherH2Option ? (
        <OtherH2OptionModal
          onClose={() => setActiveOtherH2Option(null)}
          option={activeOtherH2Option}
        />
      ) : null}
    </PageLayout>
  );
}

function PurchaseModal({ onClose }: { onClose: () => void }) {
  const purchaseSteps = [
    {
      icon: CalendarCheck,
      text: "Schedule a short Hydration Conversation so the right person can answer questions and confirm fit.",
      title: "Start With A Conversation",
    },
    {
      icon: ShieldCheck,
      text: "Review the machine, owner support, pricing, and the daily routine before making the decision.",
      title: "Review The Details",
    },
    {
      icon: ShoppingCart,
      text: "Complete the purchase through the approved H2Systems contact and receive next-step guidance.",
      title: "Place The Order",
    },
  ];

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/75 px-4 pb-6 pt-24 backdrop-blur-sm sm:px-6 sm:pt-28"
      role="dialog"
    >
      <div className="flex min-h-full items-center justify-center">
        <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-cyan-100 bg-white shadow-[0_35px_120px_rgba(2,8,23,0.32)] sm:rounded-[3rem]">
          <button
            aria-label="Close purchase information"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/90 text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-marine p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(6,214,160,0.24),transparent_30%),radial-gradient(circle_at_90%_75%,rgba(17,138,178,0.36),transparent_36%),linear-gradient(135deg,#031822_0%,#073B4C_54%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative">
                <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua backdrop-blur">
                  Purchase Path
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  Ready To Bring H2 Water Home?
                </h2>
                <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                  The best next step is a simple conversation. We will confirm
                  the machine details, answer questions, and guide you through
                  the purchase process clearly.
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)]">
                  <p className="text-sm font-black uppercase tracking-[.2em] text-lagoon">
                    Current Price
                  </p>
                  <p className="mt-2 text-4xl font-black">$4,895</p>
                  <p className="mt-2 leading-7 text-slate-700">
                    Ask about ordering, setup, owner support, and the available
                    programs connected to the machine.
                  </p>
                </div>

                <div className="mt-7 grid gap-4">
                  {purchaseSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <article
                        className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur"
                        key={step.title}
                      >
                        <div className="flex gap-4">
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aqua/15 text-aqua">
                            <Icon className="h-6 w-6" />
                          </span>
                          <div>
                            <h3 className="text-lg font-black">
                              {step.title}
                            </h3>
                            <p className="mt-1 text-sm font-semibold leading-6 text-cyan-50/78">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems for purchase information"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <div className="rounded-[1.5rem] border border-cyan-100 bg-ice p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
                <h3 className="text-3xl font-black tracking-tight text-marine">
                  Request Purchase Help
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Share your contact details and a purchase specialist can help
                  with the next step.
                </p>

                <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
                  <input
                    className="w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Name"
                  />
                  <input
                    className="w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Phone"
                  />
                  <input
                    className="w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100 sm:col-span-2"
                    placeholder="Email"
                  />
                  <input
                    className="w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100 sm:col-span-2"
                    placeholder="Referrer Name (optional)"
                  />
                  <select className="w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100 sm:col-span-2">
                    <option>I'm interested in purchasing the machine</option>
                    <option>Schedule a Hydration Conversation</option>
                    <option>Ask about setup and support</option>
                    <option>Ask about programs and protocols</option>
                  </select>
                  <textarea
                    className="min-h-36 w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100 sm:col-span-2"
                    placeholder="What would you like to know?"
                  />
                  <a
                    className="group inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full border-2 border-marine bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-marine shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-marine sm:col-span-2 sm:px-6 sm:tracking-[0.12em]"
                    href="mailto:info@example.com?subject=How%20To%20Purchase%20H2%20Water%20Machine"
                  >
                    <Send className="h-5 w-5 transition-colors duration-200 group-hover:text-white" />
                    <span className="transition-colors duration-200 group-hover:text-white">
                      Send Purchase Request
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[0.82fr_1.18fr]">
                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="tel:0000000000"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                    <Phone className="h-5 w-5" />
                  </span>
                  <p className="mt-3 break-words text-sm font-black text-marine">
                    (000) 000-0000
                  </p>
                </a>

                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="mailto:info@example.com?subject=How%20To%20Purchase%20H2%20Water%20Machine"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="mt-3 break-words text-sm font-black text-marine">
                    info@example.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OtherH2OptionCard({
  onOpen,
  option,
}: {
  onOpen: () => void;
  option: OtherH2Option;
}) {
  return (
    <article className="group overflow-hidden rounded-sm border border-lagoon/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/30 hover:shadow-lift">
      <figure className="aspect-video overflow-hidden bg-slate-950 p-px">
        <img
          alt={option.alt}
          className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
          src={option.image}
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-black text-marine">{option.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {option.summary}
        </p>
        <button
          className="mt-3 cursor-pointer rounded-full bg-marine px-4 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon"
          onClick={onOpen}
          type="button"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function OtherH2OptionModal({
  onClose,
  option,
}: {
  onClose: () => void;
  option: OtherH2Option;
}) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[30000] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm sm:py-12"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="mx-auto max-w-[900px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[88vh] overflow-y-auto">
          <div className="bg-slate-950 p-px">
            <img
              alt={option.alt}
              className="h-auto w-full rounded-sm object-contain object-center"
              src={option.image}
            />
          </div>

          <div className="bg-[radial-gradient(circle_at_14%_0%,rgba(6,214,160,0.16),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(135deg,#ffffff_0%,#eefcff_48%,#dff8ff_100%)] p-6 text-marine sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="inline-flex rounded-full border border-lagoon/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
                  Other Sources Of H2
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-marine sm:text-4xl">
                  {option.title}
                </h2>
              </div>
              <button
                aria-label="Close modal"
                className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-cyan-200 bg-white/80 text-2xl font-bold text-marine shadow-sm transition hover:bg-ice"
                onClick={onClose}
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-700">
              {option.summary}
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              {option.details.map((detail, index) => (
                <article
                  className="rounded-2xl bg-ice p-5 leading-8 text-slate-700"
                  key={detail}
                >
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-slate-700">
                    {detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramProtocolCard({
  item,
  light = false,
}: {
  item: ProgramProtocolItem;
  light?: boolean;
}) {
  const Icon = item.icon;

  return (
    <article
      className={`group rounded-[1.65rem] border p-5 transition duration-300 hover:-translate-y-1 ${
        light
          ? "border-cyan-100 bg-white text-marine shadow-sm hover:border-lagoon/35 hover:bg-cyan-50 hover:shadow-clean"
          : "border-cyan-300/15 bg-white/[0.08] text-white shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur hover:border-cyan-300/40 hover:bg-white/[0.12]"
      }`}
    >
      <div className="flex gap-4">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition group-hover:scale-105 ${
            light
              ? "bg-cyan-50 text-lagoon group-hover:bg-marine group-hover:text-aqua"
              : "border border-aqua/40 bg-aqua/15 text-aqua group-hover:bg-aqua group-hover:text-marine"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p
            className={`text-xs font-black uppercase tracking-[.2em] ${
              light ? "text-lagoon" : "text-aqua"
            }`}
          >
            {item.category}
          </p>
          <h4
            className={`mt-2 text-2xl font-black leading-tight ${
              light ? "text-marine" : "text-white"
            }`}
          >
            {item.title}
          </h4>
          <p
            className={`mt-3 text-base font-semibold leading-7 ${
              light ? "text-slate-700" : "text-cyan-50/82"
            }`}
          >
            {item.text}
          </p>
          {item.withRegisterButton ? (
            <a
              className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-black uppercase tracking-[.12em] transition hover:-translate-y-0.5 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua ${
                light
                  ? "border-marine bg-white text-marine shadow-clean hover:bg-marine hover:text-white"
                  : "border-aqua bg-aqua text-white shadow-clean hover:bg-marine hover:text-white"
              }`}
              href="mailto:info@example.com?subject=Programs%20And%20Protocols%20Registration"
            >
              <span className="transition-colors duration-200">Register To Learn More</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ScientificExperimentCard({
  experiment,
  onOpen,
  onVideoOpen,
}: {
  experiment: ScientificExperiment;
  onOpen: () => void;
  onVideoOpen: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.12]">
      <figure className="bg-slate-950 p-px">
        <img
          alt={experiment.alt}
          className="h-auto w-full object-contain object-center transition duration-500 group-hover:scale-[1.01]"
          src={experiment.image}
        />
      </figure>

      <div className="relative bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-5 py-5 pb-16 text-white sm:px-6">
        <p className="text-xs font-black uppercase tracking-[.22em] text-aqua">
          {experiment.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-black leading-tight">
          {experiment.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-cyan-50/82">
          {experiment.summary}
        </p>

        <div className="absolute bottom-5 right-5 flex flex-wrap justify-end gap-2">
          <button
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[.1em] text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-lift"
            onClick={onOpen}
            type="button"
          >
            <Maximize2 className="h-3 w-3" />
            View Details
          </button>
          <button
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-amber-100 bg-amber-300 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[.1em] text-slate-950 shadow-[0_10px_24px_rgba(251,191,36,0.25)] transition hover:-translate-y-0.5 hover:bg-white hover:text-marine hover:shadow-[0_14px_34px_rgba(251,191,36,0.38)]"
            onClick={onVideoOpen}
            type="button"
          >
            <ExternalLink className="h-3 w-3" />
            View Video
          </button>
        </div>
      </div>
    </article>
  );
}

function ScientificExperimentModal({
  experiment,
  onClose,
  onVideoOpen,
}: {
  experiment: ScientificExperiment;
  onClose: () => void;
  onVideoOpen: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[30000] bg-slate-950/85 px-4 py-6 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-h-[92vh] max-w-6xl flex-col overflow-y-auto rounded-md border border-cyan-200/30 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
        <div className="sticky top-0 z-[30001] flex items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-5 py-4 text-white">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-aqua">
              {experiment.eyebrow}
            </p>
            <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl">
              {experiment.title}
            </h2>
          </div>
          <button
            aria-label="Close experiment details modal"
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <figure className="bg-slate-950 p-px">
          <img
            alt={experiment.alt}
            className="h-auto w-full object-contain object-center"
            src={experiment.image}
          />
        </figure>

        <div className="grid gap-5 bg-gradient-to-b from-white to-ice px-5 py-6 sm:px-8 sm:py-8">
          <ExperimentInfoPanel
            heading="Purpose"
            items={[experiment.purpose]}
            tone="blue"
          />

          <ExperimentInfoPanel
            heading="Process"
            items={experiment.process}
            ordered
            tone="white"
          />

          <ExperimentInfoPanel
            heading="What This Demonstrates"
            items={experiment.demonstrates}
            tone="cyan"
          />

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-marine shadow-sm">
            <p className="text-sm font-black uppercase tracking-[.22em] text-amber-700">
              Experiment Summary
            </p>
            <p className="mt-3 text-lg font-semibold leading-8">
              {experiment.summary}
            </p>
          </div>

          <button
            className="w-fit cursor-pointer rounded-full border border-amber-100 bg-amber-300 px-5 py-3 text-sm font-black uppercase tracking-[.12em] text-slate-950 shadow-[0_16px_36px_rgba(251,191,36,0.26)] transition hover:-translate-y-0.5 hover:bg-marine hover:text-white hover:shadow-lift"
            onClick={onVideoOpen}
            type="button"
          >
            Watch Experiment Video
          </button>
        </div>
      </div>
    </div>
  );
}

function ExperimentVideoModal({
  experiment,
  onClose,
}: {
  experiment: ScientificExperiment;
  onClose: () => void;
}) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[40000] overflow-y-auto bg-slate-950/90 px-4 py-8 backdrop-blur-sm sm:px-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-md border border-cyan-200/30 bg-slate-950 shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-5 py-4 text-white">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-aqua">
              Experiment Video
            </p>
            <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl">
              {experiment.title}
            </h2>
          </div>
          <button
            aria-label="Close experiment video modal"
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={getVimeoEmbedUrl(experiment.videoUrl)}
            title={`${experiment.title} video`}
          />
        </div>
      </div>
    </div>
  );
}

function ExperimentInfoPanel({
  heading,
  items,
  ordered = false,
  tone,
}: {
  heading: string;
  items: string[];
  ordered?: boolean;
  tone: "blue" | "cyan" | "white";
}) {
  const wrapperClass =
    tone === "blue"
      ? "border-lagoon/30 bg-gradient-to-br from-marine to-lagoon text-white"
      : tone === "cyan"
        ? "border-cyan-200 bg-cyan-50 text-slate-800"
        : "border-slate-200 bg-white text-slate-800";
  const headingClass = tone === "blue" ? "text-aqua" : "text-lagoon";
  const listClass = ordered ? "list-decimal" : "list-disc";

  return (
    <section className={`rounded-2xl border p-5 shadow-sm ${wrapperClass}`}>
      <h3 className={`text-sm font-black uppercase tracking-[.22em] ${headingClass}`}>
        {heading}
      </h3>
      <ol className={`mt-4 space-y-3 pl-5 ${listClass}`}>
        {items.map((item) => (
          <li className="text-base font-semibold leading-7" key={item}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

function MachineFeatureVisualCard({
  onOpen,
  visual,
}: {
  onOpen: () => void;
  visual: MachineFeatureVisual;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <figure className="bg-white">
        <img
          alt={visual.alt}
          className="h-auto w-full object-contain object-center"
          src={visual.image}
        />
      </figure>

      <div
        className={`relative bg-gradient-to-r ${visual.gradientClass} px-6 py-6 pb-16 text-white`}
      >
        <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
          {visual.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-black leading-tight lg:text-[1.7rem]">
          {visual.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-cyan-50/85">
          {visual.description}
        </p>
        <button
          className="absolute bottom-5 right-5 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[.1em] text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-lift"
          onClick={onOpen}
          type="button"
        >
          <Maximize2 className="h-3 w-3" />
          View Details
        </button>
      </div>
    </article>
  );
}

function MachineFeatureVisualModal({
  onClose,
  visual,
}: {
  onClose: () => void;
  visual: MachineFeatureVisual;
}) {
  return (
    <div className="fixed inset-0 z-[30000] bg-slate-950/85 px-4 py-6 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-h-[92vh] max-w-6xl flex-col overflow-y-auto rounded-md border border-cyan-200/30 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
        <div
          className={`sticky top-0 z-[30001] flex items-center justify-between gap-4 bg-gradient-to-r ${visual.gradientClass} px-5 py-4 text-white`}
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-aqua">
              {visual.eyebrow}
            </p>
            <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl">
              {visual.title}
            </h2>
          </div>
          <button
            aria-label="Close details modal"
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <figure className="bg-white">
          <img
            alt={visual.alt}
            className="h-auto w-full object-contain object-center"
            src={visual.image}
          />
        </figure>

        <div className="grid gap-4 bg-gradient-to-b from-white to-ice px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-lg font-semibold leading-8 text-slate-700">
            {visual.description}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {visual.details.map((detail) => (
              <div
                className="rounded-2xl border border-cyan-200 bg-white p-5 text-base font-semibold leading-7 text-slate-700 shadow-sm"
                key={detail}
              >
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileComparisonCard({ row }: { row: ComparisonRow }) {
  const Icon = row.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-white/[0.07] shadow-[0_20px_70px_rgba(34,211,238,0.12)] backdrop-blur">
      <div className="flex items-center gap-4 border-b border-cyan-300/20 bg-white/[0.06] p-5">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-aqua">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-black uppercase tracking-[.06em] text-cyan-100">
          {row.feature}
        </h3>
      </div>
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-cyan-300/20 p-5 sm:border-b-0 sm:border-r">
          <p className="text-sm font-black uppercase tracking-[.18em] text-cyan-300">
            Water Ionizer
          </p>
          <p className="mt-3 text-lg font-semibold leading-8 text-cyan-50/82">
            {row.ionizer}
          </p>
        </div>
        <div className="bg-cyan-400/[0.06] p-5">
          <p className="text-sm font-black uppercase tracking-[.18em] text-aqua">
            Hydrogen Water Machine
          </p>
          <p className="mt-3 text-lg font-black leading-8 text-white">
            {row.hydrogen}
          </p>
        </div>
      </div>
    </article>
  );
}

function MachineFeatureCard({ feature }: { feature: MachineFeature }) {
  const Icon = feature.icon;

  return (
    <article className="group rounded-3xl border border-cyan-300/15 bg-white/[0.08] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.12]">
      <div className="flex gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-300/50 bg-cyan-400/10 text-aqua shadow-[0_0_24px_rgba(34,211,238,0.22)] transition group-hover:scale-105">
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h2 className="text-xl font-black uppercase leading-7 tracking-[.08em] text-cyan-200">
            {feature.title}
          </h2>
          <p className="mt-2 text-base leading-7 text-cyan-50/78">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}
