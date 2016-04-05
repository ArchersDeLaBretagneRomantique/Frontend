import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/articleActions';
import Article from '../components/Article';

const ArticleList = ({
  articles,
  actions
}) => {
  console.log('yolo');
  if (articles.length === 0) {
    return (
      <h3 className="text-center">Aucun article n'est disponible pour le moment.</h3>
    );
  }
  return (
    <div>
      {articles.map(article => <Article article={article} key={article.id} />)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
