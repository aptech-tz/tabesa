"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur transition-all duration-500 dark:border-zinc-800 dark:bg-black/80 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <Link href="#about" className="transition hover:text-zinc-950 dark:hover:text-white">
            About Us
          </Link>
          <Link href="#opportunities" className="transition hover:text-zinc-950 dark:hover:text-white">
            Opportunities
          </Link>
          <Link href="#connections" className="transition hover:text-zinc-950 dark:hover:text-white">
            Connections
          </Link>
        </div>
      </div>
    </nav>
  );
}
