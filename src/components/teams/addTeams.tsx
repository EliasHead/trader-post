'use client'
import { serverCreateUser } from '@/lib/createTeam'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function AddTeams() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault()

    serverCreateUser(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mx-3 mb-6 flex items-center border-b border-teal-500 py-2">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="nome-do-time"
          >
            Nome do time
          </label>
          <input
            type="text"
            name="name"
            id="nome-do-time"
            value={formData.name}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Nome do time"
            aria-label="Nome do time"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="pais-do-time"
          >
            País do time
          </label>
          <input
            type="text"
            name="country"
            id="pais-do-time"
            value={formData.country}
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="País do time"
            aria-label="País do time"
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
