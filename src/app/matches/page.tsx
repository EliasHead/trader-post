import MatchesList from '@/components/matches/MatchesList'

export default function Matches() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1>Matches</h1>
      <MatchesList />
    </div>
  )
}
