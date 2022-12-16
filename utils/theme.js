import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  options: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
    disableTransitionOnChange: false
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('#F7F9F9', '#0e1012')(props)
      }
    })
  }
})

export default theme
