import React from 'react'

import Contact from './Contact'

import img from './default_profil.png'

const contacts = [
  {
    img,
    name: 'Yannick LE DREAU',
    info: 'Président',
    phone: '02 99 23 01 94 / 06 72 07 93 20',
    mail: 'yannick.ledreau@tektronix.com',
  },
  {
    img,
    name: 'Philippe FIAUX',
    info: 'Trésorier',
    phone: '02 99 23 00 37',
    mail: 'philippe.fiaux@orange.fr',
  },
  {
    img,
    name: 'Gwenaël ECHE',
    phone: '02 99 80 03 23',
    mail: 'arbreasoi@orange.fr',
  },
  {
    img,
    name: 'Sophie LE DREAU',
    phone: '02 99 23 01 94 / 06 73 24 36 61',
    mail: 'soledreau@hotmail.fr',
  },
]

const Contacts = () => {
  return (
    <div>
      <h3>Contacts</h3>
      {contacts.map(contact => <Contact key={name} contact={contact} />)}
    </div>
  )
}

export default Contacts
