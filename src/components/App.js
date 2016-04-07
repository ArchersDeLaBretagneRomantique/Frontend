import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const App = ({
  location,
  children
}) => {
  return (
    <div className="container">
      <NavBar location={location}/>
      {children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.element
};

export default App;
