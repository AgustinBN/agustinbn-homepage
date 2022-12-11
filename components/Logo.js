import NextLink from 'next/link'
import { Box, Image, Text } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Box
      as={NextLink}
      href="/"
      display={'flex'}
      alignItems="center"
      justifyContent="center"
      mr={5}
    >
      <Image
        borderRadius="full"
        boxSize="30px"
        src={
          'https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539'
        }
        alt="Dan Abramov"
      />
      <Text fontWeight="bold" ml={2} color="alicewhite">
        AgustinBN
      </Text>
    </Box>
  )
}
