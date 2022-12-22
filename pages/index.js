import Section from '../components/Section'
import {
  Grid,
  GridItem,
  Text,
  Badge,
  Flex,
  Button,
  Icon
} from '@chakra-ui/react'
import Part from '../components/Part'
import Link from 'next/link'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle
} from 'react-icons/ai'

export default function Home() {
  const GridTime = ({ year = '2000', children }) => {
    return (
      <GridItem w="100%" p={2} display="flex" alignItems="center">
        <Badge colorScheme="purple" mr={2} fontSize={{ base: 'xs', md: 'sm' }}>
          {year}
        </Badge>
        <Text fontSize={{ base: 'xs', md: 'sm' }}>{children}</Text>
      </GridItem>
    )
  }

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
          <GridTime year="2006">
            I was born in Argentina, Buenos Aires.
          </GridTime>
          <GridTime year="2019">
            I&apos;ve started the secondary schoool.
          </GridTime>
          <GridTime year="2020">
            COVID-19 made us all stay in our home. I became interested in the
            development of FiveM servers.
          </GridTime>
          <GridTime year="2021">
            I was involved in the developtment of a FiveM server called
            InfamesRP.
          </GridTime>
          <GridTime year="2022">
            I&apos;m learning and focusing Chakra-UI and Next.js.
          </GridTime>
        </Grid>
      </Part>

      <Part title={'Fan Of'}>
        <Text fontSize={{ base: 'xs', md: 'md' }}>
          Football / Techonolgy / Time with Friends / Music
        </Text>
      </Part>

      <Part title={'Contact'}>
        <Flex direction={'column'} w="20%" gap={2}>
          <Button
            as={Link}
            href="https://github.com/AgustinBN"
            gap={1}
            size={{ base: 'xs', md: 'sm' }}
            colorScheme={'purple'}
            variant="ghost"
            target={'_blank'}
          >
            <Icon as={AiFillGithub} />
            Github
          </Button>

          <Button
            as={Link}
            href="https://twitter.com/AgustinBN_"
            gap={1}
            size={{ base: 'xs', md: 'sm' }}
            colorScheme={'purple'}
            variant="ghost"
            target={'_blank'}
          >
            <Icon as={AiFillTwitterCircle} />
            Twitter
          </Button>

          <Button
            as={Link}
            href="https://www.instagram.com/agusbianchiii/"
            gap={1}
            size={{ base: 'xs', md: 'sm' }}
            colorScheme={'purple'}
            variant="ghost"
            target={'_blank'}
          >
            <Icon as={AiFillInstagram} />
            Instagram
          </Button>
        </Flex>
      </Part>
    </Section>
  )
}
