import { useState } from "react";
import { navItems } from "../../data/siteContent";
import { BrandMark } from "../ui/BrandMark";

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
    `mobile-menu-link block rounded-xl px-4 py-2 transition ${
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

  return (
    <>
      {/* <div className="hidden bg-marine px-4 py-2 text-center text-sm font-semibold text-white sm:block">
        Educational wellness website template - replace placeholders with your
        approved videos, studies, machine photos, and documents.
      </div> */}

      <header
        className="sticky top-0 border-b border-slate-100 bg-white/95 backdrop-blur-xl"
        style={{ zIndex: 10000 }}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
        >
          <a aria-label="H2Systems Home" href="#home">
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
                      className={`absolute left-0 top-full z-50 min-w-[220px] pt-2 ${
                        openDropdown === "foundations"
                          ? "block"
                          : "hidden group-hover:block group-focus-within:block"
                      }`}
                    >
                      <div className="rounded-xl border border-amber-200 bg-amber-50 py-2 shadow-lg">
                        <a href="#problem" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Problem</a>
                        <a href="#enemy" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Enemy</a>
                        <a href="#hero" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Hero</a>
                        <a href="#ultimate-antioxidant" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>Ultimate Antioxidant</a>
                        <a href="#solution" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Solution</a>
                        <a href="#alkaline-vs-h2" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>Alkaline V/S MolecularH2</a>
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
                      className={`absolute left-0 top-full z-50 min-w-[220px] pt-2 ${
                        openDropdown === "technology"
                          ? "block"
                          : "hidden group-hover:block group-focus-within:block"
                      }`}
                    >
                      <div className="rounded-xl border border-amber-200 bg-amber-50 py-2 shadow-lg">
                        <a href="#how-it-works" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>How Does It Work</a>
                        <a href="#ionizer-vs-h2" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>Ionizer Vs H2 Water Machine</a>
                        <a href="#inside" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Inside</a>
                        <a href="#specs" className="block px-5 py-2 text-base text-slate-700 hover:bg-amber-100" onClick={() => setOpenDropdown(null)}>The Specs</a>
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
            href="#cta"
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
                        <a href="#problem" className={mobileSubItemClass("mobile-problem")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-problem")}>The Problem</a>
                        <a href="#enemy" className={mobileSubItemClass("mobile-enemy")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-enemy")}>The Enemy</a>
                        <a href="#hero" className={mobileSubItemClass("mobile-hero")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-hero")}>The Hero</a>
                        <a href="#ultimate-antioxidant" className={mobileSubItemClass("mobile-ultimate-antioxidant")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-ultimate-antioxidant")}>Ultimate Antioxidant</a>
                        <a href="#solution" className={mobileSubItemClass("mobile-solution")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-solution")}>The Solution</a>
                        <a href="#alkaline-vs-h2" className={mobileSubItemClass("mobile-alkaline-vs-h2")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-alkaline-vs-h2")}>Alkaline V/S MolecularH2</a>
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
                        <a href="#how-it-works" className={mobileSubItemClass("mobile-how-it-works")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-how-it-works")}>How Does It Work</a>
                        <a href="#ionizer-vs-h2" className={mobileSubItemClass("mobile-ionizer-vs-h2")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-ionizer-vs-h2")}>Ionizer Vs H2 Water Machine</a>
                        <a href="#inside" className={mobileSubItemClass("mobile-inside")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-inside")}>The Inside</a>
                        <a href="#specs" className={mobileSubItemClass("mobile-specs")} onClick={() => setMobileOpen(false)} {...mobileInteractionProps("mobile-specs")}>The Specs</a>
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
                href="#cta"
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
