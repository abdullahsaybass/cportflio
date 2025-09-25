import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="relative bg-primary/60 h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="w-full h-full bg-gradient-to-r from-primary/40 via-black/30 to-primary/20 flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-center min-h-full">
          <div className="text-center xl:text-left w-full z-10">
            {/* Title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h1 text-white"
            >
              I&apos;m Samprada Aryal <br /> A passionate{' '}
              <span className="text-accent">Web Designer<br /> and UI/UX Specialist</span>
            </motion.h1>

            {/* Subtitle */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-gray-200 text-sm md:text-base leading-relaxed">
              I&apos;m Samprada Aryal, a passionate Web Designer and UI/UX Specialist dedicated to creating modern, user-friendly, and impactful digital experiences. I help transform concepts into functional designs—building websites and interfaces that are visually engaging and deliver seamless usability.
            </p>

            {/* Button */}
            <div className="flex justify-center xl:justify-start relative z-10">
              <ProjectsBtn />
            </div>
          </div>
        </div>
      </div>

      {/* Particles & Avatar */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-0">
          <ParticleContainer />
        </div>

        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='absolute bottom-0 right-[8%] w-full max-w-[737px] max-h-[678px] z-10'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
