import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Assets

import astroImage from '../public/astro.png'

export default function Astro() {
  const { pathname } = useRouter()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 200)
  }, [pathname])

  return (
    <Box
      display="flex"
      justifyContent="center"
      w="100%"
      mt={16}
      alignItems="center"
    >
      {loaded ? (
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: '360deg',
            transition: '3s'
          }}
        >
          <Image
            src={astroImage}
            alt="Astronaut"
            style={{
              width: '200px',
              height: '200px',
              filter: 'drop-shadow(5px 5px 15px #6B46C1)',
              opacity: '0.8'
            }}
          />
        </motion.div>
      ) : pathname !== '/works' ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.600"
          size="xl"
        />
      ) : (
        ''
      )}
    </Box>
  )
}
