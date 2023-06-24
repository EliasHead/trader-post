'use server'
import { prisma } from '@/utils/prisma'

export async function serverCreateUser(formData: any) {
  return await prisma.teams.create({
    data: {
      team_name: formData.name,
      team_country: formData.country,
    },
  })
}
