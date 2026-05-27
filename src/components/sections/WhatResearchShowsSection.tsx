import { useState } from "react";
import {
  Activity,
  Brain,
  HeartPulse,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Waves,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import athleticRecoveryImage from "../../../dist/assets/whatresearchshow/athleticrecovery.jpg";
import brainHealthImage from "../../../dist/assets/whatresearchshow/brainhealth.jpg";
import gutHealthImage from "../../../dist/assets/whatresearchshow/guthealth.jpg";
import improveCirculationImage from "../../../dist/assets/whatresearchshow/improvecirculation.jpg";
import inflammationReductionImage from "../../../dist/assets/whatresearchshow/inflammationreduction.jpg";
import mitochondriaImage from "../../../dist/assets/whatresearchshow/mitochondria.jpg";
import neuroprotectiveEffectImage from "../../../dist/assets/whatresearchshow/neuroprotectiveeffect.jpg";
import researchImage from "../../../dist/assets/whatresearchshow/research.jpg";

type ResearchTopic = {
  alt: string;
  details: string[];
  icon: LucideIcon;
  image: string;
  summary: string;
  title: string;
};

const researchTopics: ResearchTopic[] = [
  {
    alt: "Molecular hydrogen and inflammation reduction research summary",
    details: [
      "Research discussions around molecular hydrogen often begin with oxidative stress and inflammatory balance because both are central to how the body responds to modern lifestyle pressure.",
      "The key idea is that H2 may help support a healthier internal environment by interacting with harmful reactive species while preserving normal cellular signaling.",
      "For wellness education, this connects hydrogen-rich water to everyday concerns like comfort, recovery, mobility, and the body's ability to stay balanced under stress.",
    ],
    icon: ShieldCheck,
    image: inflammationReductionImage,
    summary:
      "Molecular hydrogen is frequently studied for its relationship to oxidative stress and inflammatory balance, two themes that shape energy, comfort, and long-term wellness.",
    title: "Inflammation Reduction",
  },
  {
    alt: "Molecular hydrogen and athletic recovery research summary",
    details: [
      "Athletic recovery research focuses on what happens after exertion: soreness, oxidative load, hydration status, and the body's ability to bounce back.",
      "Hydrogen-rich water is discussed because exercise naturally increases oxidative activity, and H2 may support the body's recovery environment after physical stress.",
      "This does not replace rest, nutrition, or training discipline. It adds a simple hydration-based conversation for athletes and active adults who want smarter recovery habits.",
    ],
    icon: Activity,
    image: athleticRecoveryImage,
    summary:
      "Hydrogen-rich water is often discussed in relation to exercise recovery, muscle comfort, oxidative stress from exertion, and the need for consistent hydration.",
    title: "Athletic Recovery",
  },
  {
    alt: "Molecular hydrogen and gut health support research summary",
    details: [
      "Gut health connects to hydration, inflammation balance, immune response, nutrient absorption, and overall daily comfort.",
      "Molecular hydrogen research has explored the gut as one of the important areas where oxidative stress and inflammatory signals can affect how people feel.",
      "For a public presentation, the simple message is that cellular wellness is not isolated. Hydration quality, gut support, and overall resilience are all connected.",
    ],
    icon: HeartPulse,
    image: gutHealthImage,
    summary:
      "The gut is central to whole-body wellness, and molecular hydrogen is discussed for its potential role in supporting digestive balance and cellular comfort.",
    title: "Gut Health Support",
  },
  {
    alt: "Molecular hydrogen and brain health research summary",
    details: [
      "The brain uses enormous energy and is sensitive to oxidative stress, hydration status, inflammation signals, and circulation.",
      "Because molecular hydrogen is extremely small, it is often discussed in research conversations around diffusion, cellular access, and neurological wellness support.",
      "The responsible message is not that H2 treats brain conditions. It is that hydrogen-rich hydration belongs in a broader conversation about focus, clarity, and healthy brain aging.",
    ],
    icon: Brain,
    image: brainHealthImage,
    summary:
      "Brain health research themes include oxidative stress, focus, clarity, and healthy aging, making H2 an important part of the cellular wellness conversation.",
    title: "Brain Health Support",
  },
  {
    alt: "Molecular hydrogen and improved circulation research summary",
    details: [
      "Circulation is the delivery system for oxygen, nutrients, hydration, and waste removal. When circulation is supported, the body can function more efficiently.",
      "Research conversations around hydrogen often include vascular function, oxidative stress, and the way cells respond to daily physical and environmental strain.",
      "For everyday wellness, this topic helps people understand that water quality is not only about taste. It is part of how the body transports, nourishes, and recovers.",
    ],
    icon: Waves,
    image: improveCirculationImage,
    summary:
      "Circulation research connects hydrogen-rich hydration to vascular wellness, oxygen delivery, nutrient movement, and overall cellular support.",
    title: "Improved Circulation",
  },
  {
    alt: "Molecular hydrogen and mitochondrial support research summary",
    details: [
      "Mitochondria are often called the energy centers of the cell because they help convert nutrients and oxygen into usable energy.",
      "Oxidative stress can place pressure on mitochondrial function, which is why H2 research often discusses energy, fatigue, resilience, and cellular protection.",
      "This topic gives visitors a practical bridge between science and daily life: when cells are better supported, energy and recovery become easier to understand.",
    ],
    icon: Zap,
    image: mitochondriaImage,
    summary:
      "Mitochondria help power the body, so molecular hydrogen research often connects H2 with cellular energy, oxidative balance, and recovery support.",
    title: "Mitochondrial Support",
  },
  {
    alt: "Molecular hydrogen and neuroprotective effect research summary",
    details: [
      "Neuroprotective research looks at how the brain and nervous system respond to stress, aging, inflammation signals, and oxidative pressure.",
      "Molecular hydrogen is discussed because of its small size, rapid diffusion, and possible role in supporting healthier cellular environments in delicate tissues.",
      "For this website, the message stays educational: H2 is a promising research topic that helps explain why cellular protection matters for long-term wellness.",
    ],
    icon: Sparkles,
    image: neuroprotectiveEffectImage,
    summary:
      "Research around neuroprotective effects explores how molecular hydrogen may support cellular defense, brain resilience, and healthy aging conversations.",
    title: "Neuroprotective Effect",
  },
];

export function WhatResearchShowsSection() {
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(null);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(6,214,160,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#eefcff_52%,#ffffff_100%)] py-24"
      id="what-research-show"
    >
      <div className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full bg-cyan-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-lagoon/20 bg-white/85 px-5 py-2 text-sm font-black uppercase tracking-[.26em] text-lagoon shadow-sm">
            What Research Show
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
            What Molecular Hydrogen Research Is Exploring
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Molecular hydrogen research is growing across many areas of
            wellness, including inflammation balance, recovery, gut health,
            brain support, circulation, mitochondrial function, and cellular
            protection. These topics help explain why H2 is becoming part of
            a larger conversation about hydration and cellular wellness.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <figure className="group overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-clean transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-lift md:col-span-2">
            <img
              alt="Molecular hydrogen research overview"
              className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.01]"
              src={researchImage}
            />
          </figure>

          {researchTopics.map((topic) => (
            <ResearchTopicCard
              key={topic.title}
              onOpen={() => setSelectedTopic(topic)}
              topic={topic}
            />
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-amber-300 bg-amber-50 p-6 text-marine shadow-[0_22px_65px_rgba(245,158,11,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(245,158,11,0.24)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black">Research Opens The Door</h3>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
                These research themes do not need to be presented as medical
                promises. Their value is that they give families a clearer way
                to understand why molecular hydrogen is being studied, why
                cellular protection matters, and why better daily hydration can
                become a meaningful wellness habit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedTopic ? (
        <ResearchTopicModal
          onClose={() => setSelectedTopic(null)}
          topic={selectedTopic}
        />
      ) : null}
    </section>
  );
}

function ResearchTopicCard({
  onOpen,
  topic,
}: {
  onOpen: () => void;
  topic: ResearchTopic;
}) {
  const Icon = topic.icon;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-clean transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-lift">
      <figure className="aspect-video overflow-hidden bg-slate-950 p-px">
        <img
          alt={topic.alt}
          className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
          src={topic.image}
        />
      </figure>

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lagoon/10 text-lagoon transition group-hover:bg-marine group-hover:text-aqua">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-black leading-tight text-marine">
              {topic.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {topic.summary}
            </p>
          </div>
        </div>

        <button
          className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-marine px-4 py-2 text-xs font-black uppercase tracking-[.12em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon hover:shadow-lift"
          onClick={onOpen}
          type="button"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          View Details
        </button>
      </div>
    </article>
  );
}

function ResearchTopicModal({
  onClose,
  topic,
}: {
  onClose: () => void;
  topic: ResearchTopic;
}) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[30000] overflow-y-auto bg-slate-950/75 px-4 py-8 backdrop-blur-sm sm:py-12"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="mx-auto max-w-[980px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.42)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[88vh] overflow-y-auto">
          <figure className="bg-slate-950 p-px">
            <img
              alt={topic.alt}
              className="h-auto w-full rounded-sm object-contain object-center"
              src={topic.image}
            />
          </figure>

          <div className="bg-[radial-gradient(circle_at_14%_0%,rgba(6,214,160,0.16),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(135deg,#ffffff_0%,#eefcff_48%,#dff8ff_100%)] p-6 text-marine sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="inline-flex rounded-full border border-lagoon/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
                  What Research Show
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  {topic.title}
                </h3>
              </div>
              <button
                aria-label="Close research details modal"
                className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-cyan-200 bg-white/80 text-marine shadow-sm transition hover:bg-ice"
                onClick={onClose}
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-700">
              {topic.summary}
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              {topic.details.map((detail, index) => (
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
