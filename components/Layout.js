import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Main({ children }) {
  return (
    <Box as="main" pb={10}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{'AgustinBN'} - Homepage</title>
        <script defer src="https://app.embed.im/snow.js" />
      </Head>

      <Navbar />

      <Container maxW="container.md" pt={8}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
