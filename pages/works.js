import NextLink from 'next/link'
import {
  Box,
  Button,
  Text,
  Icon,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'
import Section from '../components/Section'

export default function _404() {
  return (
    <Section title="Error 404">
      <Box
        display="flex"
        flexDirection={'column'}
        border={'2px'}
        borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
        mt={'50%'}
        p={2}
        gap={5}
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="lg" mt={5} />
        <Text fontWeight={'500'} textAlign={{ base: 'center', md: 'initial' }}>
          In progress....
        </Text>
        <Button as={NextLink} href="/" size="sm">
          Volver
        </Button>
      </Box>
    </Section>
  )
}
