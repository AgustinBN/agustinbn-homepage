import { Box } from '@chakra-ui/react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={10}>
      &copy; {currentYear} Agustín Bianchi. All Rights Reserved.
    </Box>
  )
}
