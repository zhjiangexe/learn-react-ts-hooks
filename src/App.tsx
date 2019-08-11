import React, {Fragment, useContext, useEffect} from 'react'
import './App.css'
import {Store} from './Store'
import {Link} from '@reach/router'

export default function App(props: any): JSX.Element {
  // const store = useContext(Store)
  const {state} = useContext(Store)
  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick And Morty</h1>
          <p>Pick your favourite episode!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favs">favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  )
}
