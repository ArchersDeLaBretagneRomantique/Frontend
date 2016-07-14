import React from 'react'

import Training from './Training'

const trainings = [
  {
    title: 'Jeunes débutants',
    schedules: [
      {
        day: 'Mercredi',
        hour: '18h00 - 19h00',
      },
      {
        day: 'Samedi',
        hour: '16h00 - 17h00',
      },
    ],
  },
  {
    title: 'Jeunes Confirmés',
    schedules: [
      {
        day: 'Lundi',
        hour: '18h00 - 20h00',
      },
      {
        day: 'Mercredi',
        hour: '18h00 - 20h00',
      },
      {
        day: 'Samedi',
        hour: '16h00 - 18h30',
      },
    ],
  },
  {
    title: 'Jeunes Compétiteurs',
    schedules: [
      {
        day: 'Lundi',
        hour: '18h00 - 20h00',
      },
      {
        day: 'Mercredi',
        hour: '18h00 - 20h00',
      },
      {
        day: 'Samedi',
        hour: '17h00 - 20h00',
      },
    ],
  },
  {
    title: 'Adultes',
    schedules: [
      {
        day: 'Lundi',
        hour: '19h00 - 22h00',
      },
      {
        day: 'Samedi',
        hour: '20h00 - 22h00',
      },
    ],
  },
]

const Trainings = () => {
  return (
    <div>
      <h3>Horaires</h3>
      {trainings.map(training => <Training {...training} />)}
    </div>
  )
}

export default Trainings
