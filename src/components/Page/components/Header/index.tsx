import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

/**
 * Component.
 */
export function Header() {
  /**
   * Get formmated current date.
   */
  const currentDate = new Date().toLocaleDateString('pt-BR')

  return (
    <Box bg="darkLight" paddingTop="50px" paddingBottom="50px" color="white">
      <Flex alignItems="center" direction="column">
        <Heading as="h1" size="2xl" marginBottom={4}>
          Comemoração
        </Heading>
        <Text color="secondary" fontSize="3xl">
          {currentDate}
        </Text>
      </Flex>
    </Box>
  )
}
