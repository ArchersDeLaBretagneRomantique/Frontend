import React from 'react';
import PageHeader from './PageHeader';

const img = require('../img/under_construction.jpeg');

const PhotosPage = () => {
  return (
    <div>
      <PageHeader title={'Galerie photos'} />

      <div className="row marketing">
        <div className="text-center"><img src={img} /></div>
      </div>
    </div>
  );
};

export default PhotosPage;
