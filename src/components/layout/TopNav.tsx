import { useRef, useState } from "react";
import {
  Activity,
  Atom,
  Award,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  Cpu,
  Droplets,
  FileText,
  Gift,
  Gauge,
  GlassWater,
  HandHeart,
  HeartPulse,
  HelpCircle,
  Home,
  Link2,
  Mail,
  Menu,
  Microscope,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Video,
  Waves,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "../ui/BrandMark";

type MenuLink = {
  description: string;
  href: string;
  icon: LucideIcon;
  key: string;
  label: string;
};

type MenuGroup = {
  description: string;
  icon: LucideIcon;
  key: string;
  links: MenuLink[];
  title: string;
};

type MenuPanel = {
  description: string;
  groups: MenuGroup[];
  icon: LucideIcon;
  key: "foundations" | "home" | "resources" | "technology";
  label: string;
  title: string;
};

type LanguageCode = "en" | "es";

type LanguageOption = {
  code: LanguageCode;
  label: string;
  shortLabel: string;
};

let menuAudioContext: AudioContext | null = null;

const languageStorageKey = "h2systems-language";
const languageOptions: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
  },
  {
    code: "es",
    label: "Spanish",
    shortLabel: "ES",
  },
];

const homePanel: MenuPanel = {
  description:
    "Quick access to visitor information, common questions, contact options, and scheduling.",
  icon: Home,
  key: "home",
  label: "About",
  title: "Start Here",
  groups: [
    {
      description: "Essential links for new visitors and presentation guests.",
      icon: Home,
      key: "main-pages",
      title: "Home",
      links: [
        {
          description: "Return to the main homepage experience.",
          href: "/#home",
          icon: Home,
          key: "home",
          label: "Homepage",
        },
        {
          description: "Learn the purpose, story, and mission behind H2Systems.",
          href: "/about#who-we-are",
          icon: Users,
          key: "who-we-are",
          label: "Who We Are",
        },
        {
          description: "Find clear answers to common visitor questions.",
          href: "/about#faq",
          icon: HelpCircle,
          key: "faq",
          label: "FAQ",
        },
        {
          description: "Send a question or request more information.",
          href: "/about#contact",
          icon: Mail,
          key: "contact-us",
          label: "Contact US",
        },
      ],
    },
    {
      description: "Meet the people who explain the water story and schedule time.",
      icon: UserCheck,
      key: "people-scheduling",
      title: "Career and Shows",
      links: [
        {
          description: "Connect with someone trained to explain hydration options.",
          href: "/about#hydration-specialist",
          icon: Droplets,
          key: "hydration-specialist",
          label: "Hydration Specialist",
        },
        {
          description: "Learn how advocates share the wellness education story.",
          href: "/about#wellness-advocate",
          icon: HandHeart,
          key: "wellness-advocate",
          label: "Wellness Advocate",
        },
        {
          description: "Reserve time for a Water Awareness Show or presentation.",
          href: "/about#schedule-water-awareness-show",
          icon: CalendarCheck,
          key: "schedule-water-awareness-show",
          label: "Water Awareness Show",
        },
      ],
    },
  ],
};

