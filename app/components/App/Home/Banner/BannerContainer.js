import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { routes } from 'config'

import Banner from './Banner'

const mapDispatchToProps = (dispatch) => {
  return {
    joinUs: () => dispatch(push(routes.info)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Banner)
