import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="container flex h-screen items-center justify-center gap-4">
        <Link href="/matches">Jogos</Link>
        <Link href="/teams">Times</Link>
        <Link href="/competitions">Campeonatos</Link>
      </div>
    </>
  )
}
