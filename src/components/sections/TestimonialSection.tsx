import { useState } from "react";
import { testimonials } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = testimonials[activeIndex];

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="Personal stories can help make the education feel real while staying grounded, responsible, and clear that individual experiences vary."
          eyebrow="Testimonials"
          title="Wellness Stories Start With Learning"
        />

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[3rem] bg-ice shadow-clean">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <div className="bg-lagoon p-8 text-white lg:p-10">
              <p className="text-sm font-black uppercase tracking-[.25em] text-cyan-100">
                Featured Story
              </p>
              <h3 className="mt-4 text-3xl font-black">
                Real conversations make wellness education easier to share
              </h3>
              <p className="mt-4 text-sm leading-7 text-cyan-50/85">
                A short story, family moment, or presentation reflection can
                help visitors understand why people are exploring
                hydrogen-rich water as part of a daily wellness routine.
              </p>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-2xl font-black leading-10 text-marine">
                {activeStory.quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-marine text-lg font-black text-white">
                  {activeStory.initials}
                </div>
                <div>
                  <p className="font-black text-marine">{activeStory.name}</p>
                  <p className="text-sm text-slate-500">{activeStory.role}</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-black text-marine hover:bg-pearl"
                  onClick={previous}
                  type="button"
                >
                  Previous
                </button>
                <button
                  className="rounded-full bg-marine px-5 py-3 font-black text-white hover:bg-lagoon"
                  onClick={next}
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
