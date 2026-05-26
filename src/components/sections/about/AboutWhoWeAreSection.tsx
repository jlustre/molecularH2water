import {
  Award,
  Droplets,
  Globe2,
  HandHeart,
  Home,
  Quote,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import whoWeAreImage from "../../../assets/images/whoweare.jpg";

const foundationCards = [
  {
    title: "H2S Happy Hydration Systems",
    text: "We are a team of dedicated professionals committed to educating & supporting people on their journey to their best life ever!",
    icon: Droplets,
  },
  {
    title: "30+ Years in Wellness",
    text: "We bring over three decades of health & wellness experience, achieving more than $100 million in global sales across the industry. Our foundation for growth has always been serving our customers who become our future friends.",
    icon: Award,
  },
  {
    title: "Built on Trust Over Time",
    text: "Our success and growth are founded on values of greatness and principles of faith, family, finances, fun and fulfillment.",
    icon: ShieldCheck,
  },
];

const purposeCards = [
  {
    title: "Mission",
    text: "To Heal the World with Hydrogen...one conversation at a time.",
    icon: HandHeart,
  },
  {
    title: "Vision",
    text: "To have one in three households across the nation using and benefiting from molecular hydrogen by 2030",
    icon: Home,
  },
];

export function AboutWhoWeAreSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-24"
      id="who-we-are"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-1/3 h-96 w-96 rounded-full bg-lagoon/14 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-lagoon/20 bg-white px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-lagoon shadow-sm">
            Who We are
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
            H2S Happy Hydration Systems
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-700">
            We are a team of dedicated professionals committed to educating &
            supporting people on their journey to their best life ever!
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[3rem] border border-cyan-100 bg-white shadow-clean">
          <div className="relative overflow-hidden bg-marine">
            <img
              alt="H2S Happy Hydration Systems team and wellness education"
              className="h-auto w-full object-contain"
              src={whoWeAreImage}
            />
          </div>

          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-marine p-6 text-white sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(6,214,160,0.24),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(17,138,178,0.34),transparent_36%),linear-gradient(135deg,#031822_0%,#073B4C_54%,#0a5f7a_100%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:40px_40px]" />

              <div className="relative flex h-full min-h-[560px] flex-col justify-between gap-8">
                <div>
                  <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                    Mission & Vision
                  </p>
                  <h3 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                    The purpose behind every conversation.
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-cyan-50/84">
                    Our mission and vision give the movement its direction:
                    serve families, teach the hydrogen story, and help more
                    homes discover smarter hydration.
                  </p>
                </div>

                <div className="grid gap-4">
                  {purposeCards.map((card) => (
                    <PurposeCard card={card} key={card.title} />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
                  Our Foundation
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-marine sm:text-4xl">
                  Experience, trust, and service-first values.
                </h3>
              </div>

              <div className="grid gap-5">
                {foundationCards.map((card) => (
                  <FoundationCard card={card} key={card.title} />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-100 bg-gradient-to-b from-white to-ice p-6 sm:p-8 lg:p-10">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-amber-200/80 bg-amber-50 p-6 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-clean">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">
                      Join us on this Epic Journey
                    </h3>
                    <div className="mt-3 space-y-3 text-base font-semibold leading-7 text-slate-700">
                      <p>
                        As global awareness grows, we feel a responsibility to
                        educate, inspire, and share this information with as
                        many families as possible.
                      </p>
                      <p>
                        Join our movement to help people discover a smarter
                        approach to hydration and cellular wellness. This is an
                        opportunity of a lifetime!
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-[2rem] border border-cyan-100 bg-ice p-6 text-marine shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/30 hover:bg-white hover:shadow-clean">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-marine text-aqua">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">
                      A Bigger Wellness Shift
                    </h3>
                    <div className="mt-3 space-y-3 text-base font-semibold leading-7 text-slate-700">
                      <p>
                        The conversation around hydration, cellular wellness,
                        and healthy living is transforming.
                      </p>
                      <p>
                        Molecular hydrogen is no longer a hidden secret in the
                        wellness world.
                      </p>
                      <p>
                        Momentum is building globally as more people discover
                        its potential role in hydration, recovery, and cellular
                        support.
                      </p>
                      <p>
                        Once you see the research and understand the
                        possibilities, you can never look at water the same way
                        again.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoundationCard({
  card,
  isDark = false,
}: {
  card: { icon: LucideIcon; text: string; title: string };
  isDark?: boolean;
}) {
  const Icon = card.icon;

  return (
    <article
      className={`group rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 ${
        isDark
          ? "border border-cyan-200/25 bg-white/10 text-white shadow-[0_18px_50px_rgba(2,8,23,0.2)] backdrop-blur hover:border-aqua/55 hover:bg-white/15"
          : "border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 shadow-sm hover:border-lagoon/45 hover:from-white hover:to-cyan-50 hover:shadow-clean"
      }`}
    >
      <div className="flex gap-4">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition ${
            isDark
              ? "border border-aqua/40 bg-aqua/15 text-aqua group-hover:bg-aqua group-hover:text-marine"
              : "border border-cyan-200 bg-white text-lagoon shadow-sm group-hover:bg-marine group-hover:text-aqua"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3
            className={`text-xl font-black ${
              isDark ? "text-white" : "text-marine"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`mt-2 text-base font-semibold leading-7 ${
              isDark ? "text-cyan-50/84" : "text-slate-700"
            }`}
          >
            {card.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function PurposeCard({
  card,
}: {
  card: { icon: LucideIcon; text: string; title: string };
}) {
  const Icon = card.icon;

  return (
    <article className="rounded-[1.75rem] border border-cyan-200/25 bg-white/10 p-6 text-white shadow-[0_18px_50px_rgba(2,8,23,0.2)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-aqua/55 hover:bg-white/15">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/15 text-aqua">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-aqua" />
            <h3 className="text-2xl font-black">{card.title}</h3>
          </div>
          <p className="mt-3 text-lg font-semibold leading-8 text-cyan-50/86">
            {card.text}
          </p>
        </div>
      </div>
    </article>
  );
}
