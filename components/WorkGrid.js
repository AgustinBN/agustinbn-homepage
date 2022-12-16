import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function WorkGrid({ children, name, imgSrc, disableClick }) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        cursor="pointer"
        pointerEvents={disableClick ? 'none' : 'initial'}
      >
        <Image
          src={imgSrc}
          alt={name}
          className="grid-item-thumbnail"
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
        <LinkOverlay as={NextLink} href={`/works/${name}`}>
          <Text mt={2} fontSize={20}>
            {name}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
