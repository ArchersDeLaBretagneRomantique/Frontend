import React, { PropTypes } from 'react'

import FlatButton from 'components/FlatButton'
import { routes } from 'config'

import styles from './style.scss'

const NavBar = ({ push, location }) => {
  const isActive = path => location.pathname === path
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <FlatButton
            label="Accueil"
            onClick={push(routes.app)}
            primary
            active={isActive(routes.app)}
          />
          <FlatButton
            label="Présentation"
            onClick={push(routes.presentation)}
            primary
            active={isActive(routes.presentation)}
          />
          <FlatButton
            label="Information"
            onClick={push(routes.info)}
            primary
            active={isActive(routes.info)}
          />
          <FlatButton
            label="Galerie photo"
            onClick={push(routes.photo)}
            primary
            active={isActive(routes.photo)}
          />
        </nav>
        <h1 className={styles.title}>
          <a onClick={push(routes.app)}>
            Les Archers de la Bretagne Romantique
          </a>
        </h1>
    </header>
  )
}

NavBar.propTypes = {
  push: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default NavBar
