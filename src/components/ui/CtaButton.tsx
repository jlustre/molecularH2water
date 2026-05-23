type CtaButtonProps = {
  children: string;
  href: string;
  variant?: "primary" | "outline" | "light";
};

export function CtaButton({
  children,
  href,
  variant = "primary",
}: CtaButtonProps) {
  const variantClass =
    variant === "outline"
      ? "border border-lagoon/30 bg-white text-marine shadow-sm hover:bg-ice"
      : variant === "light"
        ? "border border-white/25 text-white hover:bg-white/10"
        : "bg-teal-400 text-white shadow-clean hover:bg-teal-500";

  return (
    <a
      className={`rounded-full px-8 py-4 text-center font-black transition hover:-translate-y-0.5 ${variantClass}`}
      href={href}
    >
      {children}
    </a>
  );
}
