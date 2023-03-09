import { Grid, Text, Flex } from '@chakra-ui/react'
import { Section, Part, TimeGrid, ContactButton } from '../components'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle
} from 'react-icons/ai'

export default function Home() {
  return (
    <Section>
      <Part
        textAlign="center"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight={500}
      >
        Hi, I&apos;m a front-end developer in development.
      </Part>

      <Part title={'Timeline'}>
        <Grid templateColumns="repeat(1, 1fr)" gap={0.2}>
          <TimeGrid year="2006">
            I was born in Argentina, Buenos Aires.
          </TimeGrid>
          <TimeGrid year="2019">
            I&apos;ve started the secondary school.
          </TimeGrid>
          <TimeGrid year="2020">
            COVID-19 made us all stay in our home. I became interested in the
            development of FiveM servers.
          </TimeGrid>
          <TimeGrid year="2021">
            I was involved in the developtment of a FiveM server called
            InfamesRP.
          </TimeGrid>
          <TimeGrid year="2022">
            I&apos;ve learnt many front-end technologies, e.g: Tailwind CSS,
            Chakra UI, etc..
          </TimeGrid>
        </Grid>
      </Part>

      <Part title={'Fan Of'}>
        <Text fontSize={{ base: 'xs', md: 'md' }}>
          Football / Techonolgy / Time with Friends / Music
        </Text>
      </Part>

      <Part title={'Contact'}>
        <Flex direction={'column'} w="20%" gap={2}>
          <ContactButton icon={AiFillGithub}>Github</ContactButton>
          <ContactButton icon={AiFillTwitterCircle}>Twitter</ContactButton>
          <ContactButton icon={AiFillInstagram}>Instagram</ContactButton>
        </Flex>
      </Part>
    </Section>
  )
}
