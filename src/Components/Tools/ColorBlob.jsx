import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ColorBlob = () => {
  const [blobPosition, setBlobPosition] = useState({ x: 80, y: 200 })

  useEffect(() => {
    const moveBlob = () => {
      const blobSize = 200
      const maxX = Math.max(0, window.innerWidth - blobSize)
      const maxY = Math.max(0, window.innerHeight - blobSize)

      setBlobPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      })
    }

    moveBlob()
    const movementTimer = window.setInterval(moveBlob,10000)

    return () => window.clearInterval(movementTimer)
  }, [])

  return (
    <motion.div
      className="color bg-sky-800/40 blur-3xl h-80 w-80 fixed top-0 left-0 pointer-events-none"
      animate={blobPosition}
      transition={{ duration: 8, ease: 'easeInOut' }}
    />
  )
}

export default ColorBlob
