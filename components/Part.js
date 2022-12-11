import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Part = ({ title = undefined, children, ...props }) => {
  return (
    <>
      {title ? (
        <Heading
          as="h1"
          size={{ base: 'xs', md: 'sm' }}
          my={3}
          textDecoration="underline"
          textDecorationColor="purple.400"
          textDecorationThickness={3}
          textUnderlineOffset={4}
        >
          {title}
        </Heading>
      ) : (
        ''
      )}
      <Box
        p={2}
        border={'2px'}
        borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
        {...props}
      >
        {children}
      </Box>
    </>
  )
}

export default Part
