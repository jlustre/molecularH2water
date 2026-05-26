import { useState } from "react";
import {
  Award,
  BookOpenCheck,
  ChevronDown,
  CheckCircle2,
  Droplets,
  Gift,
  Globe2,
  HandHeart,
  Home,
  Mail,
  MapPin,
  Phone,
  Quote,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import edwinExplainingImage from "../../../dist/assets/edwinexplaining.jpg";
import { faqs } from "../../data/siteContent";
import { RichText } from "../elements/RichText";
import { PageLayout } from "../layout/PageLayout";

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

const presentationObjectives = [
  {
    title: "Learn",
    text: "Understand the life-changing wellness conversation around molecular hydrogen, cellular hydration, oxidative stress, and why water quality deserves attention.",
    icon: BookOpenCheck,
  },
  {
    title: "Share",
    text: "Bring this education to family and friends in a simple, positive way, so more people can ask better questions about the water they use every day.",
    icon: Share2,
  },
  {
    title: "Encourage",
    text: "Help interested families explore becoming happy owners of a hydrogen water machine when the timing is right for their home and wellness goals.",
    icon: Home,
  },
];

const specialistItems = [
  "Guide families through common drinking-water choices.",
  "Explain why dissolved molecular hydrogen is different from pH-focused water.",
  "Help guests understand the machine, the story, and the daily routine.",
  "Keep the conversation simple, respectful, and education-centered.",
];

const advocateItems = [
  "Invite friends, families, and communities to learn together.",
  "Share approved education materials and presentation resources.",
  "Support conversations around hydration, vitality, and wellness habits.",
  "Create a bridge between curiosity and a clear Water Awareness Show.",
];

const scheduleSteps = [
  {
    title: "Choose A Time",
    text: "Pick a time for a personal conversation, family presentation, or small group Water Awareness Show.",
  },
  {
    title: "Learn The Story",
    text: "Walk through oxidative stress, antioxidants, drinking-water choices, and molecular H2 water in a clear sequence.",
  },
  {
    title: "Ask Questions",
    text: "Discuss the technology, daily routine, machine features, and next steps without pressure or exaggerated claims.",
  },
];

export function AboutPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <PageLayout>
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
                  Helping Families Discover Better Hydration Through Molecular H2
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50/85">
                  We represent H2S, Happy Hydration Systems, a company dedicated
                  to helping people understand how something as simple as water
                  can become part of a stronger daily wellness story.
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
                          <p className="mt-2 leading-7 text-cyan-50/82">
                            {card.text}
                          </p>
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
                        <h3 className="text-xl font-black">
                          Health Starts At The Cellular Level
                        </h3>
                        <p className="mt-2 leading-7 text-slate-700">
                          More people are realizing that daily wellness begins
                          deeper than symptoms. Cellular hydration, oxidative
                          stress awareness, and water quality are becoming part
                          of a bigger shift in how families think about health.
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
                            <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                              {card.title}
                            </h3>
                          </div>
                          <p className="mt-4 text-lg leading-8 text-cyan-50/86">
                            {card.text}
                          </p>
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
                        <h3 className="text-2xl font-black">
                          A Bigger Wellness Shift
                        </h3>
                        <p className="mt-3 leading-7 text-slate-700">
                          Water is no longer just about thirst. It is part of the
                          conversation around energy, recovery, cellular function,
                          and the daily choices that help people feel and function
                          better over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[2.25rem] border border-cyan-200/25 bg-slate-950/35 shadow-[0_24px_70px_rgba(2,8,23,0.22)] backdrop-blur">
                <div className="grid gap-0 lg:grid-cols-[1fr_.42fr]">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                          3 Objectives Today
                        </p>
                        <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                          Learn, Share, And Help More Homes Experience Better Hydration
                        </h3>
                      </div>
                      <div className="rounded-full border border-aqua/40 bg-aqua/15 px-4 py-2 text-sm font-black text-aqua">
                        Water Awareness Show
                      </div>
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      {presentationObjectives.map((objective) => (
                        <div
                          className="group rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-white transition hover:-translate-y-1 hover:border-aqua/50 hover:bg-white/15"
                          key={objective.title}
                        >
                          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-marine shadow-[0_12px_35px_rgba(6,214,160,0.28)] transition group-hover:scale-105">
                            <objective.icon className="h-6 w-6" />
                          </div>
                          <h4 className="mt-4 text-2xl font-black text-amber-300">
                            {objective.title}
                          </h4>
                          <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50/82">
                            {objective.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.5rem] border border-amber-200/65 bg-amber-50 p-5 text-marine shadow-[0_16px_40px_rgba(251,191,36,0.18)] transition hover:-translate-y-1 hover:shadow-clean">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
                          <Gift className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black">
                            Share The Education, Grow The Community
                          </h4>
                          <p className="mt-1 leading-7 text-slate-700">
                            Guests can also learn how referral conversations may
                            help more families discover the presentation and earn
                            helpful home wellness rewards, such as shower filter
                            promotions when available.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-lagoon via-marine to-slate-950">
                    <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_35%_20%,rgba(255,255,255,.55)_1px,transparent_2px),radial-gradient(circle_at_75%_60%,rgba(6,214,160,.35)_1px,transparent_2px)] [background-size:28px_28px,42px_42px]" />
                    <div className="absolute -right-20 top-8 h-56 w-56 rounded-full border border-cyan-200/35 bg-cyan-200/10 blur-sm" />
                    <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6">
                      <div className="mx-auto mb-5 grid h-44 w-32 place-items-center rounded-b-[2.5rem] rounded-t-xl border border-cyan-100/70 bg-white/15 shadow-[0_24px_70px_rgba(6,214,160,0.22)] backdrop-blur">
                        <Droplets className="h-16 w-16 text-aqua" />
                      </div>
                      <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 text-center text-white backdrop-blur">
                        <p className="text-2xl font-black">
                          Better Water Starts With Better Awareness
                        </p>
                        <p className="mt-2 text-sm leading-6 text-cyan-50/82">
                          The goal is not pressure. The goal is a clear
                          conversation families can understand and share.
                        </p>
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
                    With that foundation in mind, the next question becomes
                    personal: why does hydration quality matter, and what could
                    molecular hydrogen mean for your everyday wellness routine?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-pearl via-ice to-white py-24" id="faq">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-aqua/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-lagoon/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[.28em] text-lagoon">
              FAQs
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-marine sm:text-6xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="overflow-hidden rounded-[2.25rem] bg-marine text-white shadow-clean lg:min-h-[1080px]">
              <div className="relative">
                <img
                  alt="Hydrogen water educator explaining FAQ topics"
                  className="h-80 w-full object-cover sm:h-[440px] lg:h-[740px]"
                  src={edwinExplainingImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-2 pt-28 sm:px-7 sm:pb-3 sm:pt-32">
                  <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    Hydrogen Water Questions, Answered Clearly
                  </h2>
                </div>
              </div>

              <div className="p-6 pt-4 sm:p-7 sm:pt-5">
                <p className="text-base leading-7 text-cyan-50/84 sm:text-lg">
                  These answers explain molecular hydrogen, timing, safety,
                  concentration, and machine education in plain language for
                  presentation guests and families.
                </p>
                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                  <p className="font-black text-white">Simple, responsible answers</p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/74">
                    Tap any question to expand the answer. The language stays
                    educational, practical, and easy to share during a Water
                    Awareness conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`overflow-hidden rounded-[1.5rem] border transition ${
                      isOpen
                        ? "border-lagoon/35 bg-white shadow-clean"
                        : "border-cyan-100 bg-white/80 shadow-sm hover:-translate-y-0.5 hover:border-lagoon/25 hover:bg-white hover:shadow-clean"
                    }`}
                    key={faq.question}
                  >
                    <button
                      className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      onClick={() =>
                        setOpenFaq((current) => (current === index ? -1 : index))
                      }
                      type="button"
                    >
                      <span className="flex min-w-0 items-start gap-4">
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-black ${
                            isOpen
                              ? "bg-marine text-aqua"
                              : "bg-ice text-lagoon"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base font-black leading-6 text-marine sm:text-lg">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${
                          isOpen
                            ? "bg-aqua text-marine"
                            : "bg-ice text-marine"
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`}
                          strokeWidth={2.5}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-cyan-100 bg-gradient-to-b from-white to-ice/60 px-5 pb-6 pt-5 sm:px-6">
                        <RichText
                          className="text-base leading-8 text-slate-700 [&_p+_p]:mt-4"
                          html={faq.answer}
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[2.5rem] bg-marine p-8 text-white shadow-clean lg:p-10">
              <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                Contact US
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Have Questions? Start A Conversation.
              </h2>
              <p className="mt-6 text-lg leading-8 text-cyan-50/85">
                Reach out to request more information, schedule a Water Awareness
                Show, ask about becoming a Hydration Specialist, or learn how to
                share the wellness education story responsibly.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  { icon: Mail, label: "info@example.com" },
                  { icon: Phone, label: "(000) 000-0000" },
                  { icon: MapPin, label: "Your City, State" },
                ].map((item) => (
                  <div className="flex items-center gap-4" key={item.label}>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-aqua">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="font-bold text-cyan-50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-cyan-100 bg-ice p-6 shadow-clean">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100"
                  placeholder="Name"
                />
                <input
                  className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100"
                  placeholder="Email"
                />
                <input
                  className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100 sm:col-span-2"
                  placeholder="Phone"
                />
                <textarea
                  className="min-h-40 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100 sm:col-span-2"
                  placeholder="What would you like to learn more about?"
                />
                <a
                  className="rounded-full bg-marine px-7 py-4 text-center font-black text-white shadow-clean transition hover:-translate-y-0.5 hover:bg-lagoon sm:col-span-2"
                  href="mailto:info@example.com"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-24" id="hydration-specialist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RoleSection
            eyebrow="Become A Hydration Specialist"
            icon={Droplets}
            items={specialistItems}
            title="Help Families Understand Better Hydration Choices"
          >
            A Hydration Specialist helps people compare ordinary water choices,
            understand the role of dissolved molecular hydrogen, and connect the
            machine story to a simple daily hydration routine.
          </RoleSection>
        </div>
      </section>

      <section className="bg-white py-24" id="wellness-advocate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RoleSection
            eyebrow="Become A Wellness Advocate"
            icon={HandHeart}
            imageSide="right"
            items={advocateItems}
            title="Share A Responsible Wellness Education Message"
          >
            A Wellness Advocate introduces others to the Water Awareness
            conversation, supports education-first presentations, and helps people
            explore hydration, oxidative stress awareness, and molecular H2 water
            with confidence.
          </RoleSection>
        </div>
      </section>

      <section className="mesh-bg py-24" id="schedule-water-awareness-show">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[3rem] bg-marine shadow-clean">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="p-8 text-white lg:p-12">
                <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                  Schedule/Attend Water Awareness Show
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                  Learn The Water Story In One Clear Presentation
                </h2>
                <p className="mt-6 text-lg leading-8 text-cyan-50/85">
                  A Water Awareness Show is a simple, guided way to understand
                  why water quality matters, how oxidative stress fits into the
                  wellness conversation, and what makes molecular hydrogen water
                  different from ordinary hydration choices.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    className="rounded-full bg-teal-600 px-8 py-4 text-center font-black text-marine shadow-xl transition hover:-translate-y-0.5"
                    href="mailto:info@example.com"
                  >
                    Request A Show
                  </a>
                  <a
                    className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    href="/technology#hydrogen-water-machine"
                  >
                    View Technology
                  </a>
                </div>
              </div>

              <div className="grid gap-4 bg-gradient-to-br from-lagoon to-aqua p-6 lg:p-8">
                {scheduleSteps.map((step, index) => (
                  <div
                    className="rounded-[1.5rem] bg-white/90 p-6 text-marine shadow-sm backdrop-blur"
                    key={step.title}
                  >
                    <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function RoleSection({
  children,
  eyebrow,
  icon: Icon,
  imageSide = "left",
  items,
  title,
}: {
  children: string;
  eyebrow: string;
  icon: LucideIcon;
  imageSide?: "left" | "right";
  items: string[];
  title: string;
}) {
  const visual = (
    <div className="rounded-[2.5rem] bg-marine p-8 text-white shadow-clean">
      <div className="grid min-h-80 place-items-center rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
        <div>
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] bg-aqua text-marine shadow-clean">
            <Icon className="h-12 w-12" />
          </div>
          <p className="mt-6 text-3xl font-black">{eyebrow}</p>
          <p className="mt-3 text-cyan-50/80">
            Education, connection, and responsible wellness conversations.
          </p>
        </div>
      </div>
    </div>
  );

  const copy = (
    <div>
      <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-marine sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{children}</p>
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <div
            className="flex gap-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-sm"
            key={item}
          >
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-lagoon" />
            <p className="font-semibold leading-7 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {imageSide === "left" ? visual : copy}
      {imageSide === "left" ? copy : visual}
    </div>
  );
}
