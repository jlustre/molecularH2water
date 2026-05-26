import { CalendarClock, HandHeart, Users, Sparkles, Globe2, TrendingUp, Share2, UserCheck } from "lucide-react";
import wellnessAdvocateImage from "../../../assets/images/wellness_advocate.jpg";

const wellnessAdvocateBenefits = [
  {
    title: "Share With People You Care About",
    text: "Introduce family, friends, clients, and associates to a wellness solution centered on better hydration and molecular hydrogen education.",
    icon: Share2,
  },
  {
    title: "Simple Referral Income",
    text: "Earn referral-based income by spreading the word, making warm introductions, and helping interested people connect with the right presentation.",
    icon: TrendingUp,
  },
  {
    title: "No Heavy Business Setup",
    text: "Participate without direct selling, inventory, complicated systems, or intensive training. The role is designed to be simple and approachable.",
    icon: Sparkles,
  },
  {
    title: "Flexible Participation",
    text: "Share as little or as much as you choose. You can make an occasional introduction or become more active as your confidence grows.",
    icon: Globe2,
  },
  {
    title: "Community And Impact",
    text: "Be part of a positive, purpose-driven community focused on health education, personal growth, and helping more homes discover better water.",
    icon: Users,
  },
  {
    title: "A Short Call To Learn More",
    text: "A brief 15-minute Zoom appointment can help you see the full picture and decide whether becoming a Wellness Advocate is a fit for you.",
    icon: UserCheck,
  },
];

export function AboutWellnessAdvocateSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-pearl to-ice py-24" id="wellness-advocate">
      <div className="pointer-events-none absolute left-[-10%] top-24 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] bottom-12 h-96 w-96 rounded-full bg-lagoon/14 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-cyan-200/75 bg-white shadow-clean">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="inline-flex rounded-full border border-lagoon/20 bg-cyan-50 px-4 py-2 text-sm font-black uppercase tracking-[.25em] text-lagoon">Become A Wellness Advocate</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-marine sm:text-5xl">Share Better Hydration With The People You Care About Most</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">A Wellness Advocate helps family, friends, clients, and associates discover the power of hydrogen through simple introductions. It is a flexible way to share a meaningful wellness solution without needing to carry inventory, master a complicated sales process, or commit to intensive training.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {wellnessAdvocateBenefits.map((benefit) => (
                  <article className="group rounded-[1.65rem] border border-cyan-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:bg-ice hover:shadow-clean" key={benefit.title}>
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-lagoon transition duration-300 group-hover:bg-marine group-hover:text-aqua">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black leading-6 text-marine">{benefit.title}</h3>
                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{benefit.text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden bg-marine text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(6,214,160,0.24),transparent_32%),radial-gradient(circle_at_86%_78%,rgba(17,138,178,0.36),transparent_34%),linear-gradient(135deg,#031822_0%,#073B4C_52%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="relative flex h-full min-h-[640px] flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <div className="grid h-16 w-16 place-items-center rounded-[1.4rem] border border-aqua/40 bg-aqua/15 text-aqua shadow-[0_18px_45px_rgba(6,214,160,0.18)]">
                    <HandHeart className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">A Simple Way To Make A Meaningful Introduction</h3>
                  <p className="mt-5 text-lg leading-8 text-cyan-50/84">You do not have to be a presenter, product expert, or salesperson to begin. Your role is to share the story, connect curious people to the education, and let the system support the next conversation.</p>
                </div>
                <div className="my-8 overflow-hidden rounded-[2.25rem] border border-cyan-200/25 bg-white/10 p-2 shadow-[0_24px_70px_rgba(2,8,23,0.24)] backdrop-blur">
                  <img
                    alt="Wellness Advocate sharing hydrogen water education"
                    className="h-auto w-full rounded-[1.85rem] object-contain"
                    src={wellnessAdvocateImage}
                  />
                </div>
                <div className="rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-clean">
                  <p className="text-xl font-black">Ready to learn more?</p>
                  <p className="mt-2 leading-7 text-slate-700">Schedule a brief 15-minute Zoom appointment and see if becoming a Wellness Advocate is a fit for you.</p>
                  <a className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-marine bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-marine shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-marine sm:w-auto" href="mailto:info@example.com?subject=Wellness%20Advocate%2015-Minute%20Zoom">
                    <CalendarClock className="h-5 w-5 group-hover:text-white transition-colors duration-200" />
                    <span className="group-hover:text-white transition-colors duration-200">Schedule 15-Minute Zoom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
