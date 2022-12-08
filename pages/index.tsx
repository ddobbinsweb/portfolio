import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contact";
import { PageInfo } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  // experiences: Experience[];
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];
};
//, experiences, skills, projects,
const Home = ({ pageInfo }: Props) => {

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
      {/* <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} /> 
      </div></section>*/}
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="#hero">
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
    return {
      props: {
        pageInfo,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
// export const getStaticProps: GetStaticProps<Props> =  async ()  => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   // const experiences: Experience[] = await fetchExperiences();
//   // const skills: Skill[] = await fetchSkills();
//   // const projects: Project[] = await fetchProjects();
//   // const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//     },
//     revalidate: 60 * 1, // change to 5
//   };
// }; 







// export const getStaticProps: GetStaticProps = async context => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//     revalidate: 90,
//   };
// };
