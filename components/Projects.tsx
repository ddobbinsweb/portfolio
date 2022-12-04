/* eslint-disable @next/next/no-img-element */
// TODO: fix this
// use github projects to insert here

import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projectList = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionHeader">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectList.map((project, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="image"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[0ea5e9]/50">
                  Project {i + 1} of {projectList.length} :
                </span>{" "}
                {project}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eros purus, hendrerit porttitor nibh eget, viverra egestas leo.
                Nam sollicitudin, orci sed eleifend efficitur, ante nisl
                interdum nulla, id sodales urna ipsum sit amet libero.
                Pellentesque a leo dolor. Fusce efficitur maximus est a aliquet.
                Ut sed felis sit amet ex feugiat pharetra sit amet sed nibh.
                Nunc sollicitudin commodo fermentum. Morbi fringilla, orci quis
                blandit varius, diam eros vehicula purus, eget porttitor nunc
                enim a velit. Donec quam nisl, eleifend eu dui vitae,
                condimentum accumsan nulla. Etiam hendrerit lacinia justo, at
                dignissim eros aliquet eget. Quisque commodo laoreet sapien eu
                ultrices. Donec tristique turpis id dignissim molestie.
                Curabitur et risus euismod mauris tincidunt venenatis.
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
