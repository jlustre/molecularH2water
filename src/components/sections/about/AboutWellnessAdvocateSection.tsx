import {
  CalendarClock,
  Globe2,
  HandHeart,
  Mail,
  Phone,
  Send,
  Share2,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import contactImage from "../../../assets/images/contact_us.jpg";
import wellnessAdvocateImage from "../../../assets/images/wellness_advocate.jpg";
import { ProspectCaptureForm } from "../../forms/ProspectCaptureForm";

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
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

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
                  <button
                    className="group mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-marine bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-marine shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-marine sm:w-auto"
                    onClick={() => setZoomModalOpen(true)}
                    type="button"
                  >
                    <CalendarClock className="h-5 w-5 group-hover:text-white transition-colors duration-200" />
                    <span className="group-hover:text-white transition-colors duration-200">Schedule 15-Minute Zoom</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {zoomModalOpen ? (
        <WellnessAdvocateZoomModal onClose={() => setZoomModalOpen(false)} />
      ) : null}
    </section>
  );
}

function WellnessAdvocateZoomModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[40000] overflow-y-auto bg-slate-950/72 px-4 py-8 pt-24 backdrop-blur-sm sm:px-6 sm:pt-28"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-200/40 bg-white shadow-[0_35px_120px_rgba(2,6,23,0.42)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[88vh] overflow-y-auto">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="bg-[radial-gradient(circle_at_14%_0%,rgba(6,214,160,0.22),transparent_32%),linear-gradient(135deg,#073B4C_0%,#0B6B7C_52%,#081f2d_100%)] p-6 text-white sm:p-8 lg:p-10">
              <button
                aria-label="Close Wellness Advocate Zoom modal"
                className="ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
                onClick={onClose}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="mt-8 inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua">
                Wellness Advocate
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Schedule A 15-Minute Zoom
              </h2>
              <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                Share your preferred time, who referred you, and what you want
                to learn so the right person can help you explore the Wellness
                Advocate path.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <CalendarClock className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Quick And Simple</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    A short Zoom helps you understand the role without pressure.
                  </p>
                </article>
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <HandHeart className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Share With Purpose</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    Learn how simple introductions can support people you care
                    about.
                  </p>
                </article>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#ecfeff_100%)] p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems to schedule a Wellness Advocate Zoom"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <ProspectCaptureForm
                description="Share your details and we can schedule a 15-minute Wellness Advocate Zoom."
                formContext="wellness-advocate-zoom"
                interestOptions={[
                  {
                    label: "Learn about becoming a Wellness Advocate",
                    value: "Learn about becoming a Wellness Advocate",
                  },
                  {
                    label: "Share with friends or family",
                    value: "Share with friends or family",
                  },
                  {
                    label: "Understand referral income",
                    value: "Understand referral income",
                  },
                  {
                    label: "Questions before scheduling",
                    value: "Questions before scheduling",
                  },
                ]}
                messagePlaceholder="Tell us anything helpful before the Zoom."
                showPreferredTime
                source="website"
                submitLabel="Send Zoom Request"
                title="Schedule A Wellness Advocate Zoom"
                trackingSource="wellness-advocate"
              />

              <div className="mt-5 grid gap-3 sm:grid-cols-[1.25fr_.75fr]">
                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="mailto:info@molecularh2water.com?subject=Wellness%20Advocate%2015-Minute%20Zoom"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="mt-2 text-sm font-black text-marine">Email Us</p>
                  <p className="text-xs font-semibold text-slate-500">
                    info@molecularh2water.com
                  </p>
                </a>
                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="tel:0000000000"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                    <Phone className="h-5 w-5" />
                  </span>
                  <p className="mt-2 text-sm font-black text-marine">Call Us</p>
                  <p className="text-xs font-semibold text-slate-500">
                    (000) 000-0000
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
