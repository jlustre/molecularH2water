import {
  ArrowUpRight,
  CalendarCheck,
  Cpu,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "../ui/BrandMark";

type FooterLink = {
  href: string;
  label: string;
};

type FooterGroup = {
  icon: LucideIcon;
  links: FooterLink[];
  title: string;
};

const footerGroups: FooterGroup[] = [
  {
    icon: ShieldCheck,
    title: "Foundations",
    links: [
      { href: "/#problem", label: "Problem" },
      { href: "/#enemy", label: "Free Radicals" },
      { href: "/#hero", label: "Antioxidants" },
      { href: "/#ultimate-antioxidant", label: "Ultimate Antioxidant" },
      { href: "/#how-to-get-h2", label: "Types Of Water" },
      { href: "/#solution", label: "Solution" },
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    links: [
      { href: "/technology#hydrogen-water-machine", label: "H2 Machine" },
      { href: "/technology#how-it-works", label: "How It Works" },
      { href: "/technology#machine-features", label: "Features" },
      { href: "/technology#programs-protocols", label: "Programs" },
      { href: "/technology#ionizer-vs-h2", label: "Ionizer Vs H2" },
      { href: "/technology#scientific-experiments", label: "Experiments" },
    ],
  },
  {
    icon: Users,
    title: "About",
    links: [
      { href: "/about#who-we-are", label: "Who We Are" },
      { href: "/about#faq", label: "FAQs" },
      { href: "/about#contact", label: "Contact" },
      { href: "/about#hydration-specialist", label: "Hydration Specialist" },
      { href: "/about#wellness-advocate", label: "Wellness Advocate" },
    ],
  },
  {
    icon: Sparkles,
    title: "Resources",
    links: [
      {
        href: "/resources#recommended-by-experts",
        label: "Recommended By Experts",
      },
      { href: "/resources#life-changing-impact", label: "Life Changing Impact" },
      {
        href: "/resources#inflammation-reduction",
        label: "Inflammation Reduction",
      },
      { href: "/resources#athletic-recovery", label: "Athletic Recovery" },
      { href: "/resources#brain-health-support", label: "Brain Health Support" },
      { href: "/resources#bonus-machine-program", label: "Bonus Machine Program" },
    ],
  },
];

const quickContacts = [
  {
    href: "mailto:info@example.com",
    icon: Mail,
    label: "info@example.com",
  },
  {
    href: "tel:0000000000",
    icon: Phone,
    label: "(000) 000-0000",
  },
  {
    href: "/about#schedule-water-awareness-show",
    icon: CalendarCheck,
    label: "Schedule A Show",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_15%,rgba(6,214,160,0.16),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(17,138,178,0.22),transparent_32%),linear-gradient(135deg,#031822_0%,#073B4C_48%,#071b26_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_2.15fr] lg:items-start">
          <div>
            <BrandMark inverted subtitle="Hydrogen Water Education" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-cyan-50/76">
              Molecular hydrogen water education for families learning about
              hydration quality, oxidative stress, antioxidants, and daily
              wellness routines.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lagoon to-aqua px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(6,214,160,0.2)] transition hover:-translate-y-0.5"
                href="/about#schedule-water-awareness-show"
              >
                Schedule A Show
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-white/8 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/14"
                href="/technology#hydrogen-water-machine"
              >
                Explore Machine
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <group.icon className="h-4.5 w-4.5 text-aqua" />
                    <h3 className="text-sm font-black uppercase tracking-[.14em] text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-2.5 grid gap-1">
                    {group.links.map((link) => (
                    <a
                      className="block w-full text-sm font-semibold leading-6 text-cyan-50/68 transition hover:translate-x-0.5 hover:text-[#bef264] focus-visible:text-[#bef264] focus-visible:outline-none"
                      href={link.href}
                      key={link.href}
                    >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {quickContacts.map((item) => (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-sm font-bold text-cyan-50/82 transition hover:border-aqua/40 hover:bg-white/14 hover:text-white"
                  href={item.href}
                  key={item.label}
                >
                  <item.icon className="h-4 w-4 text-aqua" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-cyan-50/68">
            Educational content only. Not medical advice. Not intended to
            diagnose, treat, cure, or prevent disease. Results vary.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-cyan-50/52 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 H2Systems. All rights reserved.</p>
          <p>Endless Energy. Cellular Renewal. Better Hydration Awareness.</p>
        </div>
      </div>
    </footer>
  );
}
