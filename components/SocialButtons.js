import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram
} from 'react-icons/ai'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const social = [
  {
    href: 'https://github.com/AgustinBN',
    icon: <AiFillGithub />
  },
  {
    href: 'https://twitter.com/AgustinBN_',
    icon: <AiFillTwitterCircle />
  },
  {
    href: 'https://www.instagram.com/agusbianchiii/',
    icon: <AiFillInstagram />
  }
]

export default function SocialButtons() {
  const SHOW_SOCIAL_LINKS = false
  const { toggleColorMode } = useColorMode()
  return (
    <>
      {SHOW_SOCIAL_LINKS
        ? social.map(v => {
            return (
              <IconButton
                key={v}
                as="a"
                href={v.href}
                target="_blank"
                aria-label="Search database"
                icon={v.icon}
                size="sm"
                mr={2}
              />
            )
          })
        : ''}
      <IconButton
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        color={"useColorModeValue('white', 'black')"}
        onClick={toggleColorMode}
        size="sm"
        aria-label="Toggle Color mode"
        _hover={{}}
      />
    </>
  )
}