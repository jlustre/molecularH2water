import { getApiUrl } from "./api";

export type InstallationQuestionnairePayload = {
  additional_notes?: string;
  city: string;
  country: string;
  email: string;
  existing_equipment: string[];
  first_name: string;
  last_name: string;
  ownership?: string;
  phone: string;
  postal_code: string;
  property_type: string;
  sink_photo?: File | null;
  special_requirements?: string;
  state: string;
  street_address: string;
  street_address_2?: string;
  water_source: string;
  water_source_other?: string;
};

export type InstallationQuestionnaireResult =
  | { ok: true; message: string; id?: number }
  | { ok: false; message: string; errors?: Record<string, string[]> };

export async function submitInstallationQuestionnaire(
  payload: InstallationQuestionnairePayload,
): Promise<InstallationQuestionnaireResult> {
  try {
    const body = new FormData();

    body.append("first_name", payload.first_name.trim());
    body.append("last_name", payload.last_name.trim());
    body.append("email", payload.email.trim());
    body.append("phone", payload.phone.trim());
    body.append("street_address", payload.street_address.trim());

    if (payload.street_address_2?.trim()) {
      body.append("street_address_2", payload.street_address_2.trim());
    }

    body.append("city", payload.city.trim());
    body.append("state", payload.state.trim());
    body.append("postal_code", payload.postal_code.trim());
    body.append("country", payload.country.trim());
    body.append("property_type", payload.property_type);

    payload.existing_equipment.forEach((item) => {
      body.append("existing_equipment[]", item);
    });

    if (payload.ownership) {
      body.append("ownership", payload.ownership);
    }

    body.append("water_source", payload.water_source);

    if (payload.water_source_other?.trim()) {
      body.append("water_source_other", payload.water_source_other.trim());
    }

    if (payload.special_requirements?.trim()) {
      body.append("special_requirements", payload.special_requirements.trim());
    }

    if (payload.additional_notes?.trim()) {
      body.append("additional_notes", payload.additional_notes.trim());
    }

    if (payload.sink_photo) {
      body.append("sink_photo", payload.sink_photo);
    }

    const response = await fetch(getApiUrl("/api/installation-questionnaires"), {
      body,
      headers: {
        Accept: "application/json",
      },
      method: "POST",
    });

    const responseBody = (await response.json()) as {
      message?: string;
      errors?: Record<string, string[]>;
      data?: { id: number };
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
          "Unable to submit your questionnaire.",
      };
    }

    return {
      ok: true,
      id: responseBody.data?.id,
      message:
        responseBody.message ||
        "Thank you. Your pre-installation questionnaire has been submitted.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to submit your questionnaire. Please try again.",
    };
  }
}
