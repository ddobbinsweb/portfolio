import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Certification, Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchCertifications } from "../utils/fetchCertifications";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  certifications: Certification[];
};
//, experiences, skills, projects,
const Home = ({ pageInfo, experiences, skills, projects, socials,certifications }: Props) => {
  if (!pageInfo?.name) return null;

  const title = `${pageInfo?.name} Portfolio`;
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0ea5e9]/80"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="David Dobbins Portfolio" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="certifications" className="snap-start">
        <Certifications certifications={certifications} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="/">
          <div className="flex items-center justify-center ">
            <ArrowUpCircleIcon
              width={50}
              title="back to top"
              aria-label="back to top"
            />
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
    const certifications : Certification[] = await fetchCertifications();
    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
        certifications,
      },
    };
  } catch {
    // res.statusCode = 404;
    return {
      props: {},
    };
  }
};
