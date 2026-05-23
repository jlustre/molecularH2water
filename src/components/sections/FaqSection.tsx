import { useState } from "react";
import { faqs } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" eyebrow="FAQ" title="Common Questions" />

        <div className="mt-12 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-clean">
          {faqs.map((faq, index) => (
            <div className="p-6" key={faq.question}>
              <button
                className="flex w-full items-center justify-between gap-5 text-left"
                onClick={() => setOpenFaq((current) => (current === index ? -1 : index))}
                type="button"
              >
                <span className="text-lg font-black text-marine">{faq.question}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ice font-black text-marine">
                  {openFaq === index ? "-" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
