import Head from 'next/head'

/**
 * Theme.
 */
import { ChakraProvider } from '@chakra-ui/react'

/**
 * Styles.
 */
import { theme } from '../styles/theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="viewport" content="uc-fitscreen=yes" />

        <meta
          name="description"
          content="Acompanhe as datas comemorativas do dia atual"
        />
        <meta name="keywords" content="Keywords" />
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
