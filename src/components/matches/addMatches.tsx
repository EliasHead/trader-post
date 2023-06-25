'use client'

import { createMatches } from '@/utils/createMatches'
import { ChangeEvent, FormEvent, useState } from 'react'
export function AddMatches() {
  const [formData, setFormData] = useState({
    home_team: '',
    visitor_team: '',
    competition: '',
    round: '',
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    createMatches(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl">
      <div className="mx-3 mb-6 flex items-center border-b border-teal-500 py-2">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="home_team"
          >
            Time da casa
          </label>
          <input
            type="text"
            name="home_team"
            id="home_team"
            value={formData.home_team}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Time da casa"
            aria-label="Time da casa"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="visitor_team"
          >
            Time visitante
          </label>
          <input
            type="text"
            name="visitor_team"
            id="visitor_team"
            value={formData.visitor_team}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Time visitante"
            aria-label="Time visitante"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="competition"
          >
            Competição
          </label>
          <input
            type="text"
            name="competition"
            id="competition"
            value={formData.competition}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Competição"
            aria-label="Competição"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="round"
          >
            rodada
          </label>
          <input
            type="text"
            name="round"
            id="round"
            value={formData.round}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Rodada"
            aria-label="Rodada"
            onChange={handleChange}
          />
        </div>

        <button
          className="text-md mt-2 flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 px-2 py-2 font-bold  text-white hover:border-teal-700 hover:bg-teal-700"
          type="submit"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
