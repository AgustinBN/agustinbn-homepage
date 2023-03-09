import '@fontsource/poppins'
import { Chakra, Layout } from '../components'

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
