import SearchInput from '../SearchInput'

async function getUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return res.json()
}

export default async function CompentitionsList() {
  const data = await getUser()

  return (
    <>
      <ul>
        <SearchInput data={data} />
      </ul>
    </>
  )
}
