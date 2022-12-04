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
    <Box bg="darkLight" paddingTop="20px" paddingBottom="20px" color="white">
      <Flex alignItems="center" direction="column">
        <Heading as="h1" size="lg" marginBottom="4px">
          Comemoração
        </Heading>
        <Text color="secondary" fontSize="1xl">
          {currentDate}
        </Text>
      </Flex>
    </Box>
  )
}
