import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about.jpg";
import resume from "../assets/cv.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  // const openResume = () => {
  //   // Implement functionality to open your resume
  //   window.open("/path/to/your/resume.pdf", "_blank");
  // };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Antara Mudi
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Clickable resume link */}
            <a href={resume} target="_blank" rel="noopener noreferrer" className="bg-transparent font-bold py-2 px-4 rounded mt-4 mb-5" style={{ marginLeft: 0, paddingLeft: 0, textDecoration: 'none', color: 'inherit' }}>
              <span style={{ backgroundImage: 'linear-gradient(to right, #f72585, #7209b7, #3a0ca3)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                View Resume
              </span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Antara Mudi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
