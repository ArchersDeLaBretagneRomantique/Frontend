import React from 'react'

import Banner from 'components/Banner'
import Subscribtion from './Subscribtion'
import Trainings from './Trainings'
import Locations from './Locations'
import Contacts from './Contacts'

const Info = () => {
  return (
    <div>
      <Banner title="Informations" />
      <Subscribtion />
      <Trainings />
      <Locations />
      <Contacts />
    </div>
  )
}

export default Info
