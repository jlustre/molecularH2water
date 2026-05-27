import { useState } from "react";
import {
  Activity,
  BatteryWarning,
  Flame,
  Hourglass,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";

import agingImage from "../../../dist/assets/hiddendriver/aging.jpg";
import chronicInflammationImage from "../../../dist/assets/hiddendriver/chronicinflammation.jpg";
import oxidativeStressImage from "../../../dist/assets/oxidativestress.jpg";

type ImpactPoint = {
  icon: LucideIcon;
  label: string;
  text: string;
};

type HealthImpactCard = {
  description: string;
  details: string[];
  image: string;
  title: string;
};

const impactPoints: ImpactPoint[] = [
  {
    icon: Activity,
    label: "Cellular Damage",
    text: "Oxidative pressure may affect cell membranes, proteins, fats, DNA, and normal repair processes.",
  },
  {
    icon: Flame,
    label: "Inflammation",
    text: "When oxidative load stays elevated, it is often discussed alongside inflammatory stress and slower recovery.",
  },
  {
    icon: BatteryWarning,
    label: "Fatigue",
    text: "Cells need healthy energy production. Oxidative stress may place extra pressure on that system.",
  },
  {
    icon: Hourglass,
    label: "Accelerated Aging",
    text: "Researchers often connect oxidative stress with visible aging, collagen breakdown, and long-term wellness decline.",
  },
];

const healthCards: HealthImpactCard[] = [
  {
    description:
      "Oxidative stress is often discussed as one hidden driver behind accelerated aging because it can place pressure on skin, collagen, DNA, and normal cellular repair.",
    details: [
      "Aging is not only about birthdays. It is also influenced by the daily pressure placed on cells, proteins, and connective tissue.",
      "When free radicals overwhelm the body's natural defenses, oxidative stress may contribute to visible signs of aging such as dullness, fine lines, slower repair, and reduced resilience.",
      "This is why cellular wellness matters. Supporting balance at the cellular level helps make the aging conversation more practical, hopeful, and easier to understand.",
    ],
    image: agingImage,
    title: "Accelerated Aging",
  },
  {
    description:
      "Chronic inflammation is often linked with oxidative stress because both can feed into each other and make it harder for the body to recover and stay balanced.",
    details: [
      "Inflammation is part of the body's normal response, but long-lasting inflammatory stress can become a wellness concern.",
      "Oxidative stress can increase pressure on tissues, while inflammatory signals may create more reactive molecules. That cycle can make recovery feel slower.",
      "Helping people understand this connection creates a clear bridge between free radicals, antioxidants, hydration, and why molecular hydrogen is worth discussing.",
    ],
    image: chronicInflammationImage,
    title: "Inflammation Pressure",
  },
];

const placeholderVideoUrl = "https://player.vimeo.com/video/100902001?autoplay=1";

export function HealthImpactSection() {
  const [selectedCard, setSelectedCard] = useState<HealthImpactCard | null>(
    null,
  );
  const [videoCard, setVideoCard] = useState<HealthImpactCard | null>(null);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_10%,rgba(239,68,68,0.12),transparent_28%),radial-gradient(circle_at_88%_22%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#ffffff_0%,#effcff_48%,#ffffff_100%)] py-24"
      id="health-impact"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[.25em] text-red-500">
            The Health Impact
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
            Oxidative Stress
          </h2>
          <p className="mt-6 text-xl font-semibold leading-8 text-slate-600">
            When free radicals build faster than the body can control them, the
            result is a state of imbalance called oxidative stress.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-amber-300 bg-amber-50 p-6 shadow-clean transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_28px_85px_rgba(245,158,11,0.22)]">
              <p className="text-2xl font-black leading-9 text-marine sm:text-3xl">
                "When <span className="text-red-500">free radicals</span> build
                up faster than our body can control them, it creates a condition
                called <span className="text-red-500">oxidative stress</span>."
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-200 bg-white p-6 shadow-clean">
              <h3 className="text-2xl font-black text-marine">
                Scientists believe oxidative stress may contribute to:
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {impactPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <article
                      className="rounded-2xl border border-cyan-100 bg-ice p-5 transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:bg-white hover:shadow-lift"
                      key={point.label}
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-marine text-aqua shadow-sm">
                          <Icon className="h-6 w-6" strokeWidth={2.4} />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-marine">
                            {point.label}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>

          <figure className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-slate-950 shadow-clean">
            <img
              alt="Oxidative stress showing free radicals damaging healthy cells"
              className="h-auto w-full object-contain object-center"
              src={oxidativeStressImage}
            />
          </figure>

          <div className="rounded-[2rem] border border-cyan-200 bg-white p-6 shadow-clean lg:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lagoon text-white">
                <ShieldCheck className="h-6 w-6" strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-marine">
                  Why researchers keep studying it
                </h3>
                <p className="mt-3 text-lg leading-8 text-slate-600">
                  Oxidative stress connects many wellness conversations into one
                  clear story: cellular balance matters. When free radicals build
                  faster than the body can manage, they can create pressure on
                  cells, energy production, recovery, and the aging process. This
                  is why researchers have spent decades studying ways to help the
                  body manage oxidative pressure and protect everyday function.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {healthCards.map((card) => (
            <article
              className="group overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-clean transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-lift"
              key={card.title}
            >
              <figure className="aspect-video overflow-hidden bg-slate-950 p-px">
                <img
                  alt={`${card.title} illustration`}
                  className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                  src={card.image}
                />
              </figure>
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-black text-marine">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {card.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    className="cursor-pointer rounded-full bg-marine px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon"
                    onClick={() => setSelectedCard(card)}
                    type="button"
                  >
                    View Details
                  </button>
                  <button
                    className="cursor-pointer rounded-full border border-lagoon/30 bg-white px-5 py-3 text-sm font-black text-marine shadow-sm transition hover:-translate-y-0.5 hover:border-lagoon hover:bg-ice"
                    onClick={() => setVideoCard(card)}
                    type="button"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={() => setSelectedCard(null)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-[960px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="bg-slate-950 p-px">
                <img
                  alt={`${selectedCard.title} expanded illustration`}
                  className="h-auto w-full rounded-sm object-contain object-center"
                  src={selectedCard.image}
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.22em] text-red-500">
                      Oxidative Stress
                    </p>
                    <h3 className="mt-3 text-3xl font-black text-marine sm:text-4xl">
                      {selectedCard.title}
                    </h3>
                  </div>
                  <button
                    aria-label="Close modal"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-marine transition hover:bg-ice"
                    onClick={() => setSelectedCard(null)}
                    type="button"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {selectedCard.description}
                </p>

                <button
                  className="mt-6 cursor-pointer rounded-full bg-marine px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon"
                  onClick={() => {
                    setVideoCard(selectedCard);
                    setSelectedCard(null);
                  }}
                  type="button"
                >
                  Watch Video
                </button>

                <div className="mt-7 grid gap-4 lg:grid-cols-3">
                  {selectedCard.details.map((detail) => (
                    <p
                      className="rounded-2xl bg-ice p-5 leading-8 text-slate-700"
                      key={detail}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {videoCard && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/75 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={() => setVideoCard(null)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-md bg-slate-950 shadow-[0_30px_100px_rgba(2,6,23,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-5 border-b border-cyan-300/20 px-5 py-4 text-white sm:px-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[.22em] text-aqua">
                  Hidden Driver Video
                </p>
                <h3 className="mt-1 text-xl font-black sm:text-2xl">
                  {videoCard.title}
                </h3>
              </div>
              <button
                aria-label="Close video"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                onClick={() => setVideoCard(null)}
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                src={placeholderVideoUrl}
                title={`${videoCard.title} video`}
              />
            </div>

            <div className="bg-white p-5 sm:p-6">
              <p className="leading-7 text-slate-700">
                This video area is ready for the final link. For now, it uses a
                temporary video so visitors can experience how the player will
                open and play inside the page.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
