import React from 'react'
interface IState {
  episodes: []
  favourites: []
}
const initialState: IState = {
  episodes: [],
  favourites: []
}
export const Store = React.createContext<IState>(initialState)

function reducer() {}

export function StoreProvider(props): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
