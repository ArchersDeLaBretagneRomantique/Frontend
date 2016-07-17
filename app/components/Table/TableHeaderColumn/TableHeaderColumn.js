import React, { PropTypes } from 'react'

import styles from './style.scss'

const TableHeaderColumn = ({ children }) => {
  return (
    <th className={styles.tableHeaderColumn}>
      {children}
    </th>
  )
}

TableHeaderColumn.propTypes = {
  children: PropTypes.any,
}

export default TableHeaderColumn
