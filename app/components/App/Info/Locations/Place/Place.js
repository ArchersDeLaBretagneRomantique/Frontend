import React, { PropTypes } from 'react'

import Map from './Map'

const Place = ({ title, coord, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      <Map {...coord} />
      <address>{children}</address>
    </div>
  )
}

Place.propTypes = {
  title: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  children: PropTypes.object.isRequired,
}

export default Place
