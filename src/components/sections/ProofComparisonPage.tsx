import {
  BadgeCheck,
  Beaker,
  Droplets,
  ExternalLink,
  FlaskConical,
  Gift,
  HeartPulse,
  Maximize2,
  Microscope,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Target,
  Timer,
  Waves,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { PageLayout } from "../layout/PageLayout";
import experiment1Image from "../../../dist/assets/experiments/experiment1.jpg";
import experiment2Image from "../../../dist/assets/experiments/experiment2.jpg";
import experiment3Image from "../../../dist/assets/experiments/experiment3.jpg";
import experiment4Image from "../../../dist/assets/experiments/experiment4.jpg";
import featuresImage from "../../../dist/assets/features.jpg";
import fiveComponentsImage from "../../../dist/assets/fivecomponents.jpg";
import howItWorksImage from "../../../dist/assets/howitworks.jpg";
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

const placeholderExperimentVideoUrl = "https://vimeo.com/100902001";

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
    title: "ORP Antioxidant Comparison",
    videoUrl: placeholderExperimentVideoUrl,
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
    title: "Diffusion And Absorption Demo",
    videoUrl: placeholderExperimentVideoUrl,
  },
];

const investmentValuePoints = [
  "Fresh hydrogen-rich water is available at home without relying on single-use bottles, tablets, or occasional specialty products.",
  "The machine supports a daily routine for the whole household, making the cost easier to understand over months and years of use.",
  "The value is not only the water. It is the convenience, consistency, education, support, and owner programs that come with the system.",
];

