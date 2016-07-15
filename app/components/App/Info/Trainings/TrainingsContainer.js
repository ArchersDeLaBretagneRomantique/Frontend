import { connect } from 'react-redux'

import Trainings from './Trainings'

const mapStateToProps = ({ trainings }) => {
  return {
    trainings,
  }
}

export default connect(
  mapStateToProps,
)(Trainings)
