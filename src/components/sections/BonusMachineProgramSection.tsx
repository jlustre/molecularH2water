

import bonusMachineImage from "../../assets/images/bonusmachine.jpg";

export function BonusMachineProgramSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fffbea_50%,#ffffff_100%)] py-24"
      id="bonus-machine-program"
    >
      <div className="pointer-events-none absolute -left-28 top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-amber-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* Image and cards on the left */}
          <div>
            <div className="overflow-hidden rounded-[2.25rem] border border-amber-200 bg-white shadow-clean">
              <figure>
                <img
                  alt="Bonus Machine"
                  className="h-auto w-full object-contain object-center"
                  src={bonusMachineImage}
                />
              </figure>
            </div>
            {/* 3 Cards Below Image */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Keep</span>
                </div>
                <p className="mt-3 font-black text-marine">You Can Keep It</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Use your bonus machine at home, at work, or as a backup for your family’s hydration needs.</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Sell</span>
                </div>
                <p className="mt-3 font-black text-marine">You Can Sell It</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Turn your bonus machine into extra income by selling it to someone who wants to start their own wellness journey.</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-200/40 text-marine">
                  <span className="text-xl font-black">Gift</span>
                </div>
                <p className="mt-3 font-black text-marine">Give to Your Loved Ones</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">Share the gift of better hydration and wellness with family or friends who matter most to you.</p>
              </div>
            </div>
          </div>

          {/* Main Content on the right */}
          <div>
            <p className="inline-flex rounded-full border border-amber-200/35 bg-white/85 px-5 py-2 text-sm font-black uppercase tracking-[.26em] text-amber-600 shadow-sm">
              Bonus Machine Program
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight text-marine sm:text-6xl">
              Unlock Extra Rewards With The Bonus Machine Program
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Take your Hydration Specialist journey to the next level! The Bonus Machine Program offers you the chance to earn an additional machine through special incentives and performance milestones. Whether you’re just starting or already building momentum, this program is designed to reward your dedication and growth.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border-2 border-amber-200 bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-marine shadow-[0_8px_18px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
