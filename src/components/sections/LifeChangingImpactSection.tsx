import { useState } from "react";
import {
  Activity,
  Brain,
  HeartPulse,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import athletesImage from "../../../dist/assets/theexperts/athletes.jpg";
import button12StoriesImage from "../../../dist/assets/button12stories.png";

type ImpactStory = {
  accent: string;
  icon: typeof HeartPulse;
  name: string;
  quote: string;
  theme: string;
};

const storyVideoId = "XztRKzdTKZM";

const impactStories: ImpactStory[] = [
  {
    accent: "Better Health",
    icon: HeartPulse,
    name: "James H.",
    quote:
      "Before adding hydrogen water to my routine, my fasting blood glucose typically hovered around 112-115 mg/dL. After about three months of consistent use alongside my usual diet and exercise, my readings were closer to 98-102 mg/dL at my follow-up visit. My blood pressure also shifted from around 138/88 to 126/82.",
    theme: "Metabolic wellness",
  },
  {
    accent: "Mental Clarity",
    icon: Brain,
    name: "Maria L.",
    quote:
      "My mom started drinking hydrogen water daily a few months ago. We noticed she became more mentally present, followed conversations more easily, recalled recent events better, and seemed sharper overall. She even commented that her thoughts felt clearer and less foggy during the day.",
    theme: "Everyday focus",
  },
  {
    accent: "Less Inflammation",
    icon: Activity,
    name: "Elena R.",
    quote:
      "Before using hydrogen water regularly, my weight was 158 lbs, and my inflammation markers were slightly elevated. After about five months, I was down to 147 lbs, and my high-sensitivity CRP improved from 2.8 mg/L to 1.3 mg/L. I felt leaner, less puffy, and more comfortable overall.",
    theme: "Body comfort",
  },
  {
    accent: "Stronger Bounce-Back",
    icon: ShieldCheck,
    name: "Carlos M.",
    quote:
      "I noticed fewer sick days and a quicker bounce-back when I did feel off. For me, the biggest difference was feeling more resilient through the normal stress of work, family, and daily life.",
    theme: "Recovery rhythm",
  },
];

const impactPillars = [
  {
    icon: Users,
    label: "Real People",
    text: "Every journey begins with someone searching for a simple, natural way to feel better, think more clearly, recover faster, and support their everyday wellness and vitality.",
  },
  {
    icon: Sparkles,
    label: "Real Experiences",
    text: "These experiences reflect how consistent hydration habits — combined with proper nutrition, movement, sleep, and healthy lifestyle choices — can significantly improve overall wellness, energy, recovery, and quality of life over time.",
  },
  {
    icon: HeartPulse,
    label: "Real Possibilities",
    text: "Hydrogen-rich water is not presented as a cure or medical treatment. It is an invitation for you to feel how better hydration, cellular support, and healthy lifestyle habits can have a positive impact on your quality of life.",
  },
];

export function LifeChangingImpactSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  const openVideo = () => {
    setVideoLoading(true);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    setVideoLoading(false);
  };

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#effcff_50%,#ffffff_100%)] py-24"
      id="life-changing-impact"
    >
      <div className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-lagoon/20 bg-white/85 px-5 py-2 text-sm font-black uppercase tracking-[.26em] text-lagoon shadow-sm">
              Life Changing Impact
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
              Real-Life Experiences With Hydrogen Water
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Research gives the science credibility, but real stories help
              people understand the human side of the conversation. These
              experiences show how hydrogen water can become part of a daily
              routine alongside better food choices, movement, rest, and
              consistent hydration.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The common thread is simple: people are looking for better energy,
              clearer thinking, improved recovery, and a healthier sense of
              control over how they feel each day.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                aria-label="Open 12 short stories from real people video"
                className="block w-full max-w-md cursor-pointer overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-clean transition hover:-translate-y-1 hover:shadow-lift"
                onClick={openVideo}
                type="button"
              >
                <img
                  alt=""
                  className="h-auto w-full"
                  src={button12StoriesImage}
                />
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.25rem] border border-cyan-200 bg-white shadow-clean">
            <figure>
              <img
                alt="Active adults representing life-changing hydration impact"
                className="h-auto w-full object-contain object-center"
                src={athletesImage}
              />
            </figure>
            <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
              {impactPillars.map((pillar) => (
                <div
                  className="rounded-2xl border border-cyan-100 bg-ice p-4 shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-white hover:shadow-lift"
                  key={pillar.label}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-lagoon/10 text-lagoon">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-black text-marine">{pillar.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {impactStories.map((story) => (
            <article
              className="group rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-clean transition hover:-translate-y-1 hover:border-lagoon/35 hover:shadow-lift"
              key={story.name}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-marine text-aqua transition group-hover:bg-lagoon group-hover:text-white">
                  <story.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[.22em] text-lagoon">
                    {story.accent}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-marine">
                    {story.theme}
                  </h3>
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-ice p-5">
                <Quote className="h-8 w-8 text-lagoon" />
                <p className="mt-3 text-base font-semibold leading-8 text-slate-700">
                  {story.quote}
                </p>
              </div>

              <p className="mt-5 text-right text-xl font-black text-lagoon">
                {story.name}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-amber-300 bg-amber-50 p-6 text-marine shadow-[0_22px_65px_rgba(245,158,11,0.18)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-200 text-marine">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black">
                Individual Results May Vary
              </h3>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-700">
                These real stories are shared as personal wellness experiences, not medical claims or promises. One of the best ways to understand hydrogen-rich water is to learn the foundational science, develop a consistent hydration routine, and observe how your own body responds over time. For some people, the changes may feel subtle at first, while for others they may feel more powerful shifts, depending on individual lifestyle factors, hydration status, and overall biological condition. Give it a try — you drink water every single day, so why not choose the very best hydration possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[20000] overflow-y-auto bg-slate-950/80 px-4 py-8 backdrop-blur-sm sm:py-12"
          onClick={closeVideo}
          role="dialog"
        >
          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-slate-950 shadow-[0_30px_100px_rgba(2,6,23,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[.22em] text-aqua">
                  Life Changing Impact
                </p>
                <h3 className="mt-1 text-xl font-black text-white">
                  12 Short Stories from Real People
                </h3>
              </div>
              <button
                aria-label="Close video"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-marine"
                onClick={closeVideo}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              {videoLoading && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-slate-950">
                  <div className="text-center">
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-300/35 bg-cyan-400/10">
                      <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-200/25 border-t-aqua" />
                    </div>
                    <p className="mt-5 text-sm font-black uppercase tracking-[.22em] text-aqua">
                      Loading Story Video
                    </p>
                    <p className="mt-2 text-sm text-cyan-50/70">
                      Please wait while the video player gets ready.
                    </p>
                  </div>
                </div>
              )}
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                onLoad={() => setVideoLoading(false)}
                src={`https://www.youtube.com/embed/${storyVideoId}?autoplay=1&rel=0`}
                title="12 Short Stories from Real People"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
