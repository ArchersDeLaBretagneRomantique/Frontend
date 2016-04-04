import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/articleActions';
import Article from '../components/Article';

class ArticleList extends Component {
  render() {
    return (
      <div>
        { this.props.articles.map(article =>
          <Article article={article}></Article>
        )}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
