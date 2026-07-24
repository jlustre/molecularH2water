import { Mail, Phone } from "lucide-react";
import { mailtoHref, telHref } from "../../lib/siteSettings";
import { useSiteSettings } from "./SiteSettingsProvider";

type ContactQuickLinksProps = {
  className?: string;
  emailSubject: string;
  phoneFirst?: boolean;
  variant?: "labeled" | "compact";
};

export function ContactQuickLinks({
  className,
  emailSubject,
  phoneFirst = false,
  variant = "labeled",
}: ContactQuickLinksProps) {
  const site = useSiteSettings();

  const emailLink = (
    <a
      className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
      href={mailtoHref(site.email, emailSubject)}
      key="email"
    >
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
        <Mail className="h-5 w-5" />
      </span>
      {variant === "labeled" ? (
        <>
          <p className="mt-2 text-sm font-black text-marine">Email Us</p>
          <p className="text-xs font-semibold text-slate-500">{site.email}</p>
        </>
      ) : (
        <p className="mt-3 break-words text-sm font-black text-marine">
          {site.email}
        </p>
      )}
    </a>
  );

  const phoneLink = (
    <a
      className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean"
      href={telHref(site.phone_tel)}
      key="phone"
    >
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
        <Phone className="h-5 w-5" />
      </span>
      {variant === "labeled" ? (
        <>
          <p className="mt-2 text-sm font-black text-marine">Call Us</p>
          <p className="text-xs font-semibold text-slate-500">{site.phone}</p>
        </>
      ) : (
        <p className="mt-3 break-words text-sm font-black text-marine">
          {site.phone}
        </p>
      )}
    </a>
  );

  const resolvedClassName =
    className ??
    (variant === "labeled"
      ? "mt-5 grid gap-3 sm:grid-cols-[1.25fr_.75fr]"
      : "mt-6 grid gap-4 sm:grid-cols-[1.18fr_0.82fr]");

  return (
    <div className={resolvedClassName}>
      {phoneFirst ? (
        <>
          {phoneLink}
          {emailLink}
        </>
      ) : (
        <>
          {emailLink}
          {phoneLink}
        </>
      )}
    </div>
  );
}
