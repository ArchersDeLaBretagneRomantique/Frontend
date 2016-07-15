import React, { PropTypes } from 'react'

import Training from './Training'

const Trainings = ({ trainings }) => {
  return (
    <div>
      <h3>Horaires</h3>
      {trainings.map((training, i) => <Training key={i} {...training} />)}
    </div>
  )
}

Trainings.propTypes = {
  trainings: PropTypes.array.isRequired,
}

export default Trainings
