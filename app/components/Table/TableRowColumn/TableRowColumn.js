import React, { PropTypes } from 'react'

import styles from './style.scss'

const TableRowColumn = ({ children }) => {
  return (
    <td className={styles.tableRowColumn}>
      {children}
    </td>
  )
}

TableRowColumn.propTypes = {
  children: PropTypes.any,
}

export default TableRowColumn
