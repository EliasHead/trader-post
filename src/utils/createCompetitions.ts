'use server'
import { prisma } from '@/utils/prisma'

export async function createCompetition(formData: any) {
  return await prisma.competition.create({
    data: {
      competition_name: formData.name,
      season_name: formData.season,
    },
  })
}
