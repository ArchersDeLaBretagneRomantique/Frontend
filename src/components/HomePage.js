import React from 'react';
import { Link, IndexLink } from 'react-router';
import ArticleList from '../containers/ArticleList';

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1>Les Archers de la Bretagne Romantique</h1>

        <p>Club de tir à l'arc basé à Tinténiac, Bretagne.</p>
          <Link to="/info" className="btn btn-primary">Nous rejoindre</Link>
        </div>

        <div className="row marketing">
          <ArticleList />
        </div>
    </div>
  );
};

export default HomePage;
