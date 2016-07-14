import React, { PropTypes } from 'react'

import NavBar from './NavBar'

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object,
}

export default App
