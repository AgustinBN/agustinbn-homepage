import NextLink from 'next/link'
import { Box, Icon, Text } from '@chakra-ui/react'
import { FaUserAstronaut } from 'react-icons/fa'

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
      <Icon
        as={FaUserAstronaut}
        color={'purple.500'}
        _hover={{
          transform: 'rotate(30deg)',
          transition: '300ms'
        }}
      />
      <Text fontWeight="bold" ml={2} color="alicewhite">
        AgustinBN
      </Text>
    </Box>
  )
}
