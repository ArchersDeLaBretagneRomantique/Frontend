import React, { PropTypes } from 'react'

import styles from './style.scss'

const TableBody = ({ children }) => {
  return (
    <tbody className={styles.tableBody}>
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  children: PropTypes.any,
}

export default TableBody
