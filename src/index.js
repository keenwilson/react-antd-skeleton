import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.less'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)
const Root = (
  <Provider>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root'))

serviceWorker.unregister()
