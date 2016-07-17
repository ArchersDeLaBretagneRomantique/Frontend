import React, { PropTypes } from 'react'

import Training from './Training'
import styles from './style.scss'

const Trainings = ({ trainings }) => {
  return (
    <div>
      <h3>Horaires</h3>
      <div className={styles.trainings}>
        {trainings.map((training, i) => <Training key={i} {...training} />)}
      </div>
    </div>
  )
}

Trainings.propTypes = {
  trainings: PropTypes.array.isRequired,
}

export default Trainings
