import React, {Fragment, useContext} from 'react'
import {Store} from './Store'
export default function App() {
  const store = useContext(Store)
  return (
    <Fragment>
      {console.log(store)}
      <h1>Rock</h1>
      <p>megaman</p>
    </Fragment>
  )
}
