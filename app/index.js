import 'file?name=[name].[ext]!./index.html'
import 'normalize.css/normalize.css'

// Polyfills
import 'fetch-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styles from './style'

import store from 'redux/store'

import { routes } from 'config'

import App from 'components/App'
import Home from 'components/App/Home'
import Presentation from 'components/App/Presentation'
import Info from 'components/App/Info'
import Photo from 'components/App/Photo'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)

render(
  (
    <MuiThemeProvider muiTheme={getMuiTheme(styles)}>
      <Provider store={store}>
        <Router history={history}>
          <Route path={routes.app} component={App}>
            <IndexRoute component={Home} />
            <Route path={routes.presentation} component={Presentation} />
            <Route path={routes.info} component={Info} />
            <Route path={routes.photo} component={Photo} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('app')
)
