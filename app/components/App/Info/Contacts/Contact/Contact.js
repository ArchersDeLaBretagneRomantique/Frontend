import React, { PropTypes } from 'react'

const Contact = ({ contact }) => {
  return (
    <div>
      <img src={contact.img} />
      <address>
        <strong>{contact.name}</strong>
        {
          contact.info ? <span>{`(${contact.info})`}</span> : null
        }
        <abbr title="Phone">Tel:</abbr> {contact.phone}
        <abbr title="Mail">Email:</abbr> {contact.mail}
      </address>
    </div>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }),
}

export default Contact
