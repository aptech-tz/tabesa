import Image from "next/image";

export default function Mentorship() {
  return (
    <section id="mentorship" className="relative overflow-hidden bg-slate-950 text-white">
      <Image
        src="/mentorship.jpg"
        alt="Mentorship program"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-slate-950/15" />

      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl items-center px-6 py-20 sm:px-10 lg:min-h-[40rem]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
            Guided growth
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Mentorship Program
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-100 sm:text-lg">
            Get connected with experienced mentors who can guide your academic,
            professional, and innovation journey. Whether you want to receive
            support or provide guidance to the next generation of biomedical
            engineers, this program creates space for learning, confidence, and
            meaningful connection.
          </p>
          <a
            href="#join-mentorship"
            className="mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
          >
            Join now
          </a>
        </div>
      </div>
    </section>
  );
}