const foundationPanel: MenuPanel = {
  description:
    "Understand the problem, the hero, and why molecular hydrogen becomes the next logical step.",
  icon: ShieldCheck,
  key: "foundations",
  label: "Foundations",
  title: "Build the Wellness Story",
  groups: [
    {
      description: "Start with the challenge people already feel.",
      icon: Activity,
      key: "problem-basics",
      title: "Problem Awareness",
      links: [
        {
          description: "The everyday symptoms that start the conversation.",
          href: "/#problem",
          icon: Activity,
          key: "problem",
          label: "The Problem",
        },
        {
          description: "Free radicals as the invisible source of stress.",
          href: "/#enemy",
          icon: Zap,
          key: "enemy",
          label: "The Enemy",
        },
        {
          description: "How oxidative stress may affect cells and wellness.",
          href: "/#health-impact",
          icon: HeartPulse,
          key: "health-impact",
          label: "The Health Impact",
        },
        {
          description: "How antioxidants help the body defend itself.",
          href: "/#hero",
          icon: ShieldCheck,
          key: "hero",
          label: "The Hero",
        },
        {
          description: "Why H2 is different from traditional antioxidants.",
          href: "/#ultimate-antioxidant",
          icon: Sparkles,
          key: "ultimate-antioxidant",
          label: "Ultimate Antioxidant",
        },
      ],
    },
    {
      description: "Move from ordinary water choices to H2 water.",
      icon: GlassWater,
      key: "hydration-path",
      title: "Hydration Path",
      links: [
        {
          description: "Compare tap, bottled, filtered, RO, and alkaline water.",
          href: "/#how-to-get-h2",
          icon: GlassWater,
          key: "how-to-get-h2",
          label: "Types of Drinking Water",
        },
        {
          description: "Explain the upgrade: dissolved molecular hydrogen.",
          href: "/#molecular-h2-water",
          icon: Atom,
          key: "molecular-h2-water",
          label: "Molecular H2 Water",
        },
        {
          description: "Introduce the clean daily water habit families can adopt.",
          href: "/#solution",
          icon: HeartPulse,
          key: "solution",
          label: "The Solution",
        },
      ],
    },
  ],
};

const technologyPanel: MenuPanel = {
  description:
    "Show how the machine works, how it compares, and how the demonstrations make the science visible.",
  icon: Cpu,
  key: "technology",
  label: "Technology",
  title: "Explore the Machine",
  groups: [
    {
      description: "The product and its operating story.",
      icon: Droplets,
      key: "machine-story",
      title: "Machine Overview",
      links: [
        {
          description: "Introduce the molecular hydrogen water machine.",
          href: "/technology#hydrogen-water-machine",
          icon: Droplets,
          key: "hydrogen-water-machine",
          label: "Hydrogen Water Machine",
        },
        {
          description: "Follow water through the system step by step.",
          href: "/technology#how-it-works",
          icon: Gauge,
          key: "how-it-works",
          label: "How Does It Work",
        },
        {
          description: "Highlight daily-use benefits and engineering quality.",
          href: "/technology#machine-features",
          icon: Cpu,
          key: "machine-features",
          label: "Machine Features",
        },
        {
          description: "Review owner rewards, community education, and support.",
          href: "/technology#programs-protocols",
          icon: Gift,
          key: "programs-protocols",
          label: "Programs & Protocols",
        },
        {
          description: "Review the machine investment and long-term value.",
          href: "/technology#investment",
          icon: Award,
          key: "investment",
          label: "Investment",
        },
        {
          description:
            "See how The Machine, H2GO bottle, and HIM inhaler work together.",
          href: "/complimentary-product-ecosystem",
          icon: Link2,
          key: "complimentary-product-ecosystem",
          label: "Complimentary Product Ecosystem",
        },
        {
          description: "Review the value comparison and payoff visuals.",
          href: "/technology#is-it-worth-it",
          icon: Sparkles,
          key: "is-it-worth-it",
          label: "Is It Worth It",
        },
        {
          description: "Register your purchased machine for warranty coverage.",
          href: "/warranty",
          icon: ShieldCheck,
          key: "warranty-registration",
          label: "Warranty Registration",
        },
        {
          description:
            "Share property details so we can prepare delivery and installation.",
          href: "/installation",
          icon: Wrench,
          key: "installation-questionnaire",
          label: "Pre-Installation Questionnaire",
        },
      ],
    },
    {
      description: "Comparison and demonstration tools.",
      icon: Microscope,
      key: "proof-comparison",
      title: "Proof & Comparison",
      links: [
        {
          description: "Compare pH-focused ionizers with H2-focused machines.",
          href: "/proof-comparison#ionizer-vs-h2",
          icon: Waves,
          key: "ionizer-vs-h2",
          label: "Ionizer Vs H2 Machine",
        },
        {
          description: "Show iodine, PPB, ORP, and diffusion demonstrations.",
          href: "/proof-comparison#scientific-experiments",
          icon: Microscope,
          key: "scientific-experiments",
          label: "Scientific Experiments",
        },
        {
          description:
            "Compare other ways people try to get molecular hydrogen.",
          href: "/proof-comparison#other-sources-of-h2",
          icon: Atom,
          key: "other-sources-of-h2",
          label: "Other Sources Of H2",
        },
      ],
    },
  ],
};

