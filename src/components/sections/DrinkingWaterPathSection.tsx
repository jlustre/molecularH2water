import { useState } from "react";
import { X } from "lucide-react";

import alkalineWaterImage from "../../../dist/assets/drinkingwater/alkaline.jpg";
import bodyWaterImage from "../../../dist/assets/drinkingwater/body80percentwater.jpg";
import bottledWaterImage from "../../../dist/assets/drinkingwater/bottledwater.jpg";
import carbonFiltrationImage from "../../../dist/assets/drinkingwater/carbonfiltration.jpg";
import molecularHydrogenWaterImage from "../../../dist/assets/drinkingwater/molecularhydrogenwater.jpg";
import reverseOsmosisImage from "../../../dist/assets/drinkingwater/reverseosmosis.jpg";
import tapWaterImage from "../../../dist/assets/drinkingwater/tapwater.jpg";

const waterOptions = [
  {
    title: "Tap Water",
    eyebrow: "Must Be Filtered",
    image: tapWaterImage,
    summary:
      "Tap water is accessible and familiar, but quality can vary by location, plumbing, source, and treatment methods.",
    details: [
      "Tap water is the most common starting point for daily hydration. In many areas, it is treated to meet public safety standards, but that does not mean every glass tastes the same or has the same mineral, chemical, or plumbing profile.",
      "Depending on where you live, tap water may carry chlorine or chloramine taste, sediment, mineral hardness, pipe-related residue, or trace compounds from the local water supply. These factors can affect taste, smell, clarity, and how confident people feel about drinking it every day.",
      "The key takeaway is simple: tap water may be convenient, but it is not the same as filtered water, alkaline water, or hydrogen-rich water. It can be a useful baseline, but it does not intentionally add dissolved molecular hydrogen.",
    ],
  },
  {
    title: "Bottled Water",
    eyebrow: "Expensive Microplastics",
    image: bottledWaterImage,
    summary:
      "Bottled water offers convenience, but it can create cost, storage, plastic waste, and quality-comparison questions.",
    details: [
      "Bottled water is popular because it feels clean, portable, and easy. It can be helpful when traveling, exercising, or away from home, but convenience does not automatically mean it is the best long-term hydration strategy.",
      "The quality of bottled water can vary by brand, source, filtration method, mineral profile, and storage conditions. Bottles may also sit in heat, warehouses, vehicles, or store shelves for long periods, which raises practical questions about freshness and packaging exposure.",
      "The key takeaway is that bottled water may solve convenience, but it does not automatically solve wellness. It can become expensive, creates plastic waste, and does not intentionally add dissolved molecular hydrogen unless it is specifically produced as hydrogen-rich water.",
    ],
  },
  {
    title: "Carbon Filtration",
    eyebrow: "Basic and Very Limited",
    image: carbonFiltrationImage,
    summary:
      "Carbon filtration can improve taste and reduce certain unwanted compounds, but it does not create molecular hydrogen.",
    details: [
      "Carbon filtration is one of the most common ways people try to improve everyday drinking water. Activated carbon can help reduce chlorine taste, unpleasant odors, and some organic compounds that affect how clean or refreshing water feels.",
      "The main strength of carbon filtration is taste and odor improvement. It can make water more enjoyable to drink, but it does not remove every possible contaminant, does not significantly change mineral content, and does not automatically make water alkaline or hydrogen-rich.",
      "The key takeaway is that carbon filtration is a helpful cleaning step, not a hydrogen technology. It may improve the drinking experience, but it does not intentionally add dissolved molecular hydrogen, which is the defining feature of molecular H2 water.",
    ],
  },
  {
    title: "Reverse Osmosis",
    eyebrow: "Strips out the Minerals",
    image: reverseOsmosisImage,
    summary:
      "Reverse osmosis can remove many dissolved substances, but it may also reduce minerals and still does not add H2.",
    details: [
      "Reverse osmosis is a deeper filtration method that pushes water through a very fine membrane. It can reduce many dissolved solids and unwanted substances, which is why people often view it as a stronger purification option.",
      "The tradeoff is that RO is mainly a removal process. Along with reducing unwanted materials, it can also reduce minerals, require storage tanks or slower flow, and may waste some water during filtration depending on the system.",
      "The key takeaway is that reverse osmosis may help produce cleaner-tasting purified water, but it does not naturally create hydrogen-rich water. RO removes; molecular H2 technology adds dissolved hydrogen gas for a different wellness-focused purpose.",
    ],
  },
  {
    title: "Alkaline Water",
    eyebrow: "Manipulate pH/Doesn't Separate Hydrogen",
    image: alkalineWaterImage,
    summary:
      "Alkaline water focuses mainly on pH. Hydrogen-rich water focuses on dissolved molecular hydrogen concentration.",
    details: [
      "Alkaline water is mainly explained through pH. A higher pH means the water is less acidic and more alkaline, which is why many people associate it with a different taste or mineral profile.",
      "The important distinction is that pH is not the same as dissolved molecular hydrogen. Water can be alkaline because of minerals or processing, but that does not mean it contains meaningful H2 levels or offers the same hydrogen-water story.",
      "The key takeaway is simple: alkaline water is a pH conversation, while molecular H2 water is a hydrogen concentration conversation. If the goal is antioxidant education, the focus should move beyond pH and toward dissolved H2.",
    ],
  },
];

