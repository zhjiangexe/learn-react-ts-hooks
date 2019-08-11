import React from 'react'
import ReactDom from 'react-dom'
import {StoreProvider} from './Store'
import App from './App'

import {Router, RouterComponentProps} from '@reach/router'

import HomePage from './HomePage'
import FavPage from './FavPage'

const RouterPage = (
  props: {pageComponent: JSX.Element} & RouterComponentProps
) => props.pageComponent

ReactDom.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/favs" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('app-root')
)
