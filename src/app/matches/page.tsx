import MatchesList from '@/components/matches/MatchesList'

export default function Matches() {
  return (
    <div className="mt-12 flex h-screen flex-col items-center justify-start gap-4">
      <h1>Jogos</h1>
      <MatchesList />
    </div>
  )
}
