import Image from "next/image";

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 448 512"
      className="h-3.5 w-3.5 shrink-0 fill-current"
    >
      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H64C28.7 64 0 92.7 0 128v48h448v-48c0-35.3-28.7-64-64-64h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H152V24zM448 224H0v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V224z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      className="h-3.5 w-3.5 shrink-0 fill-current"
    >
      <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zm24 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 384 512"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-current"
    >
      <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  );
}

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
              className="group relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-2.5 shadow-sm shadow-slate-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1rem] transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src="/training.jpg"
                  alt={training.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-2.5 overflow-hidden rounded-[1rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Image
                  src="/training.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, calc(100vw - 48px)"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-2.5 rounded-[1rem] bg-gradient-to-t from-slate-950/0 via-slate-950/0 to-slate-950/10 transition duration-500 group-hover:from-slate-950/85 group-hover:via-slate-950/35 group-hover:to-slate-950/10" />

              <div className="relative z-10 px-2 pb-2 pt-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-500 group-hover:text-white lg:text-lg xl:text-xl">
                  {training.title}
                </h3>
                <p className="mt-2 overflow-hidden text-sm leading-5 text-slate-600 transition-colors duration-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] group-hover:text-slate-100">
                  {training.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs text-slate-700 transition duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur">
                    <span className="text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                      <CalendarIcon />
                    </span>
                    <span>{training.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs text-slate-700 transition duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur">
                    <span className="text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                      <ClockIcon />
                    </span>
                    <span>{training.time}</span>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-xs leading-5 text-slate-700 transition-colors duration-500 group-hover:text-slate-100 sm:text-sm lg:text-xs xl:text-sm">
                  <span className="text-sky-800 transition-colors duration-500 group-hover:text-sky-100">
                    <LocationIcon />
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
