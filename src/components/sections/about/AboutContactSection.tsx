import { Mail, Phone, MapPin } from "lucide-react";

export function AboutContactSection() {
  return (
    <section className="bg-white py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2.5rem] bg-marine p-8 text-white shadow-clean lg:p-10">
            <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">Contact US</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Have Questions? Start A Conversation.</h2>
            <p className="mt-6 text-lg leading-8 text-cyan-50/85">
              Reach out to request more information, schedule a Water Awareness Show, ask about becoming a Hydration Specialist, or learn how to share the wellness education story responsibly.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: Mail, label: "info@example.com" },
                { icon: Phone, label: "(000) 000-0000" },
                { icon: MapPin, label: "Your City, State" },
              ].map((item) => (
                <div className="flex items-center gap-4" key={item.label}>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-aqua">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-bold text-cyan-50">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-cyan-100 bg-ice p-6 shadow-clean">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100" placeholder="Name" />
              <input className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100" placeholder="Email" />
              <input className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100 sm:col-span-2" placeholder="Phone" />
              <textarea className="min-h-40 rounded-2xl border border-cyan-100 bg-white px-5 py-4 font-semibold text-marine outline-none focus:ring-4 focus:ring-cyan-100 sm:col-span-2" placeholder="What would you like to learn more about?" />
              <a className="rounded-full bg-marine px-7 py-4 text-center font-black text-white shadow-clean transition hover:-translate-y-0.5 hover:bg-lagoon sm:col-span-2" href="mailto:info@example.com">Send Message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
