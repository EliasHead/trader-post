'use server'
import { NextResponse } from 'next/server'
import { prisma } from './prisma'

export default async function findOneCompetition(competitonId: any) {
  const competitionOne = await prisma.competition.findUnique({
    where: {
      competition_id: parseInt(competitonId),
    },
  })
  console.log(typeof competitionOne)
  return competitionOne
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const competition = await prisma.competition.delete({
    where: {
      competition_id: Number(params.id),
    },
  })
  return NextResponse.json(competition, { status: 200 })
}
