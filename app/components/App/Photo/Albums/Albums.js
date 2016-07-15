import React, { Component, PropTypes } from 'react'

import Album from './Album'

class Albums extends Component {
  ComponentDidMount() {
    const { fetchAlbums } = this.props
    fetchAlbums()
  }

  render() {
    const { albums } = this.props
    return (
      <div>
        {albums.map((album, i) => <Album key={i} {...album} />)}
      </div>
    )
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  fetchAlbums: PropTypes.func.isRequired,
}

export default Albums
