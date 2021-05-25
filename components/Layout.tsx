import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import styles from '../styles/layout.module.css'

import { useContext } from 'react'
import GlobalContext from '../context/state'

const Layout = ({ children }) => {
  const { toggle } = useContext(GlobalContext)
  return (
    <main>
      <div className={styles.container}>
        <Header />
        {toggle && <Login />}

        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
