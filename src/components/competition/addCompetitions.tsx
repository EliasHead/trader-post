'use client'
import { createCompetition } from '@/utils/createCompetitions'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function AddCompetitions() {
  const [formData, setFormData] = useState({
    name: '',
    season: '',
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    createCompetition(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mx-3 mb-6 flex items-center border-b border-teal-500 py-2">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="nome-do-campeonato"
          >
            Nome do Campeonato
          </label>
          <input
            type="text"
            name="name"
            id="nome-do-campeonato"
            value={formData.name}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Nome do Campeonato"
            aria-label="Nome do Campeonato"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="season"
          >
            Temporada
          </label>
          <input
            type="text"
            name="season"
            id="season"
            value={formData.season}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Temporada ex: 2023"
            aria-label="Temporada"
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
