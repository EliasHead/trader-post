// import CompentitionsList from '@/components/competition/CompetitionList'
import SearchCompetition from './SearchCompetition'
import AddCompetitions from './addCompetitions'
import { prisma } from '@/utils/prisma'

const getCompetitions = async () => {
  const res = await prisma.competition.findMany({
    select: {
      competition_id: true,
      competition_name: true,
      season_name: true,
    },
  })
  return res
}

const Competitions = async () => {
  const competitions = await getCompetitions()

  return (
    <div className="mt-12 flex h-screen flex-col items-center justify-start gap-4">
      <h1>
        <strong>Campeonatos</strong>
      </h1>
      <AddCompetitions competitions={competitions} />
      <SearchCompetition competitions={competitions} />
    </div>
  )
}

export default Competitions
