import Image from "next/image";

const innovations = [
  {
    title: "Bilimeasure",
    student: "Abubakar Mathias",
    university: "Muhas",
    image: "/bilimeasure.jpeg",
    description:
      "A biomedical innovation device that helps to measure bilirubin level to jaundiced neonates non-invasively.",
  },
  {
    title: "autostainer",
    student: "Innocent Tesha",
    university: "Muhas",
    image: "/autostainer.png",
    description:
      "A laboratory innovation device that automates the staining process for laboratory technicians in order to save time.",
  },
  {
    title: "Wireless Temperature and heartrate measure",
    student: "Amina S. Juma",
    university: "DIT",
    image: "/wirelessInnovation.jpg",
    description:
      "An early-stage innovation that helps nurses to measure temperature and heartrate of their patients in ward from their nursing station.",
  },
];

const challenges = [
  {
    title: "Chia Innovation Awards",
    description:
      "Looking fund for your idea? Submit your innovative idea to win 5 Million Tanzania Shillings",
    image: "/TanzaniaHealthSummit.jpg",
    link: "https://ths.or.tz/chia-form/",
  },
  {
    title: "Win and Learn",
    description:
      "Present bold ideas that improve patient care, hospital workflows, or community health access at win and learn event.",
    image: "/win&Learn.jpg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdc9aCDt1tG5MsljzhJ8y2qgQB4rrd6Ktflo_9GrKavFf8d8w/viewform?pli=1",
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="bg-white px-6 py-20 text-slate-950 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Innovation Hub
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            Explore student-led biomedical ideas, prototypes, and collaborative
            projects shaped to solve real challenges in healthcare and
            engineering practice.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Recently uploaded innovations
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {innovations.map((innovation) => (
              <article
                key={innovation.title}
                className="group relative min-h-[28rem] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="absolute inset-x-0 top-0 h-56 overflow-hidden transition-all duration-500 ease-out group-hover:h-full">
                  <Image
                    src={innovation.image}
                    alt={innovation.title}
                    fill
                    sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/0 via-slate-950/0 to-slate-950/10 transition duration-500 group-hover:from-slate-950/75 group-hover:via-slate-950/35 group-hover:to-slate-950/20" />

                <div className="relative z-10 px-6 pb-6 pt-64">
                  <h4 className="text-xl font-semibold text-slate-950 transition-colors duration-500 group-hover:text-white">
                    {innovation.title}
                  </h4>
                  <p className="mt-2 text-sm font-semibold text-sky-700 transition-colors duration-500 group-hover:text-sky-200">
                    {innovation.student}
                  </p>
                  <p className="text-sm text-slate-500 transition-colors duration-500 group-hover:text-slate-200">
                    {innovation.university}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-100">
                    {innovation.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Innovation challenges
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {challenges.map((challenge) => (
              <article
                key={challenge.title}
                className="group relative min-h-[26rem] overflow-hidden rounded-[1.25rem] shadow-sm"
              >
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-slate-50/70 to-slate-50/10" />

                <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-6 text-slate-950">
                  <h4 className="text-2xl font-semibold leading-tight">
                    {challenge.title}
                  </h4>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {challenge.description}
                  </p>
                </div>

                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/auth?mode=login"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Upload your Innovation
          </a>
        </div>
      </div>
    </section>
  );
}
