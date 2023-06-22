'use client'
import { useMemo, useState } from 'react'

export default function SearchInput({ data }: any) {
  const [searchQuery, setSearchQuery] = useState('')

  const dataFilter = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase()

    return data.filter((item: any) =>
      item.name.toLowerCase().includes(lowerSearch),
    )
  }, [data, searchQuery])

  return (
    <>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex:1 bg-zinc800 w-2/3 px-5 py-1 text-zinc-200 sm:py-3"
        placeholder="What are you looking for?"
      />
      <div>
        {dataFilter.map((item: any) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </div>
    </>
  )
}
