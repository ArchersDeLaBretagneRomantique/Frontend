import React, { PropTypes } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const App = ({
  children
}) => {
  return (
    <div className="container">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
