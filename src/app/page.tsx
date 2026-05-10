import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Innovation from "@/components/innovation";
import Training from "@/components/training";
import Mentorship from "@/components/mentorship";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <main className="relative z-10 mt-[100vh]">
        <About />
        <Innovation />
        <Training />
        <Mentorship />
        <Footer />
      </main>
    </div>
  );
}
