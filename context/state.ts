import React from 'react'

interface State {
  toggle: boolean
  update: Function
}

const GlobalContext = React.createContext(<State>{
  toggle: false,
  update: (data) => {},
})

export default GlobalContext
