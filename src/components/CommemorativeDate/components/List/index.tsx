/**
 * Carousel.
 */
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

/**
 * Components.
 */
import { Dot } from '../Dot'
import { Flex } from '@chakra-ui/layout'
import { CommemorativeDateListItem } from '../Item'

/**
 * Hooks.
 */
import { useCommemorativeDate } from '../../hooks/useCommemorativeDate'

/**
 * All available images.
 */
const images = [
  'calendar',
  'drink',
  'gift',
  'hand',
  'harp',
  'medal',
  'natal-decorative',
  'party',
  'people',
  'racket',
  'stamp',
  'thing'
]

/**
 * Component.
 */
export function CommemorativeDateList() {
  /**
   * Hook.
   */
  const { commemorativeDates } = useCommemorativeDate()

  const sortedImages = images.slice().sort(() => Math.random() - 0.5)
  const items = commemorativeDates.map((label, index) => (
    <CommemorativeDateListItem
      label={label}
      image={sortedImages[index]}
      key={label}
    />
  ))

  return (
    <Flex
      flex={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <AliceCarousel
        mouseTracking
        items={items}
        renderPrevButton={() => {}}
        renderNextButton={() => {}}
        renderDotsItem={({ isActive }) => <Dot isActive={isActive} />}
      />
    </Flex>
  )
}
