import React from 'react'

import Place from './Place'

const indoorMapCoord = {
  lat: 48.332637,
  lng: -1.824863,
}

const outdoorMapCoord = {
  lat: 48.353744,
  lng: -1.827651,
}

const Locations = () => {
  return (
    <div>
      <h3>Localisations</h3>
      <Place
        title="Tir en intérieur"
        coord={indoorMapCoord}
      >
        <strong>Complexe Sportif de la Bretagne Romantique</strong>
        5 rue Ernest Renan
        35190 TINTENIAC
      </Place>
      <Place
        title="Tir en extérieur"
        coord={outdoorMapCoord}
      >
        Le Grand-Bois
        35190 QUEBRIAC
      </Place>
    </div>
  )
}

export default Locations