import { connect } from 'react-redux'

import { fetchArticles } from 'redux/actions'

import Articles from './Articles'

const mapStateToProps = ({ articles }) => {
  return {
    articles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles)
