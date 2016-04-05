import React, { PropTypes } from 'react';

const Article = ({
  article
}) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
