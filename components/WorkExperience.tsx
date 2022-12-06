import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
type Props = {
  experiences: Experience[];
};

export default function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="sectionHeader">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0ea5e9]/80">
        {experiences?.map((experience)=>(
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}

      </div>
    </motion.div>
  );
}
