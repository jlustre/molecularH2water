import { problemCards } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

export function ConversationSection() {
  return (
    <section className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <SectionHeading
            description="Many families are asking why they feel tired, inflamed, stressed, or older than expected. Oxidative stress and lifestyle pressure give people a practical starting point for a responsible wellness conversation."
            eyebrow="Problem Awareness"
            title="People Feel the Symptoms Before They Understand the Stressors"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {problemCards.map((card) => (
              <div className="rounded-[2rem] bg-white p-7 shadow-sm" key={card.title}>
                <div className="mb-5 text-sm font-black uppercase tracking-[.18em] text-lagoon">
                  {card.icon}
                </div>
                <h3 className="text-xl font-black text-marine">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
