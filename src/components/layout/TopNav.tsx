import { useState } from "react";
import {
  Activity,
  Atom,
  Cpu,
  Droplets,
  Gauge,
  GlassWater,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { navItems } from "../../data/siteContent";
import { BrandMark } from "../ui/BrandMark";

type DropdownLink = {
  href: string;
  icon: LucideIcon;
  key: string;
  label: string;
};

const foundationLinks: DropdownLink[] = [
  { href: "/#problem", icon: Activity, key: "problem", label: "The Problem" },
  { href: "/#enemy", icon: Zap, key: "enemy", label: "The Enemy" },
  { href: "/#hero", icon: ShieldCheck, key: "hero", label: "The Hero" },
  {
    href: "/#ultimate-antioxidant",
    icon: Sparkles,
    key: "ultimate-antioxidant",
    label: "Ultimate Antioxidant",
  },
  {
    href: "/#how-to-get-h2",
    icon: GlassWater,
    key: "how-to-get-h2",
    label: "Types of Drinking Water",
  },
  {
    href: "/#molecular-h2-water",
    icon: Atom,
    key: "molecular-h2-water",
    label: "Molecular H2 Water",
  },
  {
    href: "/#solution",
    icon: HeartPulse,
    key: "solution",
    label: "The Solution",
  },
];

const technologyLinks: DropdownLink[] = [
  {
    href: "/technology#hydrogen-water-machine",
    icon: Droplets,
    key: "hydrogen-water-machine",
    label: "Hydrogen Water Machine",
  },
  {
    href: "/technology#how-it-works",
    icon: Gauge,
    key: "how-it-works",
    label: "How Does It Work",
  },
  {
    href: "/technology#ionizer-vs-h2",
    icon: Waves,
    key: "ionizer-vs-h2",
    label: "Ionizer Vs H2 Water Machine",
  },
  {
    href: "/technology#machine-features",
    icon: Cpu,
    key: "machine-features",
    label: "The Machine Features",
  },
];

function DropdownIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lagoon shadow-sm">
      <Icon className="h-4 w-4" strokeWidth={2.4} />
    </span>
  );
}

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<
    "foundations" | "technology" | null
  >(null);

  const mobileItemClass = (key: string, extra = "") =>
    `mobile-menu-link rounded-2xl px-4 py-3 font-bold transition ${
      activeMobileItem === key
        ? "bg-marine text-white"
        : "text-slate-700"
    } ${extra}`;

  const mobileSubItemClass = (key: string) =>
    `mobile-menu-link flex items-center gap-3 rounded-xl px-4 py-2 transition ${
      activeMobileItem === key
        ? "bg-marine text-white"
        : "text-slate-700"
    }`;

  const mobileHeadingClass = (key: string) =>
    `mobile-menu-heading rounded-2xl px-4 py-3 font-bold transition ${
      activeMobileItem === key
        ? "bg-marine text-white"
        : "text-marine"
    }`;

  const mobileActiveStyle = (key: string) =>
    activeMobileItem === key
      ? { backgroundColor: "#073b4c", color: "#ffffff" }
      : undefined;

  const mobileInteractionProps = (key: string) => ({
    onFocus: () => setActiveMobileItem(key),
    onMouseEnter: () => setActiveMobileItem(key),
    onMouseLeave: () => setActiveMobileItem(null),
    onPointerDown: () => setActiveMobileItem(key),
    onPointerEnter: () => setActiveMobileItem(key),
    style: mobileActiveStyle(key),
  });

  const renderDesktopDropdownLink = (link: DropdownLink) => (
    <a
      className="flex items-center gap-3 whitespace-nowrap px-5 py-2 text-base text-slate-700 transition hover:bg-amber-100 hover:text-marine"
      href={link.href}
      key={link.href}
      onClick={() => setOpenDropdown(null)}
    >
      <DropdownIcon icon={link.icon} />
      <span>{link.label}</span>
    </a>
  );

  const renderMobileDropdownLink = (link: DropdownLink) => {
    const mobileKey = `mobile-${link.key}`;

    return (
      <a
        className={mobileSubItemClass(mobileKey)}
        href={link.href}
        key={link.href}
        onClick={() => setMobileOpen(false)}
        {...mobileInteractionProps(mobileKey)}
      >
        <DropdownIcon icon={link.icon} />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <>
      <header
        className="sticky top-0 border-b border-slate-100 bg-white/95 backdrop-blur-xl"
        style={{ zIndex: 10000 }}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
        >
          <a aria-label="H2Systems Home" href="/#home">
            <BrandMark />
          </a>

          <div className="hidden rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex">
            {navItems.map((item) => {
              if (item.label === "The Foundations") {
                return (
                  <div
                    className="relative group"
                    key={item.href}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenDropdown(null);
                      }
                    }}
                    onMouseEnter={() => setOpenDropdown("foundations")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      aria-expanded={openDropdown === "foundations"}
                      className="flex items-center gap-1 rounded-full px-5 py-2 text-base font-bold text-slate-700 hover:bg-ice hover:text-marine"
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === "foundations" ? null : "foundations",
                        )
                      }
                      onFocus={() => setOpenDropdown("foundations")}
                      type="button"
                    >
                      The Foundations
                      <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-50 min-w-[300px] pt-2 ${
                        openDropdown === "foundations"
                          ? "block"
                          : "hidden group-hover:block group-focus-within:block"
                      }`}
                    >
                      <div className="rounded-xl border border-amber-200 bg-amber-50 py-2 shadow-lg">
                        {foundationLinks.map(renderDesktopDropdownLink)}
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.label === "The Technology") {
                return (
                  <div
                    className="relative group"
                    key={item.href}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenDropdown(null);
                      }
                    }}
                    onMouseEnter={() => setOpenDropdown("technology")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      aria-expanded={openDropdown === "technology"}
                      className="flex items-center gap-1 rounded-full px-5 py-2 text-base font-bold text-slate-700 hover:bg-ice hover:text-marine"
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === "technology" ? null : "technology",
                        )
                      }
                      onFocus={() => setOpenDropdown("technology")}
                      type="button"
                    >
                      The Technology
                      <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-50 min-w-[300px] pt-2 ${
                        openDropdown === "technology"
                          ? "block"
                          : "hidden group-hover:block group-focus-within:block"
                      }`}
                    >
                      <div className="rounded-xl border border-amber-200 bg-amber-50 py-2 shadow-lg">
                        {technologyLinks.map(renderDesktopDropdownLink)}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  className="rounded-full px-5 py-2 text-base font-bold text-slate-700 hover:bg-ice hover:text-marine"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            className="hidden items-center rounded-full border border-cyan-200/70 bg-gradient-to-r from-lagoon via-cyan-500 to-aqua px-6 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(17,138,178,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(6,214,160,0.32)] focus:outline-none focus:ring-4 focus:ring-cyan-200/70 lg:inline-flex"
            href="/#cta"
          >
            Attend Presentation
          </a>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-marine lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            type="button"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

      </header>

      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[65px] h-[calc(100dvh-65px)] overflow-y-scroll overscroll-contain border-t border-amber-200 bg-white px-4 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:top-[73px] sm:h-[calc(100dvh-73px)] sm:px-6 lg:hidden"
          style={{ zIndex: 9999 }}
        >
            <div className="mx-auto grid max-w-7xl gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-3 shadow-lg">
              {navItems.map((item) => {
                if (item.label === "The Foundations") {
                  return (
                    <div key={item.href} className="mb-2">
                      <div
                        className={mobileHeadingClass("mobile-foundations")}
                        {...mobileInteractionProps("mobile-foundations")}
                      >
                        The Foundations
                      </div>
                      <div className="ml-4 mt-1 flex flex-col gap-1 rounded-2xl bg-amber-50 p-2">
                        {foundationLinks.map(renderMobileDropdownLink)}
                      </div>
                    </div>
                  );
                }
                if (item.label === "The Technology") {
                  return (
                    <div key={item.href} className="mb-2">
                      <div
                        className={mobileHeadingClass("mobile-technology")}
                        {...mobileInteractionProps("mobile-technology")}
                      >
                        The Technology
                      </div>
                      <div className="ml-4 mt-1 flex flex-col gap-1 rounded-2xl bg-amber-50 p-2">
                        {technologyLinks.map(renderMobileDropdownLink)}
                      </div>
                    </div>
                  );
                }
                const mobileKey = `mobile-${item.label}`;
                return (
                  <a
                    className={mobileItemClass(mobileKey)}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileOpen(false)}
                    {...mobileInteractionProps(mobileKey)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                className="mt-2 rounded-full border border-cyan-200/70 bg-gradient-to-r from-lagoon via-cyan-500 to-aqua px-5 py-3 text-center font-black text-white shadow-[0_12px_30px_rgba(17,138,178,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(6,214,160,0.32)] focus:outline-none focus:ring-4 focus:ring-cyan-200/70"
                href="/#cta"
                onClick={() => setMobileOpen(false)}
              >
                Attend Presentation
              </a>
            </div>
          </div>
        )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
