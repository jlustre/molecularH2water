import {
  CloudSun,
  Dumbbell,
  Factory,
  Moon,
  ShieldAlert,
  Sun,
  Utensils,
  Wine,
  type LucideIcon,
} from "lucide-react";
import cellularwearImage from "../../assets/images/cellularwear.png";
import dnaStressImage from "../../assets/images/dnastress.png";
import focusandhormonesImage from "../../assets/images/focusandhormones.png";
import inflammationloadImage from "../../assets/images/inflammationload.png";
import mitochondrialDragImage from "../../assets/images/mitochondrialdrag.png";
import proteinandcollagenImage from "../../assets/images/proteinandcollagen.png";

type AgingPart = {
  icon?: LucideIcon;
  imageSrc?: string;
  title: string;
  text: string;
};

type ContributorPart = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const accelerationParts: AgingPart[] = [
  {
    imageSrc: dnaStressImage,
    title: "DNA Stress",
    text: "Cellular instructions may become more vulnerable when oxidative pressure builds over time.",
  },
  {
    imageSrc: mitochondrialDragImage,
    title: "Mitochondrial Drag",
    text: "Energy systems can feel strained, which may show up as fatigue and lower daily vitality.",
  },
  {
    imageSrc: cellularwearImage,
    title: "Cellular Wear",
    text: "Cells may lose efficiency when daily stressors outpace the body's balancing systems.",
  },
  {
    imageSrc: inflammationloadImage,
    title: "Inflammation Load",
    text: "Ongoing lifestyle pressure may contribute to discomfort, slower recovery, and feeling older.",
  },
  {
    imageSrc: proteinandcollagenImage,
    title: "Protein & Collagen",
    text: "Oxidative stress is often discussed alongside skin, tissue, and structural wellness.",
  },
  {
    imageSrc: focusandhormonesImage,
    title: "Focus & Hormones",
    text: "Modern stress can influence how people feel, think, recover, and regulate energy.",
  },
];

const contributors: ContributorPart[] = [
  {
    icon: Factory,
    title: "Pollution & Toxins",
    text: "Environmental exposure",
  },
  { icon: Sun, title: "UV Radiation", text: "Sun and skin stress" },
  { icon: Utensils, title: "Unhealthy Diet", text: "Processed food load" },
  { icon: ShieldAlert, title: "Chronic Stress", text: "Daily pressure" },
  { icon: Moon, title: "Lack of Sleep", text: "Recovery debt" },
  { icon: Dumbbell, title: "Overtraining", text: "Too much strain" },
  { icon: CloudSun, title: "Smoking", text: "Oxidative burden" },
  { icon: Wine, title: "Alcohol", text: "Lifestyle stressor" },
];

const visibleSigns = [
  "Wrinkles & fine lines",
  "Sagging skin",
  "Age spots",
  "Thinning hair",
  "Weak muscles",
  "Low energy",
  "Poor memory",
  "Weaker immunity",
  "Slower recovery",
];

export function HiddenDriverSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(37,99,235,0.28),transparent_30%),linear-gradient(135deg,#020617_0%,#062b38_46%,#0f5e78_100%)] shadow-clean">
          <div className="relative px-5 py-10 sm:px-8 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-cyan-300/30" />
            <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
            <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[.28em] text-cyan-300">
                  Oxidative Stress
                </p>
                <h2 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                  The <span className="text-cyan-300">Hidden Driver</span> of Aging
                </h2>
                <div className="mt-7 rounded-[2rem] border border-cyan-300/30 bg-white/10 p-5 shadow-lift backdrop-blur">
                  <p className="text-xl font-black leading-8 text-white sm:text-2xl">
                    As we age, oxidative stress may damage cells, proteins, and
                    DNA. This can contribute to visible signs of aging and a
                    decline in overall wellness.
                  </p>
                </div>
              </div>

              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="grid min-h-72 place-items-center rounded-[2rem] bg-gradient-to-b from-cyan-100 to-white p-6 text-center text-marine">
                  <div>
                    <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-marine text-3xl font-black text-white shadow-clean">
                      H2
                    </div>
                    <p className="mt-5 text-2xl font-black">
                      Cellular Aging Awareness
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Oxidative stress is often discussed alongside visible
                      aging, cellular pressure, energy changes, and slower
                      recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 grid gap-8 xl:grid-cols-[1fr_.42fr]">
              <div>
                <SectionLabel>
                  How Oxidative Stress Accelerates Aging
                </SectionLabel>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {accelerationParts.map((part) => (
                    <InfoPartCard key={part.title} part={part} />
                  ))}
                </div>

                <div className="mt-8 rounded-[2rem] border border-cyan-300/25 bg-white/8 p-5">
                  <SectionLabel>
                    Major Contributors to Oxidative Stress
                  </SectionLabel>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {contributors.map((part) => (
                      <div
                        className="rounded-2xl border border-white/10 bg-white/10 p-4"
                        key={part.title}
                      >
                        <part.icon className="h-6 w-6 text-cyan-300" />
                        <p className="mt-3 font-black text-white">
                          {part.title}
                        </p>
                        <p className="mt-1 text-sm text-cyan-50/70">
                          {part.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-cyan-300/25 bg-white/8 p-5">
                <SectionLabel>Visible Signs of Aging</SectionLabel>
                <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  {visibleSigns.map((sign) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/10 p-4"
                      key={sign}
                    >
                      <div className="mb-3 h-20 rounded-xl bg-gradient-to-br from-cyan-100 via-white to-lagoon/30" />
                      <p className="text-sm font-black text-white">{sign}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="relative mt-8 grid gap-6 lg:grid-cols-[1fr_.55fr] lg:items-center">
              <div className="rounded-[2rem] border border-cyan-300/30 bg-white/10 p-6 shadow-lift backdrop-blur">
                <p className="text-2xl font-black leading-9 text-white">
                  Reducing oxidative stress may help slow the aging process,
                  protect your cells, and support the way you look, feel, and
                  recover.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-300/50 bg-cyan-300/15 text-4xl font-black text-cyan-300">
                  H2
                </div>
                <p className="mt-4 text-3xl font-black tracking-wide text-white">
                  H2 SYSTEMS
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[.25em] text-cyan-100">
                  Endless Energy | Cellular Renewal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="rounded-full border border-cyan-300/30 bg-slate-950/60 px-5 py-2 text-center text-sm font-black uppercase tracking-[.18em] text-white shadow-lift sm:text-base">
      {children}
    </p>
  );
}

function InfoPartCard({ part }: { part: AgingPart }) {
  return (
    <article className="rounded-[1.75rem] border border-cyan-200/20 bg-gradient-to-b from-cyan-100/30 via-lagoon/15 to-slate-950/80 p-5 text-center shadow-lift backdrop-blur">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-cyan-100/40 bg-gradient-to-b from-white/70 to-slate-950/60 sm:h-20 sm:w-20">
        {part.imageSrc ? (
          <img
            alt=""
            className="block h-full w-full max-w-full rounded-full border border-cyan-300/80 object-cover shadow-[0_0_28px_rgba(56,189,248,0.45)]"
            decoding="async"
            loading="lazy"
            src={part.imageSrc}
          />
        ) : (
          part.icon && <part.icon className="h-9 w-9 text-cyan-300" />
        )}
      </div>
      <h3 className="mt-4 text-sm font-black uppercase tracking-wide text-cyan-300">
        {part.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-cyan-50/80">{part.text}</p>
    </article>
  );
}
