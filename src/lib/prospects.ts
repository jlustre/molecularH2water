import { getApiUrl } from "./api";

export type ProspectCapturePayload = {
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  interested_in?: string;
  source?: string;
  form_context: string;
  tracking_source?: string;
  referrer_name?: string;
  preferred_time?: string;
  message?: string;
  page_url?: string;
  consent_given: boolean;
  company_website?: string;
};

export type ProspectCaptureResult =
  | { ok: true; message: string }
  | { ok: false; message: string; errors?: Record<string, string[]> };

export async function submitProspect(
  payload: ProspectCapturePayload,
): Promise<ProspectCaptureResult> {
  try {
    const response = await fetch(getApiUrl("/api/prospects"), {
      body: JSON.stringify({
        ...payload,
        page_url: payload.page_url ?? window.location.href,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const body = (await response.json()) as {
      message?: string;
      errors?: Record<string, string[]>;
    };

    if (!response.ok) {
      const validationMessage = body.errors
        ? Object.values(body.errors).flat().join(" ")
        : null;

      return {
        ok: false,
        errors: body.errors,
        message:
          validationMessage || body.message || "Unable to submit your request.",
      };
    }

    return {
      ok: true,
      message: body.message || "Thank you. A team member will be in touch soon.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to submit your request. Please try again.",
    };
  }
}
