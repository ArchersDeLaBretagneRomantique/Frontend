import React, { PropTypes } from 'react';
import NavBar from './NavBar';

const App = ({
  children
}) => {
  return (
    <div className="container">
      <NavBar />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
