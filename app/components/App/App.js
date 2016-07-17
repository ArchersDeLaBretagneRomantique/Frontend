import React, { PropTypes } from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

import styles from './style.scss'

const App = ({ children, location }) => {
  return (
    <div className={styles.app}>
      <NavBar location={location} />
      {children}
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default App
