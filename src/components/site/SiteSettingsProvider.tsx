import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultSiteSettings,
  fetchSiteSettings,
  type SiteSettings,
} from "../../lib/siteSettings";

const SiteSettingsContext = createContext<SiteSettings>(defaultSiteSettings);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);

  useEffect(() => {
    let active = true;

    void fetchSiteSettings()
      .then((next) => {
        if (!active) {
          return;
        }

        setSettings(next);
        if (next.company_name) {
          document.title = `${next.company_name} | Hydrogen Water Education`;
        }
      })
      .catch(() => {
        // Keep defaults when the request is cancelled or unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
