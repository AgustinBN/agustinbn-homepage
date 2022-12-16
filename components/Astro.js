import Image from 'next/image'
import { Box, Spinner } from '@chakra-ui/react'

import astroImage from '../public/astro.png'
import { useEffect, useState } from 'react'

export default function Astro() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 500)
  })

  return (
    <Box display="flex" justifyContent="center" py={8} w="100%">
      {loaded ? (
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
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.600"
          size="xl"
        />
      )}
    </Box>
  )
}
