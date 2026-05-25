import {
  Activity,
  Atom,
  BadgeCheck,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  HeartPulse,
  Microscope,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Zap,
  type LucideIcon,
} from "lucide-react";
import andrewHubermanImage from "../../../dist/assets/theexperts/andrew_huberman.jpg";
import josephMercolaImage from "../../../dist/assets/theexperts/joseph_mercola.jpg";
import nicholasPerriconeImage from "../../../dist/assets/theexperts/nicholas_perricone.jpg";
import shigeoOhtaImage from "../../../dist/assets/theexperts/shigeo_ohta.jpg";
import stevenGundryImage from "../../../dist/assets/theexperts/steven_gundry.jpg";
import tylerLebaronImage from "../../../dist/assets/theexperts/tyler_lebaron.jpg";

type ExpertProfile = {
  affiliation: string;
  bullets: string[];
  highlight?: string;
  icon: LucideIcon;
  image: string;
  name: string;
  quote: string;
  title: string;
};

type BenefitPoint = {
  icon: LucideIcon;
  label: string;
  text: string;
};

const expertProfiles: ExpertProfile[] = [
  {
    affiliation: "Stanford University",
    bullets: [
      "Leading neuroscientist and professor of neurobiology",
      "Discussed research using 1.5 liters of hydrogen-enriched water daily for four weeks",
      "Highlighted lower interleukin-6 markers as a signal connected with reduced inflammatory load",
    ],
    highlight: "Recent study highlights",
    icon: Brain,
    image: andrewHubermanImage,
    name: "Dr. Andrew Huberman",
    quote:
      "Hydrogen-enriched water is being discussed in connection with inflammation markers, cellular health, and daily wellness support.",
    title: "Neuroscientist and professor",
  },
  {
    affiliation: "Hydrogen research pioneer",
    bullets: [
      "40-year pioneer in hydrogen studies",
      "Research scientist focused on molecular hydrogen",
      "Known for explaining why H2 is unique as a small, easily administered molecule",
    ],
    icon: Microscope,
    image: shigeoOhtaImage,
    name: "Dr. Shigeo Ohta",
    quote:
      "Hydrogen has unique advantages as a medical gas because it is endogenous, easily administered, and has an excellent safety profile.",
    title: "Molecular hydrogen researcher",
  },
  {
    affiliation: "American physician and author",
    bullets: [
      "American physician",
      "Low-carbohydrate diet author",
      "Former cardiothoracic surgeon",
    ],
    icon: Stethoscope,
    image: stevenGundryImage,
    name: "Dr. Steven Gundry",
    quote:
      "Hydrogen water can impact gut health, energy, and recovery, making it one of the overlooked tools in longevity education.",
    title: "Physician and wellness educator",
  },
  {
    affiliation: "Molecular Hydrogen Institute",
    bullets: [
      "Founder of the Molecular Hydrogen Institute",
      "Educator focused on molecular hydrogen science",
      "Frames H2 around energy, inflammation balance, and cellular protection",
    ],
    icon: Atom,
    image: tylerLebaronImage,
    name: "Tyler LeBaron, Ph.D.",
    quote:
      "Hydrogen water is discussed for its ability to support energy, reduce oxidative burden, and protect cells without the drawbacks associated with many interventions.",
    title: "Founder and researcher",
  },
  {
    affiliation: "Author of The Beauty Molecule",
    bullets: [
      "Physician and author",
      "Known for work in beauty, aging, and cellular wellness",
      "Connects selective antioxidant activity with healthy cellular signaling",
    ],
    icon: Sparkles,
    image: nicholasPerriconeImage,
    name: "Nicholas V. Perricone, M.D.",
    quote:
      "Hydrogen's ability to neutralize destructive free radicals without interfering with beneficial cellular signaling makes it a compelling wellness topic.",
    title: "Physician and author",
  },
  {
    affiliation: "Natural health educator",
    bullets: [
      "Health educator and physician",
      "Discusses hydrogen in relation to organ systems, oxidative stress, and inflammation",
      "Frames H2 as part of a proactive health conversation",
    ],
    icon: HeartPulse,
    image: josephMercolaImage,
    name: "Dr. Joseph Mercola",
    quote:
      "Hydrogen is discussed for its potential to support the body by helping address oxidative stress and inflammation.",
    title: "Physician and health educator",
  },
];

