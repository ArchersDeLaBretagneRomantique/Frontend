import React, { PropTypes } from 'react'

import Contact from './Contact'
import styles from './style.scss'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <div className={styles.contacts}>
        {contacts.map((contact, i) => <Contact key={i} contact={contact} />)}
      </div>
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default Contacts
