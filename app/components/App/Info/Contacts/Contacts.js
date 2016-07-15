import React, { PropTypes } from 'react'

import Contact from './Contact'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts</h3>
      {contacts.map((contact, i) => <Contact key={i} contact={contact} />)}
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default Contacts
