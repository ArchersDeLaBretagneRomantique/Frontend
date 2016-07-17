import React, { PropTypes } from 'react'

import Map from './Map'
import Address from 'components/Address'
import styles from './style.scss'

const Place = ({ title, coord, children }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <Map {...coord} />
      <Address>
        {children}
      </Address>
    </div>
  )
}

Place.propTypes = {
  title: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  children: PropTypes.any,
}

export default Place
