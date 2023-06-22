async function getUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return res.json()
}

export default async function CompentitionsList() {
  const data = await getUser()

  return (
    <>
      <ul>
        {data.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}
