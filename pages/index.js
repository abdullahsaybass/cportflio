import ParticleContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="relative bg-primary/60 min-h-screen flex flex-col overflow-x-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-primary/40 via-black/30 to-primary/20" />

      {/* Particles as background */}
      <div className="absolute inset-0 z-0">
        <ParticleContainer />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center md:items-start">
        {/* Title */}
        <motion.h1 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1 text-white text-center md:text-left"
        >
          I&apos;m Samprada Aryal <br /> A passionate{' '}
          <span className="text-accent">Web Designer<br /> and UI/UX Specialist</span>
        </motion.h1>

        {/* Subtitle */}
        <p className="max-w-sm md:max-w-xl mt-6 mb-10 text-gray-200 text-sm md:text-base leading-relaxed text-center md:text-left">
          I&apos;m Samprada Aryal, a passionate Web Designer and UI/UX Specialist dedicated to creating modern, user-friendly, and impactful digital experiences. I help transform concepts into functional designs—building websites and interfaces that are visually engaging and deliver seamless usability.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <ProjectsBtn />
        </div>

        {/* Avatar */}
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className='mt-20 w-full max-w-[737px] max-h-[678px]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
