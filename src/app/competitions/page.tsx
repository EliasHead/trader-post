import CompentitionsList from '@/components/competition/CompentitionList'

export default function Competitions() {
  return (
    <div className="mt-12 flex h-screen flex-col items-center justify-start gap-4">
      <h1>
        <strong>Campeonatos</strong>
      </h1>
      <CompentitionsList />
    </div>
  )
}
