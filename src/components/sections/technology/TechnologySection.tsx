import { comparisonItems, technologySteps } from "../../../data/siteContent";
import { HydrogenBadge } from "../../ui/HydrogenBadge";
import { SectionHeading } from "../../ui/SectionHeading";

export function TechnologySection() {
  return (
    <section className="bg-white py-24" id="technology">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="The machine adds dissolved molecular hydrogen to drinking water, creating a clearer way to talk about hydration quality and oxidative-stress education."
          eyebrow="The Technology"
          title="How the Hydrogen Water Machine Works"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {technologySteps.map((step, index) => {
            const featured = index === 1;

            return (
              <div
                className={`rounded-[2rem] p-7 shadow-sm ${
                  featured ? "bg-marine text-white shadow-clean" : "bg-pearl"
                }`}
                key={step.title}
              >
                <p
                  className={`text-sm font-black uppercase tracking-[.2em] ${
                    featured ? "text-aqua" : "text-lagoon"
                  }`}
                >
                  {step.eyebrow}
                </p>
                <h3
                  className={`mt-4 text-2xl font-black ${
                    featured ? "text-white" : "text-marine"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-4 leading-7 ${
                    featured ? "text-cyan-50/85" : "text-slate-600"
                  }`}
                >
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-[3rem] bg-ice p-8 shadow-clean lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="grid min-h-[360px] place-items-center rounded-[2rem] border-2 border-dashed border-lagoon/30 bg-white p-8 text-center">
              <div>
                <HydrogenBadge />
                <p className="text-xl font-black text-marine">
                  Hydrogen-Rich Water System
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Designed to prepare fresh H2 water for a daily home
                  hydration routine.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-marine">
                Regular Water vs. Alkaline Water vs. Hydrogen-Rich Water
              </h3>
              <div className="mt-6 grid gap-4">
                {comparisonItems.map((item) => {
                  const featured = item.title === "Hydrogen-Rich Water";

                  return (
                    <div
                      className={`rounded-2xl p-5 ${
                        featured ? "bg-marine text-white" : "bg-white"
                      }`}
                      key={item.title}
                    >
                      <p className={`font-black ${featured ? "" : "text-marine"}`}>
                        {item.title}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          featured ? "text-cyan-50/85" : "text-slate-600"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
