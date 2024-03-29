import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Container,
  Link,
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Logo, ScrollGuide, SocialButtons } from './'

const ENABLED_SCROLL_GUIDE = false

const NavbarLink = ({ href, children, _blank = false, ...props }) => {
  const { pathname } = useRouter()
  const isActive = pathname === href
  return (
    <Link
      as={NextLink}
      href={href}
      passHref
      target={_blank ? '_blank' : undefined}
      fontWeight={500}
      scroll={false}
      color={useColorModeValue('blackAlpha.800', 'whiteAlpha.700')}
      _hover={{ opacity: '.9', transition: '300ms' }}
      textDecoration={isActive ? 'underline' : undefined}
      textDecorationColor={isActive ? 'purple.500' : undefined}
      textDecorationThickness={isActive ? 4 : undefined}
      textUnderlineOffset={isActive ? 5 : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}
export default function Navbar({ props }) {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex={2}
      borderBottom="1px"
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.100')}
      {...props}
    >
      <Container
        display="flex"
        p={5}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Logo />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={5}
        >
          <NavbarLink href={'/works'}>Works</NavbarLink>
          <NavbarLink
            href={'https://github.com/AgustinBN/next-chakra-homepage'}
            _blank
            display="flex"
            alignItems="center"
            gap={1}
          >
            <AiFillGithub />
            Source
          </NavbarLink>
        </Stack>

        <Box flex={1} align="right">
          <SocialButtons />

          <Box display={{ base: 'inline-block', md: 'none' }} ml={2}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} size="sm" />
              <MenuList bg={useColorModeValue('#F4F6F7', '#0e1012')}>
                <MenuItem bg={useColorModeValue('#F4F6F7', '#0e1012')}>
                  <NavbarLink href={'/works'}>Works</NavbarLink>
                </MenuItem>
                <MenuItem bg={useColorModeValue('#F4F6F7', '#0e1012')}>
                  <NavbarLink
                    display={'flex'}
                    alignItems="center"
                    gap={2}
                    href={'https://github.com/AgustinBN/next-chakra-homepage'}
                    _blank
                  >
                    <AiFillGithub />
                    Source Code
                  </NavbarLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
      {ENABLED_SCROLL_GUIDE && <ScrollGuide />}
    </Box>
  )
}
