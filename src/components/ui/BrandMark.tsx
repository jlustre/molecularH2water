import logoImage from "../../assets/images/brand/logo2_trans.png";

type BrandMarkProps = {
  inverted?: boolean;
  subtitle?: string;
};

export function BrandMark({
  inverted = false,
  subtitle = "Hydrogen Education",
}: BrandMarkProps) {
  return (
    <div
      className={
        inverted
          ? "inline-flex rounded-2xl bg-white/95 p-2 shadow-clean"
          : "inline-flex"
      }
    >
      <img
        alt={`${subtitle} logo`}
        className={inverted ? "h-14 w-auto" : "h-12 w-auto sm:h-14 lg:h-[58px]"}
        src={logoImage}
      />
    </div>
  );
}
