'use client'
import { useMemo, useState } from 'react'

export default function SearchMatches({ matches }: any) {
  const [searchQuery, setSearchQuery] = useState('')

  const matchesFilter = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase()

    return matches.filter((matche: any) =>
      matche.team_name.toLowerCase().includes(lowerSearch),
    )
  }, [matches, searchQuery])

  return (
    <>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex:1 bg-zinc800 w-2/3 px-5 py-1 text-zinc-900 sm:py-3"
        placeholder="What are you looking for?"
      />
      <div>
        {matchesFilter.map((team: any) => {
          return <li key={team.team_id}>{team.team_name}</li>
        })}
      </div>
    </>
  )
}
