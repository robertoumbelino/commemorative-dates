import Head from 'next/head'

/**
 * Components.
 */
import { Flex } from '@chakra-ui/layout'
import { Header } from '~/components/Page/components/Header'
import { CommemorativeDateList } from '~/components/CommemorativeDate/components/List'

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>Datas comemorativas</title>
      </Head>

      <Header />

      <CommemorativeDateList />
    </Flex>
  )
}
