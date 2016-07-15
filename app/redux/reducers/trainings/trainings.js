const init = [
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

export default (state = init) => {
  return state
}
