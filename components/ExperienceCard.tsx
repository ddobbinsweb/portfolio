/* eslint-disable @next/next/no-img-element */
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[500px]
     w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer 
      transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-2 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex  flex-wrap my-2">
          {experience?.skills.map((skill,i) => (
              <img
              key={skill?._id}
              className="h-10 w-10  rounded-full float-left "
              src={skill?.image}
              alt={skill?.title} 
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toLocaleDateString('en-US', {  year: 'numeric', month: 'short'})} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleDateString('en-US', {  year: 'numeric', month: 'short'})}
        </p>
        {/* TODO: make scrollable */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
