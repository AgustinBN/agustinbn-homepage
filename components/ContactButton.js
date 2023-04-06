import React from 'react'
import { Link, Button, Icon } from '@chakra-ui/react'

const ContactButton = ({ icon, children }) => {
  return (
    <Button
      as={Link}
      href="https://github.com/AgustinBN"
      gap={1}
      size={{ base: 'xs', md: 'sm' }}
      colorScheme={'purple'}
      variant="ghost"
      target={'_blank'}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <Icon as={icon} />
      {children}
    </Button>
  )
}

export default ContactButton
