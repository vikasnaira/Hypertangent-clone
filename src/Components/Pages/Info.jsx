import React from 'react'
import { motion } from 'framer-motion';
import AnimateText from '../Tools/AnimateText';

const Info = () => {
  const words = [
    'Engineering',
    'products',
    'that',
    'drives',
    'businesses',
    'by',
    'turning',
    'vision',
    'into',
    'practical',
    'solutions',
    'through',
    'produts',
    'development',
    'and',
    'consultancy.',
  ];

  return (
    <section className='mt-24 flex w-full flex-col items-center sm:mt-32'>
      <h1 className='text-2xl font-medium text-[#003380]'>WHAT WE DO</h1>
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.1 }}
      className='flex flex-wrap items-center justify-center gap-2 px-4 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-40'
    >
      {words.map((word) => (
        <AnimateText key={word} text={word} />
      ))}
    </motion.div>
    </section>
  )
}

export default Info
