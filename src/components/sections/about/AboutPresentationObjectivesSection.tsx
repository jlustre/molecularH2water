import { BookOpenCheck, Share2, Home } from "lucide-react";

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

export function AboutPresentationObjectivesSection() {
  return (
    <div className="mt-7 grid gap-4 md:grid-cols-3">
      {presentationObjectives.map((objective) => (
        <div
          className="group rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-white transition hover:-translate-y-1 hover:border-aqua/50 hover:bg-white/15"
          key={objective.title}
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua text-marine shadow-[0_12px_35px_rgba(6,214,160,0.28)] transition group-hover:scale-105">
            <objective.icon className="h-6 w-6" />
          </div>
          <h4 className="mt-4 text-2xl font-black text-amber-300">{objective.title}</h4>
          <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50/82">{objective.text}</p>
        </div>
      ))}
    </div>
  );
}
