import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'

export default function Section({ children, title }) {
  const NEW_TITLE = title !== undefined ? title + " - <@AgustinBN>" : "<@AgustinBN>"
  return (
    <Box>
      {NEW_TITLE ? (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{NEW_TITLE}</title>
        </Head>
      ) : undefined}
      <Container mt={10} maxW="container.sm">
        {children}
      </Container>
    </Box>
  )
}
