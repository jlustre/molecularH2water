import { trustItems } from "../../data/siteContent";

export function TrustBar() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div className="border-l-4 border-aqua bg-pearl p-5" key={item.title}>
              <p className="font-black text-marine">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
