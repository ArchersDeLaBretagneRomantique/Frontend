import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = (_, { location }) => {
  return {
    location,
  }
}

export default connect(
  mapStateToProps,
)(App)
