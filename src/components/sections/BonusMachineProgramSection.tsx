
import {
  CalendarCheck,
  Gift,
  Mail,
  Phone,
  Send,
  Target,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import bonusMachineImage from "../../assets/images/bonusmachine.jpg";
import contactImage from "../../assets/images/contact_us.jpg";
import { ProspectCaptureForm } from "../forms/ProspectCaptureForm";

export function BonusMachineProgramSection() {
  const [bonusModalOpen, setBonusModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fffbea_50%,#ffffff_100%)] py-24"
      id="bonus-machine-program"
    >
      <div className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-amber-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* Image and cards on the left */}
          <div>
            <div className="overflow-hidden rounded-[2.25rem] border border-amber-200 bg-white shadow-clean">
              <figure>
                <img
                  alt="Bonus Machine"
                  className="h-auto w-full object-contain object-center"
                  src={bonusMachineImage}
                />
              </figure>
            </div>
            {/* 3 Cards Below Image */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Keep</span>
                </div>
                <p className="mt-3 font-black text-marine">You Can Keep It</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Use your bonus machine at home, at work, or as a backup for your family’s hydration needs.</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Sell</span>
                </div>
                <p className="mt-3 font-black text-marine">You Can Sell It</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Turn your bonus machine into extra income by selling it to someone who wants to start their own wellness journey.</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Gift</span>
                </div>
                <p className="mt-3 font-black text-marine">Give to Your Loved Ones</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Share the gift of better hydration and wellness with family or friends who matter most to you.</p>
              </div>
            </div>
          </div>

          {/* Main Content on the right */}
          <div>
            <p className="inline-flex rounded-full border border-amber-200/35 bg-white/85 px-5 py-2 text-sm font-black uppercase tracking-[.26em] text-amber-600 shadow-sm">
              Bonus Machine Program
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
              Unlock Extra Rewards With The Bonus Machine Program
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Take your Hydration Specialist journey to the next level! The Bonus Machine Program offers you the chance to earn an additional machine through special incentives and performance milestones. Whether you’re just starting or already building momentum, this program is designed to reward your dedication and growth.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                className="inline-flex items-center justify-center rounded-full border-2 border-amber-200 bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-marine shadow-[0_8px_18px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-50"
                onClick={() => setBonusModalOpen(true)}
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {bonusModalOpen ? (
        <BonusMachineConversationModal onClose={() => setBonusModalOpen(false)} />
      ) : null}
    </section>
  );
}

function BonusMachineConversationModal({ onClose }: { onClose: () => void }) {
  const bonusSteps = [
    {
      icon: Gift,
      text: "Learn how the Bonus Machine Program works and what milestones or incentives may apply.",
      title: "Understand The Program",
    },
    {
      icon: Target,
      text: "Talk through your goals so the conversation can focus on the path that fits you best.",
      title: "Match Your Goals",
    },
    {
      icon: Users,
      text: "Get clear next steps for becoming active, staying supported, and sharing the opportunity.",
      title: "Plan The Next Step",
    },
  ];

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/75 px-4 pb-6 pt-24 backdrop-blur-sm sm:px-6 sm:pt-28"
      role="dialog"
    >
      <div className="flex min-h-full items-center justify-center">
        <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-cyan-100 bg-white shadow-[0_35px_120px_rgba(2,8,23,0.32)] sm:rounded-[3rem]">
          <button
            aria-label="Close bonus machine conversation form"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/90 text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-marine p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.24),transparent_30%),radial-gradient(circle_at_90%_75%,rgba(17,138,178,0.36),transparent_36%),linear-gradient(135deg,#031822_0%,#073B4C_54%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative">
                <p className="inline-flex rounded-full border border-amber-200/45 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-amber-200 backdrop-blur">
                  Bonus Machine Program
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  Schedule A Bonus Program Conversation
                </h2>
                <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                  Ask how the program works, what it takes to qualify, and how
                  the extra machine can support your home, business, or referral
                  goals.
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)]">
                  <p className="text-sm font-black uppercase tracking-[.2em] text-amber-700">
                    Conversation Purpose
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    Learn if the bonus path is right for you.
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">
                    Use this session to understand qualification, support,
                    timelines, and how the program can create extra value.
                  </p>
                </div>

                <div className="mt-7 grid gap-4">
                  {bonusSteps.map((step) => (
                    <BonusStepCard key={step.title} step={step} />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems about the Bonus Machine Program"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <ProspectCaptureForm
                description="Share your contact details and someone can schedule a conversation about the Bonus Machine Program."
                formContext="bonus-machine-program"
                interestOptions={[
                  {
                    label: "Learn about the Bonus Machine Program",
                    value: "Learn about the Bonus Machine Program",
                  },
                  {
                    label: "How to qualify for the bonus machine",
                    value: "How to qualify for the bonus machine",
                  },
                  {
                    label: "How to use the bonus machine for business",
                    value: "How to use the bonus machine for business",
                  },
                  {
                    label: "How to share the program with others",
                    value: "How to share the program with others",
                  },
                ]}
                messagePlaceholder="What would you like to know?"
                showPreferredTime
                source="website"
                submitLabel="Send Bonus Program Request"
                title="Request Bonus Program Info"
                trackingSource="bonus-machine-program"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-[1.18fr_0.82fr]">
                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="mailto:info@molecularh2water.com?subject=Bonus%20Machine%20Program%20Conversation"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="mt-3 break-words text-sm font-black text-marine">
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
                  <p className="mt-3 break-words text-sm font-black text-marine">
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

function BonusStepCard({
  step,
}: {
  step: { icon: LucideIcon; text: string; title: string };
}) {
  const Icon = step.icon;

  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
      <div className="flex gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200/20 text-amber-200">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-black">{step.title}</h3>
          <p className="mt-1 text-sm font-semibold leading-6 text-cyan-50/78">
            {step.text}
          </p>
        </div>
      </div>
    </article>
  );
}
