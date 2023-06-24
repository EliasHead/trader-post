export default function AddCompetitions() {
  return (
    <form className="w-full max-w-lg">
      <div className="mx-3 mb-6 flex items-center border-b border-teal-500 py-2">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="nome-do-campeonato"
          >
            Nome do Campeonato
          </label>
          <input
            id="nome-do-campeonato"
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Nome do Campeonato"
            aria-label="Nome do Campeonato"
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="temporada"
          >
            Temporada
          </label>
          <input
            id="temporada"
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="Temporada ex: 2023"
            aria-label="Temporada"
          />
        </div>

        <button
          className="text-md mt-2 flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 px-2 py-2 font-bold  text-white hover:border-teal-700 hover:bg-teal-700"
          type="button"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
