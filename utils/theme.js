import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  options: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('#fff', '#0e1012')(props)
      }
    })
  }
})

export default theme
