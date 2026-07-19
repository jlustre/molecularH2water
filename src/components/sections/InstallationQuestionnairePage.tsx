import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  submitInstallationQuestionnaire,
} from "../../lib/installationQuestionnaires";
import { PageLayout } from "../layout/PageLayout";
import { SectionHeading } from "../ui/SectionHeading";

type FormState = {
  additional_notes: string;
  city: string;
  country: string;
  email: string;
  existing_equipment: string[];
  first_name: string;
  last_name: string;
  ownership: string;
  phone: string;
  postal_code: string;
  property_type: string;
  special_requirements: string;
  state: string;
  street_address: string;
  street_address_2: string;
  water_source: string;
  water_source_other: string;
};

type SubmitState = "error" | "idle" | "loading" | "success";

const inputClassName =
  "w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100";

const labelClassName = "mb-2 block text-sm font-bold text-marine";

const propertyTypes = [
  "Single Family Home",
  "Condo",
  "Townhouse",
  "Apartment",
];

const existingEquipmentOptions = [
  "Under the sink Reverse Osmosis/Water Filter",
  "Counter Alkaline Water Machine/Water Purifier",
  "Water Softener",
];

const waterSources = [
  "Municipal (connected to the city)",
  "Well",
  "Rainwater",
  "None",
  "Other",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Mexico",
  "Other",
];

const initialFormState: FormState = {
  additional_notes: "",
  city: "",
  country: "United States",
  email: "",
  existing_equipment: [],
  first_name: "",
  last_name: "",
  ownership: "",
  phone: "",
  postal_code: "",
  property_type: "",
  special_requirements: "",
  state: "",
  street_address: "",
  street_address_2: "",
  water_source: "",
  water_source_other: "",
};

