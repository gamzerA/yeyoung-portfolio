import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchFocus from "@/components/ResearchFocus";
import FeaturedResearch from "@/components/FeaturedResearch";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        본문으로 바로가기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ResearchFocus />
        <FeaturedResearch />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
