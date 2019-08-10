import React from 'react'
import ReactDom from 'react-dom'
import {StoreProvider} from './Store'
import App from './App'

ReactDom.render(<StoreProvider><App /></StoreProvider>, document.getElementById('app-root'))