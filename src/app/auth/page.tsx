"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type AuthMode = "login" | "signup";
type UserRole = "student" | "alumni";

const roles: Array<{
  value: UserRole;
  label: string;
  description: string;
}> = [
  {
    value: "student",
    label: "Student",
    description: "Access student learning, events, mentorship, and community updates.",
  },
  {
    value: "alumni",
    label: "Alumni",
    description: "Connect with graduates, mentorship opportunities, and alumni services.",
  },
];

const modes: Array<{ value: AuthMode; label: string }> = [
  { value: "login", label: "Sign in" },
  { value: "signup", label: "Sign up" },
];

function getInitialMode(): AuthMode {
  if (typeof window === "undefined") return "signup";

  const mode = new URLSearchParams(window.location.search).get("mode");
  return mode === "login" || mode === "signup" ? mode : "signup";
}

function getInitialRole(): UserRole {
  if (typeof window === "undefined") return "student";

  const role = new URLSearchParams(window.location.search).get("role");
  return role === "student" || role === "alumni" ? role : "student";
}

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>(getInitialMode);
  const [role, setRole] = useState<UserRole>(getInitialRole);

  const activeRole = useMemo(
    () => roles.find((option) => option.value === role) ?? roles[0],
    [role],
  );

  const heading =
    mode === "login"
      ? `Sign in as ${activeRole.label}`
      : `Create ${activeRole.label} account`;

  const submitLabel =
    mode === "login"
      ? `Sign in as ${activeRole.label}`
      : `Sign up as ${activeRole.label}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 sm:px-10 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <section className="space-y-8">
            <Link
              href="/"
              className="inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-900"
            >
              Back to home
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                TABESA access
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Choose your path into the community.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                Switch between student and alumni services, then choose whether
                you want to sign in or create a new account.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:max-w-xl">
              {roles.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setRole(option.value)}
                  className={`rounded-[1.25rem] border p-4 text-left transition ${
                    role === option.value
                      ? "border-sky-500 bg-sky-50 shadow-sm shadow-sky-900/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span className="text-base font-semibold">{option.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:p-6">
            <div className="grid grid-cols-2 rounded-full bg-slate-100 p-1">
              {modes.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setMode(option.value)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    mode === option.value
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                {activeRole.label} services
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                {heading}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              {mode === "signup" ? (
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Full name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </label>
              ) : null}

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Password
                <input
                  type="password"
                  name="password"
                  autoComplete={
                    mode === "login" ? "current-password" : "new-password"
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white"
                  placeholder="Enter your password"
                />
              </label>

              {mode === "signup" ? (
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {role === "student" ? "Institution" : "Current workplace"}
                  <input
                    type="text"
                    name="affiliation"
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white"
                    placeholder={
                      role === "student"
                        ? "Your university or college"
                        : "Company, hospital, or organization"
                    }
                  />
                </label>
              ) : null}

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {submitLabel}
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
              <button
                type="button"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="font-semibold text-sky-700 transition hover:text-sky-900"
              >
                {mode === "login"
                  ? "Need an account? Sign up"
                  : "Already registered? Sign in"}
              </button>
              <button
                type="button"
                onClick={() => setRole(role === "student" ? "alumni" : "student")}
                className="font-semibold text-slate-800 transition hover:text-slate-950"
              >
                Switch to {role === "student" ? "Alumni" : "Student"}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
