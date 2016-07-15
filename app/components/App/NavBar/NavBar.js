import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'

import { routes } from 'config'

import styles from './style'

const NavBar = ({ push, location }) => {
  const isActive = path => location.pathname === path ? styles : null
  return (
    <header>
        <nav>
          <FlatButton
            label="Accueil"
            onClick={push(routes.app)}
            primary
            style={isActive(routes.app)}
          />
          <FlatButton
            label="Présentation"
            onClick={push(routes.presentation)}
            primary
            style={isActive(routes.presentation)}
          />
          <FlatButton
            label="Information"
            onClick={push(routes.info)}
            primary
            style={isActive(routes.info)}
          />
          <FlatButton
            label="Galerie photo"
            onClick={push(routes.photo)}
            primary
            style={isActive(routes.photo)}
          />
        </nav>
        <h1>Les Archers de la Bretagne Romantique</h1>
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