const benefitPoints: BenefitPoint[] = [
  {
    icon: Zap,
    label: "Supports Energy",
    text: "Hydrogen education often connects H2 with energy production, metabolic balance, and a better daily hydration routine.",
  },
  {
    icon: ShieldCheck,
    label: "Reduces Oxidative Pressure",
    text: "H2 is commonly taught as a selective antioxidant that helps address harmful free radicals without blocking useful cellular signaling.",
  },
  {
    icon: Activity,
    label: "Supports Inflammation Balance",
    text: "Expert educators connect hydrogen water with inflammation markers, recovery, and whole-body wellness education.",
  },
  {
    icon: Brain,
    label: "Reaches Deeply",
    text: "Because H2 is extremely small, it is easier to explain how it can diffuse into areas traditional antioxidants may not reach as easily.",
  },
  {
    icon: HeartPulse,
    label: "Supports Recovery",
    text: "The message connects hydration quality with energy, gut health, recovery, and resilience after daily stress.",
  },
  {
    icon: BookOpenCheck,
    label: "Backed By Ongoing Research",
    text: "Molecular hydrogen continues to attract published studies, new discoveries, and growing interest from wellness-focused audiences.",
  },
];

export function RecommendedByExpertsSection() {
  const orderedExperts = [...expertProfiles.slice(1), expertProfiles[0]];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
      id="recommended-by-experts"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.2),transparent_28%),linear-gradient(135deg,#020617_0%,#071c2f_48%,#082f49_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(125,211,252,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.11)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-28 top-32 h-96 w-96 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full border border-aqua/20 bg-aqua/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/8 px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-aqua backdrop-blur">
            Recommended By Experts
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
            Science, Experience, And Results Around Molecular Hydrogen
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/82">
            Molecular hydrogen is discussed by researchers, physicians, and
            wellness educators because it gives people a clear way to talk about
            oxidative stress, inflammation balance, cellular health, hydration,
            energy, and recovery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {orderedExperts.map((expert) => (
            <ExpertCard expert={expert} key={expert.name} />
          ))}
        </div>

        <div className="mt-12 rounded-[2.25rem] border border-cyan-300/30 bg-white/8 p-6 shadow-[0_28px_90px_rgba(14,165,233,0.14)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-aqua/30 bg-aqua/12 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua">
                Benefits Of Molecular Hydrogen
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
                A simple way to organize the expert message
              </h3>
              <p className="mt-5 text-lg leading-8 text-cyan-50/78">
                H2 is often discussed alongside gut health, energy, recovery,
                oxidative stress, inflammation balance, free radical support,
                cellular signaling, and ongoing research. Together, these themes
                help people understand why hydrogen-rich water is more than a
                trend. It is a focused hydration story built around cellular
                wellness.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefitPoints.map((point) => (
                <article
                  className="group rounded-[1.35rem] border border-cyan-300/20 bg-slate-950/45 p-4 transition hover:-translate-y-1 hover:border-aqua/55 hover:bg-slate-900/70"
                  key={point.label}
                >
                  <div className="flex gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua/12 text-aqua transition group-hover:bg-aqua group-hover:text-marine">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-white">{point.label}</h4>
                      <p className="mt-1 text-sm leading-6 text-cyan-50/72">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-amber-300/45 bg-amber-50 p-6 text-marine shadow-[0_24px_70px_rgba(245,158,11,0.16)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black">
                The Takeaway
              </h3>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
                The growing interest from researchers, physicians, and wellness
                educators points to the same larger message: molecular hydrogen
                gives families a simple way to talk about water quality,
                oxidative stress, and cellular-level wellness. The goal is to
                educate clearly, keep claims responsible, and help people ask
                better questions about what they drink every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertCard({ expert }: { expert: ExpertProfile }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-white/8 shadow-[0_18px_55px_rgba(14,165,233,0.1)] backdrop-blur transition hover:-translate-y-1 hover:border-aqua/55 hover:bg-white/12">
      <div className="relative overflow-hidden border-b border-cyan-300/20 bg-slate-950">
        <img
          alt={`${expert.name} profile`}
          className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          src={expert.image}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
        <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/40 bg-slate-950/75 text-aqua shadow-[0_14px_35px_rgba(14,165,233,0.18)] backdrop-blur transition group-hover:bg-aqua group-hover:text-marine">
          <expert.icon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <p className="text-xl font-black text-white">{expert.name}</p>
          <p className="mt-1 text-sm font-bold uppercase tracking-[.16em] text-aqua">
            {expert.title}
          </p>
          <p className="mt-1 text-sm text-cyan-50/66">
            {expert.affiliation}
          </p>
        </div>

        <div className="mt-5 flex-1 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-5">
          <Quote className="h-7 w-7 text-aqua" />
          <p className="mt-3 text-lg font-semibold leading-8 text-cyan-50/88">
            {expert.quote}
          </p>
        </div>

        <ul className="mt-5 grid gap-2">
          {expert.bullets.map((bullet) => (
            <li
              className="flex gap-3 text-sm leading-6 text-cyan-50/76"
              key={bullet}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
