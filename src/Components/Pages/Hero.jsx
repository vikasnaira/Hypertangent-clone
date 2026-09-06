import React from 'react'
import HeroText from '../Tools/HeroText';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <>
    <motion.section
    initial={{ opacity: 0, y:50 ,scale:1.2, x: -50}}
    whileInView={{ opacity: 1, y: 0,x: 0 , scale:1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className='mt-10 md:min-h-[45vh] max-w-7xl flex md:items-center  px-4 sm:px-8 md:mx-auto  md:px-12'>
      <h1 className='text-center  md:text-5xl translate-y-5 font-bold  text-black sm:text-4xl md:text-right text-xl text-nowrap md:w-2xl'>
        We build
      </h1>
      <HeroText/>

    </motion.section>


      <section className='mt-12 flex flex-col items-center justify-center gap-6 px-4 text-center sm:mt-16'>
        <p className='text-sm text-gray-500'>Bringing ideas to life with end-to-end engineered solutions</p>
        <div className='flex flex-wrap justify-center gap-3 text-sm'>
          <button className='rounded-full bg-[#0047AB] px-4 py-2 text-white'>Get started</button>
          <button className='rounded-full bg-white px-4 py-2 text-black shadow'>Explore Solutions</button>
        </div>
      </section>
    </>
  )
}

export default Hero
