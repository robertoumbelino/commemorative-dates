import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

/**
 * Component.
 */
export function Header() {
  return (
    <Box bg="darkLight" paddingTop="50px" paddingBottom="50px" color="white">
      <Flex alignItems="center" direction="column">
        <Heading fontSize={50} marginBottom={4}>
          Comemoração
        </Heading>
        <Text color="secondary" fontSize={32}>
          17/10/2021
        </Text>
      </Flex>
    </Box>
  )
}
