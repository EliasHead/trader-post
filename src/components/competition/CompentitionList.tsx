import SearchCompetition from './SearchCompetition'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function CompentitionsList() {
  const competitions = await prisma.competition.findMany()

  return (
    <>
      <ul className="w-2/3">
        <SearchCompetition competitions={competitions} />
      </ul>
    </>
  )
}
