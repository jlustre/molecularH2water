import { CtaButton } from "../ui/CtaButton";

export function CtaSection() {
  return (
    <section className="mesh-bg py-24" id="cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-marine shadow-clean">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-8 text-white lg:p-12">
              <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">
                Final CTA
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                Invite Someone You Care About to Learn
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/85">
                A Water Awareness Presentation gives families a simple way to
                understand molecular hydrogen water, oxidative stress, and healthier
                hydration routines.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <CtaButton href="mailto:info@example.com" variant="outline">
                  Request an Invitation
                </CtaButton>
                <CtaButton href="#resources" variant="light">
                  Explore Resources
                </CtaButton>
              </div>
            </div>

            <div className="grid min-h-[360px] place-items-center bg-gradient-to-br from-lagoon to-aqua p-8 text-center text-marine">
              <div className="rounded-[2rem] bg-white/80 p-8 shadow-clean backdrop-blur">
                <p className="text-6xl font-black">H2</p>
                <p className="mt-3 text-xl font-black">Water Awareness</p>
                <p className="mt-2 text-sm text-slate-600">
                  Presentation image or video thumbnail placeholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
