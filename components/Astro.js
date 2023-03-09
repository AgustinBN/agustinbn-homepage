import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Spinner } from '@chakra-ui/react'
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
