'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
// TODO:
// import type { Competition } from '@prisma/client'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const AddCompetitions = (
  { competitions }: any /* { competitions: Competition[] } */,
) => {
  const [formData, setFormData] = useState({
    name: '',
    season: '',
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    await axios.post('/api/competitions', {
      competition_name: formData.name,
      season_name: formData.season,
    })
    setIsLoading(false)
    setFormData({
      name: '',
      season: '',
    })
    router.refresh()
    setIsOpen(false)
  }

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className="btn bg-blue-500 text-white" onClick={handleModal}>
        Add New
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">Adicionar novo time</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="nome-do-campeonato">
                Nome do Campeonato
              </label>
              <input
                type="text"
                name="name"
                id="nome-do-campeonato"
                value={formData.name}
                className="input-bordered input"
                placeholder="Nome do Campeonato"
                aria-label="Nome do Campeonato"
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="season">
                Temporada
              </label>
              <input
                type="text"
                name="season"
                id="season"
                value={formData.season}
                className="input-bordered input"
                placeholder="Temporada ex: 2023"
                aria-label="Temporada"
                onChange={handleChange}
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn-primary btn">
                  Save
                </button>
              ) : (
                <button type="button" className="loading btn">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCompetitions
