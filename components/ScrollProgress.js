import { motion, useScroll } from 'framer-motion'

const ScrollGuide = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transformOrigin: '0%',
        scaleX: scrollYProgress
      }}
    />
  )
}

export default ScrollGuide
