import {
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import contactImage from "../../../assets/images/contact_us.jpg";
import { ProspectCaptureForm } from "../../forms/ProspectCaptureForm";

const contactOptions = [
  {
    title: "Ask A Question",
    text: "Get simple answers about hydrogen water, presentations, or next steps.",
    icon: MessageCircle,
  },
  {
    title: "Book A Show",
    text: "Schedule a Water Awareness conversation for yourself, family, or group.",
    icon: CalendarClock,
  },
  {
    title: "Explore A Role",
    text: "Learn about becoming a Hydration Specialist or Wellness Advocate.",
    icon: Send,
  },
];

export function AboutContactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-pearl py-24" id="contact">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-lagoon/12 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[.28em] text-lagoon">Contact US</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-marine sm:text-6xl">Let Us Help You Take The Next Step</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you want to ask a question, attend a Water Awareness Show,
            or learn about sharing the H2Systems message, this is the best place
            to start the conversation.
          </p>
        </div>

        <div className="relative mt-12 max-w-full overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-clean sm:rounded-[3rem]">
          <div className="grid min-w-0 lg:grid-cols-[.95fr_1.05fr]">
            <div className="relative min-w-0 overflow-hidden bg-marine text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(6,214,160,0.22),transparent_30%),radial-gradient(circle_at_90%_75%,rgba(17,138,178,0.34),transparent_36%),linear-gradient(135deg,#031822_0%,#073B4C_54%,#0a5f7a_100%)]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />
              <div className="relative flex min-h-0 flex-col p-4 sm:p-8 lg:min-h-[640px] lg:p-10">
                <div className="max-w-full overflow-hidden rounded-[1.5rem] border border-cyan-200/25 bg-white/10 p-1.5 shadow-[0_24px_70px_rgba(2,8,23,0.22)] backdrop-blur sm:rounded-[2rem] sm:p-2">
                  <img
                    alt="Contact H2Systems for water awareness information"
                    className="h-auto w-full max-w-full rounded-[1.25rem] object-contain sm:rounded-[1.65rem]"
                    src={contactImage}
                  />
                </div>

                <div className="mt-8 grid gap-4">
                  {contactOptions.map((option) => (
                    <ContactOptionCard key={option.title} option={option} />
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <div className="rounded-[1.75rem] border border-amber-200/70 bg-amber-50 p-5 text-marine shadow-[0_18px_45px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-clean">
                    <p className="text-xl font-black">Prefer a quick call?</p>
                    <p className="mt-2 leading-7 text-slate-700">
                      Send a message and we can help point you to the right
                      presentation, contact, or appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 bg-white p-4 sm:p-8 lg:p-10">
              <ProspectCaptureForm
                description="Tell us what you are interested in and we will help you find the right next step."
                formContext="about-contact"
                interestOptions={[
                  {
                    label: "Attending a Water Awareness Show",
                    value: "Attending a Water Awareness Show",
                  },
                  {
                    label: "Becoming a Hydration Specialist",
                    value: "Becoming a Hydration Specialist",
                  },
                  {
                    label: "Becoming a Wellness Advocate",
                    value: "Becoming a Wellness Advocate",
                  },
                  {
                    label: "Learning about the H2 water machine",
                    value: "Learning about the H2 water machine",
                  },
                ]}
                messagePlaceholder="How can we help?"
                source="website"
                title="Start Here"
                trackingSource="about-contact"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Mail, label: "info@molecularh2water.com" },
                  { icon: Phone, label: "(000) 000-0000" },
                  { icon: MapPin, label: "Your City, State" },
                ].map((item) => (
                  <ContactInfoCard item={item} key={item.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactOptionCard({
  option,
}: {
  option: { icon: LucideIcon; text: string; title: string };
}) {
  const Icon = option.icon;

  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-aqua/45 hover:bg-white/15">
      <div className="flex gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aqua/15 text-aqua transition group-hover:bg-aqua group-hover:text-marine">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-black">{option.title}</h3>
          <p className="mt-1 text-sm font-semibold leading-6 text-cyan-50/78">
            {option.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function ContactInfoCard({
  item,
}: {
  item: { icon: LucideIcon; label: string };
}) {
  const Icon = item.icon;

  return (
    <div className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-lagoon/30 hover:bg-ice hover:shadow-clean">
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-cyan-50 text-lagoon">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 break-words text-sm font-black text-marine">
        {item.label}
      </p>
    </div>
  );
}
