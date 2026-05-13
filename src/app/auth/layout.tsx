import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access | Tabesa",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
