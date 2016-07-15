import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

import albums from './albums'
import articles from './articles'
import contacts from './contacts'
import trainings from './trainings'

const reducers = combineReducers({
  albums,
  articles,
  contacts,
  trainings,
  routing: routerReducer,
})

export default reducers
