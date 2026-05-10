"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "/aboutus/about (1).jpg",
  "/aboutus/about (2).jpg",
  "/aboutus/about (3).jpg",
  "/aboutus/about (6).jpg",
  "/aboutus/about (7).jpg",
  "/aboutus/about (8).jpg",
  "/aboutus/about (9).jpg",
];

export default function About() {
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileImageTrackRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      const track = isLargeScreen
        ? desktopTrackRef.current
        : mobileImageTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));

      const imageIndex = Math.min(
        images.length - 1,
        Math.floor(progress * images.length),
      );

      setCurrentImage((previousImage) =>
        previousImage === imageIndex ? previousImage : imageIndex,
      );
    };

    window.addEventListener("scroll", updateImage, { passive: true });
    window.addEventListener("resize", updateImage);
    updateImage();

    return () => {
      window.removeEventListener("scroll", updateImage);
      window.removeEventListener("resize", updateImage);
    };
  }, []);

  const textBlock = (
    <div className="text-center lg:text-left">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
        About us
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        A home for Biomedical Engineering ambition.
      </h2>
      <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
        Tabesa brings students and alumni together to learn, collaborate, and
        build meaningful pathways in Biomedical Engineering. It is a place for
        shared knowledge, practical growth, and connections that keep moving
        beyond the classroom.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
        From academic support to professional networking, the community helps
        members discover opportunities, exchange experience, and push BME ideas
        toward real-world impact.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
        <Link
          href="/auth?role=student&mode=signup"
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
        >
          Join as Student
        </Link>
        <Link
          href="/auth?role=alumni&mode=signup"
          className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
        >
          Join as Alumni
        </Link>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-slate-900/15 sm:max-w-md lg:max-w-lg lg:rounded-[2rem]">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Tabesa community moment ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 512px, (min-width: 640px) 448px, calc(100vw - 48px)"
          className={`object-cover transition-opacity duration-700 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          preload={index === 0}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-black/10 lg:rounded-[2rem]" />
    </div>
  );

  return (
    <section id="about" className="relative bg-slate-50 text-slate-950">
      <div className="lg:hidden">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-20 sm:px-10">
          {textBlock}
        </div>

        <div ref={mobileImageTrackRef} className="relative min-h-[360vh]">
          <div className="sticky top-20 px-6 py-0 sm:top-16 sm:px-10">
            {imageBlock}
          </div>
        </div>
      </div>

      <div ref={desktopTrackRef} className="relative hidden min-h-[1000vh] lg:block">
        <div className="sticky top-0 flex min-h-screen items-center py-24">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-[0.95fr_0.85fr] items-center gap-16 px-10">
            {textBlock}
            {imageBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
