import 'file?name=[name].[ext]!./index.html'
import 'normalize.css/normalize.css'

// Polyfills
import 'fetch-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'

render(
  (
  <Provider>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  ),
  document.getElementById('app')
)
