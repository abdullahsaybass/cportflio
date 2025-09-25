import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avathar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="relative bg-primary/60 h-screen flex items-center ">
      {/* background gradient */}
      <div className="w-full h-full bg-gradient-to-r from-primary/40 via-black/30 to-primary/20 flex items-center">
        {/* vertically center content in the middle */}
        <div className="container mx-auto px-6 flex items-center justify-center min-h-full">
          <div className="text-center xl:text-left w-full">
            {/* Title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h1"
            >
              I&apos;m Samprada Aryal <br /> A passionate{' '}
              <span className="text-accent">Web Designer<br /> and UI/&UX Specialist</span>
            </motion.h1>

            {/* Subtitle */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-gray-200 text-sm md:text-base leading-relaxed">
              I&apos;m Samprada Aryal, a passionate Web Designer and UI/UX Specialist dedicated to creating modern, user-friendly, and 
              impactful digital experiences. I help transform concepts into functional designs—building websites and interfaces 
              that are not only visually engaging but also deliver seamless usability.
            </p>

            {/* Button */}
            <div className="flex justify-center xl:justify-start relative">
              <ProjectsBtn />
            </div>
          </div>
        </div>
      </div>

      {/* Right side image / avatar placeholder */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <div>
          <ParticleContainer />
        </div>
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avathar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;