import {
  Award,
  CalendarClock,
  Gift,
  Globe2,
  HandHeart,
  Home,
  Send,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import contactImage from "../../../assets/images/contact_us.jpg";
import { ProspectCaptureForm } from "../../forms/ProspectCaptureForm";
import { ContactQuickLinks } from "../../site/ContactQuickLinks";
import hydrationSpecialistImage from "../../../assets/images/hydrationspecialist.jpg";

const specialistBenefits = [
  {
    title: "Healthier, More Energized Lives",
    text: "Join a growing movement dedicated to helping people understand better hydration and everyday wellness at a practical, family-friendly level.",
    icon: HandHeart,
  },
  {
    title: "Flexible Part-Time Income",
    text: "Earn exceptional part-time income with a schedule that can fit around work, family, ministry, travel, or other commitments.",
    icon: TrendingUp,
  },
  {
    title: "Home-Based Business Benefits",
    text: "Take advantage of the potential tax benefits available to many home-based business owners while building something meaningful from home.",
    icon: Home,
  },
  {
    title: "Free Machine Challenge",
    text: "Qualify for our FREE Machine Challenge and performance-based rewards as you introduce more people to the Water Awareness presentation.",
    icon: Gift,
  },
  {
    title: "Virtual Or Face-To-Face",
    text: "Build your business virtually, face-to-face, or through a blend of Zoom calls, small gatherings, family introductions, and local events.",
    icon: Globe2,
  },
  {
    title: "Training And Mentorship",
    text: "Receive comprehensive support, professional training, ongoing mentorship, recognition, incentives, and a fun purpose-driven culture.",
    icon: Award,
  },
];

export function AboutHydrationSpecialistSection() {
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-24"
      id="hydration-specialist"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-lagoon/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] border border-cyan-200/75 bg-white shadow-clean">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-marine text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(6,214,160,0.24),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(17,138,178,0.32),transparent_34%),linear-gradient(135deg,#031822_0%,#073B4C_50%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative flex h-full min-h-[760px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="inline-flex rounded-full border border-cyan-200/35 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[.24em] text-aqua backdrop-blur">
                    Become A Hydration Specialist
                  </p>
                  <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                    Join A Movement. Change Lives. Grow Your Income.
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-cyan-50/84">
                    Help people discover a smarter way to think about water,
                    energy, and daily wellness while building a flexible
                    opportunity around education, connection, and purpose.
                  </p>
                </div>

                <figure className="my-8 overflow-hidden rounded-[2.25rem] border border-cyan-200/25 bg-white/10 p-3 shadow-[0_24px_70px_rgba(2,8,23,0.24)] backdrop-blur">
                  <img
                    alt="Hydration Specialist opportunity presentation"
                    className="h-auto w-full rounded-[1.85rem] object-contain object-center"
                    src={hydrationSpecialistImage}
                  />
                </figure>

                <div className="rounded-[1.75rem] border border-amber-200/75 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-clean">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
                      <CalendarClock className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">
                        Curious? Let&apos;s schedule a short Zoom call.
                      </h3>
                      <p className="mt-2 leading-7 text-slate-700">
                        If you are at least curious to know more, let&apos;s
                        schedule a short Zoom call and go over the details
                        together.
                      </p>
                    </div>
                  </div>
                  <button
                    className="group mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-marine bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-marine shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-marine sm:w-auto"
                    onClick={() => setZoomModalOpen(true)}
                    type="button"
                  >
                    <CalendarClock className="h-5 w-5 group-hover:text-white transition-colors duration-200" />
                    <span className="group-hover:text-white transition-colors duration-200">Schedule Zoom Call</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="rounded-[2rem] border border-cyan-100 bg-ice p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-marine text-aqua shadow-clean">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
                      Purpose, Income, And Support
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-marine sm:text-4xl">
                      A Wellness Business Built Around Better Conversations
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-slate-700">
                      As a Hydration Specialist, you help people learn why water
                      quality matters, how molecular hydrogen is different, and
                      how a simple daily habit can become part of a healthier,
                      more energized lifestyle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {specialistBenefits.map((benefit) => (
                  <article
                    className="group rounded-[1.6rem] border border-cyan-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:bg-ice hover:shadow-clean"
                    key={benefit.title}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-lagoon transition duration-300 group-hover:bg-marine group-hover:text-aqua">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-xl font-black leading-6 text-marine">
                      {benefit.title}
                    </h4>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                      {benefit.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] bg-marine p-6 text-white shadow-clean">
                <p className="text-sm font-black uppercase tracking-[.22em] text-aqua">
                  What Makes It Work
                </p>
                <h4 className="mt-3 text-2xl font-black">
                  You are supported by training, tools, mentorship, and a culture
                  designed to help you grow.
                </h4>
                <p className="mt-3 leading-7 text-cyan-50/82">
                  You do not have to figure it out alone. The opportunity is
                  designed around clear education, simple conversations, practical
                  support, and recognition for the people who take action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {zoomModalOpen ? (
        <HydrationSpecialistZoomModal
          onClose={() => setZoomModalOpen(false)}
        />
      ) : null}
    </section>
  );
}

function HydrationSpecialistZoomModal({ onClose }: { onClose: () => void }) {
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
                aria-label="Close Hydration Specialist Zoom modal"
                className="ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
                onClick={onClose}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="mt-8 inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua">
                Hydration Specialist
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Schedule A Zoom Call
              </h2>
              <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                Share your preferred time, who referred you, and what you want
                to learn so the right person can walk you through the Hydration
                Specialist opportunity.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <CalendarClock className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Short Zoom Call</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    Get the details in a focused conversation that respects
                    your time.
                  </p>
                </article>
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <UserCheck className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Explore Fit</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    Ask about training, income potential, support, and next
                    steps.
                  </p>
                </article>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#ecfeff_100%)] p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems to schedule a Hydration Specialist Zoom"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <ProspectCaptureForm
                description="Share your details and we can schedule a Hydration Specialist Zoom conversation."
                formContext="hydration-specialist-zoom"
                interestOptions={[
                  {
                    label: "Learn about becoming a Hydration Specialist",
                    value: "Learn about becoming a Hydration Specialist",
                  },
                  {
                    label: "Understand the business opportunity",
                    value: "Understand the business opportunity",
                  },
                  {
                    label: "Ask about training and mentorship",
                    value: "Ask about training and mentorship",
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
                title="Schedule A Hydration Specialist Zoom"
                trackingSource="hydration-specialist"
              />

              <ContactQuickLinks emailSubject="Hydration Specialist Zoom Call" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
