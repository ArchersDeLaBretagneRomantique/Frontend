import { SET_ALBUMS } from '../../actions'

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
