import MatchesList from '@/components/matches/MatchesList'
import { AddMatches } from '@/components/matches/addMatches'

export default function Matches() {
  return (
    <div className="mt-12 flex h-screen w-full flex-col items-center justify-start gap-4">
      <h1>Jogos</h1>
      <AddMatches />
      <MatchesList />
    </div>
  )
}
