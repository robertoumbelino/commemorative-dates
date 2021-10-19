/**
 * Components.
 */
// import Image from 'next/image'
import { Image } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/layout'

/**
 * List item properties.
 */
type ListItemProps = {
  image: string
  label: string
}

/**
 * Component.
 */
export function CommemorativeDateListItem({ image, label }: ListItemProps) {
  const handleDragStart = e => e.preventDefault()

  return (
    <Flex direction="column">
      <Image
        src={`/images/assets/${image}.svg`}
        alt="Logo"
        height="40vh"
        onDragStart={handleDragStart}
      />
      <Text fontSize={40} textAlign="center">
        {label}
      </Text>
    </Flex>
  )
}
