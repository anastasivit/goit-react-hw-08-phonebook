export const selectFilter = state => state.contacts.filter;
export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = state.contacts.items;

  // Додайте код для фільтрації контактів тут на основі `filter`
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};
