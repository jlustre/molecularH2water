import freeRadicalsImage from "../../assets/images/freeradicals.jpg";

export function FreeRadicalsSection() {
  return (
    <section className="bg-slate-950 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img
          alt="Free radicals educational infographic"
          className="block h-auto w-full max-w-full rounded-2xl border border-cyan-300/20 object-contain shadow-clean sm:rounded-[2rem]"
          decoding="async"
          loading="lazy"
          src={freeRadicalsImage}
        />
      </div>
    </section>
  );
}
