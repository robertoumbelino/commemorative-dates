import Head from 'next/head'
import Script from 'next/script'

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0KJ53T3ZRK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0KJ53T3ZRK');
            `}
      </Script>

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
