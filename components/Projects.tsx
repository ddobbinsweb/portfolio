/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// TODO: fix this
// use github projects to insert here

import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "../sanity";
import { Project } from "../typings";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  console.log(projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionHeader">Projects</h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
       snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0ea5e9]/80"
      >
        {projects?.map((project) => (
          <div
            key={project?._id}
            className="w-screen  flex-shrink-0 snap-center flex flex-col 
            space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg md:w-[350px] md:h-[350px]"
              src={urlFor(project?.image).url()}
              alt={project?.title}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#0ea5e9]/50">
                <Link href={project?.linkToBuild } title={project?.title}>
                {project?.title}
                 </Link>
                 
                </span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.skills.map((skill) => (
                  <img
                    key={skill?._id}
                    className="h-10 w-10"
                    src={urlFor(skill?.image).url()}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0ea5e9]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
