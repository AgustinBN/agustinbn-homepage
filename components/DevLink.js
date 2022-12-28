import NextLink from 'next/link'

import { Button, Icon } from '@chakra-ui/react'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function DevLink({ twitter, children, colour = 'purple' }) {
  return (
    <Button
      as={NextLink}
      href={`https://twitter.com/${twitter}`}
      gap={1}
      size={{ base: 'xs', md: 'sm' }}
      colorScheme={colour}
      variant="outline"
      target={'_blank'}
    >
      <Icon as={AiFillTwitterCircle} />
      {children}
    </Button>
  )
}
