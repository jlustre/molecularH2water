import { solutionCards } from "../../data/siteContent";

export function BenefitsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] bg-gradient-to-br from-marine via-slateblue to-lagoon p-8 text-white shadow-clean lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                The Solution
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Molecular Hydrogen Water as a Daily Wellness Conversation
              </h2>
              <p className="mt-6 text-lg leading-8 text-cyan-50/85">
                Hydrogen-rich water is designed to deliver dissolved molecular
                hydrogen into drinking water. The message is simple: educate
                families, support hydration routines, and keep claims responsible.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {solutionCards.map((card) => (
                <div
                  className={`rounded-[2rem] p-6 backdrop-blur ${
                    card.featured
                      ? "bg-aqua text-marine shadow-lift"
                      : "bg-white/12 text-white"
                  }`}
                  key={card.title}
                >
                  <p
                    className={`text-2xl font-black ${
                      card.featured ? "text-marine" : "text-white"
                    }`}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      card.featured ? "text-marine" : "text-cyan-50/80"
                    }`}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
