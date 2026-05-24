import { solutionCards } from "../../data/siteContent";
import familyDrinkingImage from "../../../dist/assets/familydrinkingH2.jpg";
import solutionImage from "../../../dist/assets/drinkingwater/thesolution.jpg";

export function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-ice to-white py-24" id="solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] border border-cyan-200/70 bg-white shadow-clean">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[620px] overflow-hidden bg-marine text-white">
              <img
                alt="Family enjoying hydrogen-rich water together"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={familyDrinkingImage}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/88" />
              <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-aqua/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative z-10 p-7 sm:p-9 lg:p-12">
                <p className="inline-flex rounded-full border border-cyan-200/80 bg-marine/85 px-4 py-2 text-sm font-black uppercase tracking-[.25em] text-aqua shadow-[0_12px_32px_rgba(7,59,76,0.45)] backdrop-blur-md">
                  The Solution
                </p>
              </div>

              <div className="relative flex min-h-[620px] flex-col justify-end p-7 pt-72 sm:p-9 sm:pt-80 lg:p-12 lg:pt-96">
                <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  A Better Daily Water Habit for Families
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-cyan-50/85">
                  The solution is not framed as a medical claim. It is a simple
                  wellness conversation about better hydration, cellular access,
                  responsible education, and giving families a clear reason to
                  learn more.
                </p>
              </div>
            </div>

            <div className="bg-white">
              <figure className="overflow-hidden rounded-tr-[3rem] border-b border-cyan-200/80 bg-ice shadow-sm">
                <img
                  alt="Molecular hydrogen water as the solution"
                  className="h-auto w-full object-contain object-center"
                  src={solutionImage}
                />
              </figure>

              <div className="mt-6 grid gap-4 px-5 sm:grid-cols-2 sm:px-7 lg:px-8">
                {solutionCards.map((card) => (
                  <div
                    className={`rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                      card.featured
                        ? "border-cyan-300 bg-aqua text-marine"
                        : "border-cyan-100 bg-ice text-marine"
                    }`}
                    key={card.title}
                  >
                    <p className="text-xl font-black">{card.title}</p>
                    <p
                      className={`mt-2 text-base leading-7 ${
                        card.featured ? "font-semibold text-marine" : "text-slate-600"
                      }`}
                    >
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-5 mt-6 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-lg font-black leading-7 text-marine shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(245,158,11,0.2)] sm:mx-7 lg:mx-8">
                The goal is simple: move the conversation from ordinary
                hydration to purposeful, hydrogen-rich hydration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
