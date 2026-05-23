import { useState } from "react";
import { Layers } from "lucide-react";

import interruptChainReactionsImage from "../../assets/images/antioxidants/interruptchainreactions.jpg";
import neutralizeImage from "../../assets/images/antioxidants/neutralize.jpg";
import protectDailyFunctionImage from "../../assets/images/antioxidants/protectdailyfunction.jpg";
import supportBalanceImage from "../../assets/images/antioxidants/supportbalance.jpg";
import cellularStructuresImage from "../../assets/images/hero_images/cellularstructures.jpg";
import whyH2DifferentImage from "../../assets/images/hero_images/whyh2different.jpg";
import balanceImage from "../../assets/images/thehero/balance.jpg";

const antioxidantRoles = [
  {
    image: neutralizeImage,
    title: "Neutralize Reactive Molecules",
    text: "Antioxidants can donate an electron to unstable free radicals, helping calm the reaction without becoming highly reactive themselves.",
    details: [
      "Free radicals become reactive because they are missing stability. Antioxidants help by donating support that can neutralize the unstable molecule and reduce its urge to react with nearby cellular structures.",
      "This is often explained as calming the spark before it spreads. The antioxidant does not erase every free radical, but it helps the body manage excess oxidative pressure in a more balanced way.",
      "For wellness education, this gives people a simple picture: antioxidants are not magic shields, but they are part of the body's natural defense system against oxidative stress.",
    ],
  },
  {
    image: interruptChainReactionsImage,
    title: "Interrupt Chain Reactions",
    text: "When oxidative stress spreads from one molecule to another, antioxidants help interrupt the cycle before more cellular structures are affected.",
    details: [
      "Oxidative stress can behave like a chain reaction. One unstable molecule affects another, and that next molecule can become unstable too.",
      "Antioxidants help slow this momentum by stepping into the reaction and supporting balance before the stress continues moving through membranes, proteins, fats, or DNA.",
      "This is why antioxidant support is often discussed as preventive maintenance for daily wellness: it helps the body manage stress before it builds into a larger oxidative load.",
    ],
  },
  {
    image: supportBalanceImage,
    title: "Support Cellular Balance",
    text: "The body uses antioxidant systems to maintain redox balance, a healthy relationship between normal oxidation and protection.",
    details: [
      "The body needs a certain amount of oxidation for normal life. Energy production, immune signaling, exercise adaptation, and cellular communication all involve controlled oxidative activity.",
      "The goal is not to eliminate oxidation. The goal is redox balance, where normal oxidative activity is matched by enough protection, repair, and recovery.",
      "Antioxidants help support that balance, especially when modern lifestyle pressures increase the body&apos;s oxidative demand.",
    ],
  },
  {
    image: protectDailyFunctionImage,
    title: "Protect Daily Function",
    text: "Antioxidant support is often discussed alongside energy, recovery, aging, immune wellness, and healthy hydration habits.",
    details: [
      "Oxidative stress can touch many areas of daily function because cells power everything the body does. Energy, recovery, focus, skin health, and resilience all depend on healthy cellular performance.",
      "Antioxidant support helps frame wellness in a practical way: support the cells, support the systems, and support the daily habits that keep the body functioning well.",
      "This message stays educational and responsible. It does not promise treatment or cures; it explains why cellular protection is a meaningful part of a long-term wellness conversation.",
    ],
  },
];

const antioxidantLimitations = [
  {
    title: "Size and access",
    text: "Some antioxidants are larger molecules. Their size can influence where they travel and how easily they reach certain cellular spaces.",
  },
  {
    title: "Water-soluble or fat-soluble limits",
    text: "Vitamin C works mainly in water-based environments, while vitamin E works mainly in fat-based environments. Each has a useful but limited area of activity.",
  },
  {
    title: "Dose is not the whole story",
    text: "Taking more of an antioxidant does not automatically mean better results. Absorption, timing, tissue access, and balance all matter.",
  },
  {
    title: "Not every radical is harmful",
    text: "The body uses some free radicals for normal signaling and immune defense. The goal is balance, not eliminating every reactive molecule.",
  },
  {
    title: "May not target the deepest stress",
    text: "Some antioxidants may not efficiently reach mitochondria, nuclei, or other areas where oxidative pressure can be especially important.",
  },
  {
    title: "Lifestyle can overwhelm support",
    text: "Poor sleep, chronic stress, processed foods, toxins, and dehydration can increase oxidative load faster than antioxidant intake can offset.",
  },
];

