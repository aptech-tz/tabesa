import Image from "next/image";

const innovations = [
  {
    title: "Student Device Showcase",
    description:
      "A practical prototype built to help healthcare teams monitor essential biomedical equipment with better confidence.",
  },
  {
    title: "Clinical Ideas Lab",
    description:
      "A fresh concept focused on turning classroom research into useful tools for hospitals, labs, and training spaces.",
  },
  {
    title: "Community Health Prototype",
    description:
      "An early-stage innovation designed to support accessible care through thoughtful engineering and student collaboration.",
  },
];

const challenges = [
  {
    title: "Biomedical Design Sprint",
    description:
      "Develop practical solutions for real clinical needs through fast prototyping, teamwork, and expert feedback.",
  },
  {
    title: "Health Technology Pitch",
    description:
      "Present bold ideas that improve patient care, hospital workflows, or community health access.",
  },
  {
    title: "Research to Impact Challenge",
    description:
      "Transform academic research into usable products, services, or systems that can support healthcare delivery.",
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
                    src="/innovation.jpg"
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
                  src="/innovationChallenge.jpg"
                  alt={challenge.title}
                  fill
                  sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/5" />

                <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-6 text-white">
                  <h4 className="text-2xl font-semibold leading-tight">
                    {challenge.title}
                  </h4>
                  <p className="mt-4 text-base leading-7 text-slate-100">
                    {challenge.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#upload-innovation"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Upload your Innovation
          </a>
        </div>
      </div>
    </section>
  );
}