export function DrinkingWaterPathSection() {
  const [selectedOption, setSelectedOption] = useState<
    (typeof waterOptions)[number] | null
  >(null);

  return (
    <>
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_88%_42%,rgba(6,214,160,0.13),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eefcff_52%,#ffffff_100%)] py-24"
      id="how-to-get-h2"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-cyan-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-lagoon/20 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
              Types Of Drinking Water
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-marine sm:text-6xl">
              Does Quality Of Water Matter?
            </h2>
            <p className="mt-6 text-xl font-black leading-8 text-slateblue">
              If your body depends on water every day, then the kind of water
              you choose becomes part of the wellness conversation.
            </p>

            <div className="group mt-8 overflow-hidden rounded-[2rem] border border-amber-300 bg-amber-50 shadow-clean transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_28px_85px_rgba(245,158,11,0.24)]">
              <div className="relative px-6 py-7 sm:px-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-amber-200/55 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-yellow-200/45 blur-3xl" />
                <p className="relative text-3xl font-black leading-10 text-marine">
                  Premium fuel makes sense for a valuable machine.
                </p>
                <p className="relative mt-5 text-xl font-semibold leading-9 text-slate-700">
                  Your body is far more valuable than any vehicle. So the better
                  question is not just, &ldquo;Am I drinking enough water?&rdquo; It is,
                  &ldquo;What quality of water am I giving my body every day?&rdquo;
                </p>
                <p className="relative mt-5 text-lg font-semibold leading-8 text-slate-700">
                  When water supports your cells, circulation, temperature
                  balance, nutrient delivery, and waste removal, quality becomes
                  more than a preference. It becomes a daily input your body
                  works with from morning to night.
                </p>
                <p className="relative mt-6 rounded-2xl border border-amber-300 bg-white/70 px-5 py-4 text-lg font-black leading-7 text-marine shadow-sm">
                  Better water choices begin with understanding what each type
                  of water actually does.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-cyan-200/70 bg-white/85 shadow-clean backdrop-blur">
            <figure className="bg-white">
              <img
                alt="The body is mostly water educational visual"
                className="h-auto w-full object-contain object-center"
                src={bodyWaterImage}
              />
            </figure>

            <div className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-slate-600">
                Your body is made mostly of water. That means your cells,
                organs, blood, temperature balance, nutrient delivery, and waste
                removal all depend on the water you drink every day. Water is
                not just something that quenches thirst. It supports the body at
                the cellular level.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                If you would put premium fuel into a valuable car, it makes
                sense to ask an even more important question about your body:
                what kind of water are you giving it? Not all water is created
                equal, so let&apos;s compare the most common drinking-water choices
                and what each one actually does.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Not all water is created equal. Some options are convenient,
                some are filtered, some focus on pH, and some are designed to
                deliver dissolved molecular hydrogen. Understanding the
                difference helps people make smarter hydration choices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {waterOptions.map((option) => {
            return (
              <article
                className="group flex flex-col overflow-hidden rounded-sm border border-lagoon/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/30 hover:shadow-lift"
                key={option.title}
              >
                <div className="overflow-hidden bg-slate-950 p-px">
                  <img
                    alt={`${option.title} visual`}
                    className="h-auto w-full object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                    src={option.image}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    {option.eyebrow}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-5 text-marine xl:whitespace-nowrap xl:text-[1.05rem]">
                    {option.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {option.summary}
                  </p>
                  <button
                    className="mt-5 w-fit cursor-pointer rounded-full bg-marine px-4 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon"
                    onClick={() => setSelectedOption(option)}
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section
      className="relative scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_88%_42%,rgba(6,214,160,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eefcff_52%,#ffffff_100%)] py-24"
      id="molecular-h2-water"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-cyan-100/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          className="overflow-hidden rounded-[2.5rem] border border-cyan-200 bg-white shadow-clean"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative bg-[radial-gradient(circle_at_18%_12%,rgba(6,214,160,0.18),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.2),transparent_36%),linear-gradient(135deg,#ffffff_0%,#eefcff_46%,#dff8ff_100%)] p-6 sm:p-8 lg:p-10">
              <p className="inline-flex rounded-full border border-lagoon/20 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
                Molecular H2 Water
              </p>
              <h3 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-marine sm:text-5xl">
                The Upgrade Is Medical Grade Hydrogen, Not Just Cleaner Water
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                After comparing tap water, bottled water, carbon filtration,
                reverse osmosis, and alkaline water, the next question becomes
                simple: how do we actually get molecular hydrogen into the
                water? Molecular H2 water starts with drinking water and enriches
                it with dissolved hydrogen gas, turning hydration into a more
                focused antioxidant-support conversation.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                This is different from filtering water, changing taste, or
                raising pH. Filtration is about removing certain substances.
                Alkaline water is mainly about pH. Hydrogen-rich water is about
                dissolved H2 concentration, freshness, and drinking it while the
                hydrogen is still present.
              </p>

              <div className="group mt-7 overflow-hidden rounded-[2rem] border border-amber-300 bg-amber-50 shadow-clean transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_28px_85px_rgba(245,158,11,0.24)]">
                <div className="relative px-6 py-6 sm:px-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-amber-200/55 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 left-6 h-48 w-48 rounded-full bg-yellow-200/45 blur-3xl" />
                  <p className="relative text-xl font-black leading-8 text-marine">
                    Ordinary water choices explain the starting point.
                  </p>
                  <p className="relative mt-2 text-xl font-black leading-8 text-marine">
                    Hydrogen-rich water is the game changer.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid bg-ice">
              <figure className="grid place-items-center bg-slate-950 p-px">
                <img
                  alt="Molecular hydrogen water educational visual"
                  className="h-auto w-full object-contain object-center"
                  src={molecularHydrogenWaterImage}
                />
              </figure>

              <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
                <article className="rounded-2xl border border-cyan-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    01 Start Clean
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-slate-700">
                    Good source water still matters. H2 enrichment is strongest
                    when the water is pleasant, clean-tasting, and ready to drink.
                  </p>
                </article>
                <article className="rounded-2xl border border-cyan-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    02 Add H2
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-slate-700">
                    The defining feature is dissolved molecular hydrogen gas,
                    not the bottle, not the pH label, and not a generic filter.
                  </p>
                </article>
                <article className="rounded-2xl border border-cyan-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    03 Micro-Cluster
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-slate-700">
                    Water molecules are grouped into smaller clusters, which may support improved hydration and easier cellular interaction.
                  </p>
                </article>
                <article className="rounded-2xl border border-cyan-200 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                    04 Great Tasting Mineral-Rich Water
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-slate-700">
                    Clean, refreshing water enriched with beneficial minerals to support a smoother taste and a more enjoyable daily hydration experience.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {selectedOption && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={() => setSelectedOption(null)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-[900px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="bg-slate-950 p-px">
                <img
                  alt={`${selectedOption.title} expanded visual`}
                  className="h-auto w-full rounded-sm object-contain object-center"
                  src={selectedOption.image}
                />
              </div>

              <div className="bg-[radial-gradient(circle_at_14%_0%,rgba(6,214,160,0.16),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(14,165,233,0.18),transparent_34%),linear-gradient(135deg,#ffffff_0%,#eefcff_48%,#dff8ff_100%)] p-6 text-marine sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="inline-flex rounded-full border border-lagoon/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-lagoon shadow-sm">
                      {selectedOption.eyebrow}
                    </p>
                  </div>
                  <button
                    aria-label="Close modal"
                    className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-cyan-200 bg-white/80 text-2xl font-bold text-marine shadow-sm transition hover:bg-ice"
                    onClick={() => setSelectedOption(null)}
                    type="button"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-700">
                  {selectedOption.summary}
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-4 md:grid-cols-3">
                  {selectedOption.details.map((detail) => (
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
    </>
  );
}
