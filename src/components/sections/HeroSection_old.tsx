import { heroSteps } from "../../data/siteContent";
import { CtaButton } from "../ui/CtaButton";

export function HeroSection() {
  return (
    <section className="mesh-bg relative overflow-hidden" id="home">
      <span className="float-bubble left-[6%] top-28 h-20 w-20" />
      <span
        className="float-bubble right-[12%] top-40 h-12 w-12"
        style={{ animationDelay: "1.3s" }}
      />
      <span
        className="float-bubble bottom-24 left-[45%] h-16 w-16"
        style={{ animationDelay: "2.4s" }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-lagoon/20 bg-white px-4 py-2 text-sm font-black text-marine shadow-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-aqua/15 text-aqua">
              o
            </span>
            Public wellness education platform
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-marine sm:text-6xl lg:text-7xl">
            A Clearer Way to Explain Hydrogen Water Wellness
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Give your audience a beautiful, simple, and compliant introduction
            to molecular hydrogen water, oxidative stress awareness, and
            healthier hydration habits.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaButton href="#cta" variant="primary">
              Attend a Water Awareness Presentation
            </CtaButton>
            <CtaButton href="#foundations" variant="outline">
              Explore the Foundations
            </CtaButton>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroSteps.map((step) => (
              <div
                className="rounded-3xl bg-white p-5 shadow-sm"
                key={step.number}
              >
                <p className="text-3xl font-black text-lagoon">{step.number}</p>
                <p className="mt-2 font-black text-marine">{step.title}</p>
                <p className="mt-1 text-sm text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 rounded-[3rem] bg-lagoon/10 blur-3xl" />
          <div className="relative rounded-[3rem] bg-white p-5 shadow-clean">
            <div className="water-line rounded-[2.5rem] border border-lagoon/10 bg-ice p-8">
              <div className="flex min-h-[500px] flex-col justify-between rounded-[2rem] bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.22em] text-lagoon">
                      Technology Preview
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-marine">
                      Hydrogen-Rich Water Machine
                    </h2>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-marine text-lg font-black text-white">
                    H2
                  </div>
                </div>

                <div className="my-8 grid place-items-center">
                  <div className="relative h-72 w-48 rounded-[2.5rem] border border-slate-200 bg-gradient-to-b from-white to-ice shadow-clean">
                    <div className="absolute left-1/2 top-8 h-10 w-20 -translate-x-1/2 rounded-2xl bg-marine" />
                    <div className="absolute left-1/2 top-24 grid h-28 w-28 -translate-x-1/2 place-items-center rounded-full bg-lagoon/10 text-4xl font-black text-lagoon">
                      H2
                    </div>
                    <div className="absolute bottom-8 left-1/2 h-12 w-28 -translate-x-1/2 rounded-full bg-aqua/20" />
                  </div>
                </div>

                <div className="rounded-3xl bg-marine p-5 text-white">
                  <p className="font-black">
                    Replace this visual with your exact machine photo.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cyan-50/80">
                    Add a clear glass of water, bubbles, stainless spout, and
                    lifestyle image for stronger conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