const resourcesPanel: MenuPanel = {
  description:
    "Find audience-facing proof points, wellness outcomes, and program information that support the presentation.",
  icon: Sparkles,
  key: "resources",
  label: "Resources",
  title: "Support the Decision",
  groups: [
    {
      description: "Credibility and offer context.",
      icon: Award,
      key: "expert-impact",
      title: "Expert Guidance & Program",
      links: [
        {
          description: "Expert voices and professional recommendations.",
          href: "/resources#recommended-by-experts",
          icon: Award,
          key: "recommended-by-experts",
          label: "Recommended By Experts",
        },
        {
          description: "Stories that explain why the presentation matters.",
          href: "/resources#life-changing-impact",
          icon: Sparkles,
          key: "life-changing-impact",
          label: "Life Changing Impact",
        },
        {
          description: "Research themes around H2 and cellular wellness.",
          href: "/resources#what-research-show",
          icon: Microscope,
          key: "what-research-show",
          label: "What Research Show",
        },
        {
          description: "Program information for machine ownership.",
          href: "/resources#bonus-machine-program",
          icon: Gift,
          key: "bonus-machine-program",
          label: "Bonus Machine Program",
        },
        {
          description: "Additional guide visuals for the next step.",
          href: "/resources#explore-more",
          icon: Sparkles,
          key: "explore-more",
          label: "Explore More",
        },
      ],
    },
    {
      description: "Downloadable and watchable education resources.",
      icon: Video,
      key: "media-resources",
      title: "Media Resources",
      links: [
        {
          description: "PDFs, handouts, forms, and education materials.",
          href: "/resources/media/documents",
          icon: FileText,
          key: "documents",
          label: "Documents",
        },
        {
          description: "Short videos that explain the hydrogen water story.",
          href: "/resources/media/videos",
          icon: Video,
          key: "videos",
          label: "Videos",
        },
        {
          description: "Curated website links for easy sharing.",
          href: "/resources/media/links",
          icon: Link2,
          key: "links",
          label: "Links",
        },
      ],
    },
  ],
};

const menuPanels = [homePanel, foundationPanel, technologyPanel, resourcesPanel];
const mobilePanelStorageKey = "h2systems-open-mobile-panel";
const menuGroupStorageKey = "h2systems-menu-group-state";
const underConstructionResourceKeys = new Set<string>();

function getStoredMobilePanel(): MenuPanel["key"] | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedPanel = window.localStorage.getItem(mobilePanelStorageKey);
    const knownPanel = menuPanels.find((panel) => panel.key === storedPanel);
    return knownPanel?.key ?? null;
  } catch {
    return null;
  }
}

function storeMobilePanel(key: MenuPanel["key"] | null) {
  try {
    if (key) {
      window.localStorage.setItem(mobilePanelStorageKey, key);
      return;
    }

    window.localStorage.removeItem(mobilePanelStorageKey);
  } catch {
    // Local storage can be unavailable in private or restricted browser modes.
  }
}

function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return storedLanguage === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

function storeLanguage(code: LanguageCode) {
  try {
    window.localStorage.setItem(languageStorageKey, code);
    document.documentElement.lang = code;
  } catch {
    // Local storage can be unavailable in private or restricted browser modes.
  }
}

function getStoredMenuGroupState(panelKey: MenuPanel["key"]) {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const storedState = window.localStorage.getItem(menuGroupStorageKey);
    if (!storedState) {
      return {};
    }

    const parsedState = JSON.parse(storedState) as Record<
      string,
      Record<string, boolean>
    >;
    return parsedState[panelKey] ?? {};
  } catch {
    return {};
  }
}

