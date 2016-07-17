import React, { PropTypes } from 'react'

import styles from './style.scss'

const Banner = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Banner
