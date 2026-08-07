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
  warranty_concern?: string;
  warranty_media?: File[];
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
    const body = new FormData();

    if (payload.name) body.append("name", payload.name);
    if (payload.first_name) body.append("first_name", payload.first_name);
    if (payload.last_name) body.append("last_name", payload.last_name);
    if (payload.email) body.append("email", payload.email);
    if (payload.phone) body.append("phone", payload.phone);
    if (payload.city) body.append("city", payload.city);
    if (payload.state) body.append("state", payload.state);
    if (payload.country) body.append("country", payload.country);
    if (payload.interested_in) body.append("interested_in", payload.interested_in);
    if (payload.source) body.append("source", payload.source);
    if (payload.form_context) body.append("form_context", payload.form_context);
    if (payload.tracking_source) {
      body.append("tracking_source", payload.tracking_source);
    }
    if (payload.referrer_name) body.append("referrer_name", payload.referrer_name);
    if (payload.preferred_time) body.append("preferred_time", payload.preferred_time);
    if (payload.message) body.append("message", payload.message);
    if (payload.warranty_concern) {
      body.append("warranty_concern", payload.warranty_concern);
    }
    (payload.warranty_media ?? []).forEach((file) => {
      body.append("warranty_media[]", file);
    });
    body.append("page_url", payload.page_url ?? window.location.href);
    body.append("consent_given", payload.consent_given ? "1" : "0");
    if (payload.company_website) {
      body.append("company_website", payload.company_website);
    }

    const response = await fetch(getApiUrl("/api/prospects"), {
      body,
      headers: {
        Accept: "application/json",
      },
      method: "POST",
    });

    const responseBody = (await response.json()) as {
      message?: string;
      errors?: Record<string, string[]>;
    };

    if (!response.ok) {
      const validationMessage = responseBody.errors
        ? Object.values(responseBody.errors).flat().join(" ")
        : null;

      return {
        ok: false,
        errors: responseBody.errors,
        message:
          validationMessage ||
          responseBody.message ||
          "Unable to submit your request.",
      };
    }

    return {
      ok: true,
      message:
        responseBody.message || "Thank you. A team member will be in touch soon.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to submit your request. Please try again.",
    };
  }
}
