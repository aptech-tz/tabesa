import Link from "next/link";

type UserRole = "student" | "alumni";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const profileByRole: Record<
  UserRole,
  {
    name: string;
    course: string;
    feeStatus: string;
    mentorStatus: string;
  }
> = {
  student: {
    name: "Amina Joseph",
    course: "Biomedical Engineering",
    feeStatus: "Paid",
    mentorStatus: "Application in progress",
  },
  alumni: {
    name: "Daniel Msuya",
    course: "Biomedical Engineering Alumni",
    feeStatus: "Cleared",
    mentorStatus: "Assigned as mentor",
  },
};

const uploadedInnovations = [
  {
    title: "Smart Infusion Pump Monitor",
    status: "Under review",
    date: "Uploaded May 2, 2026",
  },
  {
    title: "Low-cost Sterilizer Tracker",
    status: "Published",
    date: "Uploaded Apr 18, 2026",
  },
];

const activeChallenges = [
  {
    title: "Biomedical Design Sprint",
    stage: "Prototype submission",
    deadline: "Due May 30, 2026",
  },
  {
    title: "Research to Impact Challenge",
    stage: "Team formation",
    deadline: "Due Jun 14, 2026",
  },
];

const registeredTraining = [
  {
    title: "Medical Equipment Preventive Maintenance",
    date: "May 24, 2026",
    format: "Seminar",
  },
  {
    title: "Clinical Engineering Career Readiness",
    date: "Jun 8, 2026",
    format: "Training",
  },
];

const opportunities = [
  {
    title: "Biomedical Innovation Scholarship",
    category: "Scholarship",
    deadline: "Closes Jun 20, 2026",
  },
  {
    title: "Hospital Engineering Internship",
    category: "Internship",
    deadline: "Closes Jun 28, 2026",
  },
  {
    title: "Student Research Seed Grant",
    category: "Research grant",
    deadline: "Closes Jul 10, 2026",
  },
  {
    title: "African Health Tech Fellowship",
    category: "Fellowship",
    deadline: "Closes Jul 31, 2026",
  },
];

const updates = [
  {
    title: "TABESA annual innovation showcase announced",
    category: "Announcement",
  },
  {
    title: "Alumni team launches hospital asset tracking pilot",
    category: "Success story",
  },
  {
    title: "How AI is shaping clinical engineering workflows",
    category: "Industry insight",
  },
  {
    title: "Highlights from the Dar es Salaam biomedical forum",
    category: "Event highlight",
  },
];

function DashboardSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-t border-slate-200 py-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ListItem({
  title,
  meta,
  detail,
  action,
}: Readonly<{
  title: string;
  meta: string;
  detail?: string;
  action?: string;
}>) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-sky-700">{meta}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{title}</h3>
          {detail ? (
            <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
          ) : null}
        </div>
        {action ? (
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-700"
          >
            {action}
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default async function DashboardPage({
  searchParams,
}: Readonly<{
  searchParams: SearchParams;
}>) {
  const requestedRole = (await searchParams).role;
  const role: UserRole = requestedRole === "alumni" ? "alumni" : "student";
  const profile = profileByRole[role];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold text-sky-700 transition hover:text-sky-900"
            >
              Back to home
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              {role} dashboard
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Welcome, {profile.name}
            </h1>
          </div>

          <Link
            href="/auth?mode=login"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Logout
          </Link>
        </header>

        <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-500">Name</p>
            <p className="mt-2 text-lg font-semibold">{profile.name}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Course</p>
            <p className="mt-2 text-lg font-semibold">{profile.course}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-500">Fee status</p>
            <p className="mt-2 text-lg font-semibold text-emerald-700">
              {profile.feeStatus}
            </p>
          </div>
        </section>

        <DashboardSection title="Innovation that you have uploaded">
          <div className="grid gap-4">
            {uploadedInnovations.map((innovation) => (
              <ListItem
                key={innovation.title}
                title={innovation.title}
                meta={innovation.status}
                detail={innovation.date}
                action="View"
              />
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Innovation challenges you are currently in">
          <div className="grid gap-4">
            {activeChallenges.map((challenge) => (
              <ListItem
                key={challenge.title}
                title={challenge.title}
                meta={challenge.stage}
                detail={challenge.deadline}
                action="Continue"
              />
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Training and seminars you have registered">
          <div className="grid gap-4">
            {registeredTraining.map((training) => (
              <ListItem
                key={training.title}
                title={training.title}
                meta={training.format}
                detail={training.date}
                action="Details"
              />
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Mentor and mentee application">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">
              {profile.mentorStatus}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">
              Apply for mentor mentee
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Track whether you have been assigned to a mentor or mentee, or
              whether the application is still being processed.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              {profile.mentorStatus.includes("Assigned")
                ? "View assignment"
                : "Apply now"}
            </button>
          </div>
        </DashboardSection>

        <DashboardSection title="Opportunities portal">
          <div className="grid gap-4">
            {opportunities.map((opportunity) => (
              <ListItem
                key={opportunity.title}
                title={opportunity.title}
                meta={opportunity.category}
                detail={opportunity.deadline}
                action="Apply"
              />
            ))}
          </div>
        </DashboardSection>

        <DashboardSection title="Updates">
          <div className="grid gap-4">
            {updates.map((update) => (
              <ListItem
                key={update.title}
                title={update.title}
                meta={update.category}
                action="Read"
              />
            ))}
          </div>
        </DashboardSection>
      </div>
    </main>
  );
}
