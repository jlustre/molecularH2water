import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { submitProspect } from "../../lib/prospects";

const inputClassName =
  "w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100";

export type ProspectInterestOption = {
  label: string;
  value: string;
};

type ProspectCaptureFormProps = {
  defaultInterest?: string;
  description: string;
  formContext: string;
  interestOptions: ProspectInterestOption[];
  messagePlaceholder?: string;
  showPreferredTime?: boolean;
  showReferrer?: boolean;
  source: string;
  submitLabel?: string;
  title: string;
  trackingSource?: string;
};

export function ProspectCaptureForm({
  title,
  description,
  submitLabel = "Send Message",
  source,
  formContext,
  trackingSource,
  interestOptions,
  defaultInterest,
  showReferrer = true,
  showPreferredTime = false,
  messagePlaceholder = "How can we help?",
}: ProspectCaptureFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [referrerName, setReferrerName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [interestedIn, setInterestedIn] = useState(
    defaultInterest ?? interestOptions[0]?.value ?? "",
  );
  const [message, setMessage] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<
    "error" | "idle" | "loading" | "success"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage(null);

    if (!phone.trim() && !email.trim()) {
      setSubmitState("error");
      setErrorMessage("Please provide an email address or phone number.");
      return;
    }

    const result = await submitProspect({
      name: name.trim(),
      phone: phone.trim() || undefined,
      email: email.trim() || undefined,
      referrer_name: referrerName.trim() || undefined,
      preferred_time: preferredTime.trim() || undefined,
      interested_in: interestedIn,
      message: message.trim() || undefined,
      source,
      form_context: formContext,
      tracking_source: trackingSource,
      consent_given: consentGiven,
      company_website: honeypot || undefined,
    });

    if (!result.ok) {
      setSubmitState("error");
      setErrorMessage(result.message);
      return;
    }

    setSubmitState("success");
    setName("");
    setPhone("");
    setEmail("");
    setReferrerName("");
    setPreferredTime("");
    setMessage("");
    setConsentGiven(false);
  }

  if (submitState === "success") {
    return (
      <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm sm:rounded-[2rem] sm:p-8">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-2xl font-black text-marine">Request Received</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Thank you. A team member will be in touch soon.
        </p>
        <button
          className="mt-6 rounded-full bg-gradient-to-r from-lagoon to-aqua px-6 py-3 text-sm font-black text-white shadow-clean transition hover:-translate-y-0.5"
          onClick={() => setSubmitState("idle")}
          type="button"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-full rounded-[1.5rem] border border-cyan-100 bg-ice p-4 shadow-sm sm:rounded-[2rem] sm:p-6">
      <h3 className="text-3xl font-black tracking-tight text-marine">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>

      {errorMessage ? (
        <div
          className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}

      <form className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="company_website"
          onChange={(event) => setHoneypot(event.target.value)}
          tabIndex={-1}
          type="text"
          value={honeypot}
        />
        <input
          className={inputClassName}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name *"
          required
          type="text"
          value={name}
        />
        <input
          className={inputClassName}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Phone"
          type="tel"
          value={phone}
        />
        <input
          className={`${inputClassName} sm:col-span-2`}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          type="email"
          value={email}
        />
        {showReferrer ? (
          <input
            className={`${inputClassName} sm:col-span-2`}
            onChange={(event) => setReferrerName(event.target.value)}
            placeholder="Referrer Name (optional)"
            type="text"
            value={referrerName}
          />
        ) : null}
        {showPreferredTime ? (
          <input
            className={`${inputClassName} sm:col-span-2`}
            onChange={(event) => setPreferredTime(event.target.value)}
            placeholder="Preferred Day or Time"
            type="text"
            value={preferredTime}
          />
        ) : null}
        <select
          className={`${inputClassName} sm:col-span-2`}
          onChange={(event) => setInterestedIn(event.target.value)}
          required
          value={interestedIn}
        >
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <textarea
          className={`${inputClassName} min-h-36 sm:col-span-2`}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={messagePlaceholder}
          value={message}
        />
        <label className="flex items-start gap-3 sm:col-span-2">
          <input
            checked={consentGiven}
            className="mt-1 rounded border-cyan-200 text-lagoon focus:ring-lagoon"
            onChange={(event) => setConsentGiven(event.target.checked)}
            required
            type="checkbox"
          />
          <span className="text-sm leading-6 text-slate-600">
            I agree to be contacted about my request. *
          </span>
        </label>
        <button
          className="group mt-1 inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full border-2 border-marine bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-marine shadow-[0_14px_35px_rgba(7,59,76,0.18)] transition hover:-translate-y-0.5 hover:bg-marine disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2 sm:px-6 sm:tracking-[0.12em]"
          disabled={submitState === "loading" || !consentGiven}
          type="submit"
        >
          {submitState === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 transition-colors duration-200 group-hover:text-white" />
              <span className="transition-colors duration-200 group-hover:text-white">
                {submitLabel}
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
