import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='min-h-screen bg-primary/30 relative py-16 md:py-32'>
      <Circles />
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex flex-col xl:flex-row gap-x-8 gap-y-8'>
          <div className="flex flex-col w-full xl:w-[30vw] mb-4 xl:mb-0 text-center xl:text-left">
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 xl:mt-8"
            >
              Service<span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
             className="mb-4 max-w-[400px] mx-auto xl:mx-0 text-justify md:text-left"
            >
              I specialize in creating user-friendly, visually appealing, and high-performing digital products.  
              From wireframes and prototypes to fully responsive websites, I bring together design and technology  
              to deliver seamless experiences that engage users and achieve business goals.  
              Every project I take on is built with attention to detail, accessibility, and long-term usability.
            </motion.p>
          </div>

          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[65%]"
          > 
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;