export function AntioxidantHeroSection() {
  const [selectedRole, setSelectedRole] = useState<
    (typeof antioxidantRoles)[number] | null
  >(null);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_90%_40%,rgba(6,214,160,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f1feff_58%,#ffffff_100%)] py-24"
      id="hero"
    >
      <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <div className="pointer-events-none absolute -right-28 top-24 h-80 w-80 rounded-full border border-cyan-200 bg-cyan-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full border border-blue-200 bg-blue-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
              The Hero
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
              Antioxidants
            </h2>
            <p className="mt-6 text-xl font-black leading-8 text-slateblue">
              Your body&apos;s built-in defense system for protecting cellular
              balance and resilience.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              If free radicals are the unstable sparks, antioxidants are part of
              the body&apos;s protective response. They help neutralize reactive
              molecules by offering the support needed to calm unstable
              reactions before they continue spreading stress through nearby
              cells and tissues.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              In a healthy wellness routine, antioxidants support balance. They
              work alongside hydration, sleep, nutrition, movement, and recovery
              habits to help the body maintain a healthier environment for
              cellular function.
            </p>
            
          </div>

          <figure className="overflow-hidden rounded-xl border border-cyan-200/50 bg-slate-950 p-1 shadow-clean">
            <img
              alt="Antioxidants helping restore balance against oxidative stress"
              className="h-auto w-full rounded-lg object-contain object-center"
              src={balanceImage}
            />
          </figure>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {antioxidantRoles.map((item) => (
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
                  onClick={() => setSelectedRole(item)}
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <figure className="overflow-hidden rounded-[2rem] border-2 border-marine bg-white shadow-clean">
            <img
              alt="Cellular structures antioxidants help protect"
              className="h-auto w-full object-contain object-center"
              src={cellularStructuresImage}
            />
          </figure>

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/70 bg-[radial-gradient(circle_at_12%_0%,rgba(6,214,160,0.16),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f1feff_52%,#dff7ff_100%)] p-5 shadow-clean sm:p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-lagoon/15 bg-white/80 px-3 py-1.5 text-xs font-black uppercase tracking-[.2em] text-lagoon shadow-sm backdrop-blur">
                <Layers className="h-4 w-4" />
                The Limitations
              </div>
              <h3 className="mt-4 max-w-2xl text-2xl font-black leading-tight text-marine sm:text-3xl">
                Why other antioxidants may not be the complete answer
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Vitamins, polyphenols, enzymes, and plant compounds can all be
                valuable, but every antioxidant has practical limits. A responsible
                wellness message should explain both the benefit and the boundary.
              </p>
            </div>

            <div className="relative mt-5 grid gap-2.5 md:grid-cols-2">
              {antioxidantLimitations.map((item, index) => (
                <article
                  className="group rounded-2xl border border-white/80 bg-white/85 p-3 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lift"
                  key={item.title}
                >
                  <div className="flex gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-marine text-xs font-black text-white shadow-sm transition group-hover:bg-lagoon">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="text-base font-black leading-5 text-marine">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-base leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="relative mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-base font-bold leading-7 text-marine shadow-sm backdrop-blur">
              If oxidative stress is the enemy and antioxidants are the hero,
              what makes molecular hydrogen worth discussing? The answer begins
              with size, selectivity, diffusion, and how H2 is different from
              traditional antioxidants.
            </p>
          </div>
        </div>

        <figure className="mt-12 overflow-hidden rounded-[2rem] border-2 border-marine bg-white shadow-clean">
          <img
            alt="Why molecular hydrogen is different from traditional antioxidants"
            className="h-auto w-full object-contain object-center"
            src={whyH2DifferentImage}
          />
        </figure>
      </div>

      {selectedRole && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={() => setSelectedRole(null)}
          role="dialog"
        >
          <div
            className="mx-auto max-w-[960px] overflow-hidden rounded-md bg-white shadow-[0_30px_100px_rgba(2,6,23,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[88vh] overflow-y-auto">
              <div className="bg-slate-950 p-px">
                <img
                  alt={`${selectedRole.title} expanded illustration`}
                  className="h-auto w-full rounded-sm object-contain object-center"
                  src={selectedRole.image}
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.22em] text-lagoon">
                      Antioxidants
                    </p>
                    <h3 className="mt-3 text-3xl font-black text-marine sm:text-4xl">
                      {selectedRole.title}
                    </h3>
                  </div>
                  <button
                    aria-label="Close modal"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-2xl font-bold text-marine transition hover:bg-ice"
                    onClick={() => setSelectedRole(null)}
                    type="button"
                  >
                    X
                  </button>
                </div>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {selectedRole.text}
                </p>

                <div className="mt-7 grid gap-4 lg:grid-cols-3">
                  {selectedRole.details.map((detail) => (
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
