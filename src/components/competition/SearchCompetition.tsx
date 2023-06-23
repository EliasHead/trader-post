'use client'
import { useMemo, useState } from 'react'

export default function SearchCompetition({ competitions }: any) {
  const [searchQuery, setSearchQuery] = useState('')

  const competitionsFilter = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase()

    return competitions.filter((competition: any) =>
      competition.competition_name.toLowerCase().includes(lowerSearch),
    )
  }, [competitions, searchQuery])

  return (
    <>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex:1 bg-zinc800 w-2/3 px-5 py-1 text-zinc-900 sm:py-3"
        placeholder="What are you looking for?"
      />
      <div>
        {competitionsFilter.map((competition: any) => {
          return <li key={competition.id}>{competition.competition_name}</li>
        })}
      </div>
    </>
  )
}
