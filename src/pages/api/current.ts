import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export const client = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const currentDate = new Date()

  /**
   * Create filter.
   */
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1

  const filter = { day, month }

  const foundCommemorativeDates = await client.commemorativeDate.findMany({
    where: filter
  })

  res.status(200).json(foundCommemorativeDates)
}
