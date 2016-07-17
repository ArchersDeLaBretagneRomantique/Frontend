import React, { PropTypes } from 'react'

import styles from './style.scss'

const Address = ({ children }) => {
  return (
    <address className={styles.address}>
      {children}
    </address>
  )
}

Address.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Address
