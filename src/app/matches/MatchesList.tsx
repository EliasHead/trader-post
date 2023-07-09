import { formatDate } from '@/utils/dateUtils'
import DeleteMatch from './deleteMatches'

type Match = {
  match_id: number
  match_date: Date
  home_goals: number
  visitor_goals: number
  odd: number | null
  strategy: string | null
  result: string | null
  review: string | null
  stake: number | null
  round: number
  leverage: {
    description: string | null
  } | null
  leverageId?: number
  competition: {
    competition_name: string
  } | null
  competititon_id?: number
  home_team: {
    team_name: string
  }
  home_team_id: number
  visitor_team: {
    team_name: string
  }
  visitor_team_id: number
}

export default async function MatchesList({ matches }: { matches: Match[] }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      data
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Home
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      -
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Visitante
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      resultado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matches?.map((match) => {
                    return (
                      <tr className="border-b" key={match.match_id}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {match.match_id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {formatDate(match.match_date)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {match.home_team.team_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {match.home_goals}
                          <span> x </span>
                          {match.visitor_goals}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {match.visitor_team.team_name}
                        </td>
                        <td
                          style={{
                            backgroundColor:
                              match.result === 'red' ? 'red' : 'green',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                          className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900"
                        >
                          {match.result}
                        </td>
                        <td className="flex justify-center space-x-1 px-6 py-4">
                          {/* <UpdateCompetition competition={competition} /> */}
                          <DeleteMatch match={match} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
