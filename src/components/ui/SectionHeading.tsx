type SectionHeadingProps = {
  align?: "left" | "center";
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({
  align = "left",
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-black uppercase tracking-[.25em] ${
          dark ? "text-aqua" : "text-lagoon"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-marine"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            dark ? "text-cyan-50/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
