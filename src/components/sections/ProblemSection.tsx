import fatigueImage from "../../assets/images/theproblem/fatigue.jpg";
import forgetfulnessImage from "../../assets/images/theproblem/forgetfullness.jpg";
import inflammationImage from "../../assets/images/theproblem/inflammation.jpg";
import lowImmuneImage from "../../assets/images/theproblem/lowimmune.jpg";
import poorSleepImage from "../../assets/images/theproblem/poorsleep.jpg";
import prematureAgingImage from "../../assets/images/theproblem/prematureaging.jpg";
import stomachDiscomfortImage from "../../assets/images/theproblem/stomachdiscomfort.jpg";
import stressImage from "../../assets/images/theproblem/stress.jpg";

type ProblemCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const problemCards: ProblemCard[] = [
  {
    title: "Fatigue & Low Energy",
    text: "Many people wake up tired, feel drained by midday, or struggle to find energy for family, work, or hobbies, even after a full night's sleep.",
    image: fatigueImage,
    alt: "Person experiencing fatigue and low energy",
  },
  {
    title: "Brain Fog & Focus Issues",
    text: "Difficulty concentrating, forgetfulness, and mental sluggishness are common complaints, making it hard to be productive or creative.",
    image: forgetfulnessImage,
    alt: "Person experiencing brain fog and focus issues",
  },
  {
    title: "Stress & Mood Swings",
    text: "Modern life brings constant stress, anxiety, and emotional ups and downs, impacting relationships and overall happiness.",
    image: stressImage,
    alt: "Person experiencing stress and mood swings",
  },
  {
    title: "Poor Sleep Quality",
    text: "Trouble falling asleep, staying asleep, or waking up refreshed is a widespread issue, affecting physical and mental health.",
    image: poorSleepImage,
    alt: "Person struggling with poor sleep quality",
  },
  {
    title: "Digestive Discomfort",
    text: "Bloating, irregularity, and stomach discomfort are increasingly common, often overlooked but deeply affecting daily comfort.",
    image: stomachDiscomfortImage,
    alt: "Person experiencing digestive discomfort",
  },
  {
    title: "Low Immunity & Frequent Illness",
    text: "Catching colds often, slow recovery, or feeling run down can signal the body is struggling to keep up with daily demands.",
    image: lowImmuneImage,
    alt: "Person experiencing low immunity and frequent illness",
  },
  {
    title: "Premature Aging",
    text: "Early wrinkles, loss of skin elasticity, and feeling older than your age are signs that the body may be aging faster than it should.",
    image: prematureAgingImage,
    alt: "Person noticing premature aging signs",
  },
  {
    title: "Inflammation",
    text: "Aches, pains, swelling, or chronic discomfort can be signs of underlying inflammation, which is often ignored but impacts daily life and long-term health.",
    image: inflammationImage,
    alt: "Person experiencing inflammation and discomfort",
  },
];

export function ProblemSection() {
  return (
    <section
      className="relative border-b border-slate-100 bg-white py-20 sm:py-28"
      id="problem"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[.25em] text-lagoon">
            Problem Awareness
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-marine sm:text-5xl">
            People Feel the Symptoms Before They Understand the Stressors
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <article
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-ice shadow-sm ring-1 ring-lagoon/10 transition hover:-translate-y-1 hover:shadow-lift"
              key={card.title}
            >
              <div className="grid aspect-[4/3] w-full place-items-center overflow-hidden bg-gradient-to-b from-white to-cyan-50 sm:aspect-[16/11] xl:aspect-[4/3]">
                <img
                  alt={card.alt}
                  className="block h-full w-full max-w-full object-contain"
                  decoding="async"
                  loading="lazy"
                  src={card.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-7 text-marine">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-marine via-slateblue to-lagoon p-[1px] shadow-clean">
          <div className="relative rounded-[calc(2rem-1px)] bg-white/95 px-6 py-8 text-center sm:px-10 sm:py-10">
            <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-lagoon to-aqua" />
            <p className="text-sm font-black uppercase tracking-[.22em] text-lagoon">
              Key Takeaway
            </p>
            <p className="mt-4 text-2xl font-black leading-9 text-marine sm:text-3xl sm:leading-10">
              These challenges are real, relatable, and often ignored.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Addressing them is the first step toward better wellness before we
              even mention the science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
