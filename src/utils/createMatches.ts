'use server'
import { prisma } from '@/utils/prisma'

export async function createMatches(formData: any) {
  return await prisma.matches.create({
    data: {
      home_team_id: parseInt(formData.home_team),
      visitor_team_id: parseInt(formData.visitor_team),
      competition_id: parseInt(formData.competition),
      round: parseInt(formData.round),
    },
  })
}
