"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const firstPhrase = "BME to the Moon";
const fullPhrase = "Tanzania Biomedical Engineering Students Association";

type HeroAnimationPhase =
  | "firstTyping"
  | "firstPause"
  | "erasing"
  | "secondTyping"
  | "highlight"
  | "final";

function HighlightedAssociation() {
  return (
    <>
      {fullPhrase.split(" ").map((word, index) => (
        <span key={word}>
          {index > 0 ? " " : ""}
          <span className="text-sky-300">{word.charAt(0)}</span>
          {word.slice(1)}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [phase, setPhase] = useState<HeroAnimationPhase>("firstTyping");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "firstTyping") {
      if (typedText.length < firstPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(firstPhrase.slice(0, typedText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => setPhase("firstPause"), 900);
      }
    }

    if (phase === "firstPause") {
      timeout = setTimeout(() => setPhase("erasing"), 550);
    }

    if (phase === "erasing") {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText((currentText) => currentText.slice(0, -1));
        }, 35);
      } else {
        timeout = setTimeout(() => setPhase("secondTyping"), 250);
      }
    }

    if (phase === "secondTyping") {
      if (typedText.length < fullPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(fullPhrase.slice(0, typedText.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => setPhase("highlight"), 800);
      }
    }

    if (phase === "highlight") {
      timeout = setTimeout(() => setPhase("final"), 1500);
    }

    if (phase === "final") {
      timeout = setTimeout(() => {
        setTypedText("");
        setPhase("firstTyping");
      }, 1600);
    }

    return () => clearTimeout(timeout);
  }, [phase, typedText]);

  const showCursor =
    phase === "firstTyping" || phase === "erasing" || phase === "secondTyping";

  return (
    <section className="fixed inset-0 z-0 overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center text-white sm:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-200/90">
          Welcome to Tabesa
        </p>
        <h1 className="flex min-h-[9rem] max-w-5xl items-center justify-center text-4xl font-semibold tracking-tight text-white sm:min-h-[10rem] sm:text-6xl lg:text-7xl">
          <span className="relative block">
            <span
              className={`block transition-all duration-700 ${
                phase === "final"
                  ? "-translate-y-8 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {phase === "highlight" ? (
                <HighlightedAssociation />
              ) : (
                typedText || "\u00a0"
              )}
              {showCursor ? (
                <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 animate-pulse bg-sky-200" />
              ) : null}
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center text-sky-300 transition-all duration-700 ${
                phase === "final"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              TABESA
            </span>
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200/90 sm:text-xl">
          Launch your journey with the BME community — connect as a student or alumni and take your ambitions to the next orbit.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:flex-row">
          <a
            href="#student"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-slate-100 sm:w-auto"
          >
            Join as Student
          </a>
          <a
            href="#alumni"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/90 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            Join as Alumni
          </a>
        </div>
      </div>
    </section>
  );
}
