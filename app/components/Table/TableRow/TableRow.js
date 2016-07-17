import React, { PropTypes } from 'react'

import styles from './style.scss'

const TableRow = ({ children }) => {
  return (
    <tr className={styles.tableRow}>
      {children}
    </tr>
  )
}

TableRow.propTypes = {
  children: PropTypes.any,
}

export default TableRow
