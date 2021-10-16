/**
 * Components.
 */
import Image from 'next/image'
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
        sizes="250px"
        layout="fixed"
        width={1000}
        height={700}
        onDragStart={handleDragStart}
      />
      <Text fontSize={40} textAlign="center">
        {label}
      </Text>
    </Flex>
  )
}
