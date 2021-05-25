import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

// options to add information to your profile
// need to figure out how to write mutations or use typeORM to add content to database

// customize profile section

const Dashboard = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return null

  if (!session) router.push('/')
  if (!loading && !session) return null
  return (
    <>
      <h1>{session.user.name}</h1>
      <p>YAAASSSSSS</p>
    </>
  )
}

export default Dashboard