function storeMenuGroupState(
  panelKey: MenuPanel["key"],
  groupKey: string,
  open: boolean,
) {
  try {
    const storedState = window.localStorage.getItem(menuGroupStorageKey);
    const parsedState = storedState
      ? (JSON.parse(storedState) as Record<string, Record<string, boolean>>)
      : {};

    parsedState[panelKey] = {
      ...(parsedState[panelKey] ?? {}),
      [groupKey]: open,
    };

    window.localStorage.setItem(menuGroupStorageKey, JSON.stringify(parsedState));
  } catch {
    // Local storage can be unavailable in private or restricted browser modes.
  }
}

function playMenuClick() {
  const AudioContextConstructor =
    window.AudioContext ||
    (window as Window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextConstructor) {
    return;
  }

  menuAudioContext ??= new AudioContextConstructor();

  if (menuAudioContext.state === "suspended") {
    void menuAudioContext.resume();
  }

  const oscillator = menuAudioContext.createOscillator();
  const gain = menuAudioContext.createGain();
  const now = menuAudioContext.currentTime;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(640, now);
  oscillator.frequency.exponentialRampToValueAtTime(380, now + 0.055);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
  oscillator.connect(gain);
  gain.connect(menuAudioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.075);
}

function MenuIconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-100 bg-white text-lagoon shadow-sm transition group-hover:scale-105 group-hover:text-marine">
      <Icon className="h-5 w-5" strokeWidth={2.4} />
    </span>
  );
}

