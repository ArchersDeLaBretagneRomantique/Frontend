import React from 'react'

import styles from './style.scss'

const getCurrentYear = () => {
  const d = new Date()
  return d.getFullYear()
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {getCurrentYear()} Les Archers de la Bretagne Romantique
    </footer>
  )
}

export default Footer
