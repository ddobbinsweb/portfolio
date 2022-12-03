import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer 
      transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src="https://global-uploads.webflow.com/5e1145b6c5e98c8cf5f3293f/5e1146150227d027f3789e2d_revunit_logo_horizontal_white-p-500.png"
        alt="revunit logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Senior Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">RevUnit</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"
            alt=".net"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"
            alt=".net"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"
            alt=".net"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        {/* TODO: make scrollable */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
        </ul>
      </div>
    </article>
  );
}
