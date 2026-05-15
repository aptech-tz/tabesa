import { Suspense } from "react";
import AuthPageClient from "./auth-client";

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 px-6 py-8 text-slate-950 sm:px-10 lg:px-12">Loading...</div>}>
      <AuthPageClient />
    </Suspense>
  );
}
