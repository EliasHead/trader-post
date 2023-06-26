import SearchCompetition from './SearchCompetition'

export default async function CompentitionsList({ competitions }: any) {
  return (
    <>
      <ul className="w-2/3">
        <SearchCompetition competitions={competitions} />
      </ul>
    </>
  )
}
