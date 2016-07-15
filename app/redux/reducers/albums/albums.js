import { SET_ALBUMS } from 'redux/actions'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return [
        ...action.albums,
      ]
    default:
      return state
  }
}
