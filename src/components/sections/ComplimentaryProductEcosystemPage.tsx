import {
  Activity,
  BadgeCheck,
  BatteryCharging,
  Brain,
  Droplets,
  Feather,
  Gauge,
  HeartPulse,
  Home,
  Link2,
  MapPin,
  Maximize2,
  Monitor,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
  Wind,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PageLayout } from "../layout/PageLayout";
import { DisclaimerSection } from "./DisclaimerSection";
import h2goBottleImage from "../../assets/images/ecosystem/h2go-bottle.png";
import himInhalerImage from "../../assets/images/ecosystem/him-inhaler.png";
import theMachineImage from "../../assets/images/ecosystem/the-machine.png";

type FeatureItem = {
  icon: LucideIcon;
  text: string;
  title: string;
};

type LifestyleUse = {
  title: string;
};

const bottleFeatures: FeatureItem[] = [
  {
    icon: Timer,
    text: "Generate a fresh serving of hydrogen-rich water in a single 5-minute cycle.",
    title: "Fresh Hydrogen In Just 5 Minutes",
  },
  {
    icon: Waves,
    text: "Diffusion plus frequency resonance work together for a stronger portable result.",
    title: "Dual Mode Technology",
  },
  {
    icon: Droplets,
    text: "Designed for high-output portable hydration, up to 4,000–6,000 ppb.",
    title: "High Concentration Hydrogen",
  },
  {
    icon: ShieldCheck,
    text: "Built as a premium everyday bottle with certified quality and lasting construction.",
    title: "Premium Quality, Certified",
  },
];

const inhalerOverviewFeatures: FeatureItem[] = [
  {
    icon: ShieldCheck,
    text: "Safe and gentle for daily personal wellness sessions.",
    title: "Non-Invasive",
  },
  {
    icon: Feather,
    text: "Comfortable to wear while you relax, work, or recover.",
    title: "Lightweight",
  },
  {
    icon: BatteryCharging,
    text: "Long-lasting battery support for portable, all-day use.",
    title: "Rechargeable",
  },
  {
    icon: HeartPulse,
    text: "Focused molecular hydrogen technology for a clean session.",
    title: "Safe & Pure",
  },
];

const inhalerBenefits: FeatureItem[] = [
  {
    icon: Sparkles,
    text: "Helps neutralize harmful free radicals and reduce oxidative stress.",
    title: "Powerful Antioxidant",
  },
  {
    icon: Wind,
    text: "Promotes clearer breathing and supports a healthy respiratory system.",
    title: "Supports Respiratory Health",
  },
  {
    icon: Activity,
    text: "Helps improve energy levels and supports recovery after physical or mental exertion.",
    title: "Enhances Energy & Recovery",
  },
  {
    icon: Brain,
    text: "Supports focus, concentration, and cognitive performance.",
    title: "Promotes Mental Clarity",
  },
  {
    icon: ShieldCheck,
    text: "Supports immune function and contributes to overall wellness and vitality.",
    title: "Supports Overall Well-Being",
  },
];

const inhalerLifestyleUses: LifestyleUse[] = [
  { title: "Relaxing at home" },
  { title: "Reading & studying" },
  { title: "Working at your desk" },
  { title: "Meditation & yoga" },
  { title: "Watching TV" },
];

const machineFeatures: FeatureItem[] = [
  {
    icon: RefreshCcw,
    text: "Decalcifies electrodes to help protect performance and extend the life of the ionizer.",
    title: "Automatic Cleaning Cycle",
  },
  {
    icon: Droplets,
    text: "Multistage filter replacement rated for 8,000 L or one year.",
    title: "Multistage Filter Replacement",
  },
  {
    icon: Monitor,
    text: "Two ionization levels plus a filtered-water cleaning setting.",
    title: "LCD Touch Screen",
  },
  {
    icon: BadgeCheck,
    text: "CE certification, ISO certification, and JWMA Japanese standard of excellence.",
    title: "Certified Construction",
  },
  {
    icon: Zap,
    text: "Works with both 110V and 220V power.",
    title: "Dual Voltage Power",
  },
  {
    icon: Wrench,
    text: "Conversion kits are available for a cleaner under-counter install.",
    title: "Optional Under The Counter",
  },
  {
    icon: Gauge,
    text: "Tested oxidation-reduction potential of -900 mV++.",
    title: "Tested ORP",
  },
  {
    icon: Sparkles,
    text: "Designed for 1,500+ PPB molecular hydrogen concentration.",
    title: "Hydrogen Concentration",
  },
];

const machineCertifications = [
  "ISO 9001 Certified",
  "Approved FDA Plastics",
  "Hydrogen Certified To HSA Standards",
  "BPA Free",
];

const productNav = [
  {
    href: "#h2go-water-bottle",
    icon: MapPin,
    label: "H2GO Bottle",
  },
  {
    href: "#him-inhaler-machine",
    icon: Wind,
    label: "HIM Inhaler",
  },
  {
    href: "#machine-home",
    icon: Home,
    label: "The Machine",
  },
];

