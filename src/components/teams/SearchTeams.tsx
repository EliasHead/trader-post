'use client'
import { useMemo, useState } from 'react'

export default function SearchTeams({ teams }: any) {
  const [searchQuery, setSearchQuery] = useState('')

  const teamsFilter = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase()

    return teams.filter((team: any) =>
      team.team_name.toLowerCase().includes(lowerSearch),
    )
  }, [teams, searchQuery])

  return (
    <>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex:1 bg-zinc800 w-2/3 px-5 py-1 text-zinc-900 sm:py-3"
        placeholder="What are you looking for?"
      />
      <div>
        {teamsFilter.map((team: any) => {
          return <li key={team.id}>{team.team_name}</li>
        })}
      </div>
    </>
  )
}