export function ProofComparisonPage() {
  const [activeFeatureVisual, setActiveFeatureVisual] =
    useState<MachineFeatureVisual | null>(null);
  const [activeExperiment, setActiveExperiment] =
    useState<ScientificExperiment | null>(null);
  const [activeExperimentVideo, setActiveExperimentVideo] =
    useState<ScientificExperiment | null>(null);
  const [activeOtherH2Option, setActiveOtherH2Option] =
    useState<OtherH2Option | null>(null);

  return (
    <PageLayout>
      <section
        className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
        id="ionizer-vs-h2"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua backdrop-blur">
              The Antioxidant Comparison
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Alkaline Ionizer{" "}
              <span className="text-cyan-300">V/S</span> Hydrogen Water Machine
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-50/80">
              Both machines use water technology, but they tell very different
              stories. Alkaline ionizers focus mainly on pH, while hydrogen
              water machines focus on dissolved H2 as the active wellness
              conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:hidden">
            {comparisonRows.map((row) => (
              <MobileComparisonCard row={row} key={row.feature} />
            ))}
          </div>

          <div className="mt-12 hidden overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-white/[0.06] shadow-[0_35px_120px_rgba(34,211,238,0.18)] backdrop-blur lg:block">
            <div className="grid grid-cols-[0.9fr_1.25fr_1.25fr] bg-gradient-to-r from-blue-900 via-marine to-blue-900 text-center">
              <div className="border-r border-cyan-300/25 px-5 py-5 text-lg font-black uppercase tracking-[.12em]">
                Feature
              </div>
              <div className="border-r border-cyan-300/25 px-5 py-5 text-lg font-black uppercase tracking-[.12em] text-cyan-100">
                Water Ionizer
              </div>
              <div className="px-5 py-5 text-lg font-black uppercase tracking-[.12em] text-aqua">
                Hydrogen Water Machine
              </div>
            </div>

            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  className="grid grid-cols-[0.9fr_1.25fr_1.25fr] border-t border-cyan-300/20"
                  key={row.feature}
                >
                  <div className="flex items-center gap-4 border-r border-cyan-300/20 px-5 py-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-aqua">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="text-lg font-black uppercase leading-6 tracking-[.06em] text-cyan-100">
                      {row.feature}
                    </p>
                  </div>
                  <div className="flex items-center border-r border-cyan-300/20 px-6 py-5 text-center text-xl font-bold leading-8 text-cyan-50/85">
                    <p className="w-full">{row.ionizer}</p>
                  </div>
                  <div className="flex items-center bg-cyan-400/[0.06] px-6 py-5 text-center text-xl font-black leading-8 text-white">
                    <p className="w-full">{row.hydrogen}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan-200">
                  <Scale className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">The Simple Difference</h3>
              </div>
              <p className="mt-4 text-lg leading-8 text-cyan-50/78">
                A water ionizer changes the water's pH. A hydrogen water
                machine is designed to add dissolved molecular hydrogen. That
                difference matters because pH and H2 are not the same thing.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.24)]">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-lagoon shadow-sm">
                  <Beaker className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">Choose The H2 Story</h3>
              </div>
              <p className="mt-4 text-lg font-semibold leading-8">
                For this presentation, the strongest educational message is not
                "higher pH." It is the presence of dissolved H2, the smallest
                molecule in nature, and why hydrogen-rich water deserves its own
                clear explanation.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
        id="scientific-experiments"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[4%] top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[8%] top-28 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua backdrop-blur">
              Scientific Experiments
            </p>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Simple Demonstrations That Make{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-aqua to-blue-300 bg-clip-text text-transparent">
                Hydrogen Water Science
              </span>{" "}
              Easier To Understand
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-50/82">
              These experiments help explain hydrogen-rich water through
              visible comparisons: antioxidant response, hydrogen
              concentration, ORP readings, and diffusion. They are designed for
              education, conversation, and clearer presentation flow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {scientificExperiments.map((experiment) => (
              <ScientificExperimentCard
                experiment={experiment}
                key={experiment.title}
                onOpen={() => setActiveExperiment(experiment)}
                onVideoOpen={() => setActiveExperimentVideo(experiment)}
              />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.22)]">
            Visual experiments do not replace scientific research, but they make
            the hydrogen water conversation easier for families to see,
            remember, and discuss.
          </div>
        </div>
      </section>


      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_90%_40%,rgba(6,214,160,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f1feff_58%,#ffffff_100%)] py-20 text-slate-800 sm:py-24"
        id="other-sources-of-h2"
      >
        <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full border border-cyan-200 bg-cyan-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full border border-blue-200 bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
                Other Sources Of H2
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
                How Else Can People Get Molecular Hydrogen?
              </h2>
              <p className="mt-6 text-xl font-black leading-8 text-slateblue">
                The goal is not simply to consume molecular hydrogen - it is to understand which solutions deliver the best freshness, consistency, concentration & convenience to support your long term wellness goals.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Molecular hydrogen can be introduced in several ways, including
                tablets, portable bottles, inhalation systems, baths, and
                dedicated hydrogen water machines. Each option has a different
                purpose, cost, routine, and level of convenience.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The best choice is the one that makes molecular hydrogen fresh,
                measurable, easy to use, and simple enough to enjoy every day.
                When H2 water becomes part of a consistent hydration routine,
                the science becomes easier to understand and easier to live.
              </p>
            </div>

            <figure className="overflow-hidden rounded-xl border border-cyan-200/50 bg-slate-950 p-1 shadow-clean">
              <img
                alt="Other sources and options for getting molecular hydrogen"
                className="h-auto w-full rounded-lg object-contain object-center"
                src={otherH2OptionsImage}
              />
            </figure>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherH2Options.map((option) => (
              <OtherH2OptionCard
                key={option.title}
                onOpen={() => setActiveOtherH2Option(option)}
                option={option}
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(245,158,11,0.22)]">
            While other hydrogen options may offer occasional support, a dedicated hydrogen water machine provides a more practical, cost-effective, and consistent way to enjoy cleaner, fresher, high-potency molecular hydrogen every day.  The Machine becomes the better choice providing the highest quality water at the lowest cost per serving over time.
          </div>

          <figure className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
            <img
              alt="Only H2 machines are designed to deliver fresh molecular hydrogen water"
              className="h-auto w-full object-contain object-center"
              src={onlyH2MachinesImage}
            />
          </figure>
        </div>
      </section>


      {activeExperimentVideo ? (
        <ExperimentVideoModal
          experiment={activeExperimentVideo}
          onClose={() => setActiveExperimentVideo(null)}
        />
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
