import {
  Activity,
  Brain,
  Droplets,
  HeartPulse,
  Quote,
  Zap,
  type LucideIcon,
} from "lucide-react";
import amyLeeImage from "../../../assets/images/testimonials/amy-lee.jpg";
import loriStephensImage from "../../../assets/images/testimonials/lori-stephens.jpg";
import markMessierImage from "../../../assets/images/testimonials/mark-messier.jpg";
import thomasBImage from "../../../assets/images/testimonials/thomas-b.jpg";
import timSImage from "../../../assets/images/testimonials/tim-s.jpg";

type UserTestimonial = {
  id: string;
  image: string;
  name: string;
  quote: string;
  title: string;
};

const userTestimonials: UserTestimonial[] = [
  {
    id: "mark-messier",
    image: markMessierImage,
    name: "Mark Messier",
    quote:
      "I noticed a dramatic difference in my energy, mental clarity and especially my recovery. After demanding activity, I felt like my body bounced back much faster.",
    title: "Retired AHL/NHL",
  },
  {
    id: "tim-s",
    image: timSImage,
    name: "Tim S.",
    quote:
      "I feel like I'm operating at a higher level. I'm more clear-headed, present, productive and focused, and I've noticed better endurance and faster workout recovery without relying on powders or stimulants.",
    title: "10x Ironman & Ultra Marathoner",
  },
  {
    id: "thomas-b",
    image: thomasBImage,
    name: "Thomas B.",
    quote:
      "Adding hydrogen water before and after my workouts has made a noticeable difference in how I recover. Even after a tough leg workout, I feel like I'm able to get moving again much faster.",
    title: "Coach & Bodybuilder",
  },
  {
    id: "amy-lee",
    image: amyLeeImage,
    name: "Amy Lee",
    quote:
      "Hydrogen water has become part of my everyday routine, especially around training. For me, it has been a real game-changer for hydration and recovery.",
    title: "Cyclist",
  },
  {
    id: "lori-stephens",
    image: loriStephensImage,
    name: "Lori Stephens",
    quote:
      "Working hospital night shifts can be demanding. I've found that hydrogen water helps me feel more energized and focused during my shifts without having to depend as much on coffee.",
    title: "Nurse",
  },
];

const themeIcons: LucideIcon[] = [Zap, Brain, Activity, Droplets, HeartPulse];
const commonThemes = [
  "energy",
  "mental clarity",
  "workout recovery",
  "hydration",
  "daily wellness",
];

export function AboutTestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
      id="testimonials"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_90%_12%,rgba(14,165,233,0.18),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(6,214,160,0.12),transparent_32%),linear-gradient(180deg,#000b1a_0%,#031822_42%,#073b4c_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(125,211,252,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-96 w-96 rounded-full border border-aqua/20 bg-aqua/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[140%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.28),transparent_62%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-white/8 px-5 py-2 text-sm font-black uppercase tracking-[.28em] text-aqua backdrop-blur">
            Testimonials
          </p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
            What{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-aqua to-sky-300 bg-clip-text text-transparent">
              Hydrogen Water
            </span>{" "}
            Users Are Saying
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg italic leading-8 text-cyan-100/80 sm:text-xl">
            Real-world experiences shared by hydrogen water users
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-slate-950/45 shadow-[0_28px_90px_rgba(14,165,233,0.16)] backdrop-blur">
          <div className="divide-y divide-cyan-300/20">
            {userTestimonials.map((testimonial) => (
              <TestimonialRow key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm font-black uppercase tracking-[.14em] text-cyan-200/90 sm:gap-3">
          <span className="text-aqua">Common themes</span>
          {commonThemes.map((theme, index) => {
            const Icon = themeIcons[index];

            return (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/6 px-3 py-1.5 text-[0.7rem] tracking-[.12em] text-cyan-50/88"
                key={theme}
              >
                <Icon className="h-3.5 w-3.5 text-aqua" />
                {theme}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialRow({ testimonial }: { testimonial: UserTestimonial }) {
  return (
    <article
      className="grid gap-5 px-5 py-7 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-7 sm:px-8 sm:py-8 lg:px-10"
      id={testimonial.id}
    >
      <img
        alt={`${testimonial.name}, ${testimonial.title}`}
        className="h-24 w-24 rounded-2xl border-2 border-cyan-300/70 object-cover shadow-[0_0_24px_rgba(56,189,248,0.28)] sm:h-28 sm:w-28"
        src={testimonial.image}
      />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-xl font-black text-cyan-300 sm:text-2xl">
            {testimonial.name}
          </h2>
          <p className="text-sm font-bold uppercase tracking-[.16em] text-white/80">
            {testimonial.title}
          </p>
        </div>
        <div className="mt-3 flex gap-3">
          <Quote className="mt-1 h-6 w-6 shrink-0 text-aqua" />
          <p className="text-lg italic leading-8 text-cyan-50/90">
            {testimonial.quote}
          </p>
        </div>
      </div>
    </article>
  );
}
