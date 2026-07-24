import {
  CalendarCheck,
  CircleHelp,
  MonitorPlay,
  PlayCircle,
  Send,
  Sparkles,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import contactImage from "../../../assets/images/contact_us.jpg";
import h2PresentationImage from "../../../assets/images/h2presentation.jpg";
import { ProspectCaptureForm } from "../../forms/ProspectCaptureForm";
import { ContactQuickLinks } from "../../site/ContactQuickLinks";

const scheduleSteps = [
  {
    title: "Choose A Time",
    text: "Pick a time for a personal conversation, family presentation, Zoom overview, or small group Water Awareness Show.",
    icon: CalendarCheck,
  },
  {
    title: "Learn The Story",
    text: "Walk through water quality, oxidative stress, antioxidants, molecular hydrogen, and why H2 water is different.",
    icon: MonitorPlay,
  },
  {
    title: "Ask Questions",
    text: "Discuss the technology, daily routine, machine features, and next steps in a relaxed education-first setting.",
    icon: CircleHelp,
  },
];

const waterAwarenessVideoEmbedUrl =
  "https://www.youtube.com/embed/a5j54zUWs_c?autoplay=1&rel=0";

export function AboutScheduleShowSection() {
  const [attendModalOpen, setAttendModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-24"
      id="schedule-water-awareness-show"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-lagoon/14 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-lagoon/20 bg-white px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-lagoon shadow-sm">
            Schedule/Attend Water Awareness Show
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
            Learn The Water Story In One Clear Presentation
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-700">
            A Water Awareness Show gives families a simple, guided way to
            understand why water quality matters and how molecular hydrogen fits
            into everyday wellness.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[3rem] border border-cyan-100 bg-white shadow-clean">
          <div className="grid lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative overflow-hidden bg-marine">
              <img
                alt="H2Systems water awareness presentation"
                className="h-auto w-full object-contain"
                src={h2PresentationImage}
              />
              <div className="border-t border-cyan-200/15 bg-marine p-6 text-white sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-aqua/40 bg-aqua/15 text-aqua">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">
                      A warm, simple presentation for families and guests.
                    </h3>
                    <p className="mt-2 leading-7 text-cyan-50/82">
                      The goal is clarity, not pressure. Guests are guided
                      through the water story in a way that feels simple,
                      respectful, and easy to understand. They can learn how
                      oxidative stress, antioxidants, hydration, and molecular
                      hydrogen connect, see how the technology works, ask real
                      questions, and then decide what next step makes sense for
                      their own home, family, and wellness goals.
                    </p>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                      <button
                        className="group inline-flex flex-1 items-center justify-center rounded-full border-2 border-amber-100 bg-amber-300 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_16px_38px_rgba(251,191,36,0.28)] transition hover:-translate-y-0.5 hover:bg-white hover:text-marine"
                        onClick={() => setVideoOpen(true)}
                        type="button"
                      >
                        <PlayCircle className="mr-2 h-5 w-5" />
                        <span>Watch Video</span>
                      </button>
                      <button
                        className="group inline-flex flex-1 items-center justify-center rounded-full border-2 border-marine bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-white hover:text-marine"
                        onClick={() => setAttendModalOpen(true)}
                        type="button"
                      >
                        <CalendarCheck className="mr-2 h-5 w-5" />
                        <span className="transition-colors duration-200 group-hover:text-marine">Attend A Live Presentation</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(6,214,160,0.14),transparent_30%),radial-gradient(circle_at_20%_88%,rgba(17,138,178,0.12),transparent_34%)]" />
              <div className="relative">
                <div className="rounded-[2rem] border border-amber-200/80 bg-amber-50 p-6 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-clean">
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">
                        A simple invitation can start a powerful conversation.
                      </h3>
                      <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
                        Invite someone you care about to learn how hydration,
                        oxidative stress, antioxidants, and molecular hydrogen
                        connect in one easy-to-follow presentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {scheduleSteps.map((step, index) => (
                    <ScheduleStepCard
                      index={index}
                      key={step.title}
                      step={step}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen ? (
        <WaterAwarenessVideoModal onClose={() => setVideoOpen(false)} />
      ) : null}

      {attendModalOpen ? (
        <AttendLiveShowModal onClose={() => setAttendModalOpen(false)} />
      ) : null}
    </section>
  );
}

function ScheduleStepCard({
  index,
  step,
}: {
  index: number;
  step: { icon: LucideIcon; text: string; title: string };
}) {
  const Icon = step.icon;

  return (
    <article className="group rounded-[1.55rem] border border-cyan-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lagoon/35 hover:bg-ice hover:shadow-clean">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-lagoon transition group-hover:bg-marine group-hover:text-aqua">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
            Step {index + 1}
          </p>
          <h3 className="mt-1 text-xl font-black text-marine">{step.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            {step.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function WaterAwarenessVideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[40000] overflow-y-auto bg-slate-950/90 px-4 py-8 backdrop-blur-sm sm:px-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-md border border-cyan-200/30 bg-slate-950 shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-marine to-slate-950 px-5 py-4 text-white">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-aqua">
              Water Awareness Show
            </p>
            <h2 className="mt-1 text-xl font-black leading-tight sm:text-2xl">
              Watch The Water Awareness Presentation
            </h2>
          </div>
          <button
            aria-label="Close Water Awareness Show video modal"
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={waterAwarenessVideoEmbedUrl}
            title="Water Awareness Show video"
          />
        </div>
      </div>
    </div>
  );
}

function AttendLiveShowModal({ onClose }: { onClose: () => void }) {
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
                aria-label="Close attend live show modal"
                className="ml-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/22"
                onClick={onClose}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="mt-8 inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua">
                Attend A Live Show
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Schedule Your Water Awareness Seat
              </h2>
              <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                Let us know when you would like to attend, whether you are
                coming alone or inviting guests, and who referred you so the
                right person can follow up.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <CalendarCheck className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Pick A Show Time</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    Share your preferred day or window and we will help confirm
                    the best live option.
                  </p>
                </article>
                <article className="rounded-[1.4rem] border border-cyan-200/18 bg-white/10 p-4 shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
                  <Users className="h-6 w-6 text-aqua" />
                  <h3 className="mt-3 text-lg font-black">Bring Guests</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/76">
                    Tell us if family, friends, or a small group may be joining
                    the presentation.
                  </p>
                </article>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#ecfeff_100%)] p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems to attend a live Water Awareness Show"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <ProspectCaptureForm
                description="Tell us about your schedule, guests, or questions and we will help you attend a live show."
                formContext="water-awareness-show"
                interestOptions={[
                  {
                    label: "Attend a live Water Awareness Show",
                    value: "Attend a live Water Awareness Show",
                  },
                  {
                    label: "Bring a guest",
                    value: "Bring a guest",
                  },
                  {
                    label: "Host a small group",
                    value: "Host a small group",
                  },
                  {
                    label: "Questions before attending",
                    value: "Questions before attending",
                  },
                ]}
                messagePlaceholder="Tell us anything helpful about your schedule, guests, or questions."
                showPreferredTime
                source="website"
                submitLabel="Send Attendance Request"
                title="Attend A Live Water Awareness Show"
                trackingSource="water-awareness-show"
              />

              <ContactQuickLinks emailSubject="Attend A Live Water Awareness Show" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
