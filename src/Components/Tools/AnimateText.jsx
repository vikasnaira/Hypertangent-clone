import { motion } from 'framer-motion';
import React from 'react'
const AnimateText = ({text}) => {
  return (
      <motion.h1
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className='text-2xl font-bold sm:text-3xl md:text-5xl'>{text}</motion.h1>
  )
}

export default AnimateText
