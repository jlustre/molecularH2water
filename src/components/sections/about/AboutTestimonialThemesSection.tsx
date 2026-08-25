import {
  Activity,
  Brain,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "../../ui/BrandMark";
import { CtaButton } from "../../ui/CtaButton";

type ThemeCard = {
  icon: LucideIcon;
  text: string;
  title: string;
};

const themeCards: ThemeCard[] = [
  {
    icon: Zap,
    text: "Users describe feeling more energized through demanding activity, night shifts, and everyday routines.",
    title: "Energy",
  },
  {
    icon: Brain,
    text: "Stories often mention clearer thinking, stronger focus, and being more present without relying on stimulants.",
    title: "Mental Clarity",
  },
  {
    icon: Activity,
    text: "Athletes, coaches, and active users talk about bouncing back faster after hard training and tough workouts.",
    title: "Workout Recovery",
  },
  {
    icon: Droplets,
    text: "Hydrogen water becomes a daily hydration habit around training, work, and regular family routines.",
    title: "Hydration",
  },
  {
    icon: HeartPulse,
    text: "These experiences sit inside a broader daily wellness conversation, not a one-time product claim.",
    title: "Daily Wellness",
  },
];

export function AboutTestimonialThemesSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-24"
      id="common-themes"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-96 w-96 rounded-full bg-lagoon/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-lagoon/20 bg-white px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-lagoon shadow-sm">
            Common Themes
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-marine sm:text-5xl">
            Energy, Clarity, Recovery, And Daily Hydration
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Across sports, coaching, cycling, and night-shift work, hydrogen
            water users keep coming back to the same everyday experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {themeCards.map((card) => (
            <article
              className="rounded-[1.75rem] border border-cyan-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-clean"
              key={card.title}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lagoon/10 text-lagoon">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-black text-marine">
                {card.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-cyan-100 bg-white shadow-clean">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-10">
            <div className="rounded-[1.75rem] border border-amber-200/80 bg-amber-50 p-6 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.14)]">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black">Educational Disclaimer</h3>
                  <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
                    Individual experiences may vary. These statements describe
                    personal experiences and are not intended to diagnose, treat,
                    cure or prevent any disease.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col items-center gap-4 lg:items-end">
                <BrandMark subtitle="Endless Energy. Cellular Renewal." />
                <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                  Endless Energy • Cellular Renewal
                </p>
                <CtaButton href="/about#schedule-water-awareness-show">
                  Schedule A Water Awareness Show
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
