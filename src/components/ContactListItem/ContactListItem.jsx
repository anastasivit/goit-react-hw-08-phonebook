import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={onDeleteContact}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
