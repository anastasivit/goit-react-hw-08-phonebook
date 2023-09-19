export const selectFilter = state => state.contacts.filter;
export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = state.contacts.items;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};
