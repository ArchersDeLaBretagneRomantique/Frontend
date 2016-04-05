import React from 'react';
import PageHeader from './PageHeader';
import SubscribingBlock from './SubscribingBlock';
import TrainingsBlock from './TrainingsBlock';
import LocationsBlock from './LocationsBlock';
import ContactsBlock from './ContactsBlock';

const InfoPage = () => {
  return (
    <div>
      <PageHeader title={'Informations'} />

      <div className="row marketing">
        <SubscribingBlock />

        <hr/>

        <TrainingsBlock />

        <hr/>

        <LocationsBlock />

        <hr/>

        <ContactsBlock />
      </div>
    </div>
  );
};

export default InfoPage;
