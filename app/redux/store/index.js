import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'

const store = createStore(
  reducers,
  null,
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory),
      window.devTooldExtendion ? window.devToolsExtension() : f => f,
    )
  )
)

export default store
