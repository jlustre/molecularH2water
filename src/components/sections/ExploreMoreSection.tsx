import {
  CalendarCheck,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import contactImage from "../../assets/images/contact_us.jpg";
import exploreMoreImage from "../../../dist/assets/exploremore.jpg";
import yourGuideImage from "../../../dist/assets/yourguide.png";
import { ProspectCaptureForm } from "../forms/ProspectCaptureForm";

export function ExploreMoreSection() {
  const [conversationModalOpen, setConversationModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-white py-20 text-slate-800 sm:py-24"
      id="explore-more"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-aqua/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-lagoon/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-lagoon/20 bg-cyan-50 px-5 py-2 text-sm font-black uppercase tracking-[.25em] text-lagoon shadow-sm">
            Explore More
          </p>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl">
            Your Guide To Hydrogen Success
          </h2>
        </div>

        <div className="mt-12 grid gap-8">
          <figure className="relative overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
            <button
              className="absolute right-4 top-4 z-10 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-300 px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-slate-950 shadow-[0_18px_46px_rgba(251,191,36,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 sm:right-6 sm:top-6 sm:px-6 sm:py-3.5"
              onClick={() => setConversationModalOpen(true)}
              type="button"
            >
              <CalendarCheck className="h-4 w-4" />
              Schedule Conversation
            </button>
            <img
              alt="Explore more hydrogen water education"
              className="h-auto w-full object-contain object-center"
              src={exploreMoreImage}
            />
          </figure>

          <figure className="overflow-hidden rounded-[2rem] border border-cyan-200/80 bg-white shadow-clean">
            <img
              alt="Your guide to learning more about hydrogen water"
              className="h-auto w-full object-contain object-center"
              src={yourGuideImage}
            />
          </figure>
        </div>
      </div>

      {conversationModalOpen ? (
        <HydrationConversationModal
          onClose={() => setConversationModalOpen(false)}
        />
      ) : null}
    </section>
  );
}

function HydrationConversationModal({ onClose }: { onClose: () => void }) {
  const conversationSteps = [
    {
      icon: MessageCircle,
      text: "Ask questions about hydrogen water, the business path, and whether the conversation makes sense for your goals.",
      title: "Share Your Interest",
    },
    {
      icon: CalendarCheck,
      text: "Pick a time for a simple Hydration Conversation with someone who can guide the next step.",
      title: "Choose A Time",
    },
    {
      icon: Users,
      text: "Invite a spouse, family member, or friend if they should be part of the decision.",
      title: "Bring The Right People",
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
            aria-label="Close hydration conversation form"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/90 text-marine shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-marine p-6 text-white sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(6,214,160,0.24),transparent_30%),radial-gradient(circle_at_90%_75%,rgba(17,138,178,0.36),transparent_36%),linear-gradient(135deg,#031822_0%,#073B4C_54%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative">
                <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-aqua backdrop-blur">
                  Hydration Conversation
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  Schedule A Clear Next Step
                </h2>
                <p className="mt-5 text-lg leading-8 text-cyan-50/82">
                  A Hydration Conversation is a friendly, low-pressure way to
                  learn more about H2Systems, the machine, the business
                  opportunity, and the best next step for you.
                </p>

                <div className="mt-8 rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)]">
                  <p className="text-sm font-black uppercase tracking-[.2em] text-lagoon">
                    What To Expect
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    Questions, clarity, and direction.
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">
                    Use the conversation to understand the health education,
                    machine value, rewards, and referral opportunities.
                  </p>
                </div>

                <div className="mt-7 grid gap-4">
                  {conversationSteps.map((step) => (
                    <ConversationStepCard key={step.title} step={step} />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <figure className="mb-6 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-marine p-1.5 shadow-[0_18px_50px_rgba(7,59,76,0.16)] sm:rounded-[2rem]">
                <img
                  alt="Contact H2Systems to schedule a hydration conversation"
                  className="h-auto w-full rounded-[1.15rem] object-contain sm:rounded-[1.6rem]"
                  src={contactImage}
                />
              </figure>

              <ProspectCaptureForm
                description="Share your contact details and someone can help schedule a Hydration Conversation."
                formContext="explore-more-conversation"
                interestOptions={[
                  {
                    label: "Schedule a Hydration Conversation",
                    value: "Schedule a Hydration Conversation",
                  },
                  {
                    label: "Learn about the H2S business",
                    value: "Learn about the H2S business",
                  },
                  {
                    label: "Learn about the hydrogen machine",
                    value: "Learn about the hydrogen machine",
                  },
                  {
                    label: "Invite family or friends to join",
                    value: "Invite family or friends to join",
                  },
                ]}
                messagePlaceholder="What would you like to discuss?"
                showPreferredTime
                source="website"
                submitLabel="Send Schedule Request"
                title="Request A Conversation"
                trackingSource="explore-more"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-[1.18fr_0.82fr]">
                <a
                  className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
                  href="mailto:info@molecularh2water.com?subject=Schedule%20A%20Hydration%20Conversation"
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

function ConversationStepCard({
  step,
}: {
  step: { icon: LucideIcon; text: string; title: string };
}) {
  const Icon = step.icon;

  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
      <div className="flex gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aqua/15 text-aqua">
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
