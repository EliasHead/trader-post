import SearchTeams from './SearchTeams'

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function TeamsList() {
  const teams = await prisma.teams.findMany()
  return (
    <>
      <ul>
        <SearchTeams teams={teams} />
      </ul>
    </>
  )
}
