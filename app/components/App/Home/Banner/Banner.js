import React, { PropTypes } from 'react'

import FlatButton from 'components/FlatButton'

import styles from './style.scss'

const Banner = ({ joinUs }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Les Archers de la Bretagne Romantique
      </h1>
      <p className={styles.subtitle}>Club de tir à l'arc basé à Tinténiac, Bretagne</p>
      <FlatButton onClick={joinUs} label="Nous rejoindre" active />
    </div>
  )
}

Banner.propTypes = {
  joinUs: PropTypes.func.isRequired,
}

export default Banner
