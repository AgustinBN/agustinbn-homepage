import NextLink from 'next/link'
import Image from 'next/image'
import {
  Button,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Section from '../../components/Section'
import Part from '../../components/Part'

// Utils

import { AiFillTwitterCircle } from 'react-icons/ai'
import infamesImage from '../../public/works/infames2.png'

const TEAM = [
  {
    name: 'Betra',
    twitter: 'FranCiancioci',
    colour: 'teal',
    rank: 'Owner'
  },

  {
    name: 'Alex',
    twitter: 'aleexexe',
    colour: 'purple',
    rank: 'Developer'
  },

  {
    name: 'Agus',
    twitter: 'AgustinBN_',
    colour: 'red',
    rank: 'Developer'
  },

  {
    name: 'InfamesRP',
    twitter: 'InfamesRP',
    colour: 'orange'
  }
]

export default function InfamesRP() {
  const DevLink = ({ twitter, children, colour = 'purple' }) => {
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

  return (
    <Section title={'InfamesRP'}>
      <Part title={`InfamesRP`} date="2021">
        <Image
          src={infamesImage}
          alt={'InfamesRP'}
          placeholder="blur"
          style={{
            objectFit: 'cover',
            height: '180px',
            width: '100%',
            borderRadius: '12px',
            opacity: '0.8'
          }}
          textAlign="center"
        />
        <Box w={'100%'} p={2}>
          <Text fontSize={{ base: 12, md: 15 }}>
            I was involved in InfamesRP. This work was my motivation to learn
            and improve my knowledge in the world of development. <br />
            During that period i know respectful persons, who teach and
            encourage in my process.
          </Text>
        </Box>
        <UnorderedList spacing={3} m={2} listStyleType="none">
          {TEAM.map(v => {
            return (
              <ListItem key={v}>
                <DevLink twitter={v.twitter} colour={v.colour || 'purple'}>
                  {v.rank ? v.name + ` <${v.rank}>` : v.name}
                </DevLink>
              </ListItem>
            )
          })}
        </UnorderedList>
        <Box align="right">
          <Button
            size={{ base: 'xs', md: 'sm' }}
            variant="outline"
            as={NextLink}
            href="/works"
          >
            More Works.
          </Button>
        </Box>
      </Part>
    </Section>
  )
}