function DropdownArrow({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-4 w-4 text-current opacity-80 transition duration-200 ${
        open ? "rotate-180" : ""
      }`}
      strokeWidth={2.5}
    />
  );
}

function FlagBadge({ code }: { code: LanguageCode }) {
  if (code === "es") {
    return (
      <span
        aria-label="Mexico flag"
        className="grid h-5 w-7 shrink-0 grid-cols-3 overflow-hidden rounded-[4px] border border-slate-200 shadow-sm"
        role="img"
      >
        <span className="bg-[#006847]" />
        <span className="relative bg-white">
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c09300]" />
        </span>
        <span className="bg-[#ce1126]" />
      </span>
    );
  }

  return (
    <span
      aria-label="United States flag"
      className="relative h-5 w-7 shrink-0 overflow-hidden rounded-[4px] border border-slate-200 bg-[repeating-linear-gradient(to_bottom,#b22234_0_7.69%,#fff_7.69%_15.38%)] shadow-sm"
      role="img"
    >
      <span className="absolute left-0 top-0 h-[54%] w-[45%] bg-[#3c3b6e]" />
    </span>
  );
}

function LanguageSelector({
  fullWidth = false,
}: {
  fullWidth?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>(() =>
    getStoredLanguage(),
  );
  const selectedLanguage =
    languageOptions.find((option) => option.code === language) ??
    languageOptions[0];

  const chooseLanguage = (option: LanguageOption) => {
    playMenuClick();

    if (option.code === "es") {
      window.alert(
        "The Spanish version of this site is still under construction and will be available soon.",
      );
      setLanguage("en");
      storeLanguage("en");
      setOpen(false);
      return;
    }

    setLanguage(option.code);
    storeLanguage(option.code);
    setOpen(false);
  };

  return (
    <div
      className={`relative ${fullWidth ? "w-full" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        aria-expanded={open}
        aria-label="Select language"
        className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-cyan-200/70 bg-white px-4 text-sm font-black text-marine shadow-sm transition hover:-translate-y-0.5 hover:border-aqua hover:bg-ice focus:outline-none focus:ring-4 focus:ring-cyan-200/70 ${
          fullWidth ? "w-full" : ""
        }`}
        onClick={() => {
          playMenuClick();
          setOpen((current) => !current);
        }}
        type="button"
      >
        <FlagBadge code={selectedLanguage.code} />
        <span>{selectedLanguage.shortLabel}</span>
        <DropdownArrow open={open} />
      </button>

      {open && (
        <div
          className={`menu-popover absolute right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-cyan-100 bg-white p-1.5 shadow-[0_18px_55px_rgba(7,59,76,0.18)] ${
            fullWidth ? "left-0 right-0" : "w-44"
          }`}
        >
          {languageOptions.map((option) => (
            <button
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-black transition hover:bg-ice hover:text-lagoon ${
                option.code === language ? "bg-ice text-lagoon" : "text-marine"
              }`}
              key={option.code}
              onClick={() => chooseLanguage(option)}
              type="button"
            >
              <FlagBadge code={option.code} />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<MenuPanel["key"] | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const noticeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openMobilePanel, setOpenMobilePanel] = useState<
    MenuPanel["key"] | null
  >(() => getStoredMobilePanel());

  const closeMenus = () => {
    setOpenPanel(null);
    setMobileOpen(false);
  };

  const toggleMobilePanel = (key: MenuPanel["key"]) => {
    playMenuClick();
    setOpenMobilePanel((current) => {
      const nextPanel = current === key ? null : key;
      storeMobilePanel(nextPanel);
      return nextPanel;
    });
  };

  const showUnderConstructionNotice = (link: MenuLink) => {
    setNotice(
      `${link.label} is still under construction and will be available soon.`,
    );

    if (noticeTimeoutRef.current) {
      window.clearTimeout(noticeTimeoutRef.current);
    }

    noticeTimeoutRef.current = window.setTimeout(() => {
      setNotice(null);
    }, 3600);
  };

  return (
    <>
      <header
        className="sticky top-0 border-b border-cyan-100/80 bg-white/90 shadow-[0_12px_45px_rgba(7,59,76,0.08)] backdrop-blur-2xl"
        style={{ zIndex: 10000 }}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
        >
          <a
            aria-label="H2Systems Home"
            href="/#home"
            onClick={playMenuClick}
            title="Go to Home"
          >
            <BrandMark />
          </a>

          <div className="hidden items-center rounded-full border border-cyan-200/30 bg-marine/95 p-1.5 shadow-[0_12px_35px_rgba(7,59,76,0.22)] lg:flex">
            {menuPanels.map((panel) => (
              <div
                className="relative"
                key={panel.key}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenPanel(null);
                  }
                }}
                onMouseEnter={() => setOpenPanel(panel.key)}
                onMouseLeave={() => setOpenPanel(null)}
              >
                <button
                  aria-expanded={openPanel === panel.key}
                  className={`group flex items-center gap-2 rounded-full px-4 py-2 text-base font-black transition ${
                    openPanel === panel.key
                      ? "bg-white text-marine shadow-[0_12px_30px_rgba(6,214,160,0.18)]"
                      : "text-white hover:bg-white/12 hover:text-aqua"
                  }`}
                  onClick={() => {
                    playMenuClick();
                    setOpenPanel((current) =>
                      current === panel.key ? null : panel.key,
                    );
                  }}
                  onFocus={() => setOpenPanel(panel.key)}
                  type="button"
                >
                  <panel.icon
                    className={`h-4 w-4 ${
                      openPanel === panel.key ? "text-lagoon" : "text-aqua"
                    }`}
                    strokeWidth={2.5}
                  />
                  {panel.label}
                  <DropdownArrow open={openPanel === panel.key} />
                </button>

                <DesktopMegaMenu
                  closeMenus={closeMenus}
                  onUnderConstruction={showUnderConstructionNotice}
                  open={openPanel === panel.key}
                  panel={panel}
                />
              </div>
            ))}
          </div>

          <div className="mx-3 hidden items-center lg:flex">
            <LanguageSelector />
          </div>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-cyan-200 bg-white text-marine shadow-sm transition hover:bg-ice lg:hidden"
            onClick={() => {
              playMenuClick();
              setMobileOpen((current) => !current);
            }}
            type="button"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[65px] h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain border-t border-cyan-100 bg-white/95 px-4 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:top-[73px] sm:h-[calc(100dvh-73px)] sm:px-6 lg:hidden"
          style={{ zIndex: 9999 }}
        >
          <div className="mx-auto grid max-w-3xl gap-3">
            {menuPanels.map((panel) => (
              <MobileMenuPanel
                key={panel.key}
                onLinkClick={closeMenus}
                onUnderConstruction={showUnderConstructionNotice}
                onToggle={() => toggleMobilePanel(panel.key)}
                open={openMobilePanel === panel.key}
                panel={panel}
              />
            ))}

            <div className="mx-3">
              <LanguageSelector fullWidth />
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div
          aria-live="polite"
          className="fixed left-1/2 top-24 z-[22000] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-center font-bold leading-6 text-marine shadow-[0_22px_70px_rgba(7,59,76,0.18)]"
        >
          {notice}
        </div>
      )}
    </>
  );
}

