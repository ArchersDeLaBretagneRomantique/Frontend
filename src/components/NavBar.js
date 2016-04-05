import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = () => {
  return (
    <header className="header">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li className="active"><IndexLink to="/">Accueil</IndexLink></li>
                <li className="active"><Link to="/presentation">Présentation</Link></li>
                <li className="active"><Link to="/info">Informations</Link></li>
                <li className="active"><Link to="/photos">Galerie photos</Link></li>
            </ul>
        </nav>
        <h3><IndexLink className="text-muted" to="/">Les Archers de la Bretagne Romantique</IndexLink></h3>
    </header>
  );
};

export default NavBar;
