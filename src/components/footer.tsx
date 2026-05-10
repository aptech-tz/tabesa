import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About us", href: "#about" },
  { label: "Innovation", href: "#innovation" },
  { label: "Training", href: "#training" },
  { label: "Mentorship", href: "#mentorship" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <Image
        src="/hero.jpg"
        alt="TABESA footer background"
        fill
        sizes="100vw"
        className="scale-105 object-cover opacity-55 blur-[2px]"
      />
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">TABESA</h2>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Tanzania Biomedical Engineering Students Association
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Building a connected community for Biomedical Engineering
              students, alumni, mentors, and innovators.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Contacts
            </h3>
            <div className="mt-2 space-y-1 text-sm leading-6 text-slate-200">
              <p>Phone: +255 700 000 000</p>
              <p>Email: info@tabesa.or.tz</p>
              <p>Location: MUHAS, Dar es Salaam</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Quick links
            </h3>
            <nav className="mt-2 flex flex-col gap-2 text-sm text-slate-200">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Social media
            </h3>
            <nav className="mt-3 flex flex-col gap-2 text-sm text-slate-200">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-4 text-sm text-slate-300">
          <p>© 2026 TABESA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
