'use client'
import { Pencil, Trash } from '@phosphor-icons/react'
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
        <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {teamsFilter.map((team: any) => {
                return (
                  <tr
                    key={team.team_id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="px-6 py-4">{team.team_id}</td>
                    <td className="px-6 py-4">{team.team_name}</td>
                    <td className="flex gap-2 px-6 py-4">
                      <button className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700">
                        <Pencil size={24} color="#ffffff" weight="regular" />
                      </button>
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
