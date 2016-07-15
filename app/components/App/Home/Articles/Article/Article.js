import React, { PropTypes } from 'react'

import Remarkable from 'remarkable'

const rawMarkup = (content) => {
  const md = new Remarkable()
  return { __html: md.render(content) }
}

const Article = ({ content }) => {
  return (
    <div>
      <span dangerouslySetInnerHTML={rawMarkup(content)} />
    </div>
  )
}

Article.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Article
