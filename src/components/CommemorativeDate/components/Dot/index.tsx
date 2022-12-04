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
      width="14px"
      height="14px"
      rounded="full"
      marginLeft="3px"
      marginRight="3px"
    />
  )
}
