import React, { PropTypes } from 'react'

import styles from './style.scss'

const Table = ({ children }) => {
  return (
    <table className={styles.table}>
      {children}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.any,
}

export default Table