const relationshipFlow = [
  {
    heading: "Hydrate At Home",
    text: "The Machine establishes your daily baseline with clean hydrogen-rich water.",
  },
  {
    heading: "Stay Consistent Anywhere",
    text: "H2GO keeps that hydration story active while you are away from home.",
  },
  {
    heading: "Recover With Focus",
    text: "HIM adds an intensive option for moments when you want deeper recovery support.",
  },
];

export function ComplimentaryProductEcosystemPage() {
  const [lightbox, setLightbox] = useState<{ alt: string; src: string } | null>(
    null,
  );

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(14,165,233,0.2),transparent_32%),linear-gradient(135deg,#020617_0%,#073B4C_55%,#051827_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(125,211,252,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.24em] text-aqua backdrop-blur">
              Complimentary Product Ecosystem
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              One Ecosystem For Hydration, Wellness, And Recovery
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/82">
              Three complementary products work together: H2GO for hydrogen
              anywhere, HIM for intensive recovery sessions, and The Machine as
              the home foundation for daily hydrogen-rich water.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {productNav.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-white/8 px-4 py-3 text-sm font-black uppercase tracking-[.16em] text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/14"
                  href={item.href}
                  key={item.href}
                >
                  <Icon className="h-4 w-4 text-aqua" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <H2GoBottleSection
        onOpenImage={() =>
          setLightbox({
            alt: "H2GO portable hydrogen water bottle feature overview",
            src: h2goBottleImage,
          })
        }
      />
      <HimInhalerSection
        onOpenImage={() =>
          setLightbox({
            alt: "HIM hydrogen inhaler intensive wellness and recovery overview",
            src: himInhalerImage,
          })
        }
      />
      <TheMachineSection
        onOpenImage={() =>
          setLightbox({
            alt: "The Machine home hydrogen water system feature overview",
            src: theMachineImage,
          })
        }
      />

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(6,214,160,0.2),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(14,165,233,0.2),transparent_32%),linear-gradient(135deg,#031822_0%,#073B4C_52%,#061926_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[.24em] text-aqua backdrop-blur">
              <Link2 className="h-4 w-4" />
              How They Relate
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              One Routine, Three Product Roles
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-50/82">
              These products are not separate wellness ideas. They are one
              coordinated system where each item supports a specific part of
              the same lifestyle flow.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {relationshipFlow.map((step) => (
              <article
                className="rounded-[1.5rem] border border-cyan-300/20 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur"
                key={step.heading}
              >
                <h3 className="text-2xl font-black text-white">{step.heading}</h3>
                <p className="mt-3 text-base leading-7 text-cyan-50/82">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-xl font-black leading-8 text-marine shadow-clean">
            Hydrate. Inhale. Thrive. One ecosystem, complete wellness support.
          </div>
        </div>
      </section>

      <DisclaimerSection />

      {lightbox ? (
        <div
          className="fixed inset-0 z-[30000] bg-slate-950/88 px-4 py-6 backdrop-blur-sm sm:px-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="mx-auto flex max-h-[92vh] max-w-6xl flex-col overflow-hidden rounded-md border border-cyan-200/30 bg-slate-950 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-5 py-4 text-white">
              <p className="text-sm font-black uppercase tracking-[.18em] text-aqua">
                Product Graphic
              </p>
              <button
                aria-label="Close product graphic"
                className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
                onClick={() => setLightbox(null)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <figure className="overflow-y-auto bg-slate-950 p-2 sm:p-4">
              <img
                alt={lightbox.alt}
                className="mx-auto h-auto w-full object-contain"
                src={lightbox.src}
              />
            </figure>
          </div>
        </div>
      ) : null}
    </PageLayout>
  );
}

function H2GoBottleSection({ onOpenImage }: { onOpenImage: () => void }) {
  return (
    <section
      className="relative overflow-hidden border-b border-cyan-300/10 bg-[#020617] py-18 text-white sm:py-22"
      id="h2go-water-bottle"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_88%_22%,rgba(14,165,233,0.16),transparent_32%)]" />
      <SectionGlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Eyebrow icon={MapPin} label="Anywhere" />
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              H2GO
            </h2>
            <p className="mt-3 text-2xl font-black uppercase tracking-[.08em] text-cyan-200">
              The <span className="text-cyan-300">Fastest</span>. The Best.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-cyan-100">
              Dual Mode Technology. Superior Results.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/82">
              Portable hydrogen support while commuting, traveling, or working.
              H2GO extends your hydration routine beyond the home machine so
              momentum continues all day.
            </p>
          </div>

          <ProductGraphic
            alt="H2GO portable hydrogen water bottle with dual mode technology"
            onOpen={onOpenImage}
            src={h2goBottleImage}
          />
        </div>

        <div className="mt-10">
          <h3 className="text-center text-sm font-black uppercase tracking-[.28em] text-cyan-200">
            Why This Is The Best
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {bottleFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </div>

        <p className="mt-8 rounded-full border border-cyan-300/35 bg-slate-950/70 px-6 py-4 text-center text-lg font-black tracking-wide text-white shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          Now Drink <span className="text-cyan-300">Hydrogen</span> Everywhere
        </p>
      </div>
    </section>
  );
}

function HimInhalerSection({ onOpenImage }: { onOpenImage: () => void }) {
  return (
    <section
      className="relative overflow-hidden border-b border-cyan-300/10 bg-[#000b26] py-18 text-white sm:py-22"
      id="him-inhaler-machine"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_18%_78%,rgba(59,130,246,0.14),transparent_30%)]" />
      <SectionGlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow icon={Wind} label="Intensive Recovery" />
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            HIM Hydrogen Inhaler
          </h2>
          <p className="mt-3 text-xl font-black uppercase tracking-[.12em] text-cyan-200">
            Intensive Wellness And Recovery
          </p>
          <p className="mt-4 text-lg font-semibold uppercase tracking-[.16em] text-cyan-100/80">
            Breathe In. Recharge. Feel The Difference.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/82">
            Portable inhalation support focused on intensive wellness and
            recovery sessions. It complements hydration by adding a focused
            hydrogen session when deeper support is needed.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {inhalerOverviewFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
          <ProductGraphic
            alt="HIM hydrogen inhaler for intensive wellness and recovery"
            onOpen={onOpenImage}
            src={himInhalerImage}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-center text-sm font-black uppercase tracking-[.28em] text-cyan-200">
            Key Benefits Of Hydrogen Inhalation
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {inhalerBenefits.map((feature) => (
              <FeatureCard feature={feature} key={feature.title} />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-cyan-300/20 bg-white/8 p-6 sm:p-8">
          <h3 className="text-center text-sm font-black uppercase tracking-[.28em] text-cyan-200">
            Perfect For Your Daily Routine
          </h3>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-8 text-cyan-50/82">
            You can inhale molecular hydrogen anytime, anywhere — while watching
            TV, reading, meditating, or working at your desk. It is portable,
            easy to use, and designed for convenient daily sessions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {inhalerLifestyleUses.map((item) => (
              <span
                className="rounded-full border border-cyan-300/30 bg-slate-950/50 px-4 py-2 text-sm font-black uppercase tracking-[.12em] text-cyan-50"
                key={item.title}
              >
                {item.title}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-base font-black uppercase tracking-[.18em] text-white">
            Simply incorporate into your daily activities — 1-3x per day
          </p>
        </div>
      </div>
    </section>
  );
}

function TheMachineSection({ onOpenImage }: { onOpenImage: () => void }) {
  return (
    <section
      className="relative overflow-hidden border-b border-cyan-300/10 bg-[#031422] py-18 text-white sm:py-22"
      id="machine-home"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_8%_80%,rgba(6,214,160,0.12),transparent_28%)]" />
      <SectionGlow />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow icon={Home} label="Your Foundation" />
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            The Machine
          </h2>
          <p className="mt-3 text-xl font-black uppercase tracking-[.12em] text-cyan-200">
            Advanced Technology. Powerful Results.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/82">
            The core home system for daily hydrogen-rich water. This is the
            foundation device for routine hydration, family use, and consistent
            wellness habits.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-4">
            {machineFeatures.map((feature) => (
              <FeatureRow feature={feature} key={feature.title} />
            ))}
          </div>
          <div>
            <ProductGraphic
              alt="The Machine home hydrogen water system with LCD display and certifications"
              onOpen={onOpenImage}
              src={theMachineImage}
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {machineCertifications.map((item) => (
                <article
                  className="rounded-2xl border border-cyan-300/25 bg-white/8 px-4 py-3 text-center text-sm font-black uppercase tracking-[.12em] text-cyan-50"
                  key={item}
                >
                  {item}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionGlow() {
  return (
    <>
      <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
    </>
  );
}

function Eyebrow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua">
      <Icon className="h-4 w-4" />
      {label}
    </p>
  );
}

function FeatureCard({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;

  return (
    <article className="rounded-[1.5rem] border border-cyan-300/20 bg-white/8 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur">
      <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-black uppercase leading-6 tracking-[.06em] text-white">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-cyan-50/78">{feature.text}</p>
    </article>
  );
}

function FeatureRow({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;

  return (
    <article className="flex gap-4 rounded-[1.35rem] border border-cyan-300/18 bg-white/8 p-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-base font-black uppercase tracking-[.06em] text-white">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-cyan-50/78">{feature.text}</p>
      </div>
    </article>
  );
}

function ProductGraphic({
  alt,
  onOpen,
  src,
}: {
  alt: string;
  onOpen: () => void;
  src: string;
}) {
  return (
    <button
      className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-cyan-300/25 bg-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-cyan-200/50"
      onClick={onOpen}
      type="button"
    >
      <img alt={alt} className="h-auto w-full object-contain object-center" src={src} />
      <span className="flex items-center justify-center gap-2 bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-4 py-3 text-center text-xs font-black uppercase tracking-[.18em] text-cyan-100">
        <Maximize2 className="h-3.5 w-3.5" />
        View Full Graphic
      </span>
    </button>
  );
}