function DesktopMegaMenu({
  closeMenus,
  onUnderConstruction,
  open,
  panel,
}: {
  closeMenus: () => void;
  onUnderConstruction: (link: MenuLink) => void;
  open: boolean;
  panel: MenuPanel;
}) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    getStoredMenuGroupState(panel.key),
  );

  const toggleGroup = (key: string) => {
    playMenuClick();
    setOpenGroups((current) => {
      const nextOpen = !current[key];
      storeMenuGroupState(panel.key, key, nextOpen);
      return {
        ...current,
        [key]: nextOpen,
      };
    });
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className={`menu-popover absolute left-1/2 top-full z-50 pt-3 ${
        panel.key === "resources"
          ? "w-80 -translate-x-[78%]"
          : "w-72 -translate-x-1/2"
      }`}
    >
      <div className="max-h-[min(680px,calc(100dvh-88px))] overflow-y-auto overscroll-contain rounded-2xl border border-cyan-100 bg-white p-2 shadow-[0_22px_70px_rgba(7,59,76,0.16)]">
        <div className="grid gap-1">
          {panel.groups.map((group) => (
            <div className="border-b border-cyan-100/70 last:border-b-0" key={group.key}>
              <button
                aria-expanded={openGroups[group.key] ?? false}
                className="group flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-left text-sm font-black text-marine transition hover:bg-ice hover:text-lagoon active:bg-marine active:text-white"
                onClick={() => toggleGroup(group.key)}
                title={group.title}
                type="button"
              >
                <group.icon
                  className="h-4 w-4 shrink-0 text-lagoon transition group-active:text-aqua"
                  strokeWidth={2.5}
                />
                <span className="min-w-0 flex-1 truncate">{group.title}</span>
                <DropdownArrow open={openGroups[group.key] ?? false} />
              </button>

              {openGroups[group.key] && (
                <div className="menu-popover grid pb-1">
                  {group.links.map((link) => (
                    <DesktopMenuLink
                      closeMenus={closeMenus}
                      key={link.key}
                      link={link}
                      onUnderConstruction={onUnderConstruction}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopMenuLink({
  closeMenus,
  link,
  onUnderConstruction,
}: {
  closeMenus: () => void;
  link: MenuLink;
  onUnderConstruction: (link: MenuLink) => void;
}) {
  return (
    <a
      className="group flex w-full min-w-0 cursor-pointer items-center gap-2 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-ice hover:text-lagoon active:bg-marine active:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
      href={link.href}
      onClick={(event) => {
        playMenuClick();
        if (underConstructionResourceKeys.has(link.key)) {
          event.preventDefault();
          onUnderConstruction(link);
        }
        closeMenus();
      }}
      title={link.label}
    >
      <link.icon
        className="h-4 w-4 shrink-0 text-lagoon transition group-active:text-aqua"
        strokeWidth={2.4}
      />
      <span className="min-w-0 flex-1 truncate">{link.label}</span>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-cyan-700/60 transition group-hover:translate-x-0.5 group-active:text-aqua" />
    </a>
  );
}

function MenuLinkCard({
  closeMenus,
  link,
  onUnderConstruction,
}: {
  closeMenus: () => void;
  link: MenuLink;
  onUnderConstruction: (link: MenuLink) => void;
}) {
  return (
    <a
      className="group flex w-full min-w-0 cursor-pointer items-start gap-3 rounded-2xl border border-transparent px-3 py-3 transition hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-ice hover:shadow-sm active:scale-[0.98] active:bg-marine active:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
      href={link.href}
      onClick={(event) => {
        playMenuClick();
        if (underConstructionResourceKeys.has(link.key)) {
          event.preventDefault();
          onUnderConstruction(link);
        }
        closeMenus();
      }}
    >
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-50 text-lagoon transition group-hover:bg-marine group-hover:text-aqua">
        <link.icon className="h-4.5 w-4.5" strokeWidth={2.5} />
      </span>
      <span className="block min-w-0 flex-1">
        <span className="flex min-w-0 items-center gap-2 font-black leading-5 text-marine transition group-active:text-white">
          {link.label}
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-lagoon transition group-hover:translate-x-0.5" />
        </span>
        <span className="mt-1 block text-xs leading-5 text-slate-500 transition group-active:text-cyan-50">
          {link.description}
        </span>
      </span>
    </a>
  );
}

function MobileMenuPanel({
  onLinkClick,
  onUnderConstruction,
  onToggle,
  open,
  panel,
}: {
  onLinkClick: () => void;
  onUnderConstruction: (link: MenuLink) => void;
  onToggle: () => void;
  open: boolean;
  panel: MenuPanel;
}) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    getStoredMenuGroupState(panel.key),
  );

  const toggleGroup = (key: string) => {
    playMenuClick();
    setOpenGroups((current) => {
      const nextOpen = !current[key];
      storeMenuGroupState(panel.key, key, nextOpen);
      return {
        ...current,
        [key]: nextOpen,
      };
    });
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-sm">
      <button
        className="group flex w-full cursor-pointer items-center justify-between gap-4 bg-gradient-to-r from-marine via-lagoon to-marine px-4 py-4 text-left text-white transition hover:from-lagoon hover:via-marine hover:to-lagoon active:scale-[0.99]"
        onClick={onToggle}
        type="button"
      >
        <span className="flex items-center gap-3">
          <MenuIconBadge icon={panel.icon} />
          <span>
            <span className="block font-black text-white">{panel.label}</span>
            <span className="mt-1 block text-xs leading-5 text-cyan-50/85">
              {panel.title}
            </span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan-50 shadow-sm transition group-hover:bg-white group-hover:text-marine">
          {open ? "Collapse" : "Expand"}
          <DropdownArrow open={open} />
        </span>
      </button>

      {open && (
        <div className="menu-popover grid gap-3 border-t border-cyan-100 bg-ice/55 p-3">
          {panel.groups.map((group) => (
            <div
              className="relative rounded-2xl border border-cyan-100 bg-white p-3"
              key={group.key}
            >
              <div className="flex items-center gap-3 px-2 py-2 pr-12">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <MenuIconBadge icon={group.icon} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-black text-marine">{group.title}</h3>
                    <p className="text-xs leading-5 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>
                <button
                  aria-label={`${openGroups[group.key] ? "Collapse" : "Expand"} ${group.title}`}
                  className="absolute right-2.5 top-2.5 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-cyan-100 bg-ice text-marine shadow-sm transition hover:bg-marine hover:text-white active:scale-[0.98]"
                  onClick={() => toggleGroup(group.key)}
                  title={`${openGroups[group.key] ? "Collapse" : "Expand"} ${group.title}`}
                  type="button"
                >
                  <DropdownArrow open={openGroups[group.key] ?? false} />
                </button>
              </div>

              {openGroups[group.key] && (
                <div className="menu-popover mt-2 grid gap-1">
                  {group.links.map((link) => (
                    <MenuLinkCard
                      closeMenus={onLinkClick}
                      key={link.key}
                      link={link}
                      onUnderConstruction={onUnderConstruction}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
