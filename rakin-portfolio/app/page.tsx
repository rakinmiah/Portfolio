import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1">
        <Hero />
        <About />
        <CaseStudy />
        <Process />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
