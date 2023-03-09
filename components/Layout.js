import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Navbar, Footer, Astro } from './'

export default function Main({ children }) {
  return (
    <Box as="main" pb={10}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{'AgustinBN'} - Homepage</title>
      </Head>

      <Navbar />

      <Container maxW="container.md" pt={8}>
        <Astro />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