export function InstallationQuestionnairePage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [sinkPhoto, setSinkPhoto] = useState<File | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<number | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleEquipment(option: string) {
    setForm((current) => {
      const selected = current.existing_equipment.includes(option)
        ? current.existing_equipment.filter((item) => item !== option)
        : [...current.existing_equipment, option];

      return { ...current, existing_equipment: selected };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage(null);

    const result = await submitInstallationQuestionnaire({
      ...form,
      sink_photo: sinkPhoto,
    });

    if (!result.ok) {
      setSubmitState("error");
      setErrorMessage(result.message);
      return;
    }

    setSubmissionId(result.id ?? null);
    setSubmitState("success");
    setForm(initialFormState);
    setSinkPhoto(null);
  }

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-lagoon/12 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            description="Answer a few questions so we can understand your needs and help select the best options prior to delivery and install."
            eyebrow="Installation Prep"
            title="H2 Water System Pre-Installation Questionnaire"
          />

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-clean sm:p-8">
              {submitState === "success" ? (
                <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                  <h3 className="mt-4 text-3xl font-black text-marine">
                    Questionnaire Submitted
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Thank you. Your pre-installation details have been received
                    and our shipping team has been notified.
                    {submissionId ? ` Reference #${submissionId}.` : ""}
                  </p>
                  <button
                    className="mt-6 rounded-full bg-gradient-to-r from-lagoon to-aqua px-6 py-3 text-sm font-black text-white shadow-clean transition hover:-translate-y-0.5"
                    onClick={() => {
                      setSubmitState("idle");
                      setSubmissionId(null);
                    }}
                    type="button"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black tracking-tight text-marine">
                    Installation Details
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Fields marked with * are required. Upload a clear photo of
                    your current sink when possible.
                  </p>

                  {errorMessage ? (
                    <div
                      className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700"
                      role="alert"
                    >
                      {errorMessage}
                    </div>
                  ) : null}

                  <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClassName} htmlFor="first_name">
                          First Name *
                        </label>
                        <input
                          className={inputClassName}
                          id="first_name"
                          onChange={(event) =>
                            updateField("first_name", event.target.value)
                          }
                          required
                          type="text"
                          value={form.first_name}
                        />
                      </div>
                      <div>
                        <label className={labelClassName} htmlFor="last_name">
                          Last Name *
                        </label>
                        <input
                          className={inputClassName}
                          id="last_name"
                          onChange={(event) =>
                            updateField("last_name", event.target.value)
                          }
                          required
                          type="text"
                          value={form.last_name}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClassName} htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          className={inputClassName}
                          id="email"
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          placeholder="example@example.com"
                          required
                          type="email"
                          value={form.email}
                        />
                      </div>
                      <div>
                        <label className={labelClassName} htmlFor="phone">
                          Phone Number *
                        </label>
                        <input
                          className={inputClassName}
                          id="phone"
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                          placeholder="(000) 000-0000"
                          required
                          type="tel"
                          value={form.phone}
                        />
                      </div>
                    </div>

                    <fieldset className="grid gap-4 rounded-[1.5rem] border border-cyan-50 bg-ice/40 p-4 sm:p-5">
                      <legend className="px-1 text-sm font-bold text-marine">
                        Installation Address *
                      </legend>
                      <div>
                        <label className={labelClassName} htmlFor="street_address">
                          Street Address *
                        </label>
                        <input
                          className={inputClassName}
                          id="street_address"
                          onChange={(event) =>
                            updateField("street_address", event.target.value)
                          }
                          required
                          type="text"
                          value={form.street_address}
                        />
                      </div>
                      <div>
                        <label
                          className={labelClassName}
                          htmlFor="street_address_2"
                        >
                          Street Address Line 2
                        </label>
                        <input
                          className={inputClassName}
                          id="street_address_2"
                          onChange={(event) =>
                            updateField("street_address_2", event.target.value)
                          }
                          type="text"
                          value={form.street_address_2}
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClassName} htmlFor="city">
                            City *
                          </label>
                          <input
                            className={inputClassName}
                            id="city"
                            onChange={(event) =>
                              updateField("city", event.target.value)
                            }
                            required
                            type="text"
                            value={form.city}
                          />
                        </div>
                        <div>
                          <label className={labelClassName} htmlFor="state">
                            State / Province *
                          </label>
                          <input
                            className={inputClassName}
                            id="state"
                            onChange={(event) =>
                              updateField("state", event.target.value)
                            }
                            required
                            type="text"
                            value={form.state}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClassName} htmlFor="postal_code">
                            Postal / Zip Code *
                          </label>
                          <input
                            className={inputClassName}
                            id="postal_code"
                            onChange={(event) =>
                              updateField("postal_code", event.target.value)
                            }
                            required
                            type="text"
                            value={form.postal_code}
                          />
                        </div>
                        <div>
                          <label className={labelClassName} htmlFor="country">
                            Country *
                          </label>
                          <select
                            className={inputClassName}
                            id="country"
                            onChange={(event) =>
                              updateField("country", event.target.value)
                            }
                            required
                            value={form.country}
                          >
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    <div>
                      <label className={labelClassName} htmlFor="property_type">
                        Property Type *
                      </label>
                      <select
                        className={inputClassName}
                        id="property_type"
                        onChange={(event) =>
                          updateField("property_type", event.target.value)
                        }
                        required
                        value={form.property_type}
                      >
                        <option disabled value="">
                          Please Select
                        </option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <fieldset>
                      <legend className={`${labelClassName} mb-3`}>
                        Do you have the following?
                      </legend>
                      <div className="grid gap-3">
                        {existingEquipmentOptions.map((option) => (
                          <label
                            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-cyan-100 bg-white px-4 py-3 font-semibold text-marine transition hover:border-lagoon/30"
                            key={option}
                          >
                            <input
                              checked={form.existing_equipment.includes(option)}
                              className="mt-1 size-4 rounded border-cyan-200 text-lagoon focus:ring-lagoon/30"
                              onChange={() => toggleEquipment(option)}
                              type="checkbox"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className={`${labelClassName} mb-3`}>
                        Do you own or rent?
                      </legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { label: "Yes I own", value: "own" },
                          { label: "Yes I rent", value: "rent" },
                        ].map((option) => (
                          <label
                            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-cyan-100 bg-white px-4 py-3 font-semibold text-marine transition hover:border-lagoon/30"
                            key={option.value}
                          >
                            <input
                              checked={form.ownership === option.value}
                              className="size-4 border-cyan-200 text-lagoon focus:ring-lagoon/30"
                              name="ownership"
                              onChange={() =>
                                updateField("ownership", option.value)
                              }
                              type="radio"
                              value={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label className={labelClassName} htmlFor="water_source">
                        Current Water Source *
                      </label>
                      <select
                        className={inputClassName}
                        id="water_source"
                        onChange={(event) =>
                          updateField("water_source", event.target.value)
                        }
                        required
                        value={form.water_source}
                      >
                        <option disabled value="">
                          Please Select
                        </option>
                        {waterSources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>

                    {form.water_source === "Other" ? (
                      <div>
                        <label
                          className={labelClassName}
                          htmlFor="water_source_other"
                        >
                          Please describe your water source *
                        </label>
                        <input
                          className={inputClassName}
                          id="water_source_other"
                          onChange={(event) =>
                            updateField("water_source_other", event.target.value)
                          }
                          required
                          type="text"
                          value={form.water_source_other}
                        />
                      </div>
                    ) : null}

                    <div>
                      <label
                        className={labelClassName}
                        htmlFor="special_requirements"
                      >
                        Do you have any special requirements or concerns?
                      </label>
                      <textarea
                        className={`${inputClassName} min-h-28`}
                        id="special_requirements"
                        onChange={(event) =>
                          updateField("special_requirements", event.target.value)
                        }
                        value={form.special_requirements}
                      />
                    </div>

                    <div>
                      <label
                        className={labelClassName}
                        htmlFor="additional_notes"
                      >
                        Additional Notes
                      </label>
                      <textarea
                        className={`${inputClassName} min-h-28`}
                        id="additional_notes"
                        onChange={(event) =>
                          updateField("additional_notes", event.target.value)
                        }
                        value={form.additional_notes}
                      />
                    </div>

                    <div>
                      <label className={labelClassName} htmlFor="sink_photo">
                        Please Upload A Photo of your current sink
                      </label>
                      <label
                        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-cyan-200 bg-ice/50 px-5 py-8 text-center transition hover:border-lagoon/40"
                        htmlFor="sink_photo"
                      >
                        <Upload className="h-8 w-8 text-lagoon" />
                        <span className="text-sm font-bold text-marine">
                          {sinkPhoto
                            ? sinkPhoto.name
                            : "Browse Files or drag and drop"}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          JPG, PNG, or WEBP up to 10MB
                        </span>
                      </label>
                      <input
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="sr-only"
                        id="sink_photo"
                        onChange={(event) =>
                          setSinkPhoto(event.target.files?.[0] ?? null)
                        }
                        type="file"
                      />
                    </div>

                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lagoon to-aqua px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-clean transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      disabled={submitState === "loading"}
                      type="submit"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Questionnaire"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
