import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden">
      <ParticleBackground />
      <Navbar />

      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      <footer className="relative z-10 py-8 text-center border-t border-[#00e5c8]/10 bg-[#050c12]/90 mt-12">
        <p className="text-[#00e5c8]/40 font-mono text-xs tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Md Musa Islam Fahad · Built with Next.js · Dhaka, Bangladesh
        </p>
      </footer>
    </main>
  );
}
