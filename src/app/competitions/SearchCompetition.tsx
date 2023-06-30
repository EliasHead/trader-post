'use client'
import { Pencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Competition } from '@prisma/client'

export default function SearchCompetition({
  competitions,
}: {
  competitions: Competition[]
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const competitionsFilter = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase()

    return competitions.filter((competition) =>
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
        <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Competição
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {competitionsFilter.map((competition) => {
                return (
                  <tr
                    key={competition.competition_id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="px-6 py-4">{competition.competition_id}</td>
                    <td className="px-6 py-4">
                      {competition.competition_name}
                    </td>
                    <td className="flex gap-2 px-6 py-4">
                      <Link
                        passHref
                        href={`competitions/edit/${competition.competition_id}`}
                      >
                        <button className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700">
                          <Pencil size={24} color="#ffffff" weight="regular" />
                        </button>
                      </Link>
                      <button className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700">
                        <Trash size={24} color="#ffffff" weight="regular" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
