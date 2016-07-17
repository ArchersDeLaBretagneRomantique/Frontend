import React, { PropTypes } from 'react'

import styles from './style.scss'

const TableHeader = ({ children }) => {
  return (
    <thead className={styles.tableHeader}>
      {children}
    </thead>
  )
}

TableHeader.propTypes = {
  children: PropTypes.any,
}

export default TableHeader
