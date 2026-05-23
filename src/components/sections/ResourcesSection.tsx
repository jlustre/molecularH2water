import { useMemo, useState } from "react";
import {
  resourceCategories,
  resources,
  type ResourceCategory,
} from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";

export function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") {
      return resources;
    }

    return resources.filter((resource) => resource.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="dark-mesh py-24 text-white" id="resources">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          dark
          description="Videos, links, documents, studies, testimonials, FAQs, and presentation materials organized in one place."
          eyebrow="Resources"
          title="Everything Your Audience Needs to Learn More"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {resourceCategories.map((category) => (
            <button
              className={`rounded-full px-5 py-3 text-sm font-black backdrop-blur ${
                activeCategory === category
                  ? "bg-aqua text-marine"
                  : "border border-white/15 bg-white/10 text-white"
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((item) => (
            <article
              className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              key={item.title}
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-sm font-black text-marine">
                {item.icon}
              </div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-aqua">
                {item.category}
              </p>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cyan-50/80">
                {item.description}
              </p>
              <a
                className="mt-6 inline-flex font-black text-aqua hover:text-white"
                href="#resources"
              >
                View Resource -&gt;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
