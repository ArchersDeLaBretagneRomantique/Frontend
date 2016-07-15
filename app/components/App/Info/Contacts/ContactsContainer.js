import { connect } from 'react-redux'

import Contacts from './Contacts'

const mapStateToProps = ({ contacts }) => {
  return {
    contacts,
  }
}

export default connect(
  mapStateToProps,
)(Contacts)
