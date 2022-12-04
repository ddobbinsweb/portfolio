import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0ea5e9]/80">
      <Head>
        <title>David`&apos;`s Portfolio</title>
        <meta name="description" content="David Dobbins Portfolio" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>

     
      <footer className="sticky bottom-5 w-full cursor-pointer">
      <Link href="#hero">
        <div className="flex items-center justify-center ">
          <ArrowUpCircleIcon width={50} title="back to top" aria-label="back to top"
      /></div>
      </Link>
      </footer>
      
    </div>
  );
}
