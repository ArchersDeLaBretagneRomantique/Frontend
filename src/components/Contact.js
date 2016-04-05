import React, { PropTypes } from 'react';

const Contact = ({
  contact
}) => {
  return (
    <div className="col-lg-3 col-sm-3 col-md-3">
      <img className="img-rounded contact_img" src={contact.img} />

      <address>
        <strong>{contact.name}</strong>
        {(() => {
          if (contact.info) {
            return <span className="text-muted">{'(' + contact.info + ')'}</span>;
          }
        })()}
        <br/>
        <abbr title="Phone">Tel:</abbr> {contact.phone} <br/>
        <abbr title="Mail">Email:</abbr> {contact.mail}
      </address>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
