export default function AddTeams() {
  return (
    <form className="w-full max-w-lg">
      <div className="mx-3 mb-6 flex items-center border-b border-teal-500 py-2">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="nome-do-time"
          >
            Nome do time
          </label>
          <input
            id="nome-do-time"
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Nome do time"
            aria-label="Nome do time"
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
            id="pais-do-time"
            className="mb-3 block w-full appearance-none rounded bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            placeholder="País do time"
            aria-label="País do time"
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
