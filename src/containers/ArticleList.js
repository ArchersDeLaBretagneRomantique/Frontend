import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/articleActions';
import Article from '../components/Article';

const ArticleList = ({
  articles,
  actions
}) => {
  return (
    <div>
      {articles.map(article => <Article article={article} />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
