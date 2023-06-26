import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Adds a Skills title to the section if neccessary */}
      {/* <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Skills I've learned so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Skills
          </h2>
        </motion.div> */}

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {isMobile 
          ? technologies.map((tech, index) => (
              <div className='w-28 h-28' key={index}>
                <img src={tech.mobileIcon} alt="" className='icon' />
              </div>
            ))
          : technologies.map((tech) => (
              <div className='w-28 h-28' key={tech.name}>
                <h1 className='flex flex-row justify-center'>{tech.name}</h1>
                <BallCanvas icon={tech.icon} />
              </div>
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");