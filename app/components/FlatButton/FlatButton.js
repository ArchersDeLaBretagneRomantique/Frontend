import React, { PropTypes } from 'react'

import styles from './style.scss'

const FlatButton = ({ label, onClick, active }) => {
  const classes = `
    ${styles.flatButton}
    ${active ? styles.active : ''}
  `

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
    </button>
  )
}

FlatButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
}

export default FlatButton
