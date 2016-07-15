import { connect } from 'react-redux'

import { fetchAlbums } from 'redux/actions'

import Albums from './Albums'

const mapStateToProps = ({ albums }) => {
  return {
    albums,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Albums)
