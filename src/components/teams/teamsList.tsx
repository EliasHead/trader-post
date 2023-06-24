import SearchTeams from './SearchTeams'

export default async function TeamsList({ teams }: any) {
  return (
    <>
      <ul className="w-2/3">
        <SearchTeams teams={teams} />
      </ul>
    </>
  )
}
