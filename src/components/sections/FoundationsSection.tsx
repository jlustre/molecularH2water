import { Check } from "lucide-react";
import { foundationSteps } from "../../data/siteContent";

const contributingFactors = [
  "Persistent fatigue and low energy levels",
  "Premature aging and oxidative stress",
  "Mental fog and reduced focus",
  "Inflammation and slower recovery",
  "Reduced hydration and cellular performance",
  "Daily wellness challenges that affect how you feel and function",
];

export function FoundationsSection() {
  return (
    <section className="mesh-bg py-24" id="foundations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] bg-white p-6 shadow-clean lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
                The Foundations
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-marine sm:text-5xl">
                The Causes Behind Aging, Fatigue, and Wellness Challenges
              </h2>

              <div className="mt-8 rounded-[2rem] bg-ice p-6 shadow-sm">
                <p className="text-xl font-black leading-8 text-marine">
                  Understanding the hidden causes behind aging, fatigue, low
                  energy, and everyday wellness challenges.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Modern lifestyles expose our bodies to stress, environmental
                  toxins, poor hydration, processed foods, lack of sleep, and
                  oxidative damage every single day. Over time, these factors can
                  impact cellular health, energy production, recovery, and overall
                  well-being.
                </p>
                <p className="mt-4 leading-8 text-slate-600">
                  Understanding these underlying causes is the first step toward
                  supporting a healthier, more energized life.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-black uppercase tracking-[.2em] text-lagoon">
                  Discover What May Be Contributing To
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {contributingFactors.map((factor) => (
                    <div
                      className="flex gap-3 rounded-2xl border border-lagoon/10 bg-white p-4 shadow-sm"
                      key={factor}
                    >
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua/15 text-xs font-black text-marine">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm font-bold leading-6 text-slate-700">
                        {factor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-marine p-5 shadow-clean">
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
                <p className="text-sm font-black uppercase tracking-[.22em] text-aqua">
                  Root Cause Map
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                  Why are so many people feeling exhausted, inflamed, and older
                  than they should?
                </h3>
                <p className="mt-4 text-sm leading-7 text-cyan-50/80">
                  The answer may lie deeper than you think. These core concepts help
                  visitors connect daily lifestyle pressure with smarter wellness
                  choices.
                </p>

                <div className="mt-7 space-y-4">
                  {foundationSteps.map((step) => (
                    <div
                      className={`rounded-[1.5rem] p-5 ${
                        step.featured
                          ? "bg-aqua text-marine"
                          : "bg-white text-slate-600"
                      }`}
                      key={step.number}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black ${
                            step.featured
                              ? "bg-marine/10 text-marine"
                              : "bg-aqua/15 text-marine"
                          }`}
                        >
                          {step.number}
                        </div>
                        <div>
                          <h4 className="font-black text-marine">{step.title}</h4>
                          <p
                            className={`mt-2 text-sm leading-6 ${
                              step.featured ? "text-marine" : "text-slate-600"
                            }`}
                          >
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-lagoon/10 bg-pearl p-6 lg:p-8">
            <p className="text-2xl font-black leading-9 text-marine">
              Uncover the hidden causes of aging, fatigue, oxidative stress, and
              modern wellness challenges.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Your body faces invisible stress every day. From environmental toxins
              and poor hydration to oxidative stress and daily lifestyle pressures,
              these hidden factors may contribute to low energy, slower recovery,
              mental fog, and the visible signs of aging. Learn how supporting your
              body at the cellular level may help improve vitality, hydration, and
              overall wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
