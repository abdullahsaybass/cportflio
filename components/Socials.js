import Link from 'next/link';
import { 
  RiLinkedinLine, 
  RiGithubLine, 
  RiBehanceLine 
} from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

const Socials = () => {
  return ( 
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/samprada-aryal-304b0097'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'#'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'#'} className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href={'#'} className='hover:text-accent transition-all duration-300'>
        <SiLeetcode />
      </Link>
    </div>
  );
};

export default Socials;
