import { Box, Heading, Badge, useColorModeValue } from '@chakra-ui/react'

const Part = ({ title = undefined, date = undefined, children, ...props }) => {
  return (
    <>
      <Box display={'flex'} alignItems="center" gap={2}>
        {title && (
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
        )}
        {date && (
          <Badge fontSize={{ base: 'xs', md: 'sm' }} colorScheme={'purple'}>
            {date}
          </Badge>
        )}
      </Box>
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
