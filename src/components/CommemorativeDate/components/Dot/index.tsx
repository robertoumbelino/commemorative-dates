import { Box } from '@chakra-ui/layout'

/**
 * Dot properties.
 */
type DotProps = {
  isActive: boolean
}

/**
 * Component.
 */
export function Dot({ isActive }: DotProps) {
  return (
    <Box
      bg={isActive ? 'primary' : 'secondary'}
      width={30}
      height={30}
      rounded="full"
      marginLeft={3}
      marginRight={3}
    />
  )
}
