import { useState } from "react";
import { CircleAlert } from "lucide-react";

import cellularDisruptionImage from "../../assets/images/theproblem/freeradicals/cellulardisruption.jpg";
import electronStealingImage from "../../assets/images/theproblem/freeradicals/electronstealing.jpg";
import unstableMoleculeImage from "../../assets/images/theproblem/freeradicals/unstablemolecules.jpg";
import visibleWellnessImage from "../../assets/images/theproblem/freeradicals/visiblewellness.jpg";
import hiddenProblemImage from "../../assets/images/theproblem/hiddenproblem.jpg";
import sourcesOfFreeRadicalsImage from "../../assets/images/theproblem/sourcesoffreeradicals.jpg";

const damagePath = [
  {
    image: unstableMoleculeImage,
    title: "Unstable Molecules",
    text: "Free radicals are missing an electron, making them highly reactive inside the body.",
    details: [
      "Free radicals are unstable because they are missing an electron. That missing electron makes them reactive, which means they naturally look for balance by interacting with nearby molecules.",
      "Inside the body, this can become a problem when free radicals are produced faster than the body can neutralize them. The result is a chain reaction that may place stress on cells, proteins, fats, and DNA.",
      "This does not mean free radicals are always bad. They are part of normal biology. The concern is imbalance, especially when modern stressors increase the load over time.",
    ],
  },
  {
    image: electronStealingImage,
    title: "Electron Stealing",
    text: "To stabilize themselves, they may pull electrons from nearby cells, proteins, fats, or DNA.",
    details: [
      "A free radical tries to stabilize itself by taking an electron from a nearby molecule. This process is often described as electron stealing.",
      "When one molecule loses an electron, it may become unstable too. That can start a cascading reaction where more molecules become stressed or damaged.",
      "This is one reason oxidative stress is often described as a chain reaction. The goal of antioxidant support is to help interrupt that cycle and restore balance.",
    ],
  },
  {
    image: cellularDisruptionImage,
    title: "Cellular Disruption",
    text: "This chain reaction can contribute to oxidative stress when the body cannot keep up.",
    details: [
      "Cells rely on healthy membranes, proteins, mitochondria, and DNA to function well. When oxidative pressure rises, those structures may become stressed.",
      "Cellular disruption can affect how efficiently cells communicate, repair, produce energy, and recover from daily demands.",
      "This section is educational only, but it helps visitors understand why cellular health is often connected to energy, aging, recovery, and overall wellness conversations.",
    ],
  },
  {
    image: visibleWellnessImage,
    title: "Visible Wellness Impact",
    text: "Over time, oxidative load is often discussed alongside fatigue, aging, inflammation, and slower recovery.",
    details: [
      "Oxidative load is not always something people can feel immediately. Over time, however, it is commonly discussed in relation to low energy, slower recovery, aging concerns, and daily wellness challenges.",
      "The visible impact can show up as people noticing that they feel tired, less resilient, mentally foggy, or slower to bounce back from stress.",
      "The key message is awareness. Understanding free radicals gives people a clearer reason to care about hydration, sleep, nutrition, movement, and responsible wellness support.",
    ],
  },
];

export function EnemySection() {
  const [selectedDamage, setSelectedDamage] = useState<
    (typeof damagePath)[number] | null
  >(null);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.14),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eefbff_48%,#ffffff_100%)] py-24"
      id="enemy"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-cyan-200/60 bg-cyan-100/30 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full border border-blue-200/60 bg-blue-100/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
              The Enemy
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
              Free Radicals
            </h2>
            <p className="mt-6 text-xl font-black leading-8 text-slateblue">
              The invisible cellular stressors that may accelerate oxidative
              damage.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Free radicals are unstable molecules created by normal body processes
              and modern lifestyle exposures. In small amounts, they are part of
              normal biology. But when they build faster than the body can balance
              them, they may contribute to oxidative stress.
            </p>

            <div className="mt-8 rounded-[2rem] border border-lagoon/10 bg-white p-6 shadow-clean">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan-100 text-lagoon">
                  <CircleAlert className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-marine">
                    Simple explanation
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Think of free radicals like tiny sparks. A few sparks are
                    manageable, but too many can spread stress through the body and
                    put pressure on cells over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[3rem] border border-cyan-200/70 bg-slate-950 p-3 shadow-clean sm:p-4">
            <img
              alt="The hidden problem of free radicals and oxidative stress"
              className="aspect-square w-full rounded-[2.35rem] object-cover object-center"
              src={hiddenProblemImage}
            />
          </figure>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-[2.5rem] border border-cyan-200/70 bg-marine p-2 shadow-clean sm:p-3">
            <img
              alt="Major sources of free radicals including pollution, stress, poor sleep, smoking, alcohol, and processed foods"
              className="h-auto w-full rounded-[2rem] object-contain"
              src={sourcesOfFreeRadicalsImage}
            />
          </figure>

          <div className="grid gap-5 sm:grid-cols-2">
            {damagePath.map((item) => (
              <article
                className="overflow-hidden rounded-sm border border-lagoon/10 bg-white shadow-sm"
                key={item.title}
              >
                <div className="overflow-hidden bg-slate-950 p-px">
                  <img
                    alt={`${item.title} illustration`}
                    className="h-auto w-full object-contain object-center"
                    src={item.image}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-black text-marine">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                  <button
                    className="mt-3 rounded-full bg-marine px-4 py-2 text-xs font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-lagoon"
                    onClick={() => setSelectedDamage(item)}
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedDamage && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={() => setSelectedDamage(null)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-[960px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="bg-slate-950 p-px">
                <img
                  alt={`${selectedDamage.title} expanded illustration`}
                  className="h-auto w-full rounded-sm object-contain object-center"
                  src={selectedDamage.image}
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[.22em] text-lagoon">
                        Free Radicals
                      </p>
                      <h3 className="mt-3 text-3xl font-black text-marine sm:text-4xl">
                        {selectedDamage.title}
                      </h3>
                    </div>
                    <button
                      aria-label="Close modal"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-2xl font-bold text-marine transition hover:bg-ice"
                      onClick={() => setSelectedDamage(null)}
                      type="button"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    {selectedDamage.text}
                  </p>

                  <div className="mt-7 grid gap-4 lg:grid-cols-3">
                    {selectedDamage.details.map((detail) => (
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
    </section>
  );
}
