import { CheckCircle2, Loader2, Send, Trash2 } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { submitProspect } from "../../lib/prospects";

const inputClassName =
  "w-full min-w-0 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none transition focus:border-lagoon/40 focus:ring-4 focus:ring-cyan-100";
const WARRANTY_INTEREST_VALUE = "Warranty Service";
const MAX_WARRANTY_MEDIA_FILES = 6;
const WARRANTY_VIDEO_MIN_SECONDS = 10;
const WARRANTY_VIDEO_MAX_SECONDS = 20;

export type ProspectInterestOption = {
  label: string;
  value: string;
};

type WarrantyMediaPreview = {
  file: File;
  url: string;
  isImage: boolean;
  isVideo: boolean;
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
  enableWarrantySupport?: boolean;
};

async function getVideoDurationInSeconds(file: File): Promise<number> {
  const objectUrl = URL.createObjectURL(file);

  try {
    const duration = await new Promise<number>((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => resolve(video.duration);
      video.onerror = () => reject(new Error("Unable to read video metadata."));
      video.src = objectUrl;
    });

    return duration;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function fileIdentity(file: File): string {
  return `${file.name}-${file.size}-${file.lastModified}`;
}

function uniqueFiles(files: File[]): File[] {
  const seen = new Set<string>();

  return files.filter((file) => {
    const key = fileIdentity(file);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}

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
  enableWarrantySupport = false,
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
  const [warrantyConcern, setWarrantyConcern] = useState("");
  const [warrantyMedia, setWarrantyMedia] = useState<File[]>([]);
  const [warrantyMediaPreviews, setWarrantyMediaPreviews] = useState<WarrantyMediaPreview[]>([]);
  const [consentGiven, setConsentGiven] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<
    "error" | "idle" | "loading" | "success"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isWarrantyService =
    enableWarrantySupport && interestedIn === WARRANTY_INTEREST_VALUE;

  useEffect(() => {
    const previews = warrantyMedia.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      isImage: file.type.startsWith("image/"),
      isVideo: file.type.startsWith("video/"),
    }));

    setWarrantyMediaPreviews(previews);

    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [warrantyMedia]);

  async function handleWarrantyMediaChange(files: FileList | null) {
    const selectedFiles = Array.from(files ?? []);
    const mergedFiles = uniqueFiles([...warrantyMedia, ...selectedFiles]);

    if (mergedFiles.length > MAX_WARRANTY_MEDIA_FILES) {
      setSubmitState("error");
      setErrorMessage(`Please upload up to ${MAX_WARRANTY_MEDIA_FILES} files.`);
      return;
    }

    const videoFiles = mergedFiles.filter((file) =>
      file.type.startsWith("video/"),
    );

    if (videoFiles.length > 1 || (videoFiles.length === 1 && mergedFiles.length > 1)) {
      setSubmitState("error");
      setErrorMessage("Please upload either one 10-20 second video or image files.");
      return;
    }

    if (videoFiles.length === 1) {
      try {
        const durationSeconds = await getVideoDurationInSeconds(videoFiles[0]);

        if (
          Number.isFinite(durationSeconds) &&
          (durationSeconds < WARRANTY_VIDEO_MIN_SECONDS ||
            durationSeconds > WARRANTY_VIDEO_MAX_SECONDS)
        ) {
          setSubmitState("error");
          setErrorMessage("Warranty video must be between 10 and 20 seconds.");
          return;
        }
      } catch {
        setSubmitState("error");
        setErrorMessage("Unable to read the video file. Please try another file.");
        return;
      }
    }

    setWarrantyMedia(mergedFiles);
    if (submitState === "error") {
      setSubmitState("idle");
      setErrorMessage(null);
    }
  }

  function handleInterestChange(value: string) {
    setInterestedIn(value);

    if (value !== WARRANTY_INTEREST_VALUE) {
      setWarrantyConcern("");
      setWarrantyMedia([]);
    }
  }

  function removeWarrantyMediaFile(fileToRemove: File) {
    const fileToRemoveId = fileIdentity(fileToRemove);
    setWarrantyMedia((current) =>
      current.filter((file) => fileIdentity(file) !== fileToRemoveId),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage(null);

    if (!phone.trim() && !email.trim()) {
      setSubmitState("error");
      setErrorMessage("Please provide an email address or phone number.");
      return;
    }

    if (isWarrantyService) {
      if (!warrantyConcern.trim()) {
        setSubmitState("error");
        setErrorMessage("Please describe your warranty concern.");
        return;
      }

      if (warrantyMedia.length === 0) {
        setSubmitState("error");
        setErrorMessage("Please upload images or a 10-20 second video.");
        return;
      }
    }

    const result = await submitProspect({
      name: name.trim(),
      phone: phone.trim() || undefined,
      email: email.trim() || undefined,
      referrer_name: referrerName.trim() || undefined,
      preferred_time: preferredTime.trim() || undefined,
      interested_in: interestedIn,
      message: message.trim() || undefined,
      warranty_concern: isWarrantyService
        ? warrantyConcern.trim() || undefined
        : undefined,
      warranty_media: isWarrantyService ? warrantyMedia : undefined,
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
    setWarrantyConcern("");
    setWarrantyMedia([]);
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
          onChange={(event) => handleInterestChange(event.target.value)}
          required
          value={interestedIn}
        >
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {isWarrantyService ? (
          <>
            <textarea
              className={`${inputClassName} min-h-32 sm:col-span-2`}
              onChange={(event) => setWarrantyConcern(event.target.value)}
              placeholder="Describe your warranty concern"
              required
              value={warrantyConcern}
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-marine">
                Upload images or one 10-20 second video
              </label>
              <input
                accept="image/*,video/mp4,video/webm,video/quicktime"
                className="block w-full rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-sm font-semibold text-marine file:mr-4 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-xs file:font-black file:uppercase file:tracking-[0.08em] file:text-lagoon"
                multiple
                onChange={async (event) => {
                  await handleWarrantyMediaChange(event.target.files);
                  event.currentTarget.value = "";
                }}
                required={isWarrantyService}
                type="file"
              />
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Upload up to {MAX_WARRANTY_MEDIA_FILES} files. Video uploads must be 10-20 seconds.
              </p>
              {warrantyMediaPreviews.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {warrantyMediaPreviews.map((preview) => (
                    <figure
                      className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-sm"
                      key={`${preview.file.name}-${preview.file.size}-${preview.file.lastModified}`}
                    >
                      <button
                        aria-label={`Remove ${preview.file.name}`}
                        className="absolute right-2 top-2 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/80 bg-marine/85 text-sm font-black text-white shadow-sm transition hover:bg-marine"
                        onClick={() => removeWarrantyMediaFile(preview.file)}
                        type="button"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                      {preview.isImage ? (
                        <img
                          alt={preview.file.name}
                          className="h-32 w-full object-cover"
                          src={preview.url}
                        />
                      ) : preview.isVideo ? (
                        <video
                          className="h-32 w-full bg-slate-900 object-cover"
                          controls={false}
                          muted
                          playsInline
                          preload="metadata"
                          src={preview.url}
                        />
                      ) : null}
                      <figcaption className="px-3 py-2 text-xs font-semibold text-slate-600">
                        {preview.file.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
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
