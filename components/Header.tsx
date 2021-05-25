import Link from 'next/link'
import Image from 'next/image'

import { useSession, signOut } from 'next-auth/client'
import styles from '../styles/header.module.css'

const Header = () => {
  const [session, loading] = useSession()

  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.logoContainer}>
          <Image src="/fishIcon.png" alt="mft_logo" width="60" height="45" />
          <h1>Midwest Fish Talk</h1>
        </a>
      </Link>
      <div>
        {session ? <h2>{session.user.name}</h2> : <h2>Login</h2>}

        {session && <button onClick={() => signOut()}>Logout</button>}
      </div>
    </header>
  )
}

export default Header
