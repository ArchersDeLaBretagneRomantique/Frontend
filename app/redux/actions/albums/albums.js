export const SET_ALBUMS = 'SET_ALBUMS'
export const setAlbums = (albums) => {
  return {
    type: SET_ALBUMS,
    albums,
  }
}

export const fetchAlbums = () => {
  return (dispatch) => {
    const albums = []
    dispatch(setAlbums(albums))
  }
}
