import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../../redux/contactsSlice';
import {
  selectFilteredContacts,
  selectFilter,
} from '../../../redux/contactsSelectors';

import ContactListItem from '../../../components/ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
      <p>Current filter: {filter}</p>
    </div>
  );
};

export default ContactList;
