import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import NavBar from './NavBar'

const mapDispatchToProps = (dispatch) => {
  return {
    push: path => () => dispatch(push(path)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(NavBar)
