import {
  ArrowUpRight,
  CalendarCheck,
  BookOpenCheck,
  Cpu,
  Mail,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { mailtoHref, telHref } from "../../lib/siteSettings";
import { useSiteSettings } from "../site/SiteSettingsProvider";
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

type QuickContact = {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: "teal";
};

type GuideLink = {
  href: string;
  icon?: LucideIcon;
  label: string;
  type: "facebook" | "youtube" | "guide";
};

function FacebookLogo() {
  return (
    <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 36 36">
      <path
        d="M36 18C36 8.0589 27.9411 0 18 0S0 8.0589 0 18c0 8.9856 6.5826 16.4304 15.1875 17.7804V23.2031h-4.5703V18h4.5703v-3.9656c0-4.5117 2.6865-7.0031 6.7992-7.0031 1.9692 0 4.0293.3516 4.0293.3516v4.4297h-2.2698c-2.2365 0-2.9337 1.3887-2.9337 2.8134V18h4.9922l-.798 5.2031h-4.1942v12.5773C29.4174 34.4304 36 26.9856 36 18Z"
        fill="#1877F2"
      />
      <path
        d="m25.0067 23.2031.798-5.2031h-4.9922v-3.374c0-1.4247.6972-2.8134 2.9337-2.8134h2.2698V7.3829s-2.0601-.3516-4.0293-.3516c-4.1127 0-6.7992 2.4914-6.7992 7.0031V18h-4.5703v5.2031h4.5703v12.5773c.9162.1437 1.8558.2196 2.8125.2196s1.8963-.0759 2.8125-.2196V23.2031h4.1942Z"
        fill="#fff"
      />
    </svg>
  );
}

function YouTubeLogo() {
  return (
    <svg aria-hidden="true" className="h-8 w-10" viewBox="0 0 48 34">
      <path
        d="M47.04 5.312A6.008 6.008 0 0 0 42.814 1.06C39.085.055 24.125.055 24.125.055s-14.96 0-18.689 1.006A6.008 6.008 0 0 0 1.21 5.312C.214 9.063.214 16.89.214 16.89s0 7.827.997 11.578a5.918 5.918 0 0 0 4.225 4.185c3.73 1.006 18.69 1.006 18.69 1.006s14.959 0 18.688-1.006a5.918 5.918 0 0 0 4.226-4.185c.997-3.751.997-11.578.997-11.578s0-7.827-.997-11.578Z"
        fill="#FF0000"
      />
      <path d="m19.237 24.002 12.51-7.112-12.51-7.112v14.224Z" fill="#fff" />
    </svg>
  );
}

const footerGroups: FooterGroup[] = [
  {
    icon: ShieldCheck,
    title: "Foundations",
    links: [
      { href: "/#problem", label: "The Problem" },
      { href: "/#enemy", label: "The Enemy" },
      { href: "/#health-impact", label: "The Health Impact" },
      { href: "/#hero", label: "The Hero" },
      { href: "/#ultimate-antioxidant", label: "Ultimate Antioxidant" },
      { href: "/#how-to-get-h2", label: "Types Of Drinking Water" },
      { href: "/#molecular-h2-water", label: "Molecular H2 Water" },
      { href: "/#solution", label: "The Solution" },
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    links: [
      { href: "/technology#how-it-works", label: "How Does It Work" },
      { href: "/technology#machine-features", label: "Machine Features" },
      { href: "/technology#programs-protocols", label: "Programs & Protocols" },
      { href: "/technology#is-it-worth-it", label: "Is It Worth It" },
      {
        href: "/proof-comparison#ionizer-vs-h2",
        label: "Ionizer Vs H2 Machine",
      },
      {
        href: "/proof-comparison#scientific-experiments",
        label: "Scientific Experiments",
      },
      {
        href: "/proof-comparison#other-sources-of-h2",
        label: "Other Sources Of H2",
      },
    ],
  },
  {
    icon: Users,
    title: "About",
    links: [
      { href: "/#home", label: "Homepage" },
      { href: "/about#who-we-are", label: "Who We Are" },
      { href: "/about#faq", label: "FAQ" },
      { href: "/about#contact", label: "Contact US" },
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
        href: "/resources#what-research-show",
        label: "What Research Show",
      },
      { href: "/resources#bonus-machine-program", label: "Bonus Machine Program" },
      { href: "/resources#explore-more", label: "Explore More" },
      { href: "/resources/media/documents", label: "Documents" },
      { href: "/resources/media/videos", label: "Videos" },
      { href: "/resources/media/links", label: "Links" },
    ],
  },
];

export function Footer() {
  const site = useSiteSettings();

  const guideLinks: GuideLink[] = [
    {
      href: site.facebook_url,
      label: "Facebook",
      type: "facebook",
    },
    {
      href: site.youtube_url,
      label: "YouTube",
      type: "youtube",
    },
    {
      href: site.consumers_guide_url,
      icon: BookOpenCheck,
      label: "Consumers Guide",
      type: "guide",
    },
  ];

  const quickContacts: QuickContact[] = [
    {
      href: mailtoHref(site.email),
      icon: Mail,
      label: site.email,
    },
    {
      href: telHref(site.phone_tel),
      icon: Phone,
      label: site.phone,
    },
    {
      href: "/about#schedule-water-awareness-show",
      icon: CalendarCheck,
      label: "Schedule A Show",
    },
    {
      href: "/technology#investment",
      icon: ShoppingCart,
      label: "How To Purchase The Machine",
      variant: "teal",
    },
    {
      href: "/warranty",
      icon: ShieldCheck,
      label: "Register Machine Warranty",
    },
    {
      href: "/installation",
      icon: Wrench,
      label: "Pre-Installation Questionnaire",
    },
  ];

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

            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-[.2em] text-aqua">
                Hydrogen Success Guides
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {guideLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      className="group inline-flex min-w-[82px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-3 text-center text-[0.68rem] font-black uppercase leading-4 tracking-[.08em] text-cyan-50/88 transition hover:-translate-y-0.5 hover:border-aqua/40 hover:bg-white/14 hover:text-white"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm transition group-hover:scale-105 ${
                          link.type === "facebook"
                            ? "bg-[#1877F2]"
                            : link.type === "youtube"
                              ? "bg-[#FF0000]"
                              : "bg-gradient-to-br from-lagoon to-aqua"
                        }`}
                      >
                        {link.type === "facebook" ? (
                          <FacebookLogo />
                        ) : link.type === "youtube" ? (
                          <YouTubeLogo />
                        ) : Icon ? (
                          <Icon className="h-6 w-6" />
                        ) : null}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
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
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                    item.variant === "teal"
                      ? "border border-aqua/40 bg-lagoon text-white shadow-[0_12px_30px_rgba(6,214,160,0.2)] hover:bg-aqua hover:text-marine"
                      : "border border-white/10 bg-white/8 text-cyan-50/82 hover:border-aqua/40 hover:bg-white/14 hover:text-white"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  <item.icon
                    className={`h-4 w-4 ${
                      item.variant === "teal" ? "text-white" : "text-aqua"
                    }`}
                  />
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
          <p>Copyright 2026 {site.company_name}. All rights reserved.</p>
          <p>Endless Energy. Cellular Renewal. Better Hydration Awareness.</p>
        </div>
      </div>
    </footer>
  );
}
