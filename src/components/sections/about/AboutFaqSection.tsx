import { useEffect, useState } from "react";
import edwinExplainingImage from "../../../assets/images/edwinexplaining.jpg";
import { fetchPublishedFaqs, getFallbackFaqs, type FaqItem } from "../../../lib/faqs";
import { RichText } from "../../elements/RichText";
import { ChevronDown } from "lucide-react";

export function AboutFaqSection() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [faqs, setFaqs] = useState<FaqItem[]>(() => getFallbackFaqs());

  useEffect(() => {
    const controller = new AbortController();

    async function loadFaqs() {
      try {
        const publishedFaqs = await fetchPublishedFaqs(controller.signal);

        if (publishedFaqs.length > 0) {
          setFaqs(publishedFaqs);
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Unable to load FAQs from the API.", error);
      }
    }

    void loadFaqs();

    return () => controller.abort();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pearl via-ice to-white py-24" id="faq">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-aqua/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-lagoon/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[.28em] text-lagoon">FAQs</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-marine sm:text-6xl">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] bg-marine text-white shadow-clean sm:rounded-[2.25rem] lg:min-h-[1080px]">
            <div className="relative">
              <img
                alt="Hydrogen water educator explaining FAQ topics"
                className="h-[430px] w-full object-cover object-[center_12%] sm:h-[560px] lg:h-[740px]"
                src={edwinExplainingImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-2 pt-28 sm:px-7 sm:pb-3 sm:pt-32">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Hydrogen Water Questions, Answered Clearly
                </h2>
              </div>
            </div>
            <div className="p-6 pt-4 sm:p-7 sm:pt-5">
              <p className="text-base leading-7 text-cyan-50/84 sm:text-lg">
                These answers explain molecular hydrogen, timing, safety, concentration, and machine education in plain language for presentation guests and families.
              </p>
              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <p className="font-black text-white">Simple, responsible answers</p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/74">
                  Tap any question to expand the answer. The language stays educational, practical, and easy to share during a Water Awareness conversation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article
                  className={`overflow-hidden rounded-[1.5rem] border transition ${isOpen ? "border-lagoon/35 bg-white shadow-clean" : "border-cyan-100 bg-white/80 shadow-sm hover:-translate-y-0.5 hover:border-lagoon/25 hover:bg-white hover:shadow-clean"}`}
                  key={faq.id ?? faq.question}
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenFaq((current) => (current === index ? -1 : index))}
                    type="button"
                  >
                    <span className="flex min-w-0 items-start gap-4">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-black ${isOpen ? "bg-marine text-aqua" : "bg-ice text-lagoon"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-black leading-6 text-marine sm:text-lg">{faq.question}</span>
                    </span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-aqua text-marine" : "bg-ice text-marine"}`}>
                      <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} strokeWidth={2.5} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-cyan-100 bg-gradient-to-b from-white to-ice/60 px-5 pb-6 pt-5 sm:px-6">
                      <RichText className="text-base leading-8 text-slate-700 [&_p+_p]:mt-4" html={faq.answer} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
