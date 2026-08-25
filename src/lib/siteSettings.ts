import { getApiUrl } from "./api";

export type SiteSettings = {
  company_name: string;
  consumers_guide_url: string;
  email: string;
  facebook_url: string;
  location: string;
  phone: string;
  phone_tel: string;
  youtube_url: string;
};

export const defaultSiteSettings: SiteSettings = {
  company_name: "Molecular H2 Water",
  consumers_guide_url:
    "https://heyzine.com/flip-book/c249c5d00b.html",
  email: "info@molecularh2water.com",
  facebook_url:
    "https://www.facebook.com/groups/1596145219185739/permalink/1596169665849961/?",
  location: "Your City, State",
  phone: "(000) 000-0000",
  phone_tel: "0000000000",
  youtube_url: "https://www.youtube.com/@HydrogenHeals",
};

type SiteSettingsResponse = {
  data?: Partial<SiteSettings>;
};

let cachedSettings: SiteSettings | null = null;
let inflightRequest: Promise<SiteSettings> | null = null;

function normalizeSettings(payload?: Partial<SiteSettings> | null): SiteSettings {
  const email = payload?.email?.trim() || defaultSiteSettings.email;
  const phone = payload?.phone?.trim() || defaultSiteSettings.phone;
  const phoneTel =
    payload?.phone_tel?.trim() ||
    phone.replace(/\D+/g, "") ||
    defaultSiteSettings.phone_tel;

  return {
    company_name:
      payload?.company_name?.trim() || defaultSiteSettings.company_name,
    consumers_guide_url:
      payload?.consumers_guide_url?.trim() ||
      defaultSiteSettings.consumers_guide_url,
    email,
    facebook_url:
      payload?.facebook_url?.trim() || defaultSiteSettings.facebook_url,
    location: payload?.location?.trim() || defaultSiteSettings.location,
    phone,
    phone_tel: phoneTel,
    youtube_url: payload?.youtube_url?.trim() || defaultSiteSettings.youtube_url,
  };
}

function isAbortError(error: unknown) {
  return (
    (error instanceof DOMException && error.name === "AbortError") ||
    (error instanceof Error && error.name === "AbortError")
  );
}

export async function fetchSiteSettings(
  signal?: AbortSignal,
): Promise<SiteSettings> {
  if (cachedSettings) {
    return cachedSettings;
  }

  if (!inflightRequest) {
    inflightRequest = (async () => {
      try {
        const response = await fetch(getApiUrl("/api/site-settings"), {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const body = (await response.json()) as SiteSettingsResponse;
        cachedSettings = normalizeSettings(body.data);
        return cachedSettings;
      } catch {
        // Do not cache failures so a later mount/retry can load live values.
        return defaultSiteSettings;
      } finally {
        inflightRequest = null;
      }
    })();
  }

  const request = inflightRequest;

  if (!signal) {
    return request;
  }

  if (signal.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  return new Promise<SiteSettings>((resolve, reject) => {
    const onAbort = () => {
      reject(new DOMException("Aborted", "AbortError"));
    };

    signal.addEventListener("abort", onAbort, { once: true });

    request
      .then((value) => {
        signal.removeEventListener("abort", onAbort);
        resolve(value);
      })
      .catch((error: unknown) => {
        signal.removeEventListener("abort", onAbort);
        if (isAbortError(error)) {
          reject(error);
          return;
        }
        resolve(defaultSiteSettings);
      });
  });
}

export function mailtoHref(email: string, subject?: string) {
  if (!subject) {
    return `mailto:${email}`;
  }

  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function telHref(phoneTel: string) {
  return `tel:${phoneTel}`;
}
