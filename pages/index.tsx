import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'

const Home = () => {
  const router = useRouter()
  const [session] = useSession()

  if (session) {
    router.push('/dashboard')
  }
  return (
    <div className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1526625361769-ab16cb89b155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        alt="fishing in the midwest"
        className={styles.splashImg}
      />
      <div className={styles.content}>
        <h1>Welcome!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          perspiciatis tenetur autem quia corporis eligendi dicta fugit harum
          sed consequuntur, minima optio atque provident inventore id quasi
          sequi maxime laudantium.
        </p>

        <Login />
      </div>
    </div>
  )
}

export default Home
