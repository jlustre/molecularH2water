const scheduleSteps = [
  {
    title: "Choose A Time",
    text: "Pick a time for a personal conversation, family presentation, or small group Water Awareness Show.",
  },
  {
    title: "Learn The Story",
    text: "Walk through oxidative stress, antioxidants, drinking-water choices, and molecular H2 water in a clear sequence.",
  },
  {
    title: "Ask Questions",
    text: "Discuss the technology, daily routine, machine features, and next steps without pressure or exaggerated claims.",
  },
];

export function AboutScheduleShowSection() {
  return (
    <section className="mesh-bg py-24" id="schedule-water-awareness-show">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-marine shadow-clean">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="p-8 text-white lg:p-12">
              <p className="text-sm font-black uppercase tracking-[.25em] text-aqua">Schedule/Attend Water Awareness Show</p>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Learn The Water Story In One Clear Presentation</h2>
              <p className="mt-6 text-lg leading-8 text-cyan-50/85">A Water Awareness Show is a simple, guided way to understand why water quality matters, how oxidative stress fits into the wellness conversation, and what makes molecular hydrogen water different from ordinary hydration choices.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a className="rounded-full bg-white px-8 py-4 text-center font-black text-marine shadow-xl transition hover:-translate-y-0.5" href="mailto:info@example.com">Request A Show</a>
                <a className="rounded-full border border-white/25 px-8 py-4 text-center font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10" href="/technology#hydrogen-water-machine">View Technology</a>
              </div>
            </div>
            <div className="grid gap-4 bg-gradient-to-br from-lagoon to-aqua p-6 lg:p-8">
              {scheduleSteps.map((step, index) => (
                <div className="rounded-[1.5rem] bg-white/90 p-6 text-marine shadow-sm backdrop-blur" key={step.title}>
                  <p className="text-xs font-black uppercase tracking-[.2em] text-lagoon">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
