import MatchesList from './MatchesList'
import AddMatches from './addMatches'
import { prisma } from '@/utils/prisma'
import { dataRounds } from '@/utils/rounds'

// TODO: melhorar chamada api
const getMatches = async () => {
  const res = await prisma.matches.findMany({
    select: {
      match_id: true,
      match_date: true,
      home_goals: true,
      visitor_goals: true,
      odd: true,
      strategy: true,
      result: true,
      review: true,
      stake: true,
      round: true,
      leverage: {
        select: {
          leverageId: true,
        },
      },
      competition: {
        select: {
          competition_name: true,
        },
      },
      home_team: {
        select: {
          team_name: true,
        },
      },
      visitor_team: {
        select: {
          team_name: true,
        },
      },
    },
  })
  return res
}

export default async function Matches() {
  const teams = await prisma.teams.findMany()
  const competitions = await prisma.competition.findMany()
  const rounds = dataRounds
  const matches = await getMatches()

  return (
    <div className="mt-12 flex h-screen w-full flex-col items-center justify-start gap-4">
      <h1>Jogos</h1>
      <AddMatches teams={teams} competitions={competitions} rounds={rounds} />
      <MatchesList matches={matches} />
    </div>
  )
}
