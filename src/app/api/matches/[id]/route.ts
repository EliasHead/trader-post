import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const match = await prisma.matches.delete({
    where: {
      match_id: Number(params.id),
    },
  })
  return NextResponse.json(match, { status: 200 })
}
