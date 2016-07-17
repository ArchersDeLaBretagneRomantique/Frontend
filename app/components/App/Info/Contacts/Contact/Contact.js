import React, { PropTypes } from 'react'

import Address from 'components/Address'

import styles from './style.scss'

const Contact = ({ contact }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={contact.img} />
      <Address>
        <strong>{contact.name}</strong>
        {
          contact.info ? <span>{`(${contact.info})`}</span> : null
        }
        <br />
        <abbr title="Phone">Tel:</abbr> {contact.phone}<br />
        <abbr title="Mail">Email:</abbr> {contact.mail}
      </Address>
    </div>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }),
}

export default Contact
