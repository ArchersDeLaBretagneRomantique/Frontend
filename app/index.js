import 'file?name=[name].[ext]!./index.html'
import 'normalize.css/normalize.css'

// Polyfills
import 'fetch-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import store from 'redux/store'

import { routes } from 'config'

import App from 'components/App'
import Info from 'components/App/Info'

injectTapEventPlugin()

render(
  (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path={routes.app} component={App}>
            <Route path={routes.info} component={Info} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('app')
)
