import NextLink from 'next/link'
import { Box, Button, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { TbError404 } from 'react-icons/tb'
import { Section } from '../components'

export default function _404() {
  return (
    <Section title="Error 404">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        border={'2px'}
        borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
        mt={'50%'}
        py={2}
        gap={3}
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={TbError404} boxSize={10} />
        <Text fontWeight={'500'} textAlign={{ base: 'center', md: 'initial' }}>
          You&apos;re in a undefined page.
        </Text>
        <Button as={NextLink} href="/" size="sm">
          Volver
        </Button>
      </Box>
    </Section>
  )
}
