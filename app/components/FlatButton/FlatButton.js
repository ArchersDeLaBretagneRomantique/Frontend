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
      <div className={styles.label}>{label}</div>
    </button>
  )
}

FlatButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default FlatButton
