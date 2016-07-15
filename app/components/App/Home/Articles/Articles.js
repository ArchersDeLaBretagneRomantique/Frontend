import React, { Component, PropTypes } from 'react'

import Article from './Article'

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props
    fetchArticles()
  }

  render() {
    const { articles } = this.props
    return (
      <div>
        {articles.map((article, i) => <Article key={i} {...article} />)}
      </div>
    )
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
}

export default Articles
