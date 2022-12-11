import { motion } from "framer-motion";
import { Skill } from "../typings";
import SkillIcon from "./SkillIcon";

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0  mx-auto items-center"
    >
      <h3 className="sectionHeader">Skills</h3>
      <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for name
      </h3>
      <div className="absolute top-40 tracking-normal  text-gray-500 text-xs">
        <span className="uppercase">icons from</span>{"  "}
        <a className="underline  text-[#0ea5e9]" href="https://skillicons.dev/">
          SkillsIcons.dev
        </a>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills?.length / 2)?.map((skill, i) => (
          <SkillIcon key={skill?._id} skill={skill} directionLeft />
        ))}
        {skills?.slice(skills?.length / 2, skills?.length)?.map((skill, i) => (
          <SkillIcon key={skill?._id} skill={skill} />
        ))}
      </div>
    
    </motion.div>
  );
}
