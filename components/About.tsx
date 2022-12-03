import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.pexels.com/photos/5682562/pexels-photo-5682562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text=4xl font-semibold">Here is a <span className="underline decoration-[#0ea5e9]">little</span> background</h4>
      </div>
    </div>
  );
}
