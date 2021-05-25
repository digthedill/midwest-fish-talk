import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { useState } from 'react'
import GlobalContext from '../context/state'
import Layout from '../components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    toggle: false,
    update,
  })

  function update(data) {
    setState(Object.assign({}, state, data))
  }

  return (
    <Provider session={pageProps.session}>
      <GlobalContext.Provider value={state}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </Provider>
  )
}

export default MyApp
