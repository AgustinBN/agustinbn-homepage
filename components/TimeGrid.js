import { GridItem, Badge, Text } from '@chakra-ui/react'

export default function TimeGrid({ year, children }) {
  return (
    <GridItem w="100%" p={2} display="flex" alignItems="center">
      <Badge colorScheme="purple" mr={2} fontSize={{ base: 'xs', md: 'sm' }}>
        {year}
      </Badge>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>{children}</Text>
    </GridItem>
  )
}
