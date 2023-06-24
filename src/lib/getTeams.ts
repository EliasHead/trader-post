export default async function getUser(teamId: string) {
  const res = await fetch(`http://localhost:3000/teams/${teamId}`)

  if (!res.ok) throw new Error('failed to fetch team')

  return res.json()
}
