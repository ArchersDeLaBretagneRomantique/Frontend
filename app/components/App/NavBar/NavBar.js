import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const NavBar = () => {
  return (
    <header>
        <nav>
          <FlatButton label="Accueil" />
          <FlatButton label="Présentation" />
          <FlatButton label="Information" />
          <FlatButton label="Galerie photos" />
        </nav>
        <h1>Les Archers de la Bretagne Romantique</h1>
    </header>
  )
}

export default NavBar
