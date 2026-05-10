import Image from "next/image";

const trainings = [
  {
    title: "Biomedical Innovation Workshop",
    description:
      "A practical session for students to explore prototyping, clinical problem solving, and healthcare technology design.",
    date: "18 June 2026",
    time: "9:00 AM - 1:00 PM",
    location: "College of Health Sciences, Dar es Salaam",
  },
  {
    title: "Medical Equipment Training",
    description:
      "Hands-on training focused on equipment safety, preventive maintenance, and real hospital engineering workflows.",
    date: "25 July 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Muhimbili Biomedical Engineering Lab",
  },
  {
    title: "BME Students Conference",
    description:
      "A community gathering for presentations, networking, and conversations around the future of biomedical engineering.",
    date: "14 August 2026",
    time: "8:30 AM - 5:00 PM",
    location: "Julius Nyerere International Convention Centre",
  },
];

export default function Training() {
  return (
    <section id="training" className="bg-white px-6 py-20 text-slate-950 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Training programs
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trainings, Workshops and Conferences
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            Join practical learning sessions, focused workshops, and community
            conferences created to strengthen biomedical engineering skills,
            professional networks, and real-world readiness.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {trainings.map((training) => (
            <article
              key={training.title}
              className="group relative min-h-[32rem] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm shadow-slate-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="absolute inset-x-3 top-3 h-56 overflow-hidden rounded-[1.25rem] transition-all duration-500 ease-out group-hover:inset-3 group-hover:h-[calc(100%-1.5rem)]">
                <Image
                  src="/training.jpg"
                  alt={training.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-3 rounded-[1.25rem] bg-gradient-to-t from-slate-950/0 via-slate-950/0 to-slate-950/10 transition duration-500 group-hover:from-slate-950/85 group-hover:via-slate-950/35 group-hover:to-slate-950/10" />

              <div className="relative z-10 px-3 pb-4 pt-64">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-500 group-hover:text-white">
                  {training.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-100">
                  {training.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-slate-700 transition duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur">
                    <span className="font-semibold text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                      Date
                    </span>
                    <span>{training.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-slate-700 transition duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur">
                    <span className="font-semibold text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                      Time
                    </span>
                    <span>{training.time}</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-3 text-base leading-7 text-slate-700 transition-colors duration-500 group-hover:text-slate-100">
                  <span className="font-semibold text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                    Location
                  </span>
                  <span>{training.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
