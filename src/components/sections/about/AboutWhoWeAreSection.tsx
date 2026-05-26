import { Droplets, Award, TrendingUp, Sparkles, Globe2, Quote, HandHeart, Home, Users } from "lucide-react";

const beliefCards = [
  {
    title: "H2S - Happy Hydration Systems",
    text: "We represent a wellness education company focused on helping people improve everyday health through something simple, familiar, and powerful: better hydration.",
    icon: Droplets,
  },
  {
    title: "30+ Years In Wellness",
    text: "Our team brings more than three decades of health and wellness experience, with over $100 million in global sales across the industry.",
    icon: Award,
  },
  {
    title: "Built On Trust Over Time",
    text: "That kind of track record reflects consistency, education, relationships, and a long-term commitment to real people and practical wellness conversations.",
    icon: TrendingUp,
  },
];

const missionVisionCards = [
  {
    title: "Our Mission",
    text: "To help improve lives through hydrogen education, better hydration awareness, and a clear pathway for families to understand molecular H2 water.",
    icon: HandHeart,
  },
  {
    title: "Our Vision",
    text: "To see homes across the U.S. benefit from molecular hydrogen as part of everyday wellness, one informed household at a time.",
    icon: Home,
  },
];

export function AboutWhoWeAreSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-24"
      id="who-we-are"
    >
      <div className="pointer-events-none absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-lagoon/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-marine shadow-clean">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(6,214,160,0.18),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(17,138,178,0.28),transparent_32%),linear-gradient(135deg,#062b38_0%,#073B4C_48%,#0a5f7a_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-aqua backdrop-blur">
                Who We Are
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                We are a team of dedicated professionals committed to educating & supporting people on their journey to their best life ever!
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/85">
                We represent H2S, Happy Hydration Systems, a company dedicated to helping people understand how something as simple as water can become part of a stronger daily wellness story.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
              <div className="grid gap-5">
                {beliefCards.map((card) => (
                  <div
                    className="group rounded-[1.75rem] border border-cyan-200/20 bg-white/10 p-6 text-white shadow-[0_18px_50px_rgba(2,8,23,0.18)] backdrop-blur transition hover:-translate-y-1 hover:border-aqua/50 hover:bg-white/15"
                    key={card.title}
                  >
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/15 text-aqua transition group-hover:scale-105">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black">{card.title}</h3>
                        <p className="mt-2 leading-7 text-cyan-50/82">{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-6 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition hover:-translate-y-1 hover:shadow-clean">
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200/75 text-marine">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black">Health Starts At The Cellular Level</h3>
                      <p className="mt-2 leading-7 text-slate-700">
                        More people are realizing that daily wellness begins deeper than symptoms. Cellular hydration, oxidative stress awareness, and water quality are becoming part of a bigger shift in how families think about health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {missionVisionCards.map((card) => (
                  <div
                    className="relative flex-1 overflow-hidden rounded-[2rem] border border-cyan-200/35 bg-white/10 p-7 text-white shadow-[0_24px_65px_rgba(2,8,23,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-aqua/60 hover:bg-white/15"
                    key={card.title}
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-aqua/20 blur-3xl" />
                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[1.35rem] border border-aqua/40 bg-aqua/15 text-aqua">
                        <card.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-start gap-3">
                          <Quote className="mt-1 h-9 w-9 shrink-0 text-aqua/80" />
                          <h3 className="text-3xl font-black tracking-tight sm:text-4xl">{card.title}</h3>
                        </div>
                        <p className="mt-4 text-lg leading-8 text-cyan-50/86">{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-[2rem] border border-white/15 bg-white p-7 text-marine shadow-clean">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[1.35rem] bg-marine text-aqua">
                      <Globe2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">A Bigger Wellness Shift</h3>
                      <p className="mt-3 leading-7 text-slate-700">
                        Water is no longer just about thirst. It is part of the conversation around energy, recovery, cellular function, and the daily choices that help people feel and function better over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[2.25rem] border border-cyan-200/25 bg-slate-950/35 shadow-[0_24px_70px_rgba(2,8,23,0.22)] backdrop-blur">
              <div className="grid gap-0 lg:grid-cols-[1fr_.42fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">3 Objectives Today</p>
                      <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Learn, Share, And Help More Homes Experience Better Hydration</h3>
                    </div>
                    <div className="rounded-full border border-aqua/40 bg-aqua/15 px-4 py-2 text-sm font-black text-aqua">Water Awareness Show</div>
                  </div>

                  {/* Presentation objectives and community card will be modularized in another section */}
                </div>
                <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-lagoon via-marine to-slate-950">
                  <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_35%_20%,rgba(255,255,255,.55)_1px,transparent_2px),radial-gradient(circle_at_75%_60%,rgba(6,214,160,.35)_1px,transparent_2px)] [background-size:28px_28px,42px_42px]" />
                  <div className="absolute -right-20 top-8 h-56 w-56 rounded-full border border-cyan-200/35 bg-cyan-200/10 blur-sm" />
                  <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6">
                    <div className="mx-auto mb-5 grid h-44 w-32 place-items-center rounded-b-[2.5rem] rounded-t-xl border border-cyan-100/70 bg-white/15 shadow-[0_24px_70px_rgba(6,214,160,0.22)] backdrop-blur">
                      <Droplets className="h-16 w-16 text-aqua" />
                    </div>
                    <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 text-center text-white backdrop-blur">
                      <p className="text-2xl font-black">Better Water Starts With Better Awareness</p>
                      <p className="mt-2 text-sm leading-6 text-cyan-50/82">The goal is not pressure. The goal is a clear conversation families can understand and share.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-cyan-200/25 bg-white/10 p-6 text-center text-white backdrop-blur">
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-[auto_1fr] sm:items-center sm:text-left">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-marine sm:mx-0">
                  <Users className="h-7 w-7" />
                </div>
                <p className="text-xl font-black leading-8">
                  With that foundation in mind, the next question becomes personal: why does hydration quality matter, and what could molecular hydrogen mean for your everyday wellness routine?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
