import React, { PropTypes } from 'react'

import NavBar from './NavBar'

const App = ({ children, location }) => {
  return (
    <div>
      <NavBar location={location} />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default App
