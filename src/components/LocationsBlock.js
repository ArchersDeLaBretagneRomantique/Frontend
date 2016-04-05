import React from 'react';
import Map from './Map';

const indoorMapCoord = {
  lat: 48.332637,
  lng: -1.824863
};

const outdoorMapCoord = {
  lat: 48.353744,
  lng: -1.827651
};

const LocationsBlock = () =>  {
  return (
    <div>
      <h2>Localisations</h2>

      <div className="row">
        <div className="col-sm-6">
          <h3>Tir en intérieur</h3>

          <Map coord={indoorMapCoord}/>
          <address>
            <strong>Complexe Sportif de la Bretagne Romantique</strong><br/>
            5 rue Ernest Renan<br/>
            35190 TINTENIAC
          </address>
        </div>

        <div className="col-sm-6">
          <h3>Tir en extérieur</h3>

          <Map coord={outdoorMapCoord}/>
          <address>
            Le Grand-Bois<br/>
            35190 QUEBRIAC
          </address>
        </div>
      </div>
    </div>
  );
};

export default LocationsBlock;
