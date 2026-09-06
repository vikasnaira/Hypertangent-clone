import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const technologies = [
  'Robots',
  'Industrial Automation',
  'AR/VR/MR',
  'Smart Factories',
  'Wearables',
  'Generative AI',
  'Drones',
  'Predictive Analytics',
  'Embedded Systems',
  'Smart IoT',
];

const HeroText = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((line) => (line + 1) % technologies.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-[4.2em] w-full flex-col items-start md:mt-30 overflow-hidden px-2 text-xl font-bold sm:h-[4.6em] sm:text-2xl md:h-[5em] md:text-5xl [mask-image:linear-gradient(to_bottom,transparent_0%,black_28%,black_72%,transparent_100%)]'>
      <motion.div
        animate={{ y: `calc(1.1em - ${activeLine * 1.1}em)` }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className=' flex items-start flex-col  text-start'
      >
        {technologies.map((line, index) => (
          <motion.h1
            key={`${line}-${index}`}
            animate={{ opacity: index === activeLine ? 1 : 0.5 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className='h-[1.1em] max-w-full text-nowrap  leading-[1.1]'
            style={{ color: '#000000' }}
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroText
