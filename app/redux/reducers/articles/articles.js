import { SET_ARTICLES } from 'redux/actions'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return [
        ...action.articles,
      ]
    default:
      return state
  }
}
