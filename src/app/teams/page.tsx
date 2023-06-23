import TeamsList from '@/components/teams/teamsList'

export default function Teams() {
  return (
    <div className="mt-12 flex h-screen flex-col items-center justify-start gap-4">
      <h1>
        <strong>Times</strong>
      </h1>
      <TeamsList />
    </div>
  )
}
