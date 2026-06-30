import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { getApiUrl } from "../../lib/api";
import { PageLayout } from "../layout/PageLayout";
import { SectionHeading } from "../ui/SectionHeading";

type FormState = {
  customer_name: string;
  email: string;
  machine_model: string;
  notes: string;
  phone: string;
  purchase_date: string;
  purchased_from: string;
  serial_number: string;
};

type SubmitState = "error" | "idle" | "loading" | "success";

type SerialValidationState = "idle" | "checking" | "available" | "unavailable" | "error";

const inputClassName =
  "w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100";

const machineModels = [
  "H2 Hydrogen Water Machine",
  "Other / Not Sure",
];

const initialFormState: FormState = {
  customer_name: "",
  email: "",
  machine_model: machineModels[0],
  notes: "",
  phone: "",
  purchase_date: "",
  purchased_from: "",
  serial_number: "",
};

export function WarrantyRegistrationPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [registrationId, setRegistrationId] = useState<number | null>(null);
  const [serialValidationState, setSerialValidationState] =
    useState<SerialValidationState>("idle");
  const [serialValidationMessage, setSerialValidationMessage] = useState<
    string | null
  >(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));

    if (key === "serial_number") {
      setSerialValidationState("idle");
      setSerialValidationMessage(null);
    }
  }

  async function checkSerialNumber(serialNumber: string) {
    const trimmedSerial = serialNumber.trim();

    if (!trimmedSerial) {
      setSerialValidationState("idle");
      setSerialValidationMessage(null);
      return { available: false, message: "Serial number is required." };
    }

    setSerialValidationState("checking");
    setSerialValidationMessage(null);

    try {
      const response = await fetch(
        `${getApiUrl("/api/warranty-registrations/check-serial")}?serial_number=${encodeURIComponent(trimmedSerial)}`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );

      const payload = (await response.json()) as {
        available?: boolean;
        message?: string;
        errors?: Record<string, string[]>;
      };

      if (!response.ok) {
        const validationMessage = payload.errors
          ? Object.values(payload.errors).flat().join(" ")
          : null;

        throw new Error(
          validationMessage || payload.message || "Unable to validate serial number.",
        );
      }

      const message =
        payload.message ||
        (payload.available
          ? "This serial number is available for registration."
          : "This serial number has already been registered for warranty.");

      if (payload.available) {
        setSerialValidationState("available");
        setSerialValidationMessage(message);
        return { available: true, message };
      }

      setSerialValidationState("unavailable");
      setSerialValidationMessage(message);
      return { available: false, message };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to validate serial number. Please try again.";

      setSerialValidationState("error");
      setSerialValidationMessage(message);
      return { available: false, message };
    }
  }

  async function handleSerialBlur() {
    await checkSerialNumber(form.serial_number);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage(null);

    const serialCheck = await checkSerialNumber(form.serial_number);

    if (!serialCheck.available) {
      setSubmitState("error");
      setErrorMessage(serialCheck.message);
      return;
    }

    try {
      const response = await fetch(getApiUrl("/api/warranty-registrations"), {
        body: JSON.stringify({
          customer_name: form.customer_name.trim(),
          email: form.email.trim(),
          machine_model: form.machine_model,
          notes: form.notes.trim() || null,
          phone: form.phone.trim(),
          purchase_date: form.purchase_date,
          purchased_from: form.purchased_from.trim() || null,
          serial_number: form.serial_number.trim(),
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const payload = (await response.json()) as {
        message?: string;
        errors?: Record<string, string[]>;
        data?: { id: number };
      };

      if (!response.ok) {
        const validationMessage = payload.errors
          ? Object.values(payload.errors).flat().join(" ")
          : null;

        throw new Error(
          validationMessage || payload.message || "Unable to register your machine.",
        );
      }

      setRegistrationId(payload.data?.id ?? null);
      setSubmitState("success");
      setForm(initialFormState);
      setSerialValidationState("idle");
      setSerialValidationMessage(null);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to register your machine. Please try again.",
      );
    }
  }

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-lagoon/12 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            description="Register your H2 hydrogen water machine to activate warranty coverage and keep your purchase details on file for support."
            eyebrow="Machine Warranty"
            title="Register Your Machine"
          />

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-clean sm:p-8">
              {submitState === "success" ? (
                <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                  <h3 className="mt-4 text-3xl font-black text-marine">
                    Registration Complete
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Your machine has been registered for warranty coverage.
                    {registrationId ? ` Reference #${registrationId}.` : ""}
                    {" "}A confirmation email with your registration details has been sent.
                  </p>
                  <button
                    className="mt-6 rounded-full bg-gradient-to-r from-lagoon to-aqua px-6 py-3 text-sm font-black text-white shadow-clean transition hover:-translate-y-0.5"
                    onClick={() => {
                      setSubmitState("idle");
                      setRegistrationId(null);
                    }}
                    type="button"
                  >
                    Register Another Machine
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black tracking-tight text-marine">
                    Warranty Registration Form
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Enter the details from your machine label and purchase
                    receipt. Fields marked with * are required.
                  </p>

                  {errorMessage ? (
                    <div
                      className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700"
                      role="alert"
                    >
                      {errorMessage}
                    </div>
                  ) : null}

                  <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                    <input
                      className={inputClassName}
                      onChange={(event) =>
                        updateField("customer_name", event.target.value)
                      }
                      placeholder="Full Name *"
                      required
                      type="text"
                      value={form.customer_name}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        className={inputClassName}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="Email *"
                        required
                        type="email"
                        value={form.email}
                      />
                      <input
                        className={inputClassName}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        placeholder="Phone *"
                        required
                        type="tel"
                        value={form.phone}
                      />
                    </div>
                    <div>
                      <input
                        aria-describedby={
                          serialValidationMessage ? "serial-number-feedback" : undefined
                        }
                        aria-invalid={serialValidationState === "unavailable"}
                        className={`${inputClassName} ${
                          serialValidationState === "unavailable"
                            ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
                            : serialValidationState === "available"
                              ? "border-emerald-300 focus:border-emerald-400 focus:ring-emerald-100"
                              : ""
                        }`}
                        onBlur={handleSerialBlur}
                        onChange={(event) =>
                          updateField("serial_number", event.target.value)
                        }
                        placeholder="Machine Serial Number *"
                        required
                        type="text"
                        value={form.serial_number}
                      />
                      {serialValidationState === "checking" ? (
                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Checking serial number...
                        </p>
                      ) : null}
                      {serialValidationMessage ? (
                        <p
                          className={`mt-2 text-sm font-semibold ${
                            serialValidationState === "available"
                              ? "text-emerald-700"
                              : serialValidationState === "unavailable"
                                ? "text-rose-700"
                                : "text-slate-600"
                          }`}
                          id="serial-number-feedback"
                        >
                          {serialValidationMessage}
                        </p>
                      ) : null}
                    </div>
                    <select
                      className={inputClassName}
                      onChange={(event) =>
                        updateField("machine_model", event.target.value)
                      }
                      required
                      value={form.machine_model}
                    >
                      {machineModels.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        className={inputClassName}
                        onChange={(event) =>
                          updateField("purchase_date", event.target.value)
                        }
                        required
                        type="date"
                        value={form.purchase_date}
                      />
                      <input
                        className={inputClassName}
                        onChange={(event) =>
                          updateField("purchased_from", event.target.value)
                        }
                        placeholder="Purchased From (optional)"
                        type="text"
                        value={form.purchased_from}
                      />
                    </div>
                    <textarea
                      className={`${inputClassName} min-h-32`}
                      onChange={(event) =>
                        updateField("notes", event.target.value)
                      }
                      placeholder="Notes (optional)"
                      value={form.notes}
                    />
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lagoon to-aqua px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-clean transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      disabled={
                        submitState === "loading" ||
                        serialValidationState === "checking" ||
                        serialValidationState === "unavailable"
                      }
                      type="submit"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Register For Warranty"
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
