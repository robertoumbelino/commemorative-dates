import { useEffect, useState } from 'react'

import axios from 'axios'

/**
 * Commemorative date props.
 */
type CommemorativeDate = {
  id: string
  day: number
  month: number
  title: string
}

const URL =
  'http://commemorative-dates-api.herokuapp.com/current-commemorative-dates'

/**
 * Hook.
 */
export const useCommemorativeDate = () => {
  const [loading, setLoading] = useState(true)
  const [commemorativeDates, setCommemorativeDates] = useState<string[]>([])
  /**
   * Get current commemorative dates.
   */
  const loadCurrentCommemorativeDates = async () => {
    const { data } = await axios.get<CommemorativeDate[]>(URL)

    const labels = data.map(item => item.title)

    setCommemorativeDates(labels)
    setLoading(false)
  }

  /**
   * Effects.
   */
  useEffect(() => {
    loadCurrentCommemorativeDates()
  }, [])

  return {
    loading,
    commemorativeDates
  }
}